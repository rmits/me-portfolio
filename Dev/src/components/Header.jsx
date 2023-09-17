import '../assets/styles/Header.css';
import { Avatar, Breadcrumbs, Link, Typography, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Header = () => {
    return (
        <>
            <header>
                <div className="headerContainer">
                    <div className="headerTitle">
                        <Avatar alt="Ryan Pic" src='src\assets\images\flower.jpg' sx={{ width: 100, height: 100 }} />
                        <h1>Ryan Mitchell</h1>
                    </div>
                    <nav className='navbar' role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color={'white'}
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color={'white'}
                                href="/about-me"
                            >
                                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                About Me
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color={'white'}
                                href="/skills"
                            >
                                <DesignServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Skills
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color={'white'}
                                href="/projects"
                            >
                                <EngineeringIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Projects
                            </Link>
                        </Breadcrumbs>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;