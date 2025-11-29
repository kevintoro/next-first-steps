import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About us",
  keywords: ["about", "us", "kronos"],
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-5xl">About</h1>
    </>
  );
}
