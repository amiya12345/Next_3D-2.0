import React from "react";
import Ethp from "../public/assets/works/Ethp.webp";
import Type from "../public/assets/works/type.webp";
import Shape from "../public/assets/works/Shape.webp";
import Room from "../public/assets/works/Room.webp";
import Webi from "../public/assets/works/webi.webp";
import Cybr from "../public/assets/works/cyber.webp";
import WorksItem from "./Worksitem";

const Projects = () => {
  return (
    <div id="works" className="w-full font-omiofont2">
      <div className=" py-16 ">
        <div className="grid md:grid-cols-2">
          <WorksItem
            title="3D illustrataion"
            backgroundImg={Webi}
            projectUrl="/web"
          />
          <WorksItem
            title="Ether Portal"
            backgroundImg={Ethp}
            projectUrl="/eth"
          />
          <WorksItem
            title="Cyberpunk"
            backgroundImg={Cybr}
            projectUrl="/cyber"
          />
          <WorksItem title="Shapes" 
          backgroundImg={Shape} 
          projectUrl="/typo" 
          />
          <WorksItem
            title="Room"
            backgroundImg={Room}
            projectUrl="/room"
          />
          <WorksItem
            title="Typo"
            backgroundImg={Type}
            projectUrl="https://www.behance.net/gallery/142907041/36-Days-of-Typo"

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
