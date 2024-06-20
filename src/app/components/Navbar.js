"use client";

import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Link from "next/link";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { linkResolver } from "@/app/utils/LinkResolver";

import { HiChevronDown } from "react-icons/hi";

import { useMyContext } from "../context";
// import { formatPrismicUrl } from "/utility";

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
    <header className="z-30 h-20 flex justify-center items-center fixed top-0 bg-white w-screen shadow-md">
      <div className="container flex text-primary flex-wrap items-center sm:items-baseline justify-between leading-none h-20">
        <PrismicNextLink
          href="/"
          aria-hidden
          onClick={closeNavbar}
          className="z-20 text-3xl p-4 pl-0 font-semibold tracking-tight"
        >
          {/* <PrismicText field={settings.data.siteTitle} /> */}
          <h1 className="text-3xl font-bold font-oswald">Peter Nelissen</h1>
        </PrismicNextLink>
        {/* Mobile menu button */}
        <button
          aria-label="navigatie button"
          onClick={() => setShowNavbar(!showNavbar)}
          className="flex relative z-20 sm:hidden gap-1.5 flex-col justify-center items-center min-w-[44px] min-h-[44px]"
        >
          <div
            className={`${
              showNavbar ? "absolute top-1/2 -translate-y-1/2 rotate-45" : ""
            } duration-300  bg-black rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar ? "hidden" : ""
            } duration-300  bg-black rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar ? "absolute top-1/2 -translate-y-1/2 -rotate-45" : ""
            }
            duration-300 bg-black rounded-full w-9 h-1`}
          ></div>
        </button>
        {/* Menu items */}
        <nav
          className={`absolute duration-300 top-0 left-0 w-screen h-screen flex justify-center bg-white ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } sm:block sm:relative sm:w-auto sm:h-auto sm:translate-y-0`}
        >
          <ul className="flex flex-col justify-center sm:flex-row items-center flex-wrap gap-2 md:gap-10">
            {url != "" &&
              url.includes("kunst") &&
              kunstNavigation?.data?.slices?.map((slice) => (
                <li
                  key={prismic.asText(slice.primary.label)}
                  className="group py-3 font-semibold tracking-tight text-slate-800 relative"
                >
                  <Link
                    href={linkResolver(slice.primary.link)}
                    onClick={closeNavbar}
                    className="px-4 py-3 hover:underline underline-offset-4"
                  >
                    <PrismicText field={slice.primary.label} />
                  </Link>

                  {/* {console.log("slide")}
                {console.log(slice)} */}

                  {slice.items && slice.items.length > 1 && (
                    <>
                      {/* {console.log("slide items")}
                    {console.log(slice.items)} */}
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 duration-300 scale-y-100 lg:group-hover:-scale-y-100">
                        <HiChevronDown />
                      </div>
                      <ul className="z-30 absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 bg-white rounded hidden lg:group-hover:block">
                        {slice.items?.map((item) => (
                          <li
                            key={prismic.asText(item.label)}
                            className="font-semibold tracking-tight text-slate-800 w-full"
                          >
                            {/* {console.log(item)} */}
                            <PrismicNextLink
                              href={linkResolver(item.link)}
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
            {url != "" &&
              url.includes("criminologie") &&
              criminologieNavigation?.data?.slices?.map((slice) => (
                <li
                  key={prismic.asText(slice.primary.label)}
                  className="group py-3 font-semibold tracking-tight text-slate-800 relative"
                >
                  <Link
                    href={linkResolver(slice.primary.link)}
                    onClick={closeNavbar}
                    className="px-4 py-3 hover:underline underline-offset-4"
                  >
                    <PrismicText field={slice.primary.label} />
                  </Link>
                  {slice.items && slice.items.length > 1 && (
                    <>
                      {/* {console.log("slide items")}
                    {console.log(slice.items)} */}
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 duration-300 scale-y-100 lg:group-hover:-scale-y-100">
                        <HiChevronDown />
                      </div>
                      <ul className="z-30 absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 bg-white rounded hidden lg:group-hover:block">
                        {slice.items?.map((item) => (
                          <li
                            key={prismic.asText(item.label)}
                            className="font-semibold tracking-tight text-slate-800 w-full"
                          >
                            {/* {console.log(item)} */}
                            <PrismicNextLink
                              href={linkResolver(item.link)}
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
            {navigation?.data?.slices.map((slice) => (
              <li
                key={prismic.asText(slice.primary.label)}
                className="group py-3 font-semibold tracking-tight text-slate-800 relative"
              >
                <Link
                  // to do url
                  href={"/"}
                  // href={formatPrismicUrl(slice.primary.link)}
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
                    <ul className="z-30 absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 bg-white rounded hidden lg:group-hover:block">
                      {slice.items?.map((item) => (
                        <li
                          key={prismic.asText(item.label)}
                          className="font-semibold tracking-tight text-slate-800 w-full"
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
            <div className="flex lg:hidden flex-row gap-3">
              <Link href="/en" locale="en" onClick={closeNavbar}>
                <span className="fi fi-us"></span>
              </Link>
              <Link href="/nl" locale="nl" onClick={closeNavbar}>
                <span className="fi fi-nl"></span>
              </Link>
            </div>
          </ul>
        </nav>
        <div className="hidden lg:flex flex-row gap-3">
          {/* <Link href="/en" locale="en">
            <span className="fi fi-us"></span>
          </Link> */}
          <Link href="/nl" locale="nl">
            <span className="fi fi-nl"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
