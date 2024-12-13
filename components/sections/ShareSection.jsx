"use client";
import React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { InstagramIcon } from "lucide-react";

const ShareSection = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const shareToInstagram = () => {
    try {
      const imageUrl = "https://prismaforge.vercel.app/logo_clear.png";

      const contentUrl = "https://prismaforge.vercel.app/";
      const sourceApp = "573036478771132"; // Custom string representing your web app

      const instagramDeepLink = `instagram-stories://share?background_image=${imageUrl}&content_url=${contentUrl}&source_application=${sourceApp}`;
      //   const instagramDeepLink = `instagram-stories://share?background_image=${imageUrl}`;

      // Try to open the Instagram deep link
      window.location.href = instagramDeepLink;

      // Fallback: Check if the deep link worked
      setTimeout(() => {
        if (!document.hidden) {
          setErrorMessage(
            "Instagram is not installed or this action is not supported on your device."
          );
        }
      }, 1000); // Adjust the timeout as necessary
    } catch (error) {
      setErrorMessage("An error occurred while trying to share to Instagram.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="flex flex-col items-center justify-center w-48">
        <h1>Take #7</h1>
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
