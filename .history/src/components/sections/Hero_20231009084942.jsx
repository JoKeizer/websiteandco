import { useState, useEffect } from "react";

import Data from "@data/sections/hero.json";

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'

const HeroSection = () => {
	useEffect(() => {
		Splitting({ by: 'lines' });
		ScrollOut({targets: '[data-website-co-scroll]', once: true});
	
		const allWrap = document.querySelectorAll(".word");
		allWrap.forEach((item) => {
		  if ( !item.parentNode.classList.contains('span') ) {
			let wrapper = document.createElement('span');
			wrapper.classList.add('span');
			item.parentNode.insertBefore(wrapper, item);
			wrapper.appendChild(item);
		  }
		});
	
		const allOverlays = document.querySelectorAll("[data-website-co-overlay]");
		allOverlays.forEach((item) => {
		  let overlay = document.createElement("div");
		  overlay.classList.add('website-co-overlay');
		  item.appendChild(overlay);
		});
	}, []);

	const [mute, setMute] = useState(false);

	const clickedMuteHeroVideo = (e) => {
		e.preventDefault();
    	setMute(!mute);
	};

    return (
        <>
            {/* website-co Hero */}
			<section className="website-co-section website-co-hero">
				<div className="image">
					<video autoPlay muted={!mute} loop playsInline id="heroVideo">
						<source src={Data.video} type="video/mp4" />
					</video>
					<div className="ovrl" style={{"opacity": "0.25"}} />
				</div>
				<div className="container">
					<h1 className="title website-co-text-white">
						<span data-splitting data-website-co-scroll>
                            <span dangerouslySetInnerHTML={{__html: Data.title.text}} />
                            <span className="website-co-sep word">
								<i className="sep-img" style={{"backgroundImage": "url("+Data.title.icon+")"}} />
							</span>
						</span>
					</h1>
					<div className="text">
						<div className="subtitle website-co-text-white">
							<div data-splitting data-website-co-scroll>
                                <div dangerouslySetInnerHTML={{__html: Data.subtitle}} />
                            </div>
						</div>

				
					</div>
							 {/* Button */}
							 <Link className="website-co-head-btn website-co-hover-btn" href={appData.header.button.link}>
                  <span>
                    <span className="website-co-lnk lnk--active">{appData.header.button.label}</span>
                  </span>
                  <i className="arrow">
                    <span />
                  </i>
                </Link>
		
				</div>
			</section>
        </>
    );
};

export default HeroSection;