import React from "react";
import Card from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/mousewheel";

function NewCarousel({
  cardsData,
  className,
}: {
  cardsData: any;
  className: string;
}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

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
      style={
        {
          "--swiper-pagination-color": "#CD163F",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.5rem",
          "--swiper-pagination-bullet-border-radius": "20%",
          "--swiper-navigation-color": "#000000",
        } as React.CSSProperties
      }
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {cardsData.map((card: { name_: any; image: any, id: any }) => (
        <SwiperSlide key={card.id}>
          <Card
            cardClass="bg-white-100 border-2 border-black"
            buttonClass="ra-gradient"
            title={card.name_}
            img={card.image}
            onCardClick={() => {
              window.location.href = "/menu";
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewCarousel;
