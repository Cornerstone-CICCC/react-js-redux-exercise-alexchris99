import { useSelector, useDispatch } from "react-redux";
import { setFirstname, setLastname, incrementAge } from "./UserSlice";

type UserState = {
	user: {
		firstname: string;
		lastname: string;
		age: number;
	};
};

export function User() {
	const firstname = useSelector((state: UserState) => state.user.firstname);
	const lastname = useSelector((state: UserState) => state.user.lastname);
	const age = useSelector((state: UserState) => state.user.age);
	const dispacth = useDispatch(); // to trigger the methods/ actions and is a hook
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h1>
				Name : {firstname} {lastname} Age: {age}
			</h1>
			<button type="button" onClick={() => dispacth(incrementAge())}>
				Increment Age
			</button>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h2>New name</h2>
				<input
					type="text"
					placeholder="First Name"
					onChange={(e) => dispacth(setFirstname(e.target.value))}
				/>
				<input
					type="text"
					placeholder="Last Name"
					onChange={(e) => dispacth(setLastname(e.target.value))}
				/>
			</div>
		</div>
	);
}
