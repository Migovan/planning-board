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

export const done = (idDoneTask, statusDone) => {
  return  {
      type: TYPES.DONE,
      payload: { idDoneTask, statusDone }
  }
}

export const sortTasks = (newList) => {
  return  {
      type: TYPES.SORT_TASKS, newList
  }
}
