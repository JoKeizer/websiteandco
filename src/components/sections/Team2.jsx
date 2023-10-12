import Data from "@data/sections/team2.json";
import Link from "next/link";

const Team2Section = ( { team } ) => {
    return (
        <>
            {/* website-co Team */}
			<section className="website-co-section gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Team items */}
					<div className="row gap-row align-center">

						{/* Heading */}
						<div className="col-xs-12 col-sm-12 col-md-11 col-lg-5">
							<div className="website-co-heading align-left">
								<div className="website-co-subtitle-1">
									<span>{Data.subtitle}</span>
								</div>
								<h2 className="website-co-title-2">
                                    <span dangerouslySetInnerHTML={{__html: Data.title}} />
								</h2>
							</div>
						</div>

						{/* team items */}
						<div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>

						{team.slice(0, Data.numOfItems).map((item, key) => (

						<div key={`team2-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<div className="website-co-team-two">
								<div className="website-co-team-two-item">
									<div className="image website-co-hover-3 website-co-hover-black-30" data-website-co-overlay data-website-co-scroll>
										<a href={`/team/${item.id}`}>
											<img src={item.image} alt={item.name} />
										</a>
										<div className="website-co-social-2">
											<ul>
                                                {item.social.map((social, social_key) => (
												<li key={`team2-item-${key}-social-${social_key}`}>
													<a className="website-co-social-link website-co-hover-2" href={social.link} title={social.title} target="_blank">
														<i aria-hidden="true" className={social.icon} />
													</a>
												</li>
                                                ))}
											</ul>
										</div>
									</div>
									<div className="desc">
										<h5 className="title">
											<a href={`/team/${item.id}`} className="website-co-lnk">
												<span data-splitting data-website-co-scroll>{item.name}</span>
											</a>
										</h5>
										<div className="website-co-subtitle-1">
											<span data-splitting data-website-co-scroll>{item.role}</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						))}

						{/* Button */}
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center">
							<Link className="website-co-btn-circle website-co-hover-2" href={Data.button.link}>
								<i className="arrow">
									<span />
								</i>
							</Link>
						</div>

					</div>
					
				</div>
			</section>
        </>
    );
};

export default Team2Section;