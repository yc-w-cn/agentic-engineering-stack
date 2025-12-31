export interface EvaluationTool {
  name: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  pricing: string;
}

export const evaluationTools: EvaluationTool[] = [
  {
    name: 'RAGAS',
    description: '开源的 RAG 系统评估框架，提供全面的评估指标',
    features: [
      '多种评估指标（Faithfulness、Answer Relevance、Context Relevance）',
      '自动化测试数据生成',
      '支持自定义评估指标',
      'Python SDK 易于集成',
      '详细的评估报告',
      '支持批量评估',
    ],
    pros: [
      '开源免费',
      '社区活跃，文档完善',
      '指标全面',
      '易于集成到 CI/CD',
      '支持自定义扩展',
    ],
    cons: [
      '需要一定的配置',
      '学习曲线中等',
      '大规模评估需要资源',
    ],
    useCases: [
      'RAG 系统质量评估',
      '持续集成测试',
      '性能监控',
      'A/B 测试',
    ],
    pricing: '完全开源免费',
  },
  {
    name: 'TruLens',
    description: '用于评估 RAG 系统的可解释性和性能',
    features: [
      '可解释性评估',
      '反馈机制',
      '支持多种 LLM',
      '可视化分析',
      '实时监控',
      '集成 LangChain',
    ],
    pros: [
      '强大的可解释性功能',
      '可视化效果好',
      '支持反馈循环',
      '与 LangChain 深度集成',
    ],
    cons: [
      '功能相对专一',
      '社区规模较小',
      '文档相对简单',
    ],
    useCases: [
      'RAG 系统调试',
      '可解释性分析',
      '反馈优化',
      '性能监控',
    ],
    pricing: '开源免费，企业版收费',
  },
  {
    name: 'DeepEval',
    description: '自动化 RAG 评估工具，支持多种评估指标',
    features: [
      '自动化评估流程',
      '多种预置指标',
      '支持自定义指标',
      '实时评估',
      '结果导出',
      '团队协作功能',
    ],
    pros: [
      '自动化程度高',
      '易于使用',
      '支持团队协作',
      '实时反馈',
    ],
    cons: [
      '高级功能需要付费',
      '自定义能力有限',
      '依赖云服务',
    ],
    useCases: [
      '快速评估',
      '团队协作',
      '持续监控',
      '自动化测试',
    ],
    pricing: '免费版 + 企业版',
  },
  {
    name: 'RAGTriever',
    description: '专注于检索质量的评估工具',
    features: [
      '检索质量评估',
      '相关性分析',
      '性能基准测试',
      '多维度指标',
      '轻量级部署',
      '快速评估',
    ],
    pros: [
      '专注于检索质量',
      '轻量级',
      '快速评估',
      '易于部署',
    ],
    cons: [
      '功能相对单一',
      '不支持生成评估',
      '社区较小',
    ],
    useCases: [
      '检索系统优化',
      '性能基准测试',
      '相关性分析',
      '快速验证',
    ],
    pricing: '开源免费',
  },
];

export const comparisonTable = {
  headers: ['特性', 'RAGAS', 'TruLens', 'DeepEval', 'RAGTriever'],
  rows: [
    {
      feature: '开源',
      ragas: '✓',
      trulens: '✓',
      deepeval: '部分',
      ragtriever: '✓',
    },
    {
      feature: '评估指标数量',
      ragas: '多',
      trulens: '中等',
      deepeval: '多',
      ragtriever: '少',
    },
    {
      feature: '自动化程度',
      ragas: '高',
      trulens: '中等',
      deepeval: '高',
      ragtriever: '中等',
    },
    {
      feature: '可视化',
      ragas: '基础',
      trulens: '强',
      deepeval: '强',
      ragtriever: '基础',
    },
    {
      feature: '自定义指标',
      ragas: '✓',
      trulens: '✓',
      deepeval: '✓',
      ragtriever: '✗',
    },
    {
      feature: 'CI/CD 集成',
      ragas: '✓',
      trulens: '✓',
      deepeval: '✓',
      ragtriever: '✓',
    },
    {
      feature: '学习曲线',
      ragas: '中等',
      trulens: '中等',
      deepeval: '简单',
      ragtriever: '简单',
    },
    {
      feature: '社区活跃度',
      ragas: '高',
      trulens: '中等',
      deepeval: '中等',
      ragtriever: '低',
    },
    {
      feature: '主要优势',
      ragas: '指标全面',
      trulens: '可解释性强',
      deepeval: '自动化',
      ragtriever: '轻量快速',
    },
    {
      feature: '适用场景',
      ragas: '全面评估',
      trulens: '调试分析',
      deepeval: '快速评估',
      ragtriever: '检索优化',
    },
  ],
};
