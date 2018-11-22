import {TYPE} from "../constants"

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: TYPE.DELETE_TASK, id
    })
  }
}

export const edit = (id, showFocus) => {
  return (dispatch) => {
    dispatch({
      type: TYPE.EDIT, id, showFocus
    })
  }
}
