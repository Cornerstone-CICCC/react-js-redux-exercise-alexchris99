import { configureStore } from "@reduxjs/toolkit";
import userR from "../Components/User/UserSlice";

export const store = configureStore({
	reducer: {
		user: userR, // component slice
	},
});

// dispatch
export type Appdispatch = typeof store.dispatch;
