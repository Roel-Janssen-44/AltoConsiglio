import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Accordion from "@/components/Accordion";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * Props for `Sevices`.
 */
export type SevicesProps = SliceComponentProps<Content.SevicesSlice>;

/**
 * Component for "Sevices" Slices.
 */
const Sevices = ({ slice }: SevicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div className="container mx-auto px-6 sm:px-0">
        {/* @ts-expect-error */}
        <PrismicRichText field={slice.primary.title} />
        <Accordion data={slice.primary.diensten} />
      </div>
    </section>
  );
};

export default Sevices;
