import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us for any questions or feedback",
  keywords: ["contact", "us", "kronos", "questions", "feedback"],
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-5xl">Contact</h1>
    </>
  );
}
