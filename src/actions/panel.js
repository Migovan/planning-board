import {TYPE} from "../constants"

export const dataTask = (title, description, id) => {
  return (dispatch) => {
    dispatch({
      type: TYPE.ADD_TASK, title, description, id
    })
  }
}
