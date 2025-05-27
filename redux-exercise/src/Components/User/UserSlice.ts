import { createSlice } from "@reduxjs/toolkit";

// type
type UserState = {
	firstname: string;
	lastname: string;
	age: number;
};

// initial state
const initialState: UserState = {
	firstname: "Jonh",
	lastname: "Doe",
	age: 30,
};

// reducer
export const UserSlide = createSlice({
	name: "user",
	initialState,
	reducers: {
		incrementAge: (state) => {
			state.age += 1;
		},
		setFirstname: (state, action) => {
			state.firstname = action.payload;
		},
		setLastname: (state, action) => {
			state.lastname = action.payload;
		},
	},
});

export const { incrementAge, setFirstname, setLastname } = UserSlide.actions;
export default UserSlide.reducer;
