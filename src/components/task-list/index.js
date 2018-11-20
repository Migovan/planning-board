import React, { Component } from 'react'

import Button from '../button'
import {connect} from "react-redux";
import {TYPE} from "../../constants";

class TaskList extends Component {
  constructor(props) {
    super(props)
   this.deleteTask = this.deleteTask.bind(this)
  }

  deleteTask(index){
    this.props.deleteTask(index)
  }

  render() {
    const list = this.props.taskManager.taskList
    return (
      <ul>
        {list.map((item, index) =>
          <li key={item.id}>
            <input defaultValue={item.title}/>
            <input defaultValue={item.description}/>
            <Button onClick={() => this.deleteTask(index)}>Delete</Button>
          </li>
        )}
      </ul>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
