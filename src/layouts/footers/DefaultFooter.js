import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="website-co-footer footer--dark">
            <div className="footer--default">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                            {/* Description */}
                            <div className="website-co-text website-co-text-white">
                                <h5>Website & Co</h5>
                                <p style={{"opacity": "0.6"}}>Niet alleen in de <strong>topsport</strong>, maar ook in het bedrijfsleven is een winnaarsmentaliteit essentieel. Bij Website & Co delen we die topsportmentaliteit en staan we altijd klaar om jouw business naar de overwinning te leiden. Samen bouwen we aan online succes!</p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1">

                            {/* Description */}
                            <div className="website-co-text website-co-text-white">
                                <h5>Contact</h5>
                                <p style={{"opacity": "0.6"}}>Clingenburg 13, 2135 CA <br />Hoofddorp </p>
                                <p style={{"opacity": "0.6"}}>
                                    <a href="tel:+31641522043" className="website-co-lnk lnk--white" target="_blank">+31 641 522 043</a><br />
                                    <a href="mailto:jo@websiteandco.nl" className="website-co-lnk lnk--white" target="_blank">jo@websiteandco.nl</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">

                            
                            <div className="row">
                                {appData.footer.gallery.map((item, key) => (
                                <div key={`fgallery-item-${key}`} className="col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                    <figure className="gallery-item">
                                        <a href={item.image} title={item.title}>
                                            <img src={item.image} alt={item.alt} />
                                        </a>
                                    </figure>
                                </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

                            {/* Copyright */}
                            <div className="copyright website-co-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

                            {/* Social */}
                            <div className="website-co-social-1 website-co-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="website-co-social-link website-co-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
