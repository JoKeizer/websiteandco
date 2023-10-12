import Data from "@data/sliders/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestPostsSlider = ( { posts } ) => {
    return (
        <>
            {/* website-co Blog Carousel */}
			<section className="website-co-section website-co-section-bg gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Heading */}
					<div className="website-co-heading gap-bottom-40">
						<div className="website-co-subtitle-1">
							<span>{Data.subtitle}</span>
						</div>
						<h2 className="website-co-title-2">
                            <span dangerouslySetInnerHTML={{__html: Data.title}} />
						</h2>
					</div>

					{/* Blog swiper */}
					<div className="website-co-blog-carousel">
                        <Swiper
                            {...sliderProps.blogSlider}
                            className="swiper-container js-blog-carousel"
                        >       
                            {posts.slice(0, Data.numOfItems).map((item, key) => (
                            <SwiperSlide key={`bs-slide-${key}`} className="swiper-slide" data-swiper-autoplay>
                                <div className="website-co-blog-slide-item">
                                    <div className="image" data-website-co-overlay data-website-co-scroll>
                                        <Link href={`/blog/${item.id}`}>
                                            <img src={item.image} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="desc">
                                        <div className="date">
                                            <Link href={`/blog/${item.id}`} data-splitting><Date dateString={item.date} /></Link>
                                        </div>
                                        <h5 className="title">
                                            <Link href={`/blog/${item.id}`} data-splitting>{item.title}</Link>
                                        </h5>
                                        <div className="text">
                                            <div data-splitting>
                                                <p>{item.short}<br />
                                                    <Link href={`/blog/${item.id}`} className="website-co-btn website-co-hover-btn">
                                                        <span>Read more</span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}
                        

                            {/* navs */}
                            <div className="website-co-navs">
                                <div className="website-co-navs-box js-blog-carousel-navs">
                                    <div className="website-co-prev js-blog-carousel-prev website-co-hover-2">
                                        <i />
                                    </div>
                                    <div className="website-co-paginations-container">
                                        <div className="website-co-paginations js-blog-pagination" />
                                        <div className="swiper-nav-active" />
                                    </div>
                                    <div className="website-co-next js-blog-carousel-next website-co-hover-2">
                                        <i />
                                    </div>
                                </div>
                            </div>
                        </Swiper>

					</div>

				</div>
			</section>
        </>
    );
};

export default LatestPostsSlider;