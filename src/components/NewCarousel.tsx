import React from 'react'
import Card from '@/components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/mousewheel';



function NewCarousel({cardsData, className} : {cardsData: any, className: string}) {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + '</span>';
        },
      };
    

    const cards = [
        {id: 1, title: 'Card 1', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 2, title: 'Card 2', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 3, title: 'Card 3', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 4, title: 'Card 4', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 5, title: 'Card 5', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 6, title: 'Card 6', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 7, title: 'Card 7', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 8, title: 'Card 8', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'}
    ]

    return (
      <Swiper
        className={className}
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        mousewheel
        pagination={pagination}
        scrollbar={{ draggable: true }}
        loop={true}
        style={{
            "--swiper-pagination-color": "#CD163F",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "0.5rem",
            "--swiper-pagination-bullet-border-radius": "20%",
            "--swiper-navigation-color": "#000000",
        } as React.CSSProperties}
         breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
      >
    
      {cards.map((card)=>(
        <SwiperSlide>
            <Card cardClass='bg-white-100 border-2 border-black' buttonClass='ra-gradient' 
                title={card.title} img={card.img}
                onCardClick={() => { window.location.href = '/menu'}}
            /> 
        </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default NewCarousel
