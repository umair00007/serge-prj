"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AlertBar from "./AlertBar";
import { Menu, Search } from "lucide-react";

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent"
      }`}
    >
      <AlertBar />
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Mobile */}
        <button
          onClick={() => setShowSubmenu(!showSubmenu)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Link href="/" className="flex items-center">
          {/* Desktop logo */}
          <Menu
            className="h-6 w-6 hidden md:block"
            onClick={() => setShowSubmenu(!showSubmenu)}
          />
          {/* Mobile logo */}
          <svg
            className="md:hidden"
            width="20"
            height="40"
            viewBox="0 0 20 40"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.8347 12.1442V22.0376L5.62587 11.3203C5.1974 10.724 4.9949 9.99207 5.06996 9.26121C5.29156 7.09594 6.22738 4.71615 9.29189 4.38866C9.51377 4.36301 9.74574 4.34965 9.98808 4.34965C9.99627 4.34965 10.0045 4.35018 10.0127 4.35018C10.0192 4.35018 10.026 4.34965 10.0326 4.34965C10.1095 4.34965 10.1829 4.35346 10.2572 4.35565C10.2771 4.35647 10.2973 4.35646 10.3172 4.35728C13.2805 4.47163 14.3268 6.36565 14.6737 8.34644C14.7815 8.87725 14.835 9.43808 14.835 10.0267V10.4639H19.2133V8.47959C19.2133 6.29194 18.4186 4.39904 16.7844 2.69253C15.9839 1.89372 15.0091 1.23191 13.8967 0.737396C12.7963 0.248067 11.559 0 10.2176 0H0.751953V29.5475H4.99818V18.017L13.7802 28.0148C13.9898 28.3241 14.3629 28.6914 14.502 29.0694C14.7269 29.6804 14.838 30.3332 14.8355 31.0234C14.8293 32.5271 14.1361 33.9561 12.9429 34.8715C12.7999 34.9814 12.6629 35.0742 12.5412 35.1375L12.5401 35.1384C11.8725 35.4836 11.0006 35.6512 9.87401 35.6512C8.13857 35.6512 6.86517 35.1143 6.08956 34.0546C5.46705 33.2078 5.10953 32.2578 5.02165 31.2278H0.751953V39.9992L9.39069 39.9888C9.5719 39.9959 9.722 40 9.87401 40C11.6245 40 13.1181 39.7154 14.3134 39.1537C15.4965 38.5972 16.4621 37.8263 17.1834 36.8618C17.8804 35.9208 18.3973 34.7503 18.7174 33.3849C19.0465 31.9748 19.2136 30.4219 19.2136 28.7705C19.2136 28.6589 19.2409 15.4828 19.2479 12.1445H14.8347V12.1442Z"></path>
            <path d="M10.0323 4.35018C10.0257 4.35018 10.0189 4.35073 10.0124 4.35073C10.0951 4.35101 10.1764 4.35318 10.2569 4.35618C10.1827 4.35372 10.1095 4.35018 10.0323 4.35018Z"></path>
          </svg>
        </Link>
        {/* For large screens: show text */}
        {/* <div className="hidden md:block uppercase font-bold text-2xl">
          Serge DeNimes
        </div> */}

        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="stroke-1 h-6 w-6" />
          </button>
          <Link href="/cart" aria-label="Cart">
            <svg width="20" height="20" stroke="currentColor" fill="none">
              <rect x="3" y="5" width="14" height="14" rx="2" strokeWidth="1" />
              <path d="M6 5c0-2 2-4 4-4s4 2 4 4" strokeWidth="1" fill="none" />
            </svg>
          </Link>
        </div>
      </div>
      <nav className="hidden md:flex justify-center gap-6 py-3 text-sm font-medium">
        <Link href="/collections/all-2025">Shop All</Link>
        <Link href="/collections/new-in">New In</Link>
        <Link href="/collections/bestsellers">Best Sellers</Link>
        <Link href="/collections/gold">Shop Gold</Link>
        <Link href="/collections/silver">Shop Silver</Link>
        <Link href="/collections/perle" className="font-bold text-green-900">
          PERLE
        </Link>
        <Link href="/collections/modern-rodeo">Modern Rodeo</Link>
      </nav>
      {/* Mobile side menu */}
      {showSubmenu && (
        <div className="fixed inset-0 bg-black/50 z-50 text-black">
          <div className="absolute top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-lg p-6 overflow-y-auto">
            <button
              className="mb-6"
              onClick={() => setShowSubmenu(false)}
              aria-label="Close menu"
            >
              Close ✕
            </button>
            <ul className="space-y-4">
              <li>
                <Link href="/collections/all-2025">Shop All</Link>
              </li>
              <li>
                <Link href="/collections/new-in">New In</Link>
              </li>
              <li>
                <Link href="/collections/bestsellers">Best Sellers</Link>
              </li>
              <li>
                <Link href="/collections/gold">Shop Gold</Link>
              </li>
              <li>
                <Link href="/collections/silver">Shop Silver</Link>
              </li>
              <li>
                <Link
                  href="/collections/perle"
                  className="font-bold text-green-900"
                >
                  PERLE
                </Link>
              </li>
              <li>
                <Link href="/collections/modern-rodeo">Modern Rodeo</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
