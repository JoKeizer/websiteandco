import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2"
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"Over mij"} pageDesc={"Ontdek hoe mijn passie en expertise een verschil kunnen maken voor jouw online aanwezigheid."} />
      
      	{/* website-co About */}
	  	<section className="website-co-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="website-co-heading gap-bottom-60">
							<div className="website-co-subtitle-1">
								<span> Van Topsport naar Website & Co</span>
							</div>
							<h2 className="website-co-title-2">
								<span>Gedreven door passie <br></br>voor webdesign</span>
							</h2>
							<div className="website-co-text">
								<p>Hi, ik ben Jo, de creatieve kracht achter Website & Co. Mijn verhaal begint met een passie voor <strong>topsport</strong> en een liefde voor webdesign. Laat me je meenemen op mijn reis van atletiek naar het bouwen van opvallende websites en unieke digitale ervaringen. </p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src="/images/website-co-about-logo.png" alt="" />

					</div>
				</div>

		

				{/* Description */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Mijn missie</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Mijn missie is simpel: elke klant een unieke ervaring bieden. Bij Website & Co gaat het erom jouw visie tot leven te brengen met creatieve webdesigns en online oplossingen die zich onderscheiden.
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-60">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Mijn doel</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
						Mijn ultieme doel is om elke klant volledig tevreden en gelukkig te maken. Bij Website & Co draait het niet alleen om het creëren van prachtige websites, maar ook om het leveren van oplossingen die de verwachtingen overtreffen en een glimlach op het gezicht van elke klant toveren
					</div>
				</div>

				{/* Gallery */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a href="/images/posts1.jpg" className="mfp-image">
							<img src="/images/posts1-1024x683.jpg" alt="" />
						</a>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
						<a href="/images/posts2.jpg" className="mfp-image">
							<img src="/images/posts2-1024x683.jpg" alt="" />
						</a>
					</div>
				</div>

			</div>
		</section>

		<Services4Section services={props.services} />

		{/* <AwardsSection /> */}

      	<HistorySlider />

      	{/* <Team2Section team={props.team} /> */}

      	<Testimonial2Slider />

      	<PartnersSection />
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}