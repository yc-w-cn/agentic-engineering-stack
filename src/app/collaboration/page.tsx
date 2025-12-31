import Link from 'next/link';

import Footer from '@/components/Footer';
import { componentDetails } from '@/lib/component-data';

export default function CollaborationPage() {
  const detail = componentDetails.collaboration;

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-12 transition-colors"
        >
          <span className="mr-2">←</span>
          返回首页
        </Link>

        <header className="mb-16">
          <div className="text-[80px] font-bold text-gray-200 dark:text-gray-800 mb-6">
            08
          </div>
          <h1 className="text-[56px] font-bold text-black dark:text-white mb-6">
            {detail.title}
          </h1>
          <p className="text-[24px] leading-relaxed text-gray-600 dark:text-gray-400">
            {detail.description}
          </p>
        </header>

        <div className="space-y-12">
          {detail.sections.map((section, index) => (
            <section
              key={index}
              className="border-t border-gray-200 dark:border-gray-800 pt-8"
            >
              <h2 className="text-[28px] font-semibold text-black dark:text-white mb-6">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[18px] leading-8 text-gray-700 dark:text-gray-300 pl-6 relative"
                  >
                    <span className="absolute left-0 top-2 w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
