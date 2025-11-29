"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const isActive = usePathname() === path;

  return (
    <Link
      href={path}
      className={
        isActive
          ? "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
          : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
      }
    >
      {text}
    </Link>
  );
};
