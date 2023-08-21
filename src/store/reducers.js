import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import chatReducer from "./chat/reducer";

const reducers = combineReducers({
  login: loginReducer,
  chat: chatReducer
});

export default reducers;
