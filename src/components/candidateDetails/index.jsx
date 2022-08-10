import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from "../../services/getUsers";
import medal1 from "../../assets/medals1.jpg";
import medal2 from "../../assets/medals2.jpg";
import medal3 from "../../assets/medals3.jpg";
import { Card, CardContent } from "@mui/material";
import { StyledDiv, StyledP, StyledImg } from './styles';

export const CandidateDetails = () => {
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState({});
	const { id } = useParams();

	useEffect(() => {
		getUserDetails(id)
			.then((response) => setDetails(response.data))
			.finally(() => setLoading(false))
	}, []);

	const checkPodium = () => {
		if (id > 3) return ``
		else if (id == 1) return medal1
		else if (id == 2) return medal2
		else if (id == 3) return medal3
	}

  return (
		<>
			{loading
				? <span>loading!</span>
				:
				<StyledDiv>
					<h5>Details</h5>
					<Card>
						<CardContent>
							{/* <StyledTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> */}
								<p>Name: {details.name.firstname} {details.name.lastname}</p>
								<p>E-mail: {details.email}</p>
								<StyledP>Position: {details.id} <StyledImg src={checkPodium(details.id)} /></StyledP>
								<p>Phone: {details.phone}</p>
							{/* </StyledTypography> */}
						</CardContent>
					</Card>
				</StyledDiv>
			}
		</>
	)
};