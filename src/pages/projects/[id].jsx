import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import ImageView from "@components/ImageView";

import { useRouter } from 'next/router';

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;
  let prev_id, next_id, prev_key, next_key = 0;

  props.projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  props.projects.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  });

  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const shareUrl = `${origin}${asPath}`;
  console.log(shareUrl);

  return (
    <Layouts>
      <PageBanner pageTitle={postData.title} pageDesc={postData.type} />
      
      {/* website-co Project Detail */}
			<section className="website-co-section gap-top-140">
				<div className="container">

					{/* Image */}
					<div className="gap-bottom-80">
            <div className="project-image">
						  <img src={postData.image} alt={postData.title} />
            </div>
					</div>

					<div className="row gap-bottom-80">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

              {postData.contentHtml != "" &&
              <>
                {/* Description */}
                <div className="website-co-text">
                  <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                </div>
              </>
              }

						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 offset-lg-1">

							{/* Project Info */}
							<div className="website-co-project-info website-co-text-white text-uppercase">
								<ul>
                  {typeof postData.details != "undefined" &&
                  <>
                    {postData.details.items.map((item, key) => (
                    <li key={`details-item-${key}`}>
                      <div><strong>{item.label}</strong></div>
                      <div>{item.value}</div>
                    </li>
                    ))}
                  </>
                  }
									
									<li>
										<div><strong>Share:</strong></div>
										<div className="website-co-share">
											<div className="social-share website-co-post-socials website-co-social-2">
												<ul>
													<li>
                            <FacebookShareButton 
                              className="website-co-social-link website-co-hover-2"
                              url={shareUrl}
                              quote={postData.title}
                              hashtag={'#'+postData.category}
                            >
															<i className="icon fab fa-facebook" />
														</FacebookShareButton>
													</li>
													<li>
														<TwitterShareButton 
                              className="website-co-social-link website-co-hover-2"
                              url={shareUrl}
                              title={postData.title}
                              hashtag={'#'+postData.category}
                            >
															<i className="icon fab fa-twitter"></i>
														</TwitterShareButton>
													</li>
													<li>
														<LinkedinShareButton 
                              className="website-co-social-link website-co-hover-2"
                              url={shareUrl}
                              title={postData.title}
                              summary={postData.type}
                              source={shareUrl}
                            >
															<i className="icon fab fa-linkedin" />
														</LinkedinShareButton>
													</li>
													<li>
														<RedditShareButton 
                              className="website-co-social-link website-co-hover-2"
                              url={shareUrl}
                              title={postData.title}
                            >
															<i className="icon fab fa-reddit" />
														</RedditShareButton>
													</li>
													<li>
														<PinterestShareButton 
                              className="website-co-social-link website-co-hover-2"
                              url={shareUrl}
                              media={postData.image}
                              description={postData.title}
                            >
															<i className="icon fab fa-pinterest" />
														</PinterestShareButton>
													</li>
												</ul>
											</div>
										</div>
									</li>

								</ul>
							</div>
							
						</div>
					</div>
          
          {typeof postData.gallery != "undefined" &&
          <>
					{/* Gallery items */}
					<div className="row gap-row gallery-items website-co-custom-gallery">

            {postData.gallery.items.map((item, key) => (
						<div key={`gallery-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div className="gallery-item">
								<a href={item.image} className="mfp-image">
									<img src={item.image} alt={item.alt} />
								</a>
							</div>
						</div>
            ))}

					</div>
          </>
          }

          {typeof postData.additional != "undefined" &&
          <>
					{/* Description */}
					<div className="website-co-text gap-top-80">
						<h6 className="text-uppercase">{postData.additional.heading}</h6>
						<div dangerouslySetInnerHTML={{__html : postData.additional.content}} />
					</div>
          </>
          }

				</div>
			</section>

			{/* website-co Navs */}
			<section className="website-co-section">
				<div className="container">

					{/* Navigation */}
					<div className="website-co-page-navigation">
						<div className="website-co-page-navigation-content">
              {prev_id != 0 && prev_id != undefined &&
							<Link href={`/projects/${prev_id}`} className="page-navigation__prev">
								<span className="website-co-prev website-co-hover-2">
									<i />
								</span>
							</Link>
              }
							<Link href="/projects" className="page-navigation__posts">
								<i className="fas fa-th" />
							</Link>
              {next_id != 0 && next_id != undefined &&
							<Link href={`/projects/${next_id}`} className="page-navigation__next">
								<span className="website-co-next website-co-hover-2">
									<i />
								</span>
							</Link>
              }
						</div>
					</div>
					
				</div>
			</section>
      
      <ImageView />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const allProjects = await getSortedProjectsData()

    return {
      props: {
        data: postData,
        projects: allProjects
      }
    }
}