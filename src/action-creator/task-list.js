import { TYPES } from "../constants"

export const deleteTask = (id) => {
  return  {
      type: TYPES.DELETE_TASK, id
  }
}

export const edit = (idEditTask, showFocus) => {
  return  {
      type: TYPES.EDIT,
      payload: { idEditTask, showFocus }
  }
}

export const changeDone = (idDoneTask, statusDone) => {
  return  {
      type: TYPES.DONE,
      payload: { idDoneTask, statusDone }
  }
}
