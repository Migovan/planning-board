import { TYPES } from '../constants/index'

const initialState = {
  taskList: []
}

const taskManager = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      const { title, description, id, typeCheckbox } = action.payload
      return {
        taskList: [
        ...state.taskList,
        {
          title,
          description,
          id,
          typeCheckbox,
          edit: true,
          done: false,
        }
      ]
    }

    case TYPES.DELETE_TASK:
      const updateTaskList = state.taskList.filter(item => item.id !== action.id)
      return {
        taskList: updateTaskList
      }

    case TYPES.EDIT:
      const { idEditTask, showFocus } = action.payload
      const editTasks = state.taskList.map(item =>
        item.id === idEditTask
          ? { ...item, edit: showFocus }
          : item
      )
      return {
        taskList: editTasks
      }

    case TYPES.DONE:
      const { idDoneTask, statusDone } = action.payload
      const doneTask = state.taskList.map(item =>
        item.id === idDoneTask
          ? {...item, done: statusDone }
          : item
      )
      return {
        taskList: doneTask
      }

    case TYPES.IMPORTANCE_CHECKBOX:
      return {
        todos: [ ...state.taskList, { checkboxImportance: action.payload, } ]
      }

    case TYPES.SORT_TASKS:
      return { ...state, taskList: action.newList }

    default:
       return state
  }
}

export default taskManager
