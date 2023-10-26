import { Grid, IconButton } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import scrummyFish from '../assets/images/scrummy-fish.png';
import catDog from '../assets/images/cat-dog.jpeg';
import thoughtBubble from '../assets/images/thought-bubble.png';
import gameChipLogo from '../assets/images/game-logo.png';

const projectData = [
    {
        name: <span><h1>Scrummy Nummy Food App:</h1>An app to get you thinking about dinner! Calls on Spoonacular API for the info, and does random to start </span>,
        href: 'https://rmits.github.io/scrummy-food-recipe-app/',
        image: <img src={scrummyFish} alt="Scrummy Fish" width={'100px 100px'}></img>,
        borderColor: 'blue'
    }, {
        name: <span><h1>GameChip:</h1>Ever been stuck on that annoying level? Not anymore with Gamechip, where gamers ask questions and solve them as well!</span>,
        href: 'https://radiant-everglades-30632-b3c22f102a99.herokuapp.com/',
        image: <img src={gameChipLogo} alt="GameChip Logo" width={'100px 100px'}></img>,
        borderColor: 'pink'
    }, {
        name: <span><h1>ThoughtFull API (Back-End Only):</h1>The start of an application to have users, thoughts that they can create, and reactions to other users thoughts!</span>,
        href: 'https://drive.google.com/file/d/1YvA5iwEqM-y9Ikl9NeWpP-yOHNgMJhq7/view',
        image: <img src={thoughtBubble} alt="Thought Bubble" width={'100px 100px'}></img>,
        borderColor: 'red'
    }, {
        name: <span><h1>Cat and Dog Gallery:</h1>Cute cats and dogs?? Here is a cool app with some cats and dogs, user has to have an account before viewing.</span>,
        href: 'https://project-two-20323fc10aa2.herokuapp.com/',
        image: <img src={catDog} alt="CatDog" width={'100px 100px'}></img>,
        borderColor: 'orange'
    }
];


const Projects = () => {
    return (
        <>
            <Grid container style={{display: 'flex', flexDirection: 'column'}}>
                {projectData.map((projects, index) => (
                    <Grid container key={index} style={{display: 'flex', padding: '1%', marginTop: '2%', marginBottom: '2%', flexDirection: 'row', color: 'white', textAlign: 'left', justifyContent: 'space-between', backgroundColor: 'gray', border: `outset ${projects.borderColor}`, fontSize: '20px', fontWeight: 'bold'}}>
                        <Grid item>
                            {projects.image}{projects.name}
                        </Grid>
                        <Grid item style={{alignSelf: 'center'}}>
                            <IconButton aria-label="linkButton" color='error' href={projects.href}>
                                <ExitToAppIcon />
                            </IconButton>
                        </Grid>
                    </Grid> 
                ))}
            </Grid>
        </>
    )
};

export default Projects;