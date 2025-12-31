import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { memorySystemDetail } from './data';

const subModules = [
  {
    slug: 'memory-system/rag',
    title: 'RAG 检索增强生成',
    description: '结合检索和生成，为 LLM 提供外部知识，提升回答准确性和时效性',
  },
  {
    slug: 'memory-system/vector-database',
    title: '向量数据库',
    description: '高效存储和检索高维向量，支持语义搜索和相似度匹配',
  },
  {
    slug: 'memory-system/knowledge-graph',
    title: '知识图谱',
    description: '结构化存储实体和关系，支持复杂推理和知识发现',
  },
];

export default function MemorySystemPage() {
  const detail = memorySystemDetail;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <div className="text-[48px] font-bold text-gray-200 dark:text-gray-800 mb-3">
            04
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
            {subModules.map((module) => (
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
