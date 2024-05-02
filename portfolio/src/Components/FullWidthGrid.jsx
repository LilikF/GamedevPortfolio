import * as React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FullWidthGrid = styled(Grid)({
  maxWidth: '700px!important',
  width: '80vw'
});

const WrappedGrid =(props)=>{
    return (
    <Grid container sx={12} alignContent={'center'} justifyContent={'center'}>
        <FullWidthGrid {...props}>
            {props.children}
        </FullWidthGrid>
    </Grid>
    )
}

export default WrappedGrid