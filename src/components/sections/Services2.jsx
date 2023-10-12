import Data from "@data/sections/services-2.json";
import Link from "next/link";

const Services2Section = ( { introHidden, noPaddingBottom } ) => {
  return (
    <>
        {/* website-co Services */}
        <section className={noPaddingBottom ? "website-co-section gap-top-140" : "website-co-section gap-top-140 gap-bottom-140"}>
            <div className="container">
                {introHidden == undefined &&
                    <>
                        {/* Heading */}
                        <div className="website-co-heading gap-bottom-40 align-center">
                            <div className="website-co-subtitle-1">
                                <span dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                            </div>
                            <h2 className="website-co-title-2">
                                <span dangerouslySetInnerHTML={{__html: Data.title}} />
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="row gap-bottom-60">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3 align-center">
                                <div className="website-co-text">
                                    <p dangerouslySetInnerHTML={{__html: Data.text}} />
                                    <p><img src={Data.signature.image} alt={Data.signature.alt} /></p>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* Services items */}
                <div className="row gap-row">
                    {Data.items.map((item, key) => (
                    <div key={`services2-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
                        <div className="website-co-service-item">
                            <div className="image">
                                <Link href={item.link}>
                                    <img src={item.icon} alt={item.title} />
                                </Link>
                            </div>
                            <div className="website-co-service-item-inner website-co-hover-3 website-co-hover-black">
                                <h5 className="title">
                                    <Link href={item.link}>
                                        <span data-splitting data-website-co-scroll>{item.title}</span>
                                    </Link>
                                </h5>
                                <div className="list">
                                    <ul>
                                        {item.list.map((elem, key2) => (
                                        <li key={`services2-item-${key}-list-element-${key2}`}>
                                            <Link className="website-co-lnk" href={item.link}>
                                                <span data-splitting data-website-co-scroll>{elem}</span>
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </section>
    </>
  );
};

export default Services2Section;