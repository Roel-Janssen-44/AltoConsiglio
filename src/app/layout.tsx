import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import "./globals.css";
import Head from "next/head";

import ClientLayout from "@/components/ClientLayout";

// export const metadata = {
//   title: "Peter Nelissen - Kunstenaar en Criminoloog",
//   description:
//     "Ontdek de fascinerende wereld van Peter Nelissen, een kunstenaar en criminoloog. Zijn portfolio toont een unieke mix van artistieke expressie en grondig criminologisch onderzoek, resulterend in werken die zowel visueel betoverend als intellectueel stimulerend zijn. Verken zijn galerij en ervaar hoe kunst en wetenschap elkaar verrijken.",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  let navigation = await client.getSingle("navigatie");
  let footerData = await client.getSingle("footer");

  return (
    <html lang="nl">
      {/* <CookieBanner /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="overflow-x-hidden antialiased ">
        <PrismicPreview repositoryName={repositoryName} />
        <ClientLayout
          navigation={navigation}
          settings={settings}
          footerData={footerData}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
