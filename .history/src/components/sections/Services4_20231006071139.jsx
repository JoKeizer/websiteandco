import { useEffect } from "react";
import Data from "@data/sections/services-4.json";
import { servShowcaseHover } from "@common/utilits";

const Services4Section = ({ services }) => {
  return (
    <>
        {/* website-co Services */}
		<section className="website-co-section gap-bottom-140">
			<div className="container">

				{/* Heading */}
				<div className="website-co-heading gap-bottom-40">
					<div className="website-co-subtitle-1">
						<span>{Data.subtitle}</span>
					</div>
					<h2 className="website-co-title-2">
						<span>{Data.title}</span>
					</h2>
				</div>

				{/* Services items */}
				<div className="website-co-services-list">

                    {services.slice(0, Data.numOfItems).map((item, key) => (
					<div key={`services4-item-${key}`} className="website-co-service-item-list">
						<div className="website-co-service-item-list-inner">
							<div className="image website-co-hover-1">
								<a href={`/services/${item.id}`}>
									<img src={item.icon} alt={item.title} />
								</a>
							</div>
							<div className="num">
								<span> 0{key+1}. </span>
							</div>
							<h5 className="title">
								<a href={`/services/${item.id}`}>
									<span>{item.title}</span>
								</a>
							</h5>
							<div className="website-co-text">
								<div>
									<p>{item.short}</p>
								</div>

								<div class="cta-diensten-container"><a class="website-co-btn website-co-hover-btn" href="/contact"><i class="arrow"><span></span></i><span>Ja, ik wil dat!</span></a></div>

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

export default Services4Section;