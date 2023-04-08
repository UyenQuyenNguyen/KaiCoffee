import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/system';
import { styled as format } from 'styled-components';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/cartcontext';
import { useContext } from 'react';

const pages = [
    {
        "title": "Shop",
        "link": "/Shop"
    },
    {
        "title": "Favourite",
        "link": "/Favourite"
    },


];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [count, setCount] = React.useState(0)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);

    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const Globalstate = useContext(CartContext);
    const state = Globalstate.state;


    return (
        <AppBar style={{ background: 'white', marginTop: '30px', color: 'black', zIndex: '100', borderBottom: '1px groove #FFFCF6', boxShadow: 'none' }} position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <a href='/'><img style={{ width: "50px" }} src={require('../images/MyLogo.png')} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a>
                    <a href='/'><img style={{ width: '150px' }} src={require('../images/KaiCoffee.png')} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    sx={{ color: 'black' }}
                                    key={index}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, id) => (
                            <Link style={{ textDecoration: 'none' }} to={page.link}><Button
                                key={id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', textDecoration: 'none', display: 'block', marginLeft: '24px', fontSize: '12px' }}
                            >
                                {page.title}
                            </Button></Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to={"/LoginAccount"}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={count} sx={{ color: "#206f82" }}>
                                    <PersonOutlineOutlinedIcon sx={{ color: "#206f82" }} />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Link to={"/Cart"}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={count} sx={{ color: "#206f82" }}>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, a) => (
                                <MenuItem
                                    sx={{ color: 'black' }} key={a} onClick={handleCloseUserMenu}>
                                    <Typography color={"Black"}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;