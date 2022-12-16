import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import Toast from "../components/Toast";

export default function Home() {
  return (
    <div className="dark">
      <Toast />
      <Navbar />
      <HeroSection
        title="GPA Calculator"
        description="Easy to use , GPA Calculator for students of SRM university, know where you stand 🙂"
      />
    </div>
  );
}
