import { TYPES } from "../constants"

export const addTaskData = (title, description, id, typeCheckbox) => {
  return {
      type: TYPES.ADD_TASK,
      payload: { title, description, id, typeCheckbox }
  }
}
