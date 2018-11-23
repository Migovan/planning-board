import { TYPE } from '../constants/index'

const taskManager = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_TASK:
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          id: action.id,
          edit: true,
          done: false,
        }
      ]

    case TYPE.DELETE_TASK:
      return state.filter(item =>{
        return item.id !== action.id
      })

    case TYPE.EDIT:
      return state.map(item =>
      (item.id === action.id)
        ? {...item, edit: action.showFocus }
        : item
      )

    case TYPE.DONE:
      return state.map(item =>
        (item.id === action.id)
          ? {...item, done: action.statusDone }
          : item
      )

    default:
       return state
  }
}

export default taskManager
