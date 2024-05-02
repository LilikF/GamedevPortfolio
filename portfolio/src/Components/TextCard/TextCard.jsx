import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './index.css'

const TextCard=({title, content, small, footNote, children})=>{
    return(
    <Card sx={{borderRadius:'7px'}}>
        <Grid container >
            {title &&
                <Grid item xs={12} justifyContent={'start'} alignItems={'flex-start'}>
                    <div style={{width: 'fit-content', padding:'5px', paddingLeft:'10px', backgroundColor: '#ff8d3f', WebkitBorderBottomRightRadius:'10px', color:'white'}} className='custom-font'>
                    {title}
                    </div>
                </Grid>
            }
            {content && 
                <Grid item xs={12}>
                    <CardContent>
                        <div className={`textcard-content custom-font ${small && 'small-text'}`}>
                            {content}
                        </div>
                    </CardContent>
                </Grid>
            }
            {children &&
                 <Grid item xs={12} padding={'20px'}>
                    {children}
                </Grid>
            }
            {footNote &&
             <Grid item xs={12} paddingBottom={'20px'}>
                <div className={`textcard-content custom-font small-text`} style={{textAlign:'center'}}>
                {footNote}
                </div>
             </Grid>
            }
        </Grid>
    </Card>
    )
}

export default TextCard