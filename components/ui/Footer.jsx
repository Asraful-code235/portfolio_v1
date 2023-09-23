import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { links, socialLinks } from "@/constants/footer";
import Image from "next/image";
import { logo } from "@/public/images";

export default function Footer() {
  return (
    <section
      id="footer"
      className="p-4 border-t space-y-4 text-sm md:text-base"
    >
      <div
        id="newsletter-card"
        className="flex flex-col md:flex-row justify-between gap-6 p-4 bg-yellow-300 rounded-lg"
      >
        <div>
          <h3 className="text-sm font-bold">Newsletter</h3>
          <p className="text-sm md:text-base">
            Subscribe to our mailing to receive exclusive access to our monthly
            newsletter.
          </p>
        </div>

        <form className="flex items-center gap-x-4">
          <input
            type="text"
            placeholder="Email address *"
            className="w-full rounded-lg px-4 py-2 border border-black text-sm md:text-base"
          />
          <Button className="border border-black">Subscribe</Button>
        </form>
      </div>

      <div id="social-links" className="flex gap-3 flex-wrap">
        {socialLinks.map((link) => (
          <Button
            key={link.platform}
            variant="secondary"
            className="flex-1 flex items-center justify-center gap-5 font-bold p-5"
          >
            {link.platform} <ArrowUpRight className="w-3" />
          </Button>
        ))}
      </div>

      <div
        id="links"
        className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-10"
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
              <li key={link.page}>{link.page}</li>
            ))}
          </ul>
        </div>

        <div id="info" className="md:hidden space-y-10">
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
    </section>
  );
}
