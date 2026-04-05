"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Về HBW", href: "/ve-hbw" },
  { name: "Dự án RideRight", href: "/du-an-rideright" },
  { name: "Sản phẩm", href: "/san-pham" },
  { name: "Kiến thức", href: "/kien-thuc" },
  { name: "Tin & Sự kiện", href: "/tin-tuc" },
  { name: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-40 md:h-14 md:w-48">
              <Image
                src="/global/logo-hbw-rideright.png"
                alt="HBW Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-bold uppercase tracking-wide transition-colors duration-200 hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* UTILITIES (Search/Cart/Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
               <Search className="w-5 h-5 text-secondary" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Slide down) */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-5 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`py-3 text-lg font-bold uppercase border-b border-gray-50 last:border-0 hover:text-primary hover:pl-2 transition-all ${
                 pathname === item.href ? "text-primary pl-2" : "text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3 text-secondary font-medium">
             <Phone className="w-5 h-5 text-primary" /> 
             <span>Hotline: 0939 58 57 48</span>
          </div>
        </div>
      )}
    </header>
  );
}