import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <Link href={projectUrl}>
      <div className="w-full">
        <div className="max-w-full mx-auto">
          <div className="relative flex items-center justify-center h-[100%] w-full shadow-xl group">
            <Image
              className="transition duration-500 ease-in-out cursor-pointer group-hover:opacity-40"
              src={backgroundImg}
              alt="/"
              layout="responsive"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="lg:text-2xl text-white uppercase  lg:tracking-[0.25rem] text-center sm:text-xl  font-omiofont2 sm:tracking-[0.125rem]">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
