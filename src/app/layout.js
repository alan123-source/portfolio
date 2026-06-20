import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import siteConfig from "@/constants/siteConfig";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-inky-chi-pjby3xxcy9.vercel.app/"),
 title:{
  default:"Alan Paul John | Software Engineer",
  template:"%s | Alan Paul John",
 },

 description:"Computer Engineering student and aspiring Software Engineer passionate about full-stack development, software engineering, and building scalable applications.",

 keywords:[
  "Alan Paul John",
  "Software Engineer",
  "Full Stack Developer",
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "Portfolio"
 ],

 authors:[
  {
    name:"Alan Paul John"
  }
 ],

 creator:"Alan Paul John",

 openGraph:{
  title:"Alan Paul John |Software Engineer",
  description:"Computer Engineering student passionate about building modern web applications.",
  type:"website",
  images:[
    {
      url:"/opengraph-image.png",
      width:1200,
      height:630,
      alt:"Alan Paul john Portfolio"
    },
  ],
 },

 twitter:{
  card:"summary_large_image",
  title:"Alan Paul John | Software Engineer",
  description:"Computer Engineering student passionate about building modern web applications.",
  images:["/opengraph-image.png"],
 },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
