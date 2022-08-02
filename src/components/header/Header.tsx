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
} from './styles';

export const Header = () => {
  return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<StyledLogo src={logo} alt="header-logo" />

					<StyledDiv>
						<Avatar alt="Remy Sharp" src={avatar} />
						<span>usuario logado</span>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					</StyledDiv>
					
				</StyledToolbar>
			</AppBar>
		</Box>
  )
};