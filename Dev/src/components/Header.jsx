import '../assets/styles/Header.css';
import { Avatar, Breadcrumbs, Link, Grid, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const navItems = [
    {
        name: "Home",
        path: "/",
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        name: "About Me",
        path: "/about-me",
        icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        name: "Projects",
        path: "/projects",
        icon: <DesignServicesIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }, {
        name: "Contact",
        path: "/contact-me",
        icon: <ContactPageIcon sx={{ mr: 0.5 }} fontSize="medium" />
    }
];

const Header = () => {
    return (
        <>
            <header>
                <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="headerContainer">
                    <Grid item className="headerTitle">
                        <Avatar alt="Ryan Pic" style={{border: 'dotted thick white'}} src='src\assets\images\flower.jpg' sx={{ width: 100, height: 100 }} />
                        <h1>Ry.Mits</h1>
                    </Grid>
                    <Grid item style={{justifyContent: 'right', marginTop: '5px'}} className='navbar'>
                        <nav className='navbar' role="presentation">
                            <Breadcrumbs aria-label="breadcrumb">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        underline="hover"
                                        sx={{ display: 'flex', alignItems: 'center', color: 'white' }}
                                        color={'white'}
                                        href={item.path}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ))}
                            </Breadcrumbs>
                        </nav>
                    </Grid>
                </Grid>
            </header>
        </>
    )
}

export default Header;