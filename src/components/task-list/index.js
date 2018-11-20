import React, { Component } from 'react'
import {connect} from "react-redux"
import styled from 'styled-components'
import './index.css'

import Button from '../button'

import {TYPE} from "../../constants"
import checkMark  from '../../assets/image/check-mark.png'
import deleteIcon  from  '../../assets/image/delete.png'
import editIcon from '../../assets/image/edit-button.png'

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
  }
`

class TaskList extends Component {
  constructor(props) {
    super(props)
   this.deleteTask = this.deleteTask.bind(this)
   this.editTask = this.editTask.bind(this)
   this.saveTask = this.saveTask.bind(this)
  }

  deleteTask(index){
    this.props.deleteTask(index)
  }

  editTask(index){
    this.props.edit(index)
  }

  saveTask(index){
    this.props.noEdit(index)
  }

  render() {
    const list = this.props.taskManager.taskList
    return (
      <Ul>
        {list.map((item, index) =>
          <Li key={item.id}>
            <input defaultValue={item.title}
                   readOnly={list[index].edit}/>
            <textarea defaultValue={item.description}
                   readOnly={list[index].edit}/>
            <div>
              <Button onClick={() => this.deleteTask(index)}
                      className='button-with-task'>Delete</Button>
              {list[index].edit
                ? <Button onClick={() => this.editTask(index)}
                          className='button-with-task'>Edit</Button>
                : <Button onClick={() => this.saveTask(index)}
                          className='button-with-task'>Save</Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (index) => {
      dispatch({
        type: TYPE.DELETE_TASK, index
      })
    },
    edit: (index) => {
      dispatch({
        type: TYPE.EDIT, index
      })
    },
    noEdit: (index) => {
      dispatch({
        type: TYPE.NO_EDIT, index
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
