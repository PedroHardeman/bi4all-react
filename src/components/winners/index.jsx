import { useEffect, useState } from "react";
import { getUserDetails } from "../../services/getUsers";

import { Card, CardContent } from "@mui/material";
import { StyledDiv, StyledGrid, StyledTypography } from "./styles";
import medal1 from "../../assets/medals1.jpg";
import medal2 from "../../assets/medals2.jpg";
import medal3 from "../../assets/medals3.jpg";

export const Winners = () => {
	const [loading, setLoading] = useState(true);
	const [winners, setWinners] = useState([]);

	useEffect(() => {
		try {
			const w1 = getUserDetails(1);
			const w2 = getUserDetails(2);
			const w3 = getUserDetails(3)
			Promise.all([w1, w2, w3]).then(result => {
				setWinners(result);
				setLoading(false);
			})
		} catch (e) {
			console.log(e.message);
		}
	}, []);

	return (
		<>
			{loading
				? <span>loading!</span>
				:
				<StyledDiv>
					<h5>Winners</h5>
					<StyledGrid container>
						<Card>
							<CardContent>
								<StyledTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{winners[0].data.name.firstname} {winners[0].data.name.lastname}
									<img src={medal1} alt="medals" class="medals" />
								</StyledTypography>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<StyledTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{winners[1].data.name.firstname} {winners[1].data.name.lastname}
									<img src={medal2} alt="medals" class="medals" />
								</StyledTypography>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<StyledTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{winners[2].data.name.firstname} {winners[2].data.name.lastname}
									<img src={medal3} alt="medals" class="medals" />
								</StyledTypography>
							</CardContent>
						</Card>

					</StyledGrid>
				</StyledDiv>
			}
		</>
	)
};