import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import profilePic from './Assets/profilepic.png'

import './index.css'
import TextCard from '../../TextCard/TextCard';
import FullWidthGrid from '../../FullWidthGrid';
import SampleWork from '../SampleWork/SampleWork';

const AboutMe=()=>{
    return(
    <Grid container justifyContent='center' gap={'32px'}>
        <Grid item xs={12} sx={{display:'flex'}} alignItems={'center'} justifyContent={'center'}>
            <Grid container sx={{maxWidth:'700px!important'}}>
                <Grid item xs={12} md={3}>
                <img src={profilePic} className='profile-pic'/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid container>
                        <Grid item xs={12} alignItems='center' justifyContent='center'>
                        <Typography paragraph className='custom-font bold largetext' sx={{textAlign:'center'}}>
                            Ferenc Lilik (Age 25)
                        </Typography>
                        </Grid>
                        <Grid item xs={12}  alignItems='center' justifyContent='center'>
                        <Typography paragraph className='custom-font  bold largetext' sx={{textAlign:'center'}}>
                            Location: Hungary
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <FullWidthGrid item xs={12}>
            <TextCard title="About Me" content="I am a software engineer based in Hungary, with 5 solid years of industry experience behind me. During the years, I've worked in different branches of the industry, but one thing always remained constant: Game development in (almost all) my free time."></TextCard>
        </FullWidthGrid>

        <SampleWork/>

        <FullWidthGrid item xs={12}>
            <TextCard title={"Motivation"} small content="Ever since the first line of code I wrote, I immediately fell in love with coding. After trying myself in different jobs, I came to the conclusion that to keep this passion, I need to work in, or alongside Game Development. A lot of my free time (6 hours daily at least) goes into developing in Godot. I have pride in the knowledge I managed to accumulate in the field so far, and a hunger for honing my skills further. For this, I am willing to untiringly put in the hours at the job, because I found my passion in this field. To work such a job would be a privilege I would very much enjoy."></TextCard>
        </FullWidthGrid>

        <FullWidthGrid item xs={12}>
            <TextCard small content="In the following document, I will outline my work and current expertise regarding game development and game engines. My knowledge and practices were acquired exclusively in my free time, as before I did not have the chance to find any job postings in search of a Godot developer. If you are however interested in my previous jobs, please refer to the CV attached to my application."></TextCard>
        </FullWidthGrid>
    </Grid>)
}

export default AboutMe