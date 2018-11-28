import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'
import { deleteTask, edit, done, sortTasks } from '../../actions'
import Button from '../button'
import SearchBar from '../search-bar'

import CheckMark from '../../assets/icon/done.png'

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Ordinary = css`
  box-shadow: 0px 0px 20px #f1d90d;
`

const Medium = css`
  box-shadow: 0px 0px 20px #f1a974;
`

const High = css`
  box-shadow: 0px 0px 20px #ff0000;
`

const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 0 30px;
  
  ${props => props.typeCheckbox === 'ordinary' && Ordinary};
  ${props => props.typeCheckbox === 'medium' && Medium};
  ${props => props.typeCheckbox === 'high' && High};
 
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
    box-shadow: ${props => !props.edit && '0 0 3pt 2pt #2ab7e0'};
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
    box-shadow: ${props => !props.edit && '0 0 3pt 2pt #2ab7e0'};
  }
  div {
    width: 90%;
  } 
  div > section {
        display: flex;
        flex-direction: column;
      }
     
  img {
    width: 50px;
    height: 50px;
  }
`

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      done: true
    }
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

  doneTask = (id) => {
    !this.state.done
      ? this.setState({
        done: true
        })
      : this.setState({
        done: false
        })
    this.props.done(id, this.state.done)
  }

  notSort = () => {
    this.props.sortTasks(this.props.taskManager)
  }

  ordinarySort = () => {
    const newList = this.props.taskManager.filter(item => item.typeCheckbox ==='ordinary')
    this.props.sortTasks(newList)
  }

  mediumSort = () => {
    const newList = this.props.taskManager.filter(item => item.typeCheckbox ==='medium')
    this.props.sortTasks(newList)
  }

  highSort = () => {
    const newList = this.props.taskManager.filter(item => item.typeCheckbox ==='high')
    this.props.sortTasks(newList)
  }

  render() {
    const list = this.props.taskManager
    return (
      <>
        <SearchBar notSort={this.notSort}
                   ordinarySort={this.ordinarySort}
                   mediumSort={this.mediumSort}
                   highSort={this.highSort}
        />
        <Ul>
          {list.map((item, index) =>
            <Li key={item.id}
                edit={item.edit}
                typeCheckbox={item.typeCheckbox}>
              <div>
                <section>
                  <input defaultValue={item.title}
                         readOnly={list[index].edit}/>
                  <textarea defaultValue={item.description}
                            readOnly={list[index].edit}/>
                </section>
                <div>
                  <Button onClick={() => item.edit
                    ? this.editTask(item.id)
                    : this.saveTask(item.id)}
                          className="small-button">
                    {item.edit ? "Edit" : "Save"}
                  </Button>
                  <Button onClick={() => this.doneTask(item.id)}
                          className="small-button">
                    {item.done ? "Modify" : "Done"}
                  </Button>
                  <Button onClick={() => this.props.deleteTask(item.id)}
                          className="small-button">
                    Delete
                  </Button>
                </div>
              </div>
              {item.done && <img src={CheckMark} alt="check-mark"/>}
            </Li>
          )}
        </Ul>
      </>
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
  edit,
  done,
  sortTasks
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
