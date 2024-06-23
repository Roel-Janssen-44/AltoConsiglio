import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

import { Button } from "@/components/Button";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.image;

  const imageWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
  const imageHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen sm:mx-6"
    >
      <div className="relative h-[100svh] sm:pb-6 w-full">
        {prismic.isFilled.image(backgroundImage) && (
          <PrismicNextImage
            field={backgroundImage}
            width={imageWidth}
            priority
            height={imageHeight}
            className="w-full h-full pointer-events-none rounded-b-xl select-none object-cover"
          />
        )}
        <div className="absolute z-20 top-0 left-0 w-full h-full sm:pb-6">
          <div className="relative w-full h-full rounded-xl opacity-20 bg-black"></div>
        </div>
        <div className="absolute z-30 w-auto left-6 sm:pl-12 lg:pl-24 top-[45%] -translateY-1/2">
          <div className="container w-auto">
            <div className="text-white max-w-[340px] md:max-w-md">
              <PrismicRichText field={slice.primary.title} />
              <PrismicRichText field={slice.primary.paragraph} />
              <Button
                type="secondary"
                link={slice.primary.button_link}
                label={slice.primary.button_label}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
