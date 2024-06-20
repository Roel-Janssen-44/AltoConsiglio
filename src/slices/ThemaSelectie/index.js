/**
 * @typedef {import("@prismicio/client").Content.ThemaSelectieSlice} ThemaSelectieSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ThemaSelectieSlice>} ThemaSelectieProps
 * @param {ThemaSelectieProps}
 */

import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Button } from "@/components/Button";

const ThemaSelectie = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-auto lg:h-[100svh] flex flex-col lg:flex-row overflow-hidden mb-10 lg:mb-0"
    >
      <div className="pt-20 bg min-h-screen">
        <h1 className="lg:hidden text-primary my-10 text-center mx-auto max-w-[90%] text-3xl font-bold font-oswald">
          {slice.primary.tekstlinks} {slice.primary.tekstRechts}
        </h1>
        <Link href={"/nl/kunst/"} className="lg:hidden">
          <div className="relative z-20 w-full container mb-10">
            <div className="aspect-square relative overflow-hidden ">
              <div className="w-12 -top-[5%] h-[110%] bg-white absolute right-0 translate-x-1/2 rotate-3 z-10"></div>
              <div className="w-12 -top-[5%] h-[110%] bg-white absolute left-0 -translate-x-1/2 rotate-3 z-10"></div>

              <PrismicNextImage
                field={slice.primary.afbeeldingLinks}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full font-semibold font-oswald text-xl text-white">
              {slice.primary.afbeeldingtekstLinks}
            </h2>
          </div>
        </Link>
        <Link href={"/nl/criminologie/"} className="lg:hidden ">
          <div className="relative z-20 w-full container">
            <div className="aspect-square relative overflow-hidden ">
              <div className="w-12 -top-[5%] h-[110%] bg-white absolute right-0 translate-x-1/2 -rotate-3 z-10"></div>
              <div className="w-12 -top-[5%] h-[110%] bg-white absolute left-0 -translate-x-1/2 -rotate-3 z-10"></div>

              <PrismicNextImage
                field={slice.primary.afbeeldingRechts}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold font-oswald text-xl text-white">
              {slice.primary.afbeeldingTekstRechts}
            </h2>
          </div>
        </Link>
      </div>
      <Link
        href={"/nl/kunst/"}
        className="hidden lg:flex w-1/2 h-full relative bg-primary flex-col justify-center items-center gap-12"
      >
        <div className="w-16 h-[110%] bg-primary absolute -right-8 -translate-x-1/2 -rotate-6 z-10"></div>
        <h1 className="hidden lg:block z-20 ml-auto mr-8 text-white text-3xl font-bold font-oswald">
          {slice.primary.tekstlinks}
        </h1>
        <div className="relative z-20 w-96">
          <div className="aspect-square relative overflow-hidden ">
            <div className="w-12 -top-[5%] h-[110%] bg-primary absolute right-0 translate-x-1/2 -rotate-6 z-10"></div>
            <div className="w-12 -top-[5%] h-[110%] bg-primary absolute left-0 -translate-x-1/2 -rotate-6 z-10"></div>

            <PrismicNextImage
              field={slice.primary.afbeeldingLinks}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
          </div>
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold font-oswald text-xl w-full text-white">
            {slice.primary.afbeeldingtekstLinks}
          </h2>
        </div>
      </Link>
      <Link
        href={"/nl/criminologie/"}
        className="hidden lg:flex w-1/2 h-full relative bg-secondary flex-col justify-center items-center gap-12"
      >
        <div className="w-16 h-[110%] bg-secondary absolute left-8 -rotate-6 -translate-x-1/2 z-10"></div>

        <h1 className="hidden lg:block z-20 mr-auto -ml-4 text-primary text-3xl font-bold font-oswald">
          {slice.primary.tekstRechts}
        </h1>
        <div className="relative z-20 w-96">
          <div className="aspect-square relative overflow-hidden">
            <div className="w-12 -top-[5%] h-[110%] bg-white absolute right-0 translate-x-1/2 -rotate-6 z-10"></div>
            <div className="w-12 -top-[5%] h-[110%] bg-white absolute left-0 -translate-x-1/2 -rotate-6 z-10"></div>

            <PrismicNextImage
              field={slice.primary.afbeeldingRechts}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
          </div>
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold font-oswald text-xl w-full text-white">
            {slice.primary.afbeeldingTekstRechts}
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default ThemaSelectie;
