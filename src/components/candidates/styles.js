import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledDiv = styled.div`
	height: calc(100% - 80px);
	display: flex;
	padding: 15px;
	flex-direction: column;
	align-items: center;
`;

export const StyledGrid = styled(Grid)`
	margin-top: 50px!important;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
`;

export const StyledTypography = styled(Typography)`
	display: flex;
	align-items: center;
`