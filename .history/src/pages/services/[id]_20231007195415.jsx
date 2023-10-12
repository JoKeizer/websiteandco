import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Accordion from 'react-bootstrap/Accordion';
import Link from "next/link";
import appData from "@data/app.json";
import { Formik } from 'formik';

import { getAllServicesIds, getServiceData, getSortedServicesData } from "@library/services";

const ServiceDetail = ( { postData, services } ) => {
  let prev_id, next_id, prev_key, next_key = 0;

  services.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  services.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  })

  return (
    <Layouts>
		<PageBanner pageTitle={postData.title} pageDesc={"Mijn missie is om jouw bedrijf te laten groeien."} />

		{/* website-co Service Detail */}
		<section className="website-co-section gap-top-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

					{/* Image */}
					<div className="gap-bottom-50">
						<img src={postData.image} alt={postData.title} />
					</div>

					{postData.contentHtml != "" &&
					<div className="website-co-text">
						<div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
					</div>
					}

					{typeof postData.accordion != "undefined" &&
					<>
					{postData.accordion.enabled == 1 &&
					<>
						<h3>{postData.accordion.title}</h3>

						{/* Faq items */}
						<Accordion>
						<div className="website-co-faq-items">
						{postData.accordion.items.map((item, key) => (
						<Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
						<div className="website-co-faq-item website-co-collapse-item">
							<Accordion.Header>
							<h5 className="title website-co-collapse-btn">
							<span>{item.heading}</span>
							<i className="arrow" />
							</h5>
							</Accordion.Header>
							<Accordion.Body>
							<div className="website-co-text">
								<div dangerouslySetInnerHTML={{__html : item.content}} />
							</div>
							</Accordion.Body>
						</div>
						</Accordion.Item>
						))}
						</div>
						</Accordion>
					</>
					}
					</>
					}

					{typeof postData.additional != "undefined" &&
					<>
					{postData.additional.enabled == 1 &&
						<div className="website-co-text gap-top-50">
						<div dangerouslySetInnerHTML={{__html : postData.additional.content}} />
						</div>
					}
					</>
					}
          <div class="cta-diensten-container"><a class="website-co-btn website-co-hover-btn" href="/contact"><i class="arrow"><span></span></i><span>Ja, ik wil dat!</span></a></div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">

						{/* Service menu */}
						<div className="website-co-service-item website-co-service-no-icon gap-bottom-40">
							<div className="website-co-service-item-inner website-co-hover-3 website-co-hover-black">
								<h5 className="title">
									<span data-splitting data-website-co-scroll>Mijn diensten</span>
								</h5>
								<div className="list">
									<ul>
										{services.map((item, key) => (
										<li key={`services-item-${key}`}>
											<a className="website-co-lnk" href={`/services/${item.id}`}>
												<span data-splitting data-website-co-scroll>{item.title}</span>
											</a>
										</li>
										))}
									</ul>
								</div>
							</div>
						</div>


						{/* website-co Form */}
						<div className="website-co-form-box website-co-text-white">
							<h5>Gratis brainstormsessie</h5>
							<p>Samen bouwen aan jouw online succes...</p>
							<Formik
                            initialValues = {{ email: '', name: '', brainstorm: '', tel: '', message: '' }}
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
                                        status.innerHTML = "Thanks for your submission!";
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
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden">
										<p>
											<input 
											  size="40" 
											  default="Gratis Brainstormsessie" 
											  type="text" 
											  name="brainstorm"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.brainstorm} 
											/>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<p>
											<input 
											  size="40" 
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
											  size="40" 
											  placeholder="Email" 
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
											  size="40" 
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
											  cols="40" 
											  rows="10" 
											  placeholder="Vertel me iets over jouw bedrijf.." 
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
											<button type="submit" className="website-co-btn website-co-hover-btn btn--active">
												<span>Ja, ik wil dat!</span>
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
				</div>
			</div>
		</section>

		{/* website-co Navs */}
		<section className="website-co-section">
			<div className="container">

				{/* Navigation */}
				<div className="website-co-page-navigation">
					<div className="website-co-page-navigation-content">
						{prev_id != 0 && prev_id != undefined &&
						<Link href={`/services/${prev_id}`} className="page-navigation__prev">
							<span className="website-co-prev website-co-hover-2">
								<i />
							</span>
						</Link>
						}
						<Link href="/services" className="page-navigation__posts">
							<i className="fas fa-th" />
						</Link>
						{next_id != 0 && next_id != undefined &&
						<Link href={`/services/${next_id}`} className="page-navigation__next">
							<span className="website-co-next website-co-hover-2">
								<i />
							</span>
						</Link>
						}
					</div>
				</div>
				
			</div>
		</section>
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = getAllServicesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getServiceData(params.id)
    const allServices = getSortedServicesData();

    return {
      props: {
        postData,
        services: allServices
      }
    }
}