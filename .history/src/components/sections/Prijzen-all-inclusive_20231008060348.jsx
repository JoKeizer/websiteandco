import Data from "@data/sections/prijzen-all-inclusive.json";
import Link from "next/link";

const PricingSection = ( { bg, hiddenHeading } ) => {
    return (
      <>
        {/* website-co Pricing */}
        <section className={`website-co-section website-co-section-${bg} gap-top-140 gap-bottom-140`}>
          <div className="container">

            {hiddenHeading == undefined &&
            <>
              {/* Heading */}
              <div className="website-co-heading gap-bottom-40">
                <div className="website-co-subtitle-1">
                  <span>{Data.subtitle}</span>
                </div>
                <h2 className="website-co-title-2">
                  <span dangerouslySetInnerHTML={{__html: Data.title}} />
                </h2>
              </div>
            </>
            }

            {/* Pricing items */}
            <div className="row gap-row">

              {Data.items.map((item, key) => (
              <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="website-co-pricing">
                  <div className={item.active == 1 ? "website-co-pricing-item active--default": "website-co-pricing-item"}>
                    { item.active == 1 &&
                    <div className="pricing--badge website-co-text-white">
                      <span>Recommended</span>
                    </div>
                    }
                    <div className="title">
                      <div className="name">
                        <span>{item.title}</span>
                      </div>
                      <div className="subname">
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="pricing--overlay website-co-hover-3 website-co-hover-black" />
                      <div className="image website-co-text-white">
                        <i aria-hidden="true" className={item.icon}></i>
                      </div>
                      <div className="list">
                        <div>
                          <ul>
                            {item.list.map((element, element_key) => (
                            <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                              <i className="far fa-check-square" />{element.label}
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link className="website-co-btn website-co-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                        <span>{item.button.label}</span>
                      </Link>
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

export default PricingSection;