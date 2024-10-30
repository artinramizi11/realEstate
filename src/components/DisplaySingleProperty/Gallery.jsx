import React, { useEffect, useRef } from 'react'
import data from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Gallery.css'


const Gallery = ({item}) => {

    const swiperRef = useRef(null); 

  
    const actualItemGallery = data.find((product) => product.id === item.id)
      return (
        <div className='galleryContainer' style={{backgroundColor: 'white', padding: '30px'}}>
            <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
            console.log(swiper)
        }

        }
        loop={true}
        navigation={false}

        autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          modules={[Autoplay,Navigation]}   
          >
        {actualItemGallery.images.map((image) => {
            return (
                <SwiperSlide key={image}>
                    <img style={{width: '100%', backgroundPosition: 'center'}} src={image} />
                </SwiperSlide>
            )
        })}
      </Swiper>

      <div className="buttons" style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'
      }}>
      <div className="custom-prev" style=
      {{
        color: 'white',
        backgroundColor: 'rgb(119, 10, 10)',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer'
        }} onClick={() => swiperRef.current?.slidePrev()}>
        Previous
      </div>
      <div className="custom-next" style=
      {{
        color: 'white',
        backgroundColor: 'rgb(119, 10, 10)',
    padding: '10px',
borderRadius: '10px',
cursor: 'pointer'}}
      
      onClick={() => swiperRef.current?.slideNext()}>
        Next
      </div>
      </div>


       </div>
      )
    };


export default Gallery