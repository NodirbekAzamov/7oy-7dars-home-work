import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import UserSlice from "../features/posts/UserSlice";
// import UserForm from "../features/posts/UserForm";
import Users from "../features/posts/Users";
const store = configureStore({
    reducer: {
        users: counterSlice,
        user_card: UserSlice,
        user_form: Users
    }
});

export default store