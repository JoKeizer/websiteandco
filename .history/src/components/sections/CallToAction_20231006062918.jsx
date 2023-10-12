import Data from "@data/sections/call-to-action.json";

const CallToActionSection = () => {
  return (
    <>
        {/* website-co CTA */}
        <section className="website-co-section gap-top-140 gap-bottom-140" style={{"backgroundImage": "url("+Data.bg_image+")", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                        {/* Heading */}
                        <div className="website-co-heading gap-bottom-40 website-co-text-white">
                            <div className="website-co-subtitle-1">
                                <span>{Data.subtitle}</span>
                            </div>
                            <h2 className="website-co-title-2">
                                <span dangerouslySetInnerHTML={{__html: Data.title}} />
                            </h2>
                        </div>

                        {/* Text */}
                        <div className="website-co-cta-text" dangerouslySetInnerHTML={{__html: Data.text}} />
                            
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                        {/* Social */}
                        <div className="website-co-cta-social">
                            <div className="image" style={{"backgroundImage": "url("+ Data.bg_image2 +")"}}>
                                <div className="cta-img-circle img-circle--1" />
                                <div className="cta-img-circle img-circle--2" />
                                <div className="cta-img-circle img-circle--3" />
                            </div>
                            <div className="desc">
                                <ul>
                                    {Data.social.map((item, key) => (
                                    <li key={`cta-social-item-${key}`}>
                                        <a className="website-co-btn btn--white btn--large btn--icon website-co-hover-btn" href={item.link} target="_blank">
                                            <i aria-hidden="true" className={item.icon} />
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CallToActionSection;