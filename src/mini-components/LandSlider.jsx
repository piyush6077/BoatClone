// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import firstimg from '../assets/firstimg.webp'
import secondimg from '../assets/mainsecond.webp'
import thirdimg from '../assets/mainthird.webp'
import fourthimg from '../assets/mainfourth.webp'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  SwiperCore.use([Autoplay])
  return (
    <Swiper className='h-[550px]'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false
    }}     
      pagination={{ clickable: true }}
    >
        

      <SwiperSlide>
        <img src={firstimg} className='w-full h-full' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondimg} className='w-full h-full' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdimg} className='w-full h-full' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={fourthimg} className='w-full h-full' alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
