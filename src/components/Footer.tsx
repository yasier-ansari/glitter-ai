import React from "react";
import WordMark from "./WordMark";

import Link from "next/link";
import { PiGithubLogoFill } from "react-icons/pi";
import { Container } from "./Container";
import { BiLogoSlack, BiLogoTwitter } from "react-icons/bi";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-transparent-white mt-12 border-t border-white/20 bg-gradient-to-t from-black via-blue-900/25 to-[#070815] py-[5.6rem] text-sm">
      <Container className="flex h-full  w-full max-w-7xl flex-col justify-between lg:flex-row lg:space-x-12">
        <div className="flex h-full flex-row justify-between lg:flex-col lg:items-start lg:justify-stretch lg:space-y-16 ">
          <div
            // style={{
            //   // textShadowColor: "white",
            //   textShadowOffset: { width: -1, height: 0 },
            //   textShadowRadius: 10,
            // }}
            className=" group  flex flex-col items-start space-y-3 hover:shadow-yellow-100 hover:drop-shadow-lg "
          >
            <WordMark
              // style={{
              //   // textShadowColor: "white",
              //   textShadowOffset: { width: -1, height: 0 },
              //   textShadowRadius: 10,
              // }}
              className=" mr-4 h-8 cursor-pointer fill-white/30 text-white/20 brightness-[0.4] grayscale filter transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0 "
            />
            <p
              // style={{
              //   // textShadowColor: "white",
              //   textShadowOffset: { width: -1, height: 0 },
              //   textShadowRadius: 10,
              // }}
              className="text-white/30 transition-all duration-500 group-hover:text-white/80"
            >
              Revolutionising Design
            </p>
          </div>
          <div className="text-grey mt-auto flex space-x-4">
            <BiLogoTwitter className="h-6 w-6 fill-white/20 transition-all duration-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:h-8 hover:w-8 hover:fill-blue-500 " />
            <PiGithubLogoFill className="h-6 w-6 fill-white/20 transition-all duration-500 hover:h-8 hover:w-8 hover:fill-white " />
            <BiLogoSlack className="h-6 w-6 fill-white/20 transition-all duration-500 hover:h-8 hover:w-8 hover:fill-orange-400 " />
          </div>
        </div>
        <div className=" flex h-full w-full flex-wrap justify-evenly  lg:justify-around ">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="mt-10 min-w-[40%] lg:mt-0 lg:min-w-[14rem] "
            >
              <h3 className="mb-3 select-none font-medium text-white/20 ">
                {column.title}
              </h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      className="text-grey hover:text-off-white mb-3 block transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
