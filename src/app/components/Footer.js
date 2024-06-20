import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";

export default function Footer({ footerData }) {
  return (
    <footer className="py-20 pb-0 bg-white border-t-primary border-2">
      <div className="container flex flex-row flex-wrap justify-between md:max-w-xl lg:max-w-7xl">
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
        {/* <div
          className={`w-full text-center flex justify-center mb-8 md:justify-end md:text-left md:w-1/2 lg:justify-center lg:w-1/3`}
        >
          <div className="">
            <PrismicRichText field={footerData.data.title_column_4} />
            <ul className="">
              {footerData.data.column_4.map((item, index) => (
                <li className="py-1" key={`col_4_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
      <div className="bg-white border-t-2 border-t-primary py-4">
        <div className="container flex flex-col lg:flex-row gap-6 justify-center items-center lg:justify-around">
          <div>
            <span>
              © 2023 PeterNelissen | Gemaakt door{" "}
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

                {/* To do - link resolver */}

                <PrismicNextLink className="underline" field={item.link}>
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
