import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const menuItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Precio",
    href: "/pricing",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="relative bg-gray-800/20 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href={"/"}>
                <Image
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  className="h-8"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <ActiveLink
                    key={item.href}
                    path={item.href}
                    text={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
