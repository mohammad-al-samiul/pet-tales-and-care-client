import { Metadata } from "next";
import Navbar from "./components/pages/shared/Navbar";
import Footer from "./components/pages/shared/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className={`antialiased`}>{children}</div>
      <Footer />
    </>
  );
}
