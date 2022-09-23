import {
    configureStore
} from "@reduxjs/toolkit";
import Usersslice from "./features/Usersslice";

export const store = configureStore({
    reducer: Usersslice
})