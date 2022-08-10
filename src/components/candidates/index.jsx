import { useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";

import { Content } from "../content/Content";
import { Grid } from "@mui/material";
import { StyledDiv } from "./styles";

export const Candidates = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		getUsers()
			.then((response) => setUsers(response.data))
			.finally(() => {
				setLoading(false);
			})
	}, []);

	return (
		<>
			{loading
				? <span>loading!</span>
				:
				<StyledDiv>
					<Grid container rowSpacing={8} columnSpacing={4}>
						{users?.map(user => <Content key={user.id} name={user.name} id={user.id} />)}
					</Grid>
				</StyledDiv>
			}
		</>
	)
};