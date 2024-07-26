import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { FaLinkedin } from "react-icons/fa";

export default function Footer({ settings, footerData }) {
  return (
    <footer className="bg-primary my-6 mx-6 text-white rounded-2xl py-20 pb-0 border-t-primary border-2">
      <h3 className="mx-auto px-4 md:pl-0 primary-title mb-4 text-center w-full container font-bold text-4xl md:text-left md:max-w-[575px] lg:max-w-[870px]">
        {footerData.data?.quote}
      </h3>

      <div className="container flex flex-row justify-center mx-auto md:block md:max-w-[575px] lg:max-w-[870px]">
        <a
          href="/contact"
          rel="nofollow"
          className={`-ml-[1px] primary-title cursor-pointer tracking-wider px-6 mb-6 relative inline-block rounded py-3 md:text-lg md:px-7 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
    text-primary bg-white font-bold hover:bg-white/80 focus:bg-white/90 active:bg-white/70`}
        >
          Neem contact op
        </a>
      </div>

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
              <a
                className="cursor-pointer flex flex-row gap-1 items-center"
                href="https://www.linkedin.com/in/jeankoolen"
                rel="nofollow"
              >
                <FaLinkedin size={"24px"} />
                jeankoolen
              </a>
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
