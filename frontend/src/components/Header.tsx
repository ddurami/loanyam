'use client';

import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pages } from '@/config/pages';
import { logout, getAccessToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!getAccessToken());
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    router.push('/');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-headerFooter-background text-headerFooter-text relative">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-6" onClick={closeMenu}>
            LOANYAM
          </Link>

          {/* 데스크톱 메뉴 (좌측) */}
          <div className="hidden lg:flex items-center">
            {pages.map((group) => (
              <div key={group.group} className="relative group">
                <span className="cursor-pointer px-4 py-2 block">
                  {group.label}
                </span>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-60">
                  <div className="bg-light-dropdownBg dark:bg-dark-dropdownBg shadow-md rounded-md py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-light-dropdownText dark:text-dark-dropdownText hover:bg-light-dropdownHover dark:hover:bg-dark-dropdownHover whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 데스크톱 메뉴 (우측) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/signin"
            className="px-4 py-2 rounded-md text-headerFooter-text hover:bg-headerFooter-hover transition-colors duration-300"
          >
            로그인
          </Link>
          <div className="p-2 rounded-full hover:bg-headerFooter-hover transition-colors duration-300">
            <ThemeToggle />
          </div>
        </div>

        {/* 햄버거 메뉴 버튼 (모바일) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-headerFooter-background z-50">
            <div className="container mx-auto px-4 py-4">
              {pages.map((group) => (
                <div key={group.group} className="mb-4">
                  <span className="font-semibold block mb-2">
                    {group.label}
                  </span>
                  <div className="ml-4">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-headerFooter-text hover:text-headerFooter-hover"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/signin"
                className="block py-2 text-headerFooter-text hover:bg-headerFooter-hover transition-colors duration-300"
              >
                로그인
              </Link>
              <div className="py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
