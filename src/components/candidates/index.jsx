import { useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";

import { Candidate } from "../candidate";
import { StyledDiv, StyledGrid } from "./styles";

export const Candidates = () => {
	const [loading, setLoading] = useState(true);
	const [candidates, setCandidates] = useState([]);
	
	useEffect(() => {
		getUsers()
			.then((response) => setCandidates(response.data))
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
					<StyledGrid container>
						{candidates?.map(candidate => <Candidate key={candidate.id} name={candidate.name} id={candidate.id} />)}
					</StyledGrid>
				</StyledDiv>
			}
		</>
	)
};