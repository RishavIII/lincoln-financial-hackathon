import { useState } from "react";

export default function Wellness() {
  return (
    <div className="min-h-screen p-8">
        <style>{`
        .blue-green-gradient {
            color: #80c684;
            background-image: linear-gradient(45deg, #80c684 , #1e40af 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        `}
        </style>
      <div className="max-w-2xl mx-auto">
        <div className="p-12 bg-white rounded-xl mb-8">
          <h2 className="text-5xl font-semibold blue-green-gradient text-center mb-4 text-center">
            Financial Wellness
          </h2>
          <p className="font-semibold text-center">
            Learn about financial wellness. Discover your money habits, mistakes, and strengths.
          </p>
        </div>
      </div>
    </div>
  );
}