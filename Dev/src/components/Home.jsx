import { useState } from 'react';
import '../assets/styles/Home.css';
import { FormControlLabel, Switch, Zoom, Box, Typography } from '@mui/material';

const Home = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        <>
            <div className="homeContainer">
                <div className="nameCard">
                    <h1>Hello All! My Name Is</h1>
                    <h1 id="nameText">Ryan Mitchell</h1>
                    <h1>And I Am A</h1>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label="Slide For Info"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Zoom in={checked}>
                            <Typography className='dropText' variant='h3'>Web Developer</Typography>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                            <Typography className='dropText' variant='h3'>Dad</Typography>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
                            <Typography className='dropText' variant='h3'>Gamer</Typography>
                        </Zoom>
                    </Box>
                </div>
                <div className='homeImage'>
                    <img src='\src\assets\images\Ryan Mitchell-logos_transparent.png' alt='Ryan Logo' width='400px'></img>
                </div>
            </div>
        </>
    )
}

export default Home;