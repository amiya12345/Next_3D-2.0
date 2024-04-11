import React from "react";
import Ethp from "../public/assets/works/eth/ethp.webp";
import Type from "../public/assets/works/type.webp";
import Shape from "../public/assets/works/shape/shape.webp";
import Room from "../public/assets/works/room/room.webp";
import Webi from "../public/assets/works/web/webi.webp";
import Cybr from "../public/assets/works/cyber/cyber.webp";
import WorksItem from "./Worksitem";
import Inner from "./Inner";

const Projects = () => {
  return (
   
    <section id="works" className="w-full font-omiofont2">
      
      <div className=" py-16 ">
         
        <div className="grid md:grid-cols-2">
       
          <Inner>
          <WorksItem
            title="3D illustrataion"
            backgroundImg={Webi}
            projectUrl="/web"
          />
</Inner>
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

          <WorksItem title="Shapes" backgroundImg={Shape} projectUrl="/typo" />

          <WorksItem title="Room" backgroundImg={Room} projectUrl="/room" />

          <WorksItem
            title="Typo"
            backgroundImg={Type}
            projectUrl="https://www.behance.net/gallery/142907041/36-Days-of-Typo"
          />
           
        </div>
        
      </div>
      
    </section>
    

  );
};

export default Projects;
