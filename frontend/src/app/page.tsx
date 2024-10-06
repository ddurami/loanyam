import Link from 'next/link';
import { pages } from '@/config/pages';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {pages.map((group) => (
        <div key={group.group} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{group.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-light-cardBg dark:bg-dark-cardBg text-light-cardText dark:text-dark-cardText rounded-lg shadow-md p-6 hover:bg-light-cardHover dark:hover:bg-dark-cardHover hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{page.label}</h3>
                <p className="text-light-cardText dark:text-dark-cardText opacity-80">
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
