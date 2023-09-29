"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSlide() {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='w-11/12 mx-auto'>
            <Swiper
                ref={swiperRef}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
            >

                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh]'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white font-bruno-ace' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>

                            </div>
                        </div>
                        <img src="https://wallpapercave.com/wp/lxQx91V.jpg" alt="" className="w-full h-full" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh]'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white font-bruno-ace' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>
                            </div>
                        </div>
                        <img src="http://getwallpapers.com/wallpaper/full/c/0/c/980708-tractor-wallpaper-3000x2000-mac.jpg" alt="" className="w-full h-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh]'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white font-bruno-ace' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>

                            </div>
                        </div>
                        <img src="https://wallpapercave.com/wp/wp4409139.jpg" alt="" className="w-full h-full" />



                    </div>
                </SwiperSlide>


                <button className="prev-button" onClick={handlePrev}>
                    <MdArrowBackIos />
                </button>
                <button className="next-button" onClick={handleNext}>
                    <MdArrowForwardIos />
                </button>


            </Swiper>
        </div>

    )
}

export default HeroSlide
