import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
// import { linkResolver } from "@/prismicio";

// import { linkResolver } from "../utils/LinkResolver";

export async function Button({ type = "primary", link, label, className }) {
  if (label === null) return null;

  let linkIsValid = false;
  if (link.id) {
    linkIsValid = true;
  }

  // console.log("link");
  // console.log(link);

  return (
    <div>
      {/* {prismic.asLink(link, { linkResolver })} */}
      <PrismicNextLink
        // href={linkResolver(link)}
        href={"/"}
        // locale={link.lang}
        // field={link}
        // field={linkResolver(link)}
        // linkResolver={linkResolver}
        className={clsx(
          "inline px-6 rounded py-3 md:text-lg md:px-7 md:my-4 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
          type === "primary" &&
            "text-white bg-primary hover:bg-opacity-80 focus:bg-opacity-70 active:bg-opacity-60",
          // type === "secondary" && "text-black border-black border-2",
          type === "secondary" &&
            "text-black bg-white hover:bg-slate-200 focus:bg-slate-300 active:bg-slate-400",
          !linkIsValid && "opacity-40 cursor-not-allowed",
          className
        )}
      >
        {label}
      </PrismicNextLink>
    </div>
  );
}
