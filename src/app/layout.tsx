import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import "./globals.css";
import Head from "next/head";

import ClientLayout from "@/components/ClientLayout";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  // const settings = await client.getSingle("settings");
  // let navigation = await client.getSingle("navbar");
  // let footerData = await client.getSingle("footer");

  return (
    // <html lang="nl">
    //   <body>{children}</body>
    //   <PrismicPreview repositoryName={repositoryName} />
    // </html>

    <html lang="nl">
      {/* <CookieBanner /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="overflow-x-hidden antialiased ">
        <PrismicPreview repositoryName={repositoryName} />
        <ClientLayout
          // navigation={navigation}
          // settings={settings}
          // footerData={footerData}
          navigation={null}
          settings={null}
          footerData={null}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

// export const metadata = {
//   title: "Peter Nelissen - Kunstenaar en Criminoloog",
//   description:
//     "Ontdek de fascinerende wereld van Peter Nelissen, een kunstenaar en criminoloog. Zijn portfolio toont een unieke mix van artistieke expressie en grondig criminologisch onderzoek, resulterend in werken die zowel visueel betoverend als intellectueel stimulerend zijn. Verken zijn galerij en ervaar hoe kunst en wetenschap elkaar verrijken.",
// };

// import ClientLayout from "@/components/ClientLayout";

// export default async function RootLayout({ children, params }) {
//   const client = createClient();
//   const settings = await client.getSingle("settings");
//   let navigation;
//   let footerData;
//   let lang = "";
//   if (params.locale == "nl") {
//     lang = "nl-nl";
//   } else if (params.locale == "en") {
//     lang = "en-us";
//   } else {
//     lang = "nl-nl";
//   }
//   navigation = await client.getByUID("navbar", "main-navbar", {
//     lang: lang,
//   });
//   const kunstNavigation = await client.getByUID("navbar", "kunst-navigatie", {
//     lang: lang,
//   });
//   const criminologieNavigation = await client.getByUID(
//     "navbar",
//     "criminologie-navigatie",
//     {
//       lang: lang,
//     }
//   );
//   footerData = await client.getSingle("footer", {
//     lang: lang,
//   });
//   return (
//     <html lang={params.locale}>
//       {/* <CookieBanner /> */}
//       <Head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//       </Head>
//       <body className="overflow-x-hidden antialiased ">
//         <PrismicPreview repositoryName={repositoryName} />
//         <ClientLayout
//           kunstNavigation={kunstNavigation}
//           criminologieNavigation={criminologieNavigation}
//           navigation={navigation}
//           settings={settings}
//           footerData={footerData}
//         >
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   );
// }
