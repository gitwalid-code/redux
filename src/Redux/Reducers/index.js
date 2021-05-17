import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export default reducer;
