import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import css from '@splidejs/splide/css'

export default ({slides}) => {
  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '5px',
        perPage: 3,
      } }
      aria-label="My Favorite Images"
    >
        {slides.map((src,idx)=>{
        return <SplideSlide>
            <img className='slide-img' src={src} alt={`img_${idx}}`}/>
          </SplideSlide>
        })}
    </Splide>
  );
}