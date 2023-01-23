import React from 'react'
import css from './Testimoial.module.css'
import Hero from '../../assets/testimonialHero.png'
import {Swiper,SwiperSlide} from 'swiper/react'

const Testimonial = () => {
  return (
    <div className={css.testimonial}>
        <div className={css.wrapper}>
            <div className={css.container}>
            <span>Top Rated</span>
            <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoined</span>
        </div>

        <img src={Hero} alt=''></img>

        <div className={css.container}>
            <span>100k</span>
            <span>Happy Customers with us</span>
            </div>
        </div>
        <div className={css.carousal}>
            <Swiper 
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousal}
            >
                {
                    TestimonialData.map((testimonial,i)=>(
                            <SwiperSlide>
                                <div className={testimonial}>
                                    <img>{testimonial.img}</img>
                                     <span className={testimonial.comment}></span>
                                     <hr/>
                                     <span className={testimonial.name}></span>
                                </div>

                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonial