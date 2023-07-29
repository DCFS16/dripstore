import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './Carrosel.css'


export const Carrosel = () => {
  return (
    <div className='slide-show-carousel-container' >
    <Swiper  pagination={{clickable: true}} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <section className='first-content'>
          <div className='hero'>
            <h5 className='orange-text'>Melhores ofertas personalizadas</h5>
            <h3>Queima de estoque Nike 🔥</h3>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <span>
            <img src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="tenis da nike" />
          </span>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className='first-content'>
          <div className='hero'>
            <h5>Melhores ofertas personalizadas</h5>
            <h3>Queima de estoque Nike 🔥</h3>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <span>
            <img src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="tenis da nike" />
          </span>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className='first-content'>
          <div className='hero'>
            <h5>Melhores ofertas personalizadas</h5>
            <h3>Queima de estoque Nike 🔥</h3>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <span>
            <img src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="tenis da nike" />
          </span>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className='first-content'>
          <div className='hero'>
            <h5>Melhores ofertas personalizadas</h5>
            <h3>Queima de estoque Nike 🔥</h3>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <span>
            <img src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="tenis da nike" />
          </span>
        </section>
      </SwiperSlide>

    </Swiper>
    </div>
  )
}
