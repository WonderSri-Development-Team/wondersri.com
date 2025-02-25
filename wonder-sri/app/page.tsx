
import AppcardComponent from "@/components/AppcardComponent";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
<>
<div className="flex flex-col min-h-screen">
  <main className="flex-grow pt-16">
    <HeroSection />
    <AppcardComponent/>
  </main>
</div>

</>
  );
}
