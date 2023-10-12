import Data from "@data/sections/showcase.json";
import Link from "next/link";
import { useEffect } from "react";

import { showcaseHover } from "@common/utilits";

const ShowcaseSection = ( { projects } ) => {
	useEffect(() => {
		showcaseHover();
	}, []);

    return (
        <>
            {/* website-co Showcase */}
			<section className="website-co-section gap-bottom-140" style={{"borderBottom": "1px solid #555"}}>
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

					{/* Showcase */}
					<div className="website-co-showcase gap-bottom-40">
						<div className="img-circle website-co-circle-move" />

						{/* Showcase items */}
						<div className="website-co-showcase-items">
                            {projects.slice(0, Data.numOfItems).map((item, key) => (
							<div key={`showcase-item-${key}`} className="website-co-showcase-item">
								<div className="category">
									<a href={`/projects/${item.id}`}>
										<span data-splitting data-website-co-scroll>
											<span>{item.category}</span>
										</span>
									</a>
								</div>
								<h3 className="title">
									<a href={`/projects/${item.id}`}>
										<span className="website-co-lnk" data-splitting data-website-co-scroll>{item.title}</span>
									</a>
								</h3>
								<div className="image" data-website-co-overlay data-website-co-scroll>
									<span className="img" style={{"backgroundImage": "url(" + item.image + ")"}} />
								</div>
							</div>
                            ))}
						</div>
                        
					</div>

					{/* Button */}
					<Link className="website-co-btn website-co-hover-btn" href={Data.button.link}>
						<i className="arrow">
							<span />
						</i>
						<span>{Data.button.label}</span>
					</Link>

				</div>
			</section>
        </>
    );
};

export default ShowcaseSection;