import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import './index.css'

import { TYPE } from '../constants'

import Input from '../components/input'
import TaskList from '../components/task-list'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  margin-top: 80px;
  h1 {
    margin: 10px 0;
    color: #6b946b;
  }
  button {
    width: 42%;
    height: 33px;
    margin: 10px 0;
    border-radius: 0;
    border: 1px solid;
    background-color: #efa823;
    color: #fff;
    font-family: 'Black Han Sans', sans-serif;
    letter-spacing: 1px;
    border-radius: 20px;
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
  }
`

class Panel extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      id: this.makeId(),
      edit: true
    }
    this.dataTitle = this.dataTitle.bind(this)
    this.dataDescription = this.dataDescription.bind(this)
    this.addTask = this.addTask.bind(this)
    this.makeId = this.makeId.bind(this)
  }

  makeId(){
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`
    return id
  }

  dataTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  dataDescription(event){
    this.setState({
      description: event.target.value
    })
  }

  addTask(event){
    event.preventDefault()
    this.setState({
        title: '',
        description: '',
        id: this.makeId()
      })
    this.props.dataTask(this.state)
  }

  render() {
    const { title, description } = this.state
    return (
      <Container>
        <h1>planning-board.</h1>
        <Input onChange={this.dataTitle}
               value={title}
               type="text"
               placeholder='title'
               className='input-title'/>
        <textarea onChange={this.dataDescription}
                  value={description}
                  type="text"
                  placeholder='description'/>
        <button type='button'
                onClick={this.addTask}>Add</button>
        <TaskList/>
      </Container>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dataTask: (data) => {
      dispatch({
        type: TYPE.ADD_TASK, data
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
