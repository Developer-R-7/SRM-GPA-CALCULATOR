import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <html>
      <body className="dark">
        <HeroSection />
      </body>
    </html>
  );
}
