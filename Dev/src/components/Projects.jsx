import { Grid, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const projectData = [
    {
        name: <span><h1>Scrummy Nummy Food App:</h1>An app to get you thinking about dinner! Calls on Spoonacular API for the info, and does random to start </span>,
        href: 'https://rmits.github.io/scrummy-food-recipe-app/',
        image: <img src="src\assets\images\scrummy-fish.png" alt="Scrummy Fish" width={'10%'}></img>,
        borderColor: 'blue'
    }, {
        name: <span><h1>ThoughtFull API (Back-End Only):</h1>The start of an application to have users, thoughts that they can create, and reactions to other users thoughts!</span>,
        href: 'https://drive.google.com/file/d/1YvA5iwEqM-y9Ikl9NeWpP-yOHNgMJhq7/view',
        image: <img src="src\assets\images\thought-bubble.png" alt="Thought Bubble" width={'10%'}></img>,
        borderColor: 'red'
    }

];


const Projects = () => {
    return (
        <>
            <Grid container style={{display: 'flex', flexDirection: 'column'}}>
                {projectData.map((projects, index) => (
                    <Grid key={index} item style={{display: 'flex', padding: '1%', marginTop: '2%', marginBottom: '2%', flexDirection: 'row', color: 'white', alignItems:'center', textAlign: 'left', justifyContent: 'space-between', backgroundColor: 'gray', border: `outset ${projects.borderColor}`, fontSize: '20px', fontWeight: 'bold'}}>
                        {projects.image}
                        {projects.name}
                        <IconButton aria-label="linkButton" color='error' href={projects.href}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Grid> 
                ))}
            </Grid>
        </>
    )
};

export default Projects;