import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { deleteTask, edit, changeDone } from "../../action-creator"
import Button from "../../components/button"
import Sort from "../../components/sort"
import { SortBlock, Li, Ul } from "./styled"
import CheckMark from "../../assets/image/coffin.png"

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      done: true,
      onSortKey: "all"
    }
  }

  edit = id => this.props.edit(id, this.state.focus)

  editTask = (id, callback) => {
    this.setState({
      focus: true
    })
    callback(id)
  }

  saveTask = (id, callback) => {
    this.setState({
      focus: false
    })
    callback(id)
  }

  changeDone = (id) => this.props.changeDone(id, this.state.done)

  doneTask = (id, callback) => {
    !this.state.done
      ? this.setState({
        done: true
        })
      : this.setState({
        done: false
        })
    callback(id)
  }

  doneTask = id => {
    const {done} = this.state
    this.setState({
      done,
    }, () => this.props.done(id, this.state.done))
    }

  sort = (type) => this.setState({ onSortKey: type })

  render() {
    const { deleteTask, taskList } = this.props
    const SORTS = {
      all: taskList => taskList,
      ordinary: taskList => taskList.filter(item => item.typeCheckbox === "ordinary"),
      medium: taskList => taskList.filter(item => item.typeCheckbox === "medium"),
      high: taskList => taskList.filter(item => item.typeCheckbox === "high")
    }
    const sortedList = SORTS[this.state.onSortKey](taskList)

    return (
      <>
        <SortBlock>
          <Sort onClick={() => this.sort("all")}>All</Sort>
          <Sort onClick={() => this.sort("ordinary")}>Ordinary</Sort>
          <Sort onClick={() => this.sort("medium")}>Medium</Sort>
          <Sort onClick={() => this.sort("high")}>High</Sort>
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
                    ? this.editTask(item.id, this.edit)
                    : this.saveTask(item.id, this.edit)} 
                          className="small-button">
                    {item.edit ? "Edit" : "Save"}
                  </Button>
                  <Button onClick={() => this.doneTask(item.id, this.changeDone)}
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
  changeDone,
}, dispatch)

TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default TaskList
