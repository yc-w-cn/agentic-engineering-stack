import Link from 'next/link';

import Footer from '@/components/Footer';

interface Component {
  slug: string;
  number: string;
  title: string;
  description: string;
}

export default function Home() {
  const components: Component[] = [
    {
      slug: 'llm',
      number: '01',
      title: '大语言模型',
      description: '作为 Agent 的核心大脑，提供理解、推理和生成能力',
    },
    {
      slug: 'prompt-engineering',
      number: '02',
      title: '提示工程',
      description: '精心设计的提示词引导模型产生期望的行为和输出',
    },
    {
      slug: 'tool-calling',
      number: '03',
      title: '工具调用',
      description: 'Agent 通过 API 调用外部工具，扩展能力边界',
    },
    {
      slug: 'memory-system',
      number: '04',
      title: '记忆系统',
      description: '短期和长期记忆帮助 Agent 维持上下文和经验',
    },
    {
      slug: 'planning-reasoning',
      number: '05',
      title: '规划与推理',
      description: '将复杂任务分解为可执行的子任务序列',
    },
    {
      slug: 'multimodal',
      number: '06',
      title: '多模态能力',
      description: '处理文本、图像、音频等多种输入输出形式',
    },
    {
      slug: 'autonomy',
      number: '07',
      title: '自主性',
      description: '独立决策和执行任务，无需人工持续干预',
    },
    {
      slug: 'collaboration',
      number: '08',
      title: '协作能力',
      description: '多个 Agent 之间协同工作，完成复杂目标',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-7xl mx-auto px-8 py-16">
        <header className="mb-24">
          <h1 className="text-[64px] font-bold leading-tight text-black dark:text-white mb-8">
            Agent 技术栈
          </h1>
          <p className="text-[24px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
            探索智能 Agent 的核心组成部分，理解构建自主 AI 系统的关键技术
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/${component.slug}`}
              className="border-l-4 border-black dark:border-white pl-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors block"
            >
              <div className="text-[48px] font-bold text-gray-300 dark:text-gray-700 mb-4">
                {component.number}
              </div>
              <h2 className="text-[32px] font-semibold text-black dark:text-white mb-4">
                {component.title}
              </h2>
              <p className="text-[16px] leading-7 text-gray-600 dark:text-gray-400">
                {component.description}
              </p>
            </Link>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
