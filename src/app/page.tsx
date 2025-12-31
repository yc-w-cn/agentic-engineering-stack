import Link from 'next/link';

import Footer from '@/components/Footer';
import { stackItems } from '@/lib/stack/items';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <main className="flex-1 max-w-7xl mx-auto px-8 py-16">
        <header className="mb-24">
          <h1 className="text-[64px] font-bold leading-tight text-black dark:text-white mb-8">
            Agent 技术栈
          </h1>
          <p className="text-[24px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
            探索智能 Agent 的核心组成部分，理解构建自主 AI 系统的关键技术
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="border-l-2 border-black dark:border-white pl-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors block"
            >
              <div className="text-[32px] font-bold text-gray-300 dark:text-gray-700 mb-3">
                {item.number}
              </div>
              <h2 className="text-[20px] font-semibold text-black dark:text-white mb-3">
                {item.title}
              </h2>
              <p className="text-[14px] leading-6 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
