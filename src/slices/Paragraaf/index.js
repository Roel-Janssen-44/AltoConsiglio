import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.ParagraafSlice} ParagraafSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParagraafSlice>} ParagraafProps
 * @param {ParagraafProps}
 */
const Paragraaf = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div
        className="
      max-w-[80%] px-4 md:max-w-3xl container mx-auto"
      >
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </section>
  );
};

export default Paragraaf;
