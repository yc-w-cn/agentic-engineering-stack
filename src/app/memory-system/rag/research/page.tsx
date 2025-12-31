import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { knowledgeGraphData } from './components/graphData';
import KnowledgeGraph from './components/KnowledgeGraph';

const ragVariants = [
  {
    slug: 'lightrag',
    title: 'LightRAG',
    description: '轻量级 RAG 框架，支持知识图谱增强的检索和生成',
  },
  {
    slug: 'corrective-rag',
    title: 'Corrective-RAG',
    description: '自我纠正的 RAG 系统，通过反馈机制提升检索和生成质量',
  },
  {
    slug: 'multi-head-rag',
    title: 'Multi-Head RAG',
    description: '多头检索架构，并行检索多个视角的信息',
  },
  {
    slug: 'self-rag',
    title: 'SELF-RAG',
    description: '自我反思的 RAG 框架，通过反思机制优化检索和生成',
  },
  {
    slug: 'sfr-rag',
    title: 'SFR-RAG',
    description: '搜索增强的 RAG 系统，结合搜索引擎和向量检索',
  },
  {
    slug: 'adaptive-rag',
    title: 'Adaptive-RAG',
    description: '自适应 RAG 系统，根据查询复杂度动态调整检索策略',
  },
  {
    slug: 'graphrag',
    title: 'GraphRAG',
    description: '基于知识图谱的 RAG 系统，利用图结构增强检索和生成',
  },
  {
    slug: 'nano-graphrag',
    title: 'Nano-GraphRAG',
    description: '轻量级 GraphRAG，适合小规模知识库的图增强检索',
  },
  {
    slug: 'fast-graphrag',
    title: 'Fast-GraphRAG',
    description: '快速 GraphRAG，优化图遍历算法提升检索速度',
  },
];

export default function RAGResearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg:black">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
        <header className="mb-8">
          <h1 className="text-[32px] font-bold text-black dark:text:white mb-3">
            RAG 研究
          </h1>
          <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
            探索各种 RAG 框架的研究成果和实现方案
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ragVariants.map((variant) => (
            <Link
              key={variant.slug}
              href={`/memory-system/rag/research/${variant.slug}`}
              className="border border-gray-200 dark:border-gray-800 px-4 py-3 hover:border-black dark:hover:border:white transition-colors"
            >
              <h3 className="text-[16px] font-semibold text-black dark:text:white mb-2">
                {variant.title}
              </h3>
              <p className="text-[13px] leading-5 text-gray-600 dark:text-gray-400">
                {variant.description}
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
            研究相关性图谱
          </h2>
          <p className="text-[14px] text-gray-600 dark:text-gray-400 mb-4">
            展示各种 RAG
            框架之间的关联性和相似度，节点颜色代表不同类别，连线粗细表示关联强度
          </p>
          <KnowledgeGraph
            nodes={knowledgeGraphData.nodes}
            links={knowledgeGraphData.links}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
