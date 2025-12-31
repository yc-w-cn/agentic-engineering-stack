import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import ComparisonTable from './components/ComparisonTable';
import EmbeddingModelCard from './components/EmbeddingModelCard';
import { embeddingModels } from './data';

export default function EmbeddingModelsComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            Embedding 模型对比
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            Sentence Transformers、OpenAI、Cohere 和 HuggingFace 四大嵌入模型的详细对比
          </p>
        </header>

        <ComparisonTable />

        <section className="mb-8">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            详细介绍
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {embeddingModels.map((model) => (
              <EmbeddingModelCard key={model.name} model={model} />
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            选型建议
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 Sentence Transformers
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要完全控制
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  预算有限
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  有机器学习经验
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要自定义训练
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 OpenAI
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  快速上线
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  预算充足
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  零运维需求
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要高质量嵌入
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 Cohere
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  多语言需求
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  国际化项目
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要长文本支持
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  预算充足
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 HuggingFace
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  研究和实验
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  特定领域需求
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  开源项目
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  学术研究
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
