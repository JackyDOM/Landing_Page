import React from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerMode: true,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  cssEase: 'linear',
  pauseOnHover: false,
  waitForAnimate: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1, 
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1, 
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function Carousel({ children }: { children: any }) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Box position={'relative'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <style>
        {`
          .slick-center {
            transform: scale(1);
            transition: none;
          }

          .slick-slide.slick-center {
            transform: scale(1.29);
            transition: transform 0.2s ease-out;
          }

          .slick-slide:not(.slick-center) {
            transform: scale(1);
            transition: transform 0.2s ease-out;
          }

          .slick-slide {
            margin: 34px;
            cursor: grab;
            transition: transform 0.3s ease-in-out;
          }
          
          .slick-slide:active {
            cursor: grabbing;
          }

          .slick-track {
            display: flex;
            align-items: center;
            text-align: center;
          }

          .slick-dots {
            bottom: 0px;
          }

          .slick-dots li button:before {
            font-size: 10px;
            color: #ccc;
            opacity: 0.5;
            transition: all 0.3s ease;
          }

          .slick-dots li.slick-active button:before {
            color: #3D5AF1;
            opacity: 1;
          }
        `}
      </style>

      <Slider
        {...settings}
        ref={(slider: any) => setSlider(slider)}
        className='pt-10 pb-10 relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'
      >
        {children}
      </Slider>
    </Box>
  );
}
