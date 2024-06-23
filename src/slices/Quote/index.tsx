import * as prismic from "@prismicio/client";
// import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<prismic.Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div className="container relative w-full h-auto mx-auto">
        {prismic.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            width={800}
            priority
            height={600}
            className="w-full h-full pointer-events-none absolute left-0 top-0 z-0 rounded-xl select-none object-cover"
          />
        )}
        <div className="absolute left-0 top-0 w-full h-full bg-white opacity-80 rounded-xl" />

        <div className="flex z-20 py-20 pb-12 relative justify-center items-center">
          <div className="max-w-[80%] md:max-w-4xl mx-auto">
            <h2 className="primary-title text-primary text-4xl font-bold tracking-wider mb-7 mt-0">
              {slice.primary.title}
            </h2>
            {/* @ts-expect-error */}
            <PrismicRichText field={slice.primary.paragraph} />
            <div className="primary-title text-primary text-7xl md:text-8xl -mb-12 font-bold">
              “
            </div>
            <h3 className="text-2xl text-center font-bold tracking-wider mt-0">
              {slice.primary.quote}
            </h3>
            <div className="primary-title rotate-180 text-primary -mt-12 text-7xl md:text-8xl font-bold">
              “
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
