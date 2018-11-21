import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import './index.css'

import { TYPE } from '../constants'

import Input from '../components/input'
import Button from '../components/button'
import TaskList from '../components/task-list'
import Error from '../components/error'

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
`
const Textarea = styled.textarea`
    padding: 18px;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid gainsboro;
    resize: none;
    min-height: 80px;
    font-family: 'Black Han Sans', sans-serif;
    color: #609567;
    outline: none;
    ::-webkit-input-placeholder { color: #6095676b; }
    :focus { 
      outline: none;
      box-shadow: 0 0 3pt 2pt #2ab7e0;
    }
`

class Panel extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      id: this.makeId(),
      edit: true,
      errorTitle: false,
      errorDescription: false
    }
    this.dataTitle = this.dataTitle.bind(this)
    this.dataDescription = this.dataDescription.bind(this)
    this.addTask = this.addTask.bind(this)
    this.makeId = this.makeId.bind(this)
    this.error = this.error.bind(this)
  }

  error(){
    const { title, description } = this.state
    !title && !description
      && this.setState({
        errorTitle: true,
        errorDescription: true
      })

    !title
      && this.setState({
        errorTitle: true
      })

    !description
      && this.setState({
        errorDescription: true
      })
  }

  makeId(){
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`
    return id
  }

  dataTitle(event){
    this.setState({
      title: event.target.value,
      errorTitle: false
    })
  }

  dataDescription(event){
    this.setState({
      description: event.target.value,
      errorDescription: false
    })
  }

  addTask(event){
    event.preventDefault()
    this.props.dataTask(this.state)

    this.setState({
      title: '',
      description: '',
      id: this.makeId(),
    })
  }

  render() {
    const { title, description , errorTitle, errorDescription} = this.state
    return (
      <Container>
        <h1>planning-board.</h1>
        <Input onChange={this.dataTitle}
               value={title}
               type="text"
               placeholder='title'/>
        {errorTitle && <Error/>}
        <Textarea onChange={this.dataDescription}
                  value={description}
                  type="text"
                  placeholder='description'/>
        {errorDescription && <Error/>}
        <Button onClick={title && description ? this.addTask : this.error}
                className='add-button'>Add</Button>
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
