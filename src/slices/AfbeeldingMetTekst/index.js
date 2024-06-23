import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
import clsx from "clsx";

import { Button } from "@/components/Button";

/**
 * @typedef {import("@prismicio/client").Content.AfbeeldingMetTekstSlice} AfbeeldingMetTekstSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AfbeeldingMetTekstSlice>} AfbeeldingMetTekstProps
 * @param {AfbeeldingMetTekstProps}
 */
const AfbeeldingMetTekst = ({ slice }) => {
  const mainImage = slice.primary.image;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <div
        className={clsx(
          "relative container px-10 max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center gap-12 md:gap-10",
          slice.primary.image_position === "Links" && "md:flex-row",
          slice.primary.image_position === "Rechts" && "md:flex-row-reverse"
        )}
      >
        {prismic.isFilled.image(mainImage) && (
          <div className="w-full max-w-lg mx-auto md:w-1/2 relative">
            <div className="z-0 aspect-square absolute left-0 top-0 w-auto h-full rounded-lg bg-primary rotate-3"></div>
            <PrismicNextImage
              field={mainImage}
              alt=""
              fill={false}
              className="z-20 relative pointer-events-none rounded-lg select-none object-cover"
            />
          </div>
        )}
        <div
          className={clsx(
            "md:w-1/2 flex flex-col justify-center max-w-lg",
            slice.primary.text_alignment === "Links" && "text-left",
            slice.primary.text_alignment === "Midden" && "text-center"
          )}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.paragraph} />
          <Button
            type={"primary"}
            link={slice.primary.button_link}
            label={slice.primary.button_label}
          />
        </div>
      </div>
    </section>
  );
};

export default AfbeeldingMetTekst;
