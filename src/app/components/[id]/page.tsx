import Link from 'next/link';
import { notFound } from 'next/navigation';

const componentDetails: Record<
  string,
  {
    title: string;
    description: string;
    sections: {
      title: string;
      content: string[];
    }[];
  }
> = {
  '01': {
    title: '大语言模型',
    description: '作为 Agent 的核心大脑，提供理解、推理和生成能力',
    sections: [
      {
        title: '核心技术',
        content: [
          'Transformer 架构：基于自注意力机制的深度神经网络架构',
          '预训练与微调：在大规模语料上预训练，再针对特定任务微调',
          '上下文窗口：支持长文本理解，通常从 4K 到 128K tokens 不等',
          '多语言支持：原生支持多种语言的理解和生成能力',
        ],
      },
      {
        title: '主要模型',
        content: [
          'GPT 系列：OpenAI 的生成式预训练变换器模型',
          'Claude：Anthropic 开发的安全、有用、诚实的 AI 助手',
          'Llama：Meta 开源的大语言模型系列',
          'Qwen：阿里巴巴通义千问系列模型',
        ],
      },
      {
        title: '应用场景',
        content: [
          '自然语言理解：文本分类、情感分析、实体识别',
          '内容生成：文章写作、代码生成、创意写作',
          '对话系统：智能客服、虚拟助手、教育辅导',
          '知识问答：基于知识的问答、文档检索',
        ],
      },
      {
        title: '技术挑战',
        content: [
          '幻觉问题：模型可能生成不准确或虚构的信息',
          '上下文限制：长文本处理仍受限于上下文窗口大小',
          '计算成本：大模型推理需要大量计算资源',
          '实时性：推理延迟影响实时交互体验',
        ],
      },
    ],
  },
  '02': {
    title: '提示工程',
    description: '精心设计的提示词引导模型产生期望的行为和输出',
    sections: [
      {
        title: '核心原则',
        content: [
          '清晰明确：使用简洁、具体的语言描述任务',
          '结构化输出：指定输出格式（JSON、表格等）',
          '少样本学习：提供示例帮助模型理解任务',
          '思维链：引导模型逐步推理复杂问题',
        ],
      },
      {
        title: '常用技巧',
        content: [
          '角色设定：为模型分配特定角色和视角',
          '分步指导：将复杂任务分解为多个步骤',
          '约束条件：明确限制和边界条件',
          '示例驱动：通过正反示例说明期望行为',
        ],
      },
      {
        title: '高级技术',
        content: [
          'Few-shot Prompting：少量样本学习',
          'Chain of Thought：思维链推理',
          'ReAct：推理-行动循环',
          'Self-Consistency：自我一致性验证',
        ],
      },
      {
        title: '最佳实践',
        content: [
          '迭代优化：持续测试和改进提示词',
          '版本管理：追踪提示词的变更历史',
          'A/B 测试：比较不同提示词的效果',
          '自动化评估：建立提示词质量评估体系',
        ],
      },
    ],
  },
  '03': {
    title: '工具调用',
    description: 'Agent 通过 API 调用外部工具，扩展能力边界',
    sections: [
      {
        title: '工具类型',
        content: [
          'API 调用：RESTful API、GraphQL 接口',
          '数据库查询：SQL、NoSQL 数据库操作',
          '文件操作：读写、解析各种格式文件',
          '计算工具：数学计算、数据分析、可视化',
        ],
      },
      {
        title: '调用机制',
        content: [
          '函数调用：模型生成结构化的函数调用参数',
          '工具注册：定义工具的名称、描述和参数',
          '参数解析：从自然语言中提取结构化参数',
          '结果整合：将工具返回结果整合到对话中',
        ],
      },
      {
        title: '常用工具',
        content: [
          '搜索引擎：Google、Bing、DuckDuckGo',
          '代码执行：Python、JavaScript 解释器',
          '数据分析：Pandas、NumPy、Matplotlib',
          'API 集成：OpenAI、Anthropic、各种第三方服务',
        ],
      },
      {
        title: '安全考虑',
        content: [
          '权限控制：限制工具访问范围',
          '输入验证：验证和清理工具参数',
          '错误处理：优雅处理工具调用失败',
          '审计日志：记录所有工具调用行为',
        ],
      },
    ],
  },
  '04': {
    title: '记忆系统',
    description: '短期和长期记忆帮助 Agent 维持上下文和经验',
    sections: [
      {
        title: '记忆类型',
        content: [
          '短期记忆：当前对话上下文，通常限制在最近的几轮对话',
          '长期记忆：持久化存储的重要信息、用户偏好、历史经验',
          '语义记忆：通用知识和事实信息',
          '情景记忆：特定事件和经历',
        ],
      },
      {
        title: '存储方案',
        content: [
          '向量数据库：Chroma、Pinecone、Weaviate',
          '关系数据库：PostgreSQL、MySQL',
          '键值存储：Redis、Memcached',
          '图数据库：Neo4j、ArangoDB',
        ],
      },
      {
        title: '检索机制',
        content: [
          '语义搜索：基于向量相似度的信息检索',
          '关键词匹配：传统文本搜索技术',
          '混合检索：结合语义和关键词搜索',
          '时间窗口：按时间范围过滤记忆',
        ],
      },
      {
        title: '记忆管理',
        content: [
          '重要性评分：评估记忆信息的重要性',
          '遗忘机制：自动清理过期或不重要的记忆',
          '总结压缩：将长对话总结为简洁记忆',
          '冲突解决：处理记忆中的矛盾信息',
        ],
      },
    ],
  },
  '05': {
    title: '规划与推理',
    description: '将复杂任务分解为可执行的子任务序列',
    sections: [
      {
        title: '规划策略',
        content: [
          '任务分解：将复杂目标分解为可管理的子任务',
          '依赖分析：识别任务之间的依赖关系',
          '优先级排序：根据重要性和紧急性排序任务',
          '资源分配：合理分配计算和时间资源',
        ],
      },
      {
        title: '推理方法',
        content: [
          '演绎推理：从一般规则推导具体结论',
          '归纳推理：从具体案例总结一般规律',
          '类比推理：通过相似性进行推理',
          '因果推理：分析因果关系和影响链',
        ],
      },
      {
        title: '执行框架',
        content: [
          'ReAct：推理-行动循环模式',
          'Plan-and-Solve：先规划后执行',
          'Tree of Thoughts：思维树探索多种路径',
          'Self-Reflection：自我反思和调整',
        ],
      },
      {
        title: '优化技术',
        content: [
          '动态调整：根据执行情况调整计划',
          '回溯机制：失败时回退到之前状态',
          '并行执行：同时执行独立任务',
          '缓存策略：重用中间结果',
        ],
      },
    ],
  },
  '06': {
    title: '多模态能力',
    description: '处理文本、图像、音频等多种输入输出形式',
    sections: [
      {
        title: '模态类型',
        content: [
          '文本：自然语言处理的核心模态',
          '图像：计算机视觉、图像生成、图像理解',
          '音频：语音识别、语音合成、音乐生成',
          '视频：视频理解、视频生成、视频编辑',
        ],
      },
      {
        title: '技术架构',
        content: [
          '统一编码器：将不同模态映射到同一表示空间',
          '多模态融合：整合不同模态的信息',
          '跨模态对齐：建立模态之间的对应关系',
          '模态转换：在不同模态之间进行转换',
        ],
      },
      {
        title: '应用场景',
        content: [
          '视觉问答：基于图像回答问题',
          '图像描述：生成图像的文字描述',
          '语音助手：语音交互的智能助手',
          '内容创作：图文音视频的多模态创作',
        ],
      },
      {
        title: '技术挑战',
        content: [
          '数据对齐：不同模态数据的对齐和标注',
          '计算复杂度：多模态处理需要更多计算资源',
          '模态平衡：避免某一模态主导决策',
          '评估指标：建立多模态任务的评价标准',
        ],
      },
    ],
  },
  '07': {
    title: '自主性',
    description: '独立决策和执行任务，无需人工持续干预',
    sections: [
      {
        title: '自主级别',
        content: [
          'L1：完全依赖人工指导',
          'L2：在限定范围内自主决策',
          'L3：能够处理意外情况',
          'L4：完全自主，设置目标后独立执行',
        ],
      },
      {
        title: '决策机制',
        content: [
          '目标设定：明确任务目标和成功标准',
          '策略选择：根据情况选择最优策略',
          '风险评估：评估行动的风险和收益',
          '执行监控：监控执行过程并调整',
        ],
      },
      {
        title: '关键能力',
        content: [
          '环境感知：理解和感知当前环境状态',
          '状态管理：维护内部状态和上下文',
          '错误恢复：从错误中恢复并继续执行',
          '学习适应：从经验中学习并改进',
        ],
      },
      {
        title: '安全机制',
        content: [
          '边界约束：设定操作的安全边界',
          '人工干预：关键决策需要人工确认',
          '行为监控：实时监控 Agent 行为',
          '紧急停止：提供紧急停止机制',
        ],
      },
    ],
  },
  '08': {
    title: '协作能力',
    description: '多个 Agent 之间协同工作，完成复杂目标',
    sections: [
      {
        title: '协作模式',
        content: [
          '层级协作：主从关系的 Agent 协作',
          '平等协作：多个 Agent 平等协作',
          '竞争协作：通过竞争优化结果',
          '混合协作：结合多种协作模式',
        ],
      },
      {
        title: '通信机制',
        content: [
          '消息传递：Agent 之间的消息交换',
          '共享状态：共享内存或数据库',
          '事件驱动：基于事件的异步通信',
          '协议定义：标准化的通信协议',
        ],
      },
      {
        title: '协调策略',
        content: [
          '任务分配：根据能力分配任务',
          '冲突解决：处理 Agent 之间的冲突',
          '资源调度：协调共享资源的使用',
          '同步机制：保持 Agent 之间的同步',
        ],
      },
      {
        title: '应用场景',
        content: [
          '软件开发：多个 Agent 协作开发软件',
          '研究分析：分工合作进行数据分析',
          '项目管理：不同 Agent 负责不同项目阶段',
          '客户服务：多个 Agent 协作处理复杂请求',
        ],
      },
    ],
  },
};

export default function ComponentDetail({
  params,
}: {
  params: { id: string };
}) {
  const detail = componentDetails[params.id];

  if (!detail) {
    notFound();
  }

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
            {params.id}
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

        <footer className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-[16px] text-gray-500 dark:text-gray-500">
            基于 Swiss 设计风格构建 · 专注于清晰与功能性
          </p>
        </footer>
      </main>
    </div>
  );
}
