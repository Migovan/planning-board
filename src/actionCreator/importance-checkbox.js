import { TYPES } from "../constants"

export const showImportanceCheckbox = (payload) => {
  return {
      type: TYPES.IMPORTANCE_CHECKBOX, payload
  }
}