import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";

export default function Footer({ settings, footerData }) {
  return (
    <footer className="bg-primary my-6 mx-6 text-white rounded-2xl py-20 pb-0 border-t-primary border-2">
      <h3 className="mx-auto px-4 md:pl-0 primary-title mb-10 text-center w-full container font-bold text-4xl md:text-left md:max-w-[575px] lg:max-w-[835px]">
        {footerData.data?.quote}
      </h3>
      <div className="container mx-auto flex flex-row flex-wrap justify-between md:max-w-xl lg:max-w-[1000px]">
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-normal md:text-left md:w-1/2 lg:justify-center lg:w-1/3`}
        >
          <div className="">
            <PrismicRichText field={footerData.data.title_column_1} />
            <ul className="">
              {footerData.data.column_1.map((item, index) => (
                <li className="py-1" key={`col_1_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-end md:text-left md:w-1/2 lg:justify-center lg:w-1/3`}
        >
          <div className="">
            <PrismicRichText field={footerData.data.title_column_2} />
            <ul className="">
              {footerData.data.column_2.map((item, index) => (
                <li className="py-1" key={`col_2_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-normal md:text-left md:w-1/2 lg:justify-center lg:w-1/3`}
        >
          <div className="">
            <PrismicRichText field={footerData.data.title_column_3} />
            <ul className="">
              {footerData.data.column_3.map((item, index) => (
                <li className="py-1" key={`col_3_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 border-t-2 border-t-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:justify-around">
          <div className="text-center">
            <span>
              © 2023 {settings.data.siteTitle[0].text} | Gemaakt door{" "}
              <a
                href="https://www.websidesign.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Websidesign
              </a>
            </span>
          </div>
          <div className="flex flex-row">
            {footerData.data.links_group.map((item, index) => (
              <div key={`footer_item_links-${index}`}>
                {index !== 0 && <span className="mx-2">|</span>}
                <PrismicNextLink href={item.link.url}>
                  {item.link_label}
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
