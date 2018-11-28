import { TYPES } from "../constants"

export const addTaskData = (title, description, id, typeCheckbox) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.ADD_TASK, title, description, id, typeCheckbox
    })
  }
}
