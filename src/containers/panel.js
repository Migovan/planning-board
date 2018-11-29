import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Wrapper,
  Textarea,
  ImportanceBlock,
} from './styled'
import nanoid from 'nanoid'
import { addTaskData } from '../actionCreator'
import Input from '../components/input'
import Button from '../components/button'
import TaskList from '../components/task-list'
import Error from '../components/error'
import ImportanceCheckbox from '../components/importance-checbox'

class Panel extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      id: this.makeId(),
      errorTitle: false,
      errorDescription: false,
      errorCheckbox: false,
      typeCheckbox: '',
      checkboxImportance: false
    }
  }

  error = () => {
    const { title, description, typeCheckbox } = this.state

    if (!typeCheckbox && title.trim() && description.trim()){
      this.setState({
        errorCheckbox: true
      })
    } else if (typeCheckbox && !title.trim() && description.trim()) {
      this.setState({
        errorTitle: true
      })
    }
    else if (typeCheckbox && title.trim() && !description.trim()) {
      this.setState({
        errorDescription: true
      })
    }
    else if (!typeCheckbox && !title.trim() && description.trim()) {
      this.setState({
        errorCheckbox: true,
        errorTitle: true
      })
    }
    else if (typeCheckbox && !title.trim() && !description.trim()) {
      this.setState({
        errorTitle: true,
        errorDescription: true
      })
    }
    else if (!typeCheckbox && title.trim() && !description.trim()) {
      this.setState({
        errorCheckbox: true,
        errorDescription: true
      })
    } else {
      this.setState({
        errorCheckbox: true,
        errorTitle: true,
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

  toggleCheckbox = (typeCheckbox) => {
    if (!this.state.checkboxImportance) {
      this.setState({
        checkboxImportance: true,
        errorCheckbox: false,
        typeCheckbox
      })
    } else {
      this.setState({
        checkboxImportance: false,
        typeCheckbox: ''
      })
    }
  }

  addTask = (event) => {
    event.preventDefault()
    const { title, description, id, typeCheckbox} = this.state
    this.props.addTaskData(title, description, id, typeCheckbox)
    this.setState({
      title: '',
      description: '',
      id: this.makeId(),
      typeCheckbox: '',
      checkboxImportance: false,
    })
  }

  render() {
    const {
      title,
      description ,
      errorTitle,
      errorDescription,
      errorCheckbox,
      checkboxImportance,
      typeCheckbox
    } = this.state
    const checkedCheckbox = checkboxImportance && typeCheckbox

    return (
      <Wrapper>
        <h1>Planning-board.</h1>
        <ImportanceBlock>
          <h2>Importance of the task:</h2>
          <ImportanceCheckbox onChange={() => {this.toggleCheckbox("ordinary")}}
                              checked={checkedCheckbox  === "ordinary"}
                              importance="ordinary"/>
          <ImportanceCheckbox onChange={() => {this.toggleCheckbox("medium")}}
                              checked={checkedCheckbox  === "medium"}
                              importance="medium"/>
          <ImportanceCheckbox onChange={() => {this.toggleCheckbox("high")}}
                              checked={checkedCheckbox  === "high"}
                              importance="high"/>
        </ImportanceBlock>
        {errorCheckbox && <Error/>}
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
        <Button onClick={title && description && typeCheckbox ? this.addTask : this.error}
                className="add-button">Add</Button>
        <TaskList/>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addTaskData }, dispatch)

export default connect(null, mapDispatchToProps)(Panel)
