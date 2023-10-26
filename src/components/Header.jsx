import '../assets/styles/Header.css';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Paper, MenuItem, Button, Menu } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MenuItemIcon from '@mui/icons-material/Menu';
import RyanFlowerAvi from '../assets/images/flower.jpg';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useState } from 'react';

const navItems = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        id: 2,
        name: "About Me",
        path: "/about-me",
        icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        id: 3,
        name: "Projects",
        path: "/projects",
        icon: <DesignServicesIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        id: 4,
        name: "Contact",
        path: "/contact-me",
        icon: <ContactPageIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }
];

const Header = () => {
    const [active, setActive] = useState(undefined);
    const [menuEl, setMenuEl] = useState(null);
    const open = Boolean(menuEl);
    const handleMenuClick = (event) => {
        setMenuEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setMenuEl(null);
    };
    const handleLinkClick = (id) => {
        setActive(id);
    };

    return (
        <>
            <header>
                <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="headerContainer">
                    <Grid item className="headerTitle">
                        <Avatar alt="Ryan Pic" className='aviPic' src={RyanFlowerAvi} sx={{ width: 100, height: 100 }} />
                        <h1>Ry.Mits</h1>
                    </Grid>
                    <Grid item className='navMenu'>
                        <Button
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleMenuClick}
                        >
                            <MenuItemIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={menuEl}
                            open={open}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {navItems.map((item, index) => (
                                <MenuItem onClick={handleMenuClose}>
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className='navMenuItem'
                                        onClick={() => handleLinkClick(item.id)}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                    <Grid item className='navbar'>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={item.id === active ? 'navItemActive' : 'navItem'}
                                onClick={() => handleLinkClick(item.id)}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </header >
        </>
    )
}

export default Header;