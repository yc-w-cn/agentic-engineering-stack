import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import ComparisonTable from './components/ComparisonTable';
import EvaluationToolCard from './components/EvaluationToolCard';
import { evaluationTools } from './data';

export default function EvaluationToolsComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            RAG 评估工具对比
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            RAGAS、TruLens、DeepEval 和 RAGTriever 四大评估工具的详细对比
          </p>
        </header>

        <ComparisonTable />

        <section className="mb-8">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            详细介绍
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {evaluationTools.map((tool) => (
              <EvaluationToolCard key={tool.name} tool={tool} />
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
                选择 RAGAS
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要全面的评估指标
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要自定义评估指标
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要集成到 CI/CD
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  社区支持和文档完善
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 TruLens
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  重视可解释性
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  使用 LangChain
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要可视化分析
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要反馈机制
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 DeepEval
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要快速评估
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  团队协作需求
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要实时监控
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  自动化程度要求高
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-black dark:border:white pl-5 py-4">
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-3">
                选择 RAGTriever
              </h3>
              <ul className="space-y-2">
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  专注于检索质量
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  需要轻量级工具
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  快速验证需求
                </li>
                <li className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-black dark:bg:white rounded-full"></span>
                  性能基准测试
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
