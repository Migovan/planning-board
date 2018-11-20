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

    default:
       return state
  }
}

export default taskManager
