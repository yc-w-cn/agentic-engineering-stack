export default function Home() {
  const components = [
    {
      number: '01',
      title: '大语言模型',
      description: '作为 Agent 的核心大脑，提供理解、推理和生成能力',
    },
    {
      number: '02',
      title: '提示工程',
      description: '精心设计的提示词引导模型产生期望的行为和输出',
    },
    {
      number: '03',
      title: '工具调用',
      description: 'Agent 通过 API 调用外部工具，扩展能力边界',
    },
    {
      number: '04',
      title: '记忆系统',
      description: '短期和长期记忆帮助 Agent 维持上下文和经验',
    },
    {
      number: '05',
      title: '规划与推理',
      description: '将复杂任务分解为可执行的子任务序列',
    },
    {
      number: '06',
      title: '多模态能力',
      description: '处理文本、图像、音频等多种输入输出形式',
    },
    {
      number: '07',
      title: '自主性',
      description: '独立决策和执行任务，无需人工持续干预',
    },
    {
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
            <div
              key={component.number}
              className="border-l-4 border-black dark:border-white pl-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="text-[48px] font-bold text-gray-300 dark:text-gray-700 mb-4">
                {component.number}
              </div>
              <h2 className="text-[32px] font-semibold text-black dark:text-white mb-4">
                {component.title}
              </h2>
              <p className="text-[16px] leading-[28px] text-gray-600 dark:text-gray-400">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] text-gray-500 dark:text-gray-500">
              基于 Swiss 设计风格构建 · 专注于清晰与功能性
            </p>
            <p className="text-[14px] text-gray-400 dark:text-gray-600">
              版本: v{process.env.APP_VERSION} · 构建时间:{' '}
              {process.env.BUILD_DATE}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
