"use client";

import * as React from "react";
import Navbar from "./Navbar";
import { MyProvider } from "../context";
import Footer from "./Footer";

export default function ClientLayout({
  children,
  navigation,
  settings,
  footerData,
}) {
  return (
    <MyProvider>
      <Navbar navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footerData={footerData} />
    </MyProvider>
  );
}
