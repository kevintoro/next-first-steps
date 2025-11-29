import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing for our services",
  keywords: ["pricing", "services", "kronos"],
};

export default function PricingPage() {
  return (
    <>
      <h1 className="text-5xl">Pricing</h1>
    </>
  );
}
