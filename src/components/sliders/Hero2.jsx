import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-2';
import Link from "next/link";

const Hero2Slider = () => {
  return (
    <>
        {/* website-co Hero */}
        <section className="website-co-section website-co-hero hero--two">

            {/* Hero swiper */}
            <Swiper
                {...sliderProps.hero2Slider}
                className="swiper-container js-hero-slider"
            >
                <div className="swiper-wrapper">
                    {Data.items.map((item, key) => (
                    <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                        <div className="website-co-hero-slide-item">
                            {item.video == undefined &&
                            <div className="image" data-dimg={item.image.desktop} data-mimg={item.image.mobile}>
                                <div className="ovrl" style={{"opacity": "0.95"}} />
                            </div>
                            }
                            {item.video != undefined &&
                            <div className="image video">
                                <video autoPlay muted loop playsInline>
                                    <source src={item.video} type="video/mp4" />
                                </video>
                                <div className="ovrl" style={{"opacity": "0.95"}} />
                            </div>
                            }
                            <div className="container">
                                <div className="titles">
                                    <h1 className="title website-co-text-white">
                                        <span data-splitting dangerouslySetInnerHTML={{__html: item.title}} />
                                    </h1>
                                    <div className="text">
                                        <div className="subtitle website-co-text-white subtitle--left">
                                            <div data-splitting dangerouslySetInnerHTML={{__html: item.text}} />
                                        </div>
                                        <div className="website-co-bts">
                                            <Link className="website-co-btn btn--border btn--white btn--color website-co-hover-btn" href={item.button.link}>
                                                <i className="arrow">
                                                    <span />
                                                </i>
                                                <span>{item.button.label}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </div>

                {/* navs */}
                <div className="website-co-navs js-hero-slider-navs">
                    <div className="website-co-prev js-hero-slider-prev nav--white website-co-hover-2">
                        <i />
                    </div>
                    <div className="website-co-paginations-container pag--white">
                        <div className="website-co-paginations js-hero-pagination" />
                        <div className="swiper-nav-active" />
                    </div>
                    <div className="website-co-next js-hero-slider-next nav--white website-co-hover-2">
                        <i />
                    </div>
                </div>
            </Swiper>

        </section>
    </>
  );
};
export default Hero2Slider;