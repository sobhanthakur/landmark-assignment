import { combineReducers } from "redux";
import modelReducer from "./reducers/modelReducer";
import alertReducer from "./reducers/alertReducer";

export default combineReducers({
  modelReducer,
  alertReducer
});
