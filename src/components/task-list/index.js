import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'
import { deleteTask, edit, done, sortTasks } from '../../actionCreator'
import Button from '../button'
import SearchBar from '../sort'
import CheckMark from '../../assets/image/coffin.png'

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
      done: true,
      onSortKey: 'none',
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

  notSort = () => this.setState({ onSortKey: 'none' })

  ordinarySort = () => this.setState({ onSortKey: 'ordinary' })

  mediumSort = () => this.setState({ onSortKey: 'medium' })

  highSort = () => this.setState({ onSortKey: 'high' })

  render() {
    const SORTS = {
      none: taskList => taskList,
      ordinary: taskList => taskList.filter(item => item.typeCheckbox ==='ordinary'),
      medium: taskList => taskList.filter(item => item.typeCheckbox ==='medium'),
      high: taskList => taskList.filter(item => item.typeCheckbox ==='high'),
    }
    const sortedList = SORTS[this.state.onSortKey](this.props.taskList)

    return (
      <>
        <SearchBar notSort={this.notSort}
                   ordinarySort={this.ordinarySort}
                   mediumSort={this.mediumSort}
                   highSort={this.highSort}
        />
        <Ul>
          {sortedList.map((item, index) =>
            <Li key={item.id}
                edit={item.edit}
                typeCheckbox={item.typeCheckbox}>
              <div>
                <section>
                  <input defaultValue={item.title}
                         readOnly={sortedList[index].edit}/>
                  <textarea defaultValue={item.description}
                            readOnly={sortedList[index].edit}/>
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
    taskList: state.taskManager.taskList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  edit,
  done,
  sortTasks
}, dispatch)

TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default TaskList
