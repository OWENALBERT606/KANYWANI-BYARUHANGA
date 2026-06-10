import React from "react";
import Link from "next/link";
import Logo from "../global/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Kanywani Byaruhanga — Parliamentary Candidate for Hoima City West, 2026 General Elections. Building a better future together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/nosigaki", label: "N'osigaki" },
                { href: "/mpomurro", label: "Mp'omurro" },
                { href: "/hoimacitywest", label: "Elections 2026 (Hoima City West)" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Hoima City West Constituency</li>
              <li>Hoima City, Uganda</li>
              <li>
                <Link href="/contacts" className="hover:text-yellow-400 transition-colors">
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kanywani Byaruhanga. All rights reserved.</p>
          <p>Hoima City West — Elections 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
