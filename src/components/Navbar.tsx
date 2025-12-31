'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { stackItems } from '@/lib/stack/items';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === '/';
  const isSubPage = pathname.startsWith('/memory-system/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg:black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[20px] font-bold text-black dark:text:white hover:opacity-70 transition-opacity"
          >
            智能体技术栈
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text:white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {stackItems.map((item) => {
              const isActive = pathname === `/${item.slug}`;
              const isParentActive = isSubPage && item.slug === 'memory-system';

              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`flex items-center gap-2 px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive || isParentActive
                      ? 'text-black dark:text:white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text:white'
                  }`}
                >
                  <span className="text-[11px] font-bold opacity-60">
                    {item.number}
                  </span>
                  <span className="whitespace-nowrap">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
              {stackItems.map((item) => {
                const isActive = pathname === `/${item.slug}`;
                const isParentActive =
                  isSubPage && item.slug === 'memory-system';

                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={closeMenu}
                    className={`px-3 py-2 text-[14px] font-medium transition-colors ${
                      isActive || isParentActive
                        ? 'text-black dark:text:white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text:white'
                    }`}
                  >
                    {item.number} {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
