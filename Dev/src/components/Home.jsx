import { useState } from 'react';
import '../assets/styles/Home.css';
import { FormControlLabel, Switch, Zoom, Box, Typography, Grid } from '@mui/material';

const Home = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            <Grid container style={{display: 'flex', justifyContent: 'space-evenly'}} spacing={2} className='homeContainer'>
                <Grid item style={{marginTop: '6%'}} xs={6} className='nameCard'>
                    <h1>Hello All! My Name Is</h1>
                    <h1 id="nameText">Ryan Mitchell</h1>
                    <h1>And I Am A</h1>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label="Slide For Info"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Zoom in={checked}>
                            <Typography className='dropText' variant='h3'>Full-Stack Dev</Typography>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                            <Typography className='dropText' variant='h3'>Dad</Typography>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
                            <Typography className='dropText' variant='h3'>Gamer</Typography>
                        </Zoom>
                    </Box>
                </Grid>
                <Grid item xs={6} className='homeImage'>
                    <img src='\src\assets\images\Ryan Mitchell-logos_transparent.png' alt='Ryan Logo' width='80%' style={{marginRight: '7%'}}></img>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;