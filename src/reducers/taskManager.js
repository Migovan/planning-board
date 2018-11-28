import { TYPES } from '../constants/index'

const taskManager = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      const { title, description, id, typeCheckbox } = action
      return [
        ...state,
        {
          title,
          description,
          id,
          typeCheckbox,
          edit: true,
          done: false,
        }
      ]

    case TYPES.DELETE_TASK:
      return state.filter(item =>{
        return item.id !== action.id
      })

    case TYPES.EDIT:
      return state.map(item =>
      (item.id === action.id)
        ? {...item, edit: action.showFocus }
        : item
      )

    case TYPES.DONE:
      return state.map(item =>
        (item.id === action.id)
          ? {...item, done: action.statusDone }
          : item
      )

    case TYPES.IMPORTANCE_CHECKBOX:
      return [
        ...state,
        {
          checkboxImportance: action.payload,
        }
      ]

    case TYPES.SORT_TASKS:
      return action.newList

    default:
       return state
  }
}

export default taskManager
