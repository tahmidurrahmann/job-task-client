import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { FaHome, FaRegUser } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
const drawerWidth = 240;

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const {user, logOut} = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-5 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-2"><FaHome />Home</span>
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "md:py-5 md:border-b-2  text-neutral-900 md:text-white md:border-b-white font-semibold text-sm" : "text-neutral-600 md:text-white text-sm"
            }
        >
            <span className="flex justify-center items-center gap-2"><IoCall />Contact</span>
        </NavLink>
        {user?.email ? <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img className="w-[40px] rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <h1 className="px-6 py-2 text-neutral-600 font-semibold flex justify-center items-center gap-2"><FaRegUser /> {user?.displayName}</h1>
                <MenuItem onClick={handleClose}><Button sx={{ mx: 1.5 }} variant="contained" color="error" onClick={handleLogout}>Logout<CgLogOut /></Button></MenuItem>
            </Menu>
        </div> : <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "lg:border-b-2  text-neutral-900 md:text-white lg:border-b-white font-semibold" : "text-white"
            }
        >
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }} variant="contained"><CgLogIn /> Login</Button>
        </NavLink>}
    </div>

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div className='flex items-center justify-center'>
                    <img className="w-[60px]" src="https://i.ibb.co/dDmDt9z/360-F-479498833-ZB8t-Dfb-Ve5-VCuzq-PPJAUu0-PP391v-NCSq.png" alt="" />
                    <h1 className='text-black font-bold text-sm uppercase'>Technovision Inc.</h1>
                </div>
            </Typography>
            <Divider />
            <List>
                {navItems}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "#1515154D" }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <div className='flex items-center'>
                                <img className="w-[60px]" src="https://i.ibb.co/rHrZGXH/scc-letter-logo-design-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-v.png" alt="" />
                                <h1 className='text-white font-bold uppercase'>Technovision Inc.</h1>
                            </div>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}


export default Navbar;