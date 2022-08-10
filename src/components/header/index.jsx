import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
	Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/image001.png";
import avatar from "../../assets/img_avatar.png";
import {
	StyledLogo,
	StyledToolbar,
	StyledDiv,
	StyledDrawer,
	StyledSideBar,
} from './styles';

export const Header = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleDrawer = (open) => { setSidebar(open) }

  return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<StyledToolbar>
						<StyledLogo src={logo} alt="header-logo" />

						<StyledDiv>
							<Avatar alt="Avatar img" src={avatar} />
							<span>usuario logado</span>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={() => toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</StyledDiv>
						
					</StyledToolbar>
				</AppBar>
			</Box>

			<StyledDrawer
				anchor={'right'}
				open={sidebar}
				onClose={() => toggleDrawer(false)}
				>
				<StyledSideBar>
					<a href='/candidates'>Candidates</a>
					<a href='/winners'><p>Winners</p></a>
					<a href='/about'><p>About</p></a>
				</StyledSideBar>
			</StyledDrawer>
		</>
  )
};