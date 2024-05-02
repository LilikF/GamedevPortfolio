import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import css from '@splidejs/splide/css'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

const Modal=({data, onClose})=>{
    return <div className='modal-wrapper'>
        <Card className='modal-card' sx={{position:'relative', overflow:'visible'}}>
            <div className='modal-close' onClick={onClose}>X</div>
            {data.title && 
                <div className='modal-title custom-font'>
                    {data.title}
                </div>}
            <Grid container sx={{width:'100%'}} alignItems={'center'} justifyContent={'center'}>
                <Grid item sx={12} alignItems={'center'} justifyContent={'center'}>
                    <img src={data.src} className='modal-img'></img>
                </Grid>
                <Grid item sx={12} alignItems={'center'} justifyContent={'center'} className='custom-font modal-description'>
                    {data.description}
                </Grid>
            </Grid>
        </Card>
    </div>
}

export default ({slides}) => {

    const [modalData,setModalData] = useState()

  return (
    <>
    <Splide
      options={ {
        rewind: true,
        interval: 1000,
        autoWidth: true,
        arrows: false,
        pagination: true,
        gap   : '12px',
        type: 'slide',
        autoplay:true
      } }
      aria-label="Carousel Images"
    >
        {slides.map((data,idx)=>{
        return <SplideSlide>
            <img className='slide-img' src={data.src} alt={`img_${idx}}`} onClick={()=>setModalData(data)}/>
          </SplideSlide>
        })}
    </Splide>
    <div style={{fontWeight:'bolder',fontSize:'1.5em'}} className='custom-font under-text-carousel'>
        {'Click on the images for description'}
    </div>
    {modalData&&
        <Modal data={modalData}  onClose={()=>setModalData(null)}/>
    }
    </>
  );
}