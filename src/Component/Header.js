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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './Context/logincontext';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Swal from 'sweetalert2';
import { logOutAcc } from '../services/auth';

const pages = [
    {
        "title": "Shop",
        "link": "/shop"
    },
    {
        "title": "Favourite",
        "link": "/favourite"
    },


];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [count, setCount] = React.useState(0)
    const { user, setUser } = useContext(LoginContext)
    const navigate = useNavigate();

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

    const logOut = async () => {
       if(!localStorage.getItem('token', '')){
           navigate('/sign_in')
       }else{
           Swal.fire({
               title: 'Logout Account',
               text: 'Are you sure?',
               icon: 'question',
               showCancelButton: true,
               confirmButtonText: 'OK',
               cancelButtonText: 'Cancel'
           }).then((result) => {
               if (result.isConfirmed) {
                   try {
                       const res = logOutAcc();
                       console.log(res.data);
                       localStorage.setItem('token', '');
                       setUser({ firstName: 'Guest' })
                       navigate('/sign_in')
                   } catch (e) {
                       console.log(e);
                   }
               } else {
                   return;
               }
           });

       }
    };


    return (
        <AppBar style={{ background: 'white', marginTop: '30px', color: 'black', zIndex: '100', borderBottom: '1px groove #FFFCF6', boxShadow: 'none' }} position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <a href='/'><img style={{ width: "50px" }} src='../images/MyLogo.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a>
                    <a href='/'><img style={{ width: '150px' }} src='../images/KaiCoffee.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a>
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
                            <Link style={{ textDecoration: 'none' }} to={page.link} key={id}><Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', textDecoration: 'none', display: 'block', marginLeft: '24px', fontSize: '12px' }}
                            >
                                {page.title}
                            </Button></Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Link to={"/sign_in"}> */}
                            <IconButton aria-label="cart" onClick={logOut}>
                                <StyledBadge badgeContent={count} sx={{ color: "#206f82" }}>
                                    <PersonOutlineOutlinedIcon sx={{ color: "#206f82" }} />
                                </StyledBadge>
                            </IconButton>
                        {/* </Link> */}
                        <Link to={"/cart"}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={count} sx={{ color: "#206f82" }}>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        {user.role === 'admin'? (
                            <Link to={"/admin-cp"}>
                                <IconButton aria-label="cart">
                                    <StyledBadge sx={{ color: "#206f82" }}>
                                        <AdminPanelSettingsIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        ): <></>}
                        <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>Hello, {user.firstName}</span>
                        {/* <Menu
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
                        </Menu> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;