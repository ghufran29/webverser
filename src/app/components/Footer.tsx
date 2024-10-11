import React from "react";
import Link from "next/link";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <>
      <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Platmform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="mt-5 py-3 text-lg text-neutral-400 ">
        <p>
        WebVerseR © 2024 developed and maintained by{" "}
          <Link
            className="text-neutral-300 hover:text-blue-500"
            href="https://github.com/ghufran29"
          >
            ghufran
          </Link>
          . | All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
