import styled from "styled-components";
import { Toolbar, Drawer } from "@mui/material";

export const StyledLogo = styled.img`
  height: 40px;
`;

export const StyledToolbar = styled(Toolbar)`
	justify-content: space-between;
	background-color: #f8f9fa;
`;

export const StyledDiv = styled.div`
  color: black;
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const StyledDrawer = styled(Drawer)`
	padding: 25px;
`;

export const StyledSideBar = styled.div`
	padding: 25px;
`;