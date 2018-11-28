import { TYPES } from "../constants"

export const showImportanceCheckbox = (payload) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.IMPORTANCE_CHECKBOX, payload
    })
  }
}