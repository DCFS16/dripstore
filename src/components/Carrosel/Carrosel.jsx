import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import './Carrosel.css'
import 'swiper/css';
import 'swiper/css/pagination'



export const Carrosel = () => {
  return (
    <div className='slide-show-carousel-container' >
    <Swiper  pagination={{clickable: true}} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <section className='first-content'>
          <div className='hero'>
            <h5>Melhores ofertas personalizadas</h5>
            <h3>Queima de stoque Nike 🔥</h3>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <span>
            <img src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="tenis da nike" />
          </span>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://placehold.co/600x400" />
      </SwiperSlide>

    </Swiper>
    </div>
  )
}
