"use client"; // Required for client-side interactivity
import { useState } from "react";
import AppcardComponent from "@/components/AppcardComponent";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PopupNotification from "@/components/PopupNotification";
import Image from "next/image";
import { Activity } from "lucide-react";
import ActivityCard from "@/components/ActivityCart";
import CustomCursor from "./CustomCursor"; // Import CustomCursor component
import Product from "./Product";

// ... rest of the code
export default function Home() {

  return (
<>
<PopupNotification/>
<div className="flex flex-col min-h-screen">
  <main className="flex-grow pt-16">
    <HeroSection />
    <div className="bg-gradient-to-b from-blue-100 to-blue-300">
    <ActivityCard/>
    <AppcardComponent/>
    </div>
    <CustomCursor /> 
  </main>
</div>

</>
  );
}
