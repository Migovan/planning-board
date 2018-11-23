import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import nanoid from 'nanoid'
import { dataTask } from '../actions'
import Input from '../components/input'
import Button from '../components/button'
import TaskList from '../components/task-list'
import Error from '../components/error'

const Wrapper = styled.div`
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
    ::placeholder { 
      color: #6095676b;
      opacity: 1;
    }
    :-ms-input-placeholder { 
    color: #6095676b;
    }
    ::-ms-input-placeholder {
        color: #6095676b;
    }
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
      errorTitle: false,
      errorDescription: false
    }
  }

  error = () => {
    const { title, description } = this.state
    if (!title && !description) {
      this.setState({
        errorTitle: true,
        errorDescription: true
      })
    } else if (!title && description){
      this.setState({
        errorTitle: true
      })
    } else {
      this.setState({
        errorDescription: true
      })
    }
  }

  makeId(){
    const id = nanoid(4)
    return id
  }

  dataTitle = (event) => {
    this.setState({
      title: event.target.value,
      errorTitle: false
    })
  }

  dataDescription = (event) => {
    this.setState({
      description: event.target.value,
      errorDescription: false
    })
  }

  addTask = (event) => {
    event.preventDefault()
    const { title, description, id } = this.state
    this.props.dataTask(title, description, id)

    this.setState({
      title: '',
      description: '',
      id: this.makeId(),
    })
  }

  render() {
    const { title, description , errorTitle, errorDescription} = this.state
    return (
      <Wrapper>
        <h1>planning-board.</h1>
        <Input onChange={this.dataTitle}
               value={title}
               type="text"
               placeholder="title"/>
        {errorTitle && <Error/>}
        <Textarea onChange={this.dataDescription}
                  value={description}
                  type="text"
                  placeholder="description"/>
        {errorDescription && <Error/>}
        <Button onClick={title && description ? this.addTask : this.error}
                className="add-button">Add</Button>
        <TaskList/>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ dataTask }, dispatch)

export default connect(null, mapDispatchToProps)(Panel)
