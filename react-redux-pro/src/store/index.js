import { configureStore } from "@reduxjs/toolkit";

//导入子模块reducer
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channeler: channelReducer,
  },
});

export default store;