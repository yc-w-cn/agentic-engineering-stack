import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { vectorDatabaseDetail } from './data';

export default function VectorDatabasePage() {
  const detail = vectorDatabaseDetail;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            {detail.title}
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            {detail.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {detail.sections.map((section, index) => (
            <div
              key={index}
              className="border-l-2 border-black dark:border:white pl-5 py-4"
            >
              <h2 className="text-[18px] font-semibold text-black dark:text:white mb-3">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[14px] leading-6 text-gray-700 dark:text-gray-300 pl-5 relative"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-black dark:bg:white rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
