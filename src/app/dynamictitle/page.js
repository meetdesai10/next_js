import React from "react";

export default function Generatemetadata() {
  return (
    <div>
      <h1>
        Generate Meta data (use to give a different title to all component)
      </h1>
    </div>
  );
}
export function generateMetadata() {
  return {
    title: "Generate Meta Data",
    description: "Dynamic Title",
  };
}
