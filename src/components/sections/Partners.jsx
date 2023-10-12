import Data from "@data/sections/partners.json";

const PartnersSection = ( { paddingTop } ) => {
  return (
    <>
        {/* website-co Brands */}
        <section className={paddingTop ? "website-co-section gap-top-140" : "website-co-section"}>
            <div className="container">

                {/* Heading */}
                <div className="website-co-heading gap-bottom-40">
                    <div className="website-co-subtitle-1">
                        <span dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                    </div>
                    <h2 className="website-co-title-2">
                        <span dangerouslySetInnerHTML={{__html: Data.title}} />
                    </h2>
                </div>

                {/* Brands items */}
                <div className="row gap-row">
                    {Data.items.map((item, key) => (
                    <div key={`partners-item-${key}`} className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="website-co-brands website-co-hover-3 website-co-hover-label" data-website-co-overlay data-website-co-scroll>
                            <a target="_blank" href={item.link}>
                                <span className="image">
                                    <img decoding="async" src={item.image} width="285" height="200" alt={item.alt} />
                                </span>
                                <span className="label website-co-white-black">Bekijk website</span>
                            </a>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </section>
    </>
  );
};

export default PartnersSection;