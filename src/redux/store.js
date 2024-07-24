import { createStore } from "redux";
import reducer from "./reducers/userReducers";

const store = createStore(reducer);

export default store;
