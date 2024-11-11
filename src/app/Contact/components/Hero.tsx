"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-[95%] max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section (Large screens: Image first) */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2 order-2 md:order-1">
          <Image
            src="/contact.webp"
            width={500}
            height={500}
            alt="Contact Image"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section (Small screens: Form first) */}
        <div className="w-full md:w-1/2  p-6 rounded-lg shadow-lg order-1 md:order-2">
          <h2 className="text-2xl text-white font-bold mb-4 text-center md:text-left">Get in Touch</h2>
          <div className="space-y-4">
            <Input placeholder="Name" className="w-full" />
            <Input placeholder="Email" type="email" className="w-full" />
            <Input placeholder="Phone no" type="tel" className="w-full" />
            <Input placeholder="Message" className="w-full h-24" as="textarea" />
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Send</Button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
