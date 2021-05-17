import { ADDUSER } from "../Constants/userConstants";
const initialState = { users: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return { users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
