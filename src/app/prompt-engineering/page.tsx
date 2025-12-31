import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { promptEngineeringDetail } from './data';

const relatedModules = [
  {
    slug: 'llm',
    title: '大语言模型',
    description: '作为 Agent 的核心大脑，提供理解、推理和生成能力',
  },
  {
    slug: 'memory-system',
    title: '记忆系统',
    description: '短期和长期记忆帮助 Agent 维持上下文和经验',
  },
  {
    slug: 'tool-calling',
    title: '工具调用',
    description: '让 Agent 能够使用外部工具和 API 执行实际任务',
  },
];

export default function PromptEngineeringPage() {
  const detail = promptEngineeringDetail;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <div className="text-[48px] font-bold text-gray-200 dark:text-gray-800 mb-3">
            02
          </div>
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            {detail.title}
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            {detail.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
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

        <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            相关模块
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedModules.map((module) => (
              <Link
                key={module.slug}
                href={`/${module.slug}`}
                className="border border-gray-200 dark:border-gray-800 px-4 py-3 hover:border-black dark:hover:border:white transition-colors"
              >
                <h3 className="text-[16px] font-semibold text-black dark:text:white mb-2">
                  {module.title}
                </h3>
                <p className="text-[13px] leading-5 text-gray-600 dark:text-gray-400">
                  {module.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
