import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { links, socialLinks } from "@/constants/footer";
import Image from "next/image";
import { logo } from "@/public/images";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-[14px] md:p-4 border-t space-y-[14px] md:space-y-4 text-sm md:text-base">
      <div
        id="newsletter-card"
        className="flex flex-col md:flex-row justify-between gap-6 p-[14px] md:p-4 bg-yellow-300 rounded-lg"
      >
        <div className="lg:flex-[2]">
          <h3 className="text-sm font-bold">Newsletter</h3>
          <p className="text-sm">
            Subscribe to our mailing to receive exclusive access to our monthly
            newsletter.
          </p>
        </div>

        <form className="flex lg:flex-1 items-center gap-x-[14px] md:gap-x-4">
          <input
            type="text"
            placeholder="Email address *"
            className="w-full rounded-lg px-4 py-3 border border-black text-sm"
          />
          <Button className="border border-black px-4 py-3 md:text-sm">
            Subscribe
          </Button>
        </form>
      </div>

      <div id="social-links" className="flex gap-[14px] flex-wrap">
        {socialLinks.map((link) => (
          <Button
            key={link.platform}
            variant="secondary"
            className="flex-1 flex items-center justify-between gap-5 md:text-sm font-bold px-[14px] py-[18px]"
          >
            {link.platform} <ArrowUpRight className="w-5" />
          </Button>
        ))}
      </div>

      <div
        id="links"
        className="bg-gray-200 rounded-lg p-[14px] md:p-4 flex flex-col md:flex-row gap-8 md:gap-10 text-sm"
      >
        <div className="md:flex-[2] flex flex-col justify-between">
          <Image src={logo} alt="logo" className="w-6 md:w-10" />
          <div id="info" className="hidden md:flex gap-10">
            <div>
              <p>© Copyright 2023</p>
              <p className="font-bold">Carte Blanche Studio Inc.</p>
            </div>
            <div>
              <p>Address</p>
              <p className="font-bold">50 Carroll Street Toronto, ON M4M 3G3</p>
            </div>
          </div>
        </div>

        <div className="md:flex-1">
          <h3 className="font-bold mb-6">Pages</h3>

          <ul>
            {links.map((link) => (
              <Link key={link.page} href={link.href} className="block">
                {link.page}
              </Link>
            ))}
          </ul>
        </div>

        <div id="info" className="md:hidden space-y-8 md:space-y-10">
          <div>
            <p>© Copyright 2023</p>
            <p className="font-bold">Carte Blanche Studio Inc.</p>
          </div>
          <div>
            <p>Address</p>
            <p className="font-bold">50 Carroll Street Toronto, ON M4M 3G3</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
