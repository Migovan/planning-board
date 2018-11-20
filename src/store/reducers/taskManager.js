import { TYPE } from '../../constants'

const initialState = ({
  taskList: []
});

const taskManager = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.ADD_TASK:
      state.taskList.push(action.data)
      return {...state }
      break

    case TYPE.DELETE_TASK:
      const updateTaskList = state.taskList.filter((item, index) =>{
        return index !== action.index
      })
      return { ...state, taskList: updateTaskList }
      break

    case TYPE.EDIT:
      state.taskList[action.index].edit = false
      return { ...state }
      break

    case TYPE.NO_EDIT:
      state.taskList[action.index].edit = true
      return { ...state }
      break

    default:
       return state
  }
}

export default taskManager
