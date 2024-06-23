import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";

export async function Button({ type, link, label, className }) {
  if (label === null) return null;

  let linkIsValid = false;
  if (link.id) {
    linkIsValid = true;
  }

  return (
    <div>
      <PrismicNextLink
        href={link.url}
        className={clsx(
          "inline px-6 rounded py-3 md:text-lg md:px-7 md:my-4 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
          type == "primary" &&
            "text-white bg-primary hover:bg-opacity-80 focus:bg-opacity-70 active:bg-opacity-60",
          type == "secondary" &&
            "text-white bg-primary hover:bg-primary/80 focus:bg-primary/90 active:bg-primary/70",
          !linkIsValid && "opacity-40 cursor-not-allowed",
          className
        )}
      >
        {label}
      </PrismicNextLink>
    </div>
  );
}
