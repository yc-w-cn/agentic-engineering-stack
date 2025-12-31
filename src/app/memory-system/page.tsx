import Link from 'next/link';

import Footer from '@/components/Footer';

import { memorySystemDetail } from './data';

const subModules = [
  {
    slug: 'rag',
    title: 'RAG 检索增强生成',
    description: '结合检索和生成，为 LLM 提供外部知识，提升回答准确性和时效性',
  },
  {
    slug: 'vector-database',
    title: '向量数据库',
    description: '高效存储和检索高维向量，支持语义搜索和相似度匹配',
  },
  {
    slug: 'knowledge-graph',
    title: '知识图谱',
    description: '结构化存储实体和关系，支持复杂推理和知识发现',
  },
];

export default function MemorySystemPage() {
  const detail = memorySystemDetail;

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
            04
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

        <section className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
          <h2 className="text-[32px] font-semibold text-black dark:text-white mb-8">
            相关模块
          </h2>
          <div className="space-y-6">
            {subModules.map((module) => (
              <Link
                key={module.slug}
                href={`/${module.slug}`}
                className="block border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4 hover:border-black dark:hover:border-white transition-colors"
              >
                <h3 className="text-[24px] font-semibold text-black dark:text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-[16px] leading-7 text-gray-600 dark:text-gray-400">
                  {module.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
