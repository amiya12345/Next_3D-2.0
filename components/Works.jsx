import { memo } from "react";
import Ethp from "../public/assets/works/eth/ethp.webp";
import Type from "../public/assets/works/type.webp";
import Shape from "../public/assets/works/shape/shape.webp";
import Room from "../public/assets/works/room/room.webp";
import Webi from "../public/assets/works/web/webi.webp";
import Cybr from "../public/assets/works/cyber/cyber.webp";
import WorksItem from "./Worksitem";

// Static project data to prevent recreation on each render
const projectData = [
  {
    title: "3D illustrataion",
    backgroundImg: Webi,
    projectUrl: "/web"
  },
  {
    title: "Ether Portal",
    backgroundImg: Ethp,
    projectUrl: "/eth"
  },
  {
    title: "Cyberpunk",
    backgroundImg: Cybr,
    projectUrl: "/cyber"
  },
  {
    title: "Shapes",
    backgroundImg: Shape,
    projectUrl: "/typo"
  },
  {
    title: "Room",
    backgroundImg: Room,
    projectUrl: "/room"
  },
  {
    title: "Typo",
    backgroundImg: Type,
    projectUrl: "https://www.behance.net/gallery/142907041/36-Days-of-Typo"
  }
];

// Memoized Projects component to prevent unnecessary re-renders
const Projects = memo(() => {
  return (
    <section id="works" className="w-full font-omiofont2">
      <div className="grid md:grid-cols-2">
        {projectData.map((project) => (
          <WorksItem
            key={project.title}
            title={project.title}
            backgroundImg={project.backgroundImg}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
});

// Add display name for better debugging
Projects.displayName = 'Projects';

export default Projects;