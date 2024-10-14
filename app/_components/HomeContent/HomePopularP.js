'use client'

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Navigation, Pagination} from "swiper/modules";

import ProductCart from "@/app/_components/ShopItem";

export default function HomePopularP() {
    return <section className="products-popular mb-9 md:mb-20">
        <div className="container">
            <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
                <div>
                    <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl"> محبوب ترین محصولات </h2><p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5">پیشنهاد قهوه خورها</p>
                </div>
            </div>
            <div className='swiper'>
                <Swiper
                    // effect='cards'
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation={true}
                    modules={[Navigation, EffectCards]}
                    breakpoints={{
                        640: {slidesPerView: 2, spaceBetween: 20, cardsEffect: false, effect: 'slide'},
                        1024: {slidesPerView: 3, spaceBetween: 30, cardsEffect: false, effect: 'slide'},
                    }}
                    className="swiper absolute"
                >
                    <SwiperSlide><ProductCart img={'p1'}/></SwiperSlide>
                    <SwiperSlide><ProductCart img={'p2'}/></SwiperSlide>
                    <SwiperSlide><ProductCart img={'p3'}/></SwiperSlide>
                    <SwiperSlide><ProductCart img={'p4'}/></SwiperSlide>


                </Swiper>
            </div>
        </div>
    </section>
}