import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="dark">
      <Navbar />
      <HeroSection
        title="GPA Calculator"
        description="Easy to use , GPA Calculator for students of SRM university, know where you stand 🙂"
      />
    </div>
  );
}
