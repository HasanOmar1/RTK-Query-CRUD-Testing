import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/UserSlice";
import { usersApi } from "../Query/UsersQuery";
import ToggleReducer from "../slices/ToggleSlice";
import { todoQuery } from "../Query/TodoQuery";

const store = configureStore({
  reducer: {
    user: UserReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    toggleMode: ToggleReducer,
    [todoQuery.reducerPath]: todoQuery.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(usersApi.middleware, todoQuery.middleware),
});

export default store;
