import { Chip, Grid, Typography, Icon } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footItems = [
    {
        icon: <InstagramIcon fontSize="large" color="black"/>,
        href: 'https://www.instagram.com/ry.mits/'
    },
    {
        icon: <TwitterIcon fontSize="large" color="black"/>,
        href: 'https://twitter.com/rmits43'
    }, {
        icon: <FacebookIcon fontSize="large" color="black"/>,
        href: 'https://www.facebook.com/ryan.mitchell.54966834'
    }, {
        icon: <GitHubIcon fontSize="large" color="black"/>,
        href: 'https://github.com/rmits'
    }, {
        icon: <LinkedInIcon fontSize="large" color="black"/>,
        href: 'https://www.linkedin.com/in/ryan-mitchell-94ab62287/'
    }
]

const Footer = () => {
    return (
        <>
            <footer>
                <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'black', borderTop: 'solid pink'}}>
                    <Grid item style={{marginTop: '1%', display: 'flex', flexDirection: 'row'}}>
                        {footItems.map((foot, index) => ( 
                        <Chip key={index} icon={foot.icon} style={{backgroundColor: 'rgb(209, 148, 142)', margin: '1%'}} component="a" href={foot.href} clickable />
                        ))}
                    </Grid>
                </Grid>
            </footer>
        </>
    )
};

export default Footer;