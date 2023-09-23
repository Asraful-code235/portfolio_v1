"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/navbar";
import { logo } from "@/public/images";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="p-4 space-y-6 text-sm md:text-base border-b">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" className="w-6 md:w-10" />

        <ul className="hidden md:block space-x-7">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
          <Button variant="warning" className="w-fit">
            Let's Talk
          </Button>
        </ul>

        <Button
          variant="unstyled"
          onClick={toggleMobileMenu}
          className="md:hidden"
        >
          {!isMobileMenuOpen ? <Menu className="w-6" /> : <X className="w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen ? (
        <ul className="md:hidden flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} className="">
              {link.title}
            </Link>
          ))}
          <Button variant="warning" className="w-fit">
            Let's Talk
          </Button>
        </ul>
      ) : null}
    </nav>
  );
}
