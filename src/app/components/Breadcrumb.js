import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { linkResolver } from "@/app/utils/LinkResolver";

import { PrismicRichText } from "@/components/PrismicRichText";
import { HiChevronRight } from "react-icons/hi";

export function Breadcrumb({ page }) {
  if (page.uid === "home") return null;
  if (page.uid === "privacy-policy") return <div className="h-10"></div>;
  return (
    <div className="sm:px-6">
      <div className="w-full h-80 relative overflow-hidden">
        <PrismicNextImage
          loader={undefined}
          loading="eager"
          width={1920}
          height={500}
          field={page.data?.meta_image}
          className="pointer-events-none select-none rounded-b-xl object-cover object-center h-[320px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-b-xl"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="text-white container mx-auto text-center mt-24">
            <PrismicRichText field={page.data?.title} />
            <div className="flex flex-row justify-center items-center text-lg gap-2">
              <a
                href="/"
                className="font-bold hover:underline underline-offset-2"
              >
                Home
              </a>
              {page.data?.parent?.id && <HiChevronRight />}
              {page.data?.parent?.id && (
                <>
                  <PrismicNextLink
                    href={page.data.parent.url}
                    className="cursor-pointer font-bold hover:underline underline-offset-2"
                  >
                    {page.data?.parent.uid}
                  </PrismicNextLink>
                </>
              )}
              <HiChevronRight />
              <span>{page.uid}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="lg:max-w-2xl container text-center sm:text-left mx-auto my-20">
        {page.data?.meta_description}
      </p> */}
    </div>
  );
}
