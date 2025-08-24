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
          <svg
            className="hidden md:block w-40 h-auto"
            viewBox="0 0 1609.5 226.3"
            fill="currentColor"
          ></svg>
          {/* Mobile logo */}
          <svg
            className="md:hidden w-6 h-auto"
            viewBox="0 0 20 40"
            fill="currentColor"
          ></svg>
        </Link>
        <div className="uppercase font-bold text-2xl ">Serge DeNimes</div>
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
