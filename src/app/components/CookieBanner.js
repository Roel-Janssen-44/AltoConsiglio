"use client";

import React from "react";
import Script from "next/script";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);
  const [cookieDenied, setCookieDenied] = React.useState(false);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});

    const script = document.createElement("script");
    // Todo - Update the Google Analytics ID
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-T541J1G4HQ";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log("Google Analytics script loaded successfully");
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      // Todo - Update the Google Analytics ID
      gtag("config", "G-T541J1G4HQ");
    };
  };

  const denyCookie = () => {
    setCookieDenied(true);
  };

  if (showConsent || cookieDenied) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-slate-700 bg-opacity-30">
        <div className="fixed bottom-0 md:bottom-6 rounded-lg left-0 md:left-6 right-0 w-auto md:mr-6 flex flex-col lg:flex-row lg:justify-center items-start gap-4 justify-between lg:items-center px-4 py-8 bg-gray-100">
          <span className="text-dark text-base sm:mr-16">
            Deze website gebruikt cookies om de gebruikerservaring te
            verbeteren. Door gebruik te maken van onze website geeft u
            toestemming voor alle cookies in overeenstemming met ons
            cookiebeleid.
          </span>
          <div className="flex flex-row gap-4 md:flex-row">
            <button
              className="border-2 border-primary py-2 px-8 rounded text-primary"
              onClick={() => denyCookie()}
            >
              Weigeren
            </button>
            <button
              className="bg-primary md:ml-4 py-2 px-8 rounded text-white"
              onClick={() => acceptCookie()}
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>

      {/* Google Analytics Script */}
      {/* <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T541J1G4HQ');
    `}
      </Script> */}
    </>
  );
};

export default CookieConsent;
