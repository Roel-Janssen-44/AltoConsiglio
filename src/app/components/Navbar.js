"use client";

import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Image from "next/image";
import Link from "next/link";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { HiChevronDown } from "react-icons/hi";

import { useMyContext } from "../context";

import { usePathname } from "next/navigation";

export default function Navbar({
  kunstNavigation,
  criminologieNavigation,
  navigation,
  settings,
}) {
  const { globalState } = useMyContext();

  const [showNavbar, setShowNavbar] = useState(false);

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  const pathname = usePathname();
  const [url, setUrl] = useState(0);

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);

  return (
    <header
      className={`z-40 flex justify-center items-center top-0 bg-transparent w-full shadow-none px-10 lg:px-10 ${
        showNavbar ? "fixed" : "absolute"
      }`}
    >
      <div className="container flex text-white flex-wrap items-center lg:items-baseline justify-between leading-none">
        <PrismicNextLink
          href="/"
          aria-hidden
          onClick={closeNavbar}
          className={`z-20 text-3xl relative h-full p-4 pl-0 font-semibold tracking-tight ${
            showNavbar ? "text-primary" : "text-white"
          }`}
        >
          <h1 className="text-3xl font-bold font-oswald">
            {/* {settings.data.siteTitle[0].text} */}
            <Image
              width={48}
              height={48}
              src={"/logo.svg"}
              alt="Logo altoconsiglio"
              className="max-h-8 sm:hidden"
            />
            <Image
              width={220}
              height={220}
              src={"/logo-desktop.svg"}
              alt="Logo altoconsiglio"
              className="hidden sm:block md:mt-1 lg:h-10 lg:pb-0"
            />
          </h1>
        </PrismicNextLink>
        {/* Mobile menu button */}
        <button
          aria-label="navigatie button"
          onClick={() => setShowNavbar(!showNavbar)}
          className="flex relative z-30 lg:hidden gap-1.5 flex-col justify-center items-center min-w-[44px] min-h-[44px]"
        >
          <div
            className={`${
              showNavbar
                ? "absolute top-1/2 -translate-y-1/2 rotate-45 bg-primary"
                : "bg-white"
            } duration-300   rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar ? "hidden" : ""
            } duration-300 bg-white rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar
                ? "absolute top-1/2 -translate-y-1/2 -rotate-45 bg-primary"
                : "bg-white"
            }
            duration-300  rounded-full w-9 h-1`}
          ></div>
        </button>
        {/* Menu items */}
        <nav
          className={`absolute duration-300 top-0 bg-white left-0 w-screen h-screen flex justify-center 
             lg:bg-transparent ${
               showNavbar ? "translate-y-0" : "-translate-y-full"
             } lg:block lg:relative lg:w-auto lg:h-auto lg:-translate-y-3/4`}
        >
          <ul className="flex flex-col justify-center lg:flex-row items-center flex-wrap gap-2 lg:gap-10">
            {navigation?.data?.slices.map((slice) => (
              <li
                key={prismic.asText(slice.primary.label)}
                className="group py-3 font-semibold tracking-tight text-black lg:text-white relative"
              >
                <Link
                  href={slice.primary?.link?.url || "/"}
                  onClick={closeNavbar}
                  className="px-4 py-3 hover:underline underline-offset-4"
                >
                  <PrismicText field={slice.primary.label} />
                </Link>

                {slice.items && slice.items.length > 1 && (
                  <>
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 duration-300 scale-y-100 lg:group-hover:-scale-y-100">
                      <HiChevronDown />
                    </div>
                    <ul
                      className="z-30 absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 
                     lg:bg-white rounded hidden lg:group-hover:block"
                    >
                      {slice.items?.map((item) => (
                        <li
                          key={prismic.asText(item.label)}
                          className="font-semibold tracking-tight text-black w-full"
                        >
                          <PrismicNextLink
                            href={`${slice.primary.link.url}/${item.link.uid}`}
                            onClick={closeNavbar}
                            className="px-3 py-4 w-full block hover:underline underline-offset-4"
                          >
                            <PrismicText field={item.label} />
                          </PrismicNextLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
