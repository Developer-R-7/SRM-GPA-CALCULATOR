import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";

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
