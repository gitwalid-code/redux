import { ADDUSER } from "../Constants/userConstants";
import axios from "axios";
export const addUser = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: ADDUSER,
      payload: response.data,
    });
  };
};
