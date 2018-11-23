import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { deleteTask, edit } from '../../actions'
import Button from '../button'

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Li = styled.li`
  display: flex;
  flex-direction: column;
  input {
    width: 40%;
    height: 25px;
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    box-shadow: ${props => props.focus && '0 0 3pt 2pt #2ab7e0'};
  }
  textarea {
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    resize: none;
    min-height: 80px;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    box-shadow: ${props => props.focus && '0 0 3pt 2pt #2ab7e0'};
  }
`

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
  }

  deleteTask = (id) =>{
    this.props.deleteTask(id)
  }

  editTask = (id) => {
    this.setState({
      focus: true
    })
    this.props.edit(id, this.state.focus)
  }

  saveTask = (id) => {
    this.setState({
      focus: false
    })
    this.props.edit(id, this.state.focus)
  }

  render() {
    const list = this.props.taskManager
    return (
      <Ul>
        {list.map((item, index) =>
          <Li key={item.id} focus={this.state.focus}>
            <input defaultValue={item.title}
                   readOnly={list[index].edit}/>
            <textarea defaultValue={item.description}
                      readOnly={list[index].edit}/>
            <div>
              <Button onClick={() => this.deleteTask(item.id)}
                      className="small-button">Delete</Button>
              {list[index].edit
                ? <Button onClick={() => this.editTask(item.id)}
                          className="small-button">Edit</Button>
                : <Button onClick={() => this.saveTask(item.id)}
                          className="small-button">Save</Button>
              }
            </div>
          </Li>
        )}
      </Ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskManager: state.taskManager
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  edit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
