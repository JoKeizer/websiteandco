import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const Contact = () => {
  const faqData = {
    "title": "FAQ",
    "subtitle": "Staat je vraag er niet bij stuur dan gerust een mail met het bovenstaande contactformulier",
    "items": [
        {
            "title": "Hoe kan ik contact met je opnemen?",
            "text": "Je kunt me bereiken via jo@websiteandco.nl of telefonisch op 0641522043. Als alternatief kun je het contactformulier op deze pagina invullen."
        },
        {
            "title": "Welke diensten bied je aan?",
            "text": "Ik maak Webshops, Websites, All inclusive pakket, Visuele identiteit en Ads"
        },
        {
            "title": "Wat onderscheidt jouw diensten van anderen?",
            "text": "Bij Website & Co breng ik de discipline en toewijding van een topsporter samen met mijn diepgaande technische kennis als developer en mijn creatieve inzicht als designer. Met jarenlange ervaring in de online industrie begrijp ik de competitieve aard van het digitale landschap. Mijn aanpak is gestructureerd en doelgericht, met een focus op het behalen van topprestaties voor jouw online aanwezigheid. Ik streef naar perfectie en ga tot het uiterste om unieke, op maat gemaakte oplossingen te bieden die zowel visueel aantrekkelijk als technisch geavanceerd zijn. Kortom, ik combineer de mentaliteit van een winnaar met de vaardigheden en expertise om jouw online doelstellingen te overtreffen."
        },
        {
            "title": "Kan ik een offerte aanvragen voor een specifiek project?",
            "text": "Ja, ik bied maatwerkoplossingen voor projecten. Neem contact op om meer te weten te komen en een offerte aan te vragen. Mijn email: jo@websiteandco.nl of bel 06-41522043"
        }
    ]
  }

  return (
    <Layouts>
        <PageBanner pageTitle={"Contact"} pageDesc={"Mijn missie is om jouw bedrijf te laten groeien."} />

        {/* website-co Contact Info */}
        <section className="website-co-section gap-top-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="website-co-text gap-bottom-40">
                            <h4>Neem contact met me op</h4>
                            Heb je vragen, opmerkingen of wil je meer informatie over mijn diensten? Aarzel dan niet om contact met me op te nemen. Ik sta klaar om je te helpen en te beantwoorden wat je nodig hebt. Je kunt me bereiken via onderstaande contactgegevens of vul het contactformulier in. Ik hoor graag van je!
                        </div>

                        {/* Form */}
                        <div className="website-co-form">
                        <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        status.innerHTML = "Bedankt voor je bericht, ik neem zo snel mogelijk contact met je op. Leuk!";
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                status.innerHTML = "Oops! There was a problem submitting your form"
                                            }
                                        })
                                    }
                                }).catch(error => {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Naam" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email " 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Tel" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Bericht /  vraag" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="website-co-btn website-co-hover-btn">
                                                <span>Verstuur</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="website-co-contact-info website-co-text-white">
                            <ul>
                                <li>
                                    <h5>Contact Info</h5>
                                    <a href="tel:+31641522043" className="website-co-lnk lnk--white" target="_blank">+31 641 522 043</a><br/>
                                    <a href="mailto:jo@websiteandco.nl" className="website-co-lnk lnk--white" target="_blank">jo@websiteandco.nl</a>
                                    
                                    <div className="website-co-social-1 website-co-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="website-co-social-link website-co-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5>Hoofddorp</h5>
                                    <div>Clingenburg 13, <br/>2135 CA</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* website-co Faq */}
        <section className="website-co-section gap-top-140">
            <div className="container">

                {/* Heading */}
                <div className="website-co-heading align-center gap-bottom-40">
                    <div className="website-co-subtitle-1">
                        <span>{faqData.title}</span>
                    </div>
                    <h2 className="website-co-title-2">
                        <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
                    </h2>
                </div>

                {/* Faq items */}
                <div className="website-co-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {faqData.items.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="website-co-faq-item website-co-collapse-item">
                        <Accordion.Header>
                        <h5 className="title website-co-collapse-btn">
                            <span>{item.title}</span>
                            <i className="arrow" />
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="website-co-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
