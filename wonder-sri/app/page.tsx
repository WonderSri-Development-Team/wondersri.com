"use client"; // Required for client-side interactivity
import { useState } from "react";
import ActivityCart from "@/components/ActivityCart";
import AppcardComponent from "@/components/AppcardComponent";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PopupNotification from "@/components/PopupNotification";

import Image from "next/image";

export default function Home() {
  
  return (
<>
<PopupNotification/>
<div className="flex flex-col min-h-screen">
  <main className="flex-grow pt-16">
    <HeroSection />
    {/* <ActivityCart/> */}
    <AppcardComponent/>
  </main>
</div>

</>
  );
}
