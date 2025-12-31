import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import ComparisonTable from './components/ComparisonTable';
import DatabaseCard from './components/DatabaseCard';
import { vectorDatabases } from './data';

export default function VectorDatabaseComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            向量数据库对比
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            Weaviate、Chroma 和 Pinecone 三大主流向量数据库的详细对比
          </p>
        </header>

        <ComparisonTable />

        <section className="mb-8">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            详细介绍
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {vectorDatabases.map((database) => (
              <DatabaseCard key={database.name} database={database} />
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            选型建议
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 Weaviate
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要企业级功能和可靠性
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  团队有运维能力
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要多模态支持
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要高度定制化
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 Chroma
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  快速原型开发
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  学习和教学用途
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  资源有限的环境
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  Python/JavaScript 开发
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 Pinecone
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要零运维
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  预算充足
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  快速部署生产环境
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  高并发场景
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
