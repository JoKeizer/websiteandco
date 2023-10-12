import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Gallery = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Mijn werk"} pageDesc={"Mijn missie is om jouw bedrijf te laten groeien."} />

      <ProjectsGrid projects={props.projects} layout={"grid"} galleryMode />
      
    </Layouts>
  );
};
export default Gallery;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}