import { TYPES } from "../constants"

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.DELETE_TASK, id
    })
  }
}

export const edit = (id, showFocus) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.EDIT, id, showFocus
    })
  }
}

export const done = (id, statusDone) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.DONE, id, statusDone
    })
  }
}

export const sortTasks = (newList) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.SORT_TASKS, newList
    })
  }
}
