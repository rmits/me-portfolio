import { useState } from 'react';
import '../assets/styles/AboutMe.css';
import { Avatar, Typography, Popover } from '@mui/material';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { blueGrey, green, orange } from '@mui/material/colors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const AboutMe = () => {
    const [gameAnchorEl, setGameAnchorEl] = useState(null);
    const [ballAnchorEl, setBallAnchorEl] = useState(null);
    const [weightAnchorEl, setWeightAnchorEl] = useState(null);

    const handleGamePopoverOpen = (event) => {
        setGameAnchorEl(event.currentTarget);
    };

    const handleBallPopoverOpen = (event) => {
        setBallAnchorEl(event.currentTarget);
    };

    const handleWeightPopoverOpen = (event) => {
        setWeightAnchorEl(event.currentTarget);
    };

    const handleGamePopoverClose = () => {
        setGameAnchorEl(null);
    };

    const handleBallPopoverClose = () => {
        setBallAnchorEl(null);
    };

    const handleWeightPopoverClose = () => {
        setWeightAnchorEl(null);
    };

    const gameOpen = Boolean(gameAnchorEl);
    const ballOpen = Boolean(ballAnchorEl);
    const weightOpen = Boolean(weightAnchorEl);

    return (
        <>
            <div className='aboutContainer'>
                <div className="bioCard">
                    <h1>About Me</h1>
                    <p>Welcome to my web development portfolio! I'm Ryan, and I'm more than just a web developer; I'm a father, a passionate coder, and a dedicated team player.</p>
                    <h3>A Family Man:</h3>
                    <p>I believe that balance in life is key to success. Alongside my career as a web developer, I proudly embrace the role of a father to two wonderful kids. They are my inspiration and motivation to continuously learn and grow in my field. The lessons I've learned as a parent have made me more patient, adaptable, and efficient in my work.</p>
                    <h3>Code Lover:</h3>
                    <p>My journey into the world of web development began in March 2023, and it has been an exhilarating adventure ever since. With every project, I strive to push the boundaries of what's possible on the web. I am passionate about staying up-to-date with the latest technologies and trends, ensuring that I provide my clients with the most innovative solutions.</p>
                    <h3>Interests/Hobbies: (Hover Over Icons!)</h3>
                    <span className='hobbyIcons'>
                        <Avatar sx={{ bgcolor: orange[500], margin: '5px' }}>
                            <SportsBasketballIcon aria-owns={ballOpen ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleBallPopoverOpen}
                                onMouseLeave={handleBallPopoverClose} />
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={ballOpen}
                                anchorEl={ballAnchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleBallPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>Basketball</Typography>
                            </Popover>
                        </Avatar>
                        <Avatar sx={{ bgcolor: blueGrey[900], margin: '5px' }}>
                            <SportsEsportsIcon aria-owns={gameOpen ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleGamePopoverOpen}
                                onMouseLeave={handleGamePopoverClose} />
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={gameOpen}
                                anchorEl={gameAnchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleGamePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>Gaming</Typography>
                            </Popover>
                        </Avatar>
                        <Avatar sx={{ bgcolor: green[800], margin: '5px' }}>
                            <FitnessCenterIcon aria-owns={weightOpen ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleWeightPopoverOpen}
                                onMouseLeave={handleWeightPopoverClose} />
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={weightOpen}
                                anchorEl={weightAnchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleWeightPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>Weight Training</Typography>
                            </Popover>
                        </Avatar>
                    </span>
                </div>
            </div>
        </>
    )
};

export default AboutMe;