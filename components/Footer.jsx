import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineDribbble,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-omio pt-1 pb-0 relative max-w-full ">
      <div className="container mx-auto px-className max-w-full">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex justify-center flex-col md:flex-row">
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-700 uppercase mb-1 font-omiofont2">
                Connect with me
              </span>
              <div className="text-[24px] flex justify-between items-center py-4 lg:text-[32px]">
                <span className="my-2 px-4">
                  <a
                    href="https://www.behance.net/amiyarsethi1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft text-md hover:text-sky-500 "
                  >
                    <AiOutlineBehance />
                  </a>
                </span>
                <span className="my-2 px-4">
                  <a
                    href="mailto:amiyaranjan.desigm@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft text-md hover:text-sky-500"
                  >
                    <AiOutlineMail />
                  </a>
                </span>
                <span className="my-2 px-4">
                  <a
                    href="https://twitter.com/amiya_ars"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft text-md hover:text-sky-500"
                  >
                    <AiOutlineTwitter />
                  </a>
                </span>
                <span className="my-2 px-4">
                  <a
                    href="https://github.com/amiya12345"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft  text-md hover:text-sky-500"
                  >
                    <AiOutlineGithub />
                  </a>
                </span>
                <span className="my-2 px-4">
                  <a
                    href="https://dribbble.com/AR_3Design"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft text-md hover:text-sky-500"
                  >
                    <AiOutlineDribbble />
                  </a>
                </span>
                <span className="my-2 px-4">
                  <a
                    href="https://www.linkedin.com/in/amiya-ranjan-sethi-618711165/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-nft text-md hover:text-sky-500"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="border-t-2 border-sky-500 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-nft font-bold mb-0 font-omiofont3">
              © 2022 Designed and Developed by
              <span className="text-sky-500 ml-2"> <Link href="/"> 
            Amiya.
          </Link></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
