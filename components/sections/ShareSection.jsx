"use client";
import React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { InstagramIcon } from "lucide-react";

const ShareSection = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const shareToInstagram = () => {
    try {
      const imageUrl = "https://prismaforge.vercel.app/logo_clear.png"; // Image URL
      const sourceApp = "prismaforge"; // Custom string representing your web app

      const instagramDeepLink = `instagram://story?background_image=${imageUrl}&source_application=${sourceApp}`;

      window.location.href = instagramDeepLink;

      setTimeout(() => {
        if (!document.hidden) {
          setErrorMessage(
            "Instagram is not installed or this action is not supported on your device."
          );
        }
      }, 1000);
    } catch (error) {
      setErrorMessage("An error occurred while trying to share to Instagram.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="flex flex-col items-center justify-center w-48">
        <h1>Take #2</h1>
        <Button
          variant={"outline"}
          className="w-full mt-2"
          onClick={shareToInstagram}
        >
          <InstagramIcon />
          Share to Instagram
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
