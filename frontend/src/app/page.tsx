import Link from 'next/link';
import { pages } from '@/config/pages';

export default function Home() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {pages.map((group) => (
        <div key={group.group} className="mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            {group.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {group.items.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-light-cardBg dark:bg-dark-cardBg text-light-cardText dark:text-dark-cardText rounded-lg shadow-md p-4 sm:p-6 hover:bg-light-cardHover dark:hover:bg-dark-cardHover hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  {page.label}
                </h3>
                <p className="text-light-cardText dark:text-dark-cardText opacity-80 text-sm sm:text-base">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
