import { useEffect } from "react";
import Data from "@data/sections/services-3.json";
import { servShowcaseHover } from "@common/utilits";

const Services3Section = ({ services }) => {
  useEffect(() => {
    servShowcaseHover();
  }, []);

  return (
    <>
        {/* website-co Services */}
        <section className="website-co-section website-co-section-bg gap-top-140 gap-bottom-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                        {/* Heading */}
                        <div className="website-co-heading gap-bottom-60">
                            <div className="website-co-subtitle-1">
                                <span>{Data.subtitle}</span>
                            </div>
                            <h2 className="website-co-title-2">
                                <span dangerouslySetInnerHTML={{__html: Data.title}} />
                            </h2>
                            <div className="website-co-text">
                                <p dangerouslySetInnerHTML={{__html: Data.text}} />
                            </div>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

                        {/* Image */}
                        <img src={Data.image.url} alt={Data.image.alt} />

                    </div>
                </div>

                {/* Services Showcase */}
                <div className="website-co-services-showcase">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-7"></div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="website-co-subtitle-1">
                                <span>{Data.title2}</span>
                            </div>

                            {/*items*/}
                            <div className="items">
                                <span className="img-circle website-co-circle-move" />

                                <ul>
                                    {services.slice(0, Data.numOfItems).map((item, key) => (
                                    <li key={`services3-item-${key}`}>
                                        <div className="image">
                                            <span className="img" style={{"backgroundImage": "url("+item.image+")"}} />
                                        </div>
                                        <h5 className="title">
                                            <a href={`/services/${item.id}`}>
                                                <span className="num">
                                                    <span data-splitting data-website-co-scroll> 0{key+1}. </span>
                                                </span>
                                                <span className="name">
                                                    <span className="website-co-lnk">
                                                        <span data-splitting data-website-co-scroll>{item.title}</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </h5>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <a href={Data.button.link} className="website-co-btn website-co-hover-btn btn--border">
                                <i className="arrow">
                                    <span />
                                </i>
                                <span>{Data.button.label}</span>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
};

export default Services3Section;