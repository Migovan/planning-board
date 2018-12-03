import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteTask, edit, done } from '../../actionCreator'
import Button from '../../components/button'
import Sort from '../../components/sort'
import { SortBlock, Li, Ul } from './styled'
import CheckMark from '../../assets/image/coffin.png'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      done: true,
      onSortKey: 'all',
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

  doneTask = (id, done) => {
    !this.state.done
      ? this.setState({
        done: true
        })
      : this.setState({
        done: false
        })
    this.props.done(id, this.state.done)
  }

  sort = (type) => this.setState({ onSortKey: type })

  render() {
    const { deleteTask, taskList } = this.props
    const SORTS = {
      all: taskList => taskList,
      ordinary: taskList => taskList.filter(item => item.typeCheckbox ==='ordinary'),
      medium: taskList => taskList.filter(item => item.typeCheckbox ==='medium'),
      high: taskList => taskList.filter(item => item.typeCheckbox ==='high'),
    }
    const sortedList = SORTS[this.state.onSortKey](taskList)

    return (
      <>
        <SortBlock>
          <Sort onClick={() => this.sort('all')}>All</Sort>
          <Sort onClick={() => this.sort('ordinary')}>Ordinary</Sort>
          <Sort onClick={() => this.sort('medium')}>Medium</Sort>
          <Sort onClick={() => this.sort('high')}>High</Sort>
        </SortBlock>
        <Ul>
          {sortedList.map((item) =>
            <Li key={item.id}
                edit={item.edit}
                typeCheckbox={item.typeCheckbox}>
              <div>
                <section>
                  <input defaultValue={item.title}
                         readOnly={item.edit}/>
                  <textarea defaultValue={item.description}
                            readOnly={item.edit}/>
                </section>
                <div>
                  <Button onClick={() => item.edit
                    ? this.editTask(item.id)
                    : this.saveTask(item.id)}
                          className="small-button">
                    {item.edit ? "Edit" : "Save"}
                  </Button>
                  <Button onClick={() => this.doneTask(item.id, item.done)}
                          className="small-button">
                    {item.done ? "Modify" : "Done"}
                  </Button>
                  <Button onClick={() => deleteTask(item.id)}
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
    taskList: state.taskManager.taskList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  edit,
  done,
}, dispatch)

TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default TaskList
