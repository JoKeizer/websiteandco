import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-4';
import Link from "next/link";

const Hero4Slider = () => {
  return (
    <>
        {/* website-co Hero Parallax */}
        <section className="website-co-section">
            
            <Swiper
                {...sliderProps.hero4Slider}
                className="swiper-container website-co-hero-parallax js-hero-parallax"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide key={`h4s-slide-${key}`} className="swiper-slide">
                <div className="website-co-hero-parallax-section">
                    <div className="image" data-dimg={item.image.desktop} data-mimg={item.image.mobile} />
                    <div className="container">
                        <div className="website-co-subtitle-1 website-co-text-white">
                            <span data-splitting>{item.subtitle}</span>
                        </div>
                        <div className="title website-co-text-white">
                            <span data-splitting dangerouslySetInnerHTML={{__html: item.title}} />
                            <span className="sep" style={{"backgroundImage": "url(/images/title_after.svg)"}} />
                        </div>
                        <div className="website-co-bts">
                            <Link className="website-co-btn btn--border website-co-hover-btn btn--color btn--white" href={item.button.link}>
                                <i className="arrow">
                                    <span></span>
                                </i>
                                <span>{item.button.label}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                ))}

                {/*navs*/}
                <div className="website-co-navs js-hero-parallax-navs">
                    <div className="website-co-prev js-hero-parallax-prev nav--white website-co-hover-2">
                        <i />
                    </div>
                    <div className="website-co-next js-hero-parallax-next nav--white website-co-hover-2">
                        <i />
                    </div>
                </div>
                
                {/*paginations*/}
                <div className="website-co-paginations-container website-co-paginations-container-vertical pag--white">
                    <div className="website-co-paginations js-hero-parallax-pagination" />
                    <div className="swiper-nav-active" />
                </div>
            </Swiper>
        </section>
    </>
  );
};
export default Hero4Slider;