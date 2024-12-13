"use client";
import React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { InstagramIcon } from "lucide-react";

const ShareSection = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const imageUrl = "/logo.webp"; // Image in the public directory

  const shareToInstagram = () => {
    try {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "prismaforge_logo.webp";
      link.click();
      const instagramDeepLink = "instagram://camera";
      window.location.href = instagramDeepLink;
    } catch (error) {
      setErrorMessage(
        "Instagram is not installed or this action is not supported on your device."
      );
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="flex flex-col items-center justify-center w-48">
        <h1>Take #10</h1>
        <Button
          variant={"outline"}
          className="w-full mt-2"
          onClick={shareToInstagram}
        >
          <InstagramIcon />
          Share on Instagram Story
        </Button>
        <img
          src="https://prismaforge.vercel.app/logo_clear.png"
          alt="logo"
          className="w-full mt-4 bg-blue-200 rounded-lg"
        />
      </div>
      {errorMessage && (
        <div className="mt-4 text-red-600 text-lg w-64 text-center">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ShareSection;
