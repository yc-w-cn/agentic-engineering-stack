export interface EmbeddingModel {
  name: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  pricing: string;
}

export const embeddingModels: EmbeddingModel[] = [
  {
    name: 'Sentence Transformers',
    description: '基于 BERT 的句子嵌入模型，提供高质量的语义表示',
    features: [
      '基于预训练的 BERT、RoBERTa 等模型',
      '支持多种语言',
      '提供多种预训练模型',
      '支持微调自定义任务',
      '易于集成到 Python 项目',
      '支持批量处理',
    ],
    pros: [
      '开源免费',
      '社区活跃，文档完善',
      '模型质量高',
      '支持自定义训练',
      '易于部署',
      '性能优秀',
    ],
    cons: [
      '需要一定的机器学习知识',
      '部署需要 GPU 资源',
      '推理速度相对较慢',
      '模型文件较大',
    ],
    useCases: [
      '语义搜索',
      '文本聚类',
      '相似度计算',
      '推荐系统',
      '文本分类',
    ],
    pricing: '完全开源免费',
  },
  {
    name: 'OpenAI Embeddings',
    description: 'OpenAI 提供的商业化嵌入服务，简单易用',
    features: [
      'RESTful API',
      '多种模型选择（text-embedding-3-small、text-embedding-3-large）',
      '支持多语言',
      '自动处理文本预处理',
      '高准确率',
      '稳定可靠',
    ],
    pros: [
      '简单易用，无需部署',
      '性能优秀',
      '持续更新优化',
      '高可用性',
      '无需维护',
      '支持大规模调用',
    ],
    cons: [
      '需要付费',
      '数据发送到第三方',
      '有调用频率限制',
      '无法自定义模型',
    ],
    useCases: [
      '生产环境',
      '快速原型开发',
      '企业应用',
      '需要高质量嵌入的场景',
      '无需自建基础设施',
    ],
    pricing: '按使用量计费，text-embedding-3-small: $0.02/1M tokens',
  },
  {
    name: 'Cohere Embeddings',
    description: '专注于多语言的嵌入模型，支持 100+ 种语言',
    features: [
      '支持 100+ 种语言',
      '多种模型选择（embed-english-v3.0、embed-multilingual-v3.0）',
      'RESTful API',
      '高准确率',
      '支持长文本',
      '实时 API',
    ],
    pros: [
      '多语言支持强大',
      'API 简单易用',
      '性能优秀',
      '支持长文本',
      '持续更新',
      '提供免费试用',
    ],
    cons: [
      '需要付费',
      '数据发送到第三方',
      '有调用频率限制',
      '无法自定义模型',
    ],
    useCases: [
      '多语言应用',
      '国际化项目',
      '跨语言搜索',
      '企业应用',
      '需要多语言支持的场景',
    ],
    pricing: '按使用量计费，embed-english-v3.0: $0.10/1M tokens',
  },
  {
    name: 'HuggingFace Embeddings',
    description: 'HuggingFace 平台上的开源嵌入模型集合',
    features: [
      '丰富的模型选择',
      '支持多种框架（PyTorch、TensorFlow）',
      'Transformers 库集成',
      '支持自定义训练',
      '社区贡献模型',
      '模型 Hub 平台',
    ],
    pros: [
      '模型选择丰富',
      '开源免费',
      '社区活跃',
      '易于集成',
      '支持多种框架',
      '持续更新',
    ],
    cons: [
      '需要一定的技术知识',
      '部署需要资源',
      '模型质量参差不齐',
      '需要自行评估模型性能',
    ],
    useCases: [
      '研究和实验',
      '自定义需求',
      '特定领域应用',
      '开源项目',
      '学术研究',
    ],
    pricing: '完全开源免费，云服务按使用量计费',
  },
];

export const comparisonTable = {
  headers: ['特性', 'Sentence Transformers', 'OpenAI', 'Cohere', 'HuggingFace'],
  rows: [
    {
      feature: '部署方式',
      sentenceTransformers: '自托管',
      openai: '托管服务',
      cohere: '托管服务',
      huggingface: '自托管/云服务',
    },
    {
      feature: '开源',
      sentenceTransformers: '✓',
      openai: '✗',
      cohere: '✗',
      huggingface: '✓',
    },
    {
      feature: 'API 类型',
      sentenceTransformers: 'Python SDK',
      openai: 'REST API',
      cohere: 'REST API',
      huggingface: 'Python/JS SDK + API',
    },
    {
      feature: '多语言支持',
      sentenceTransformers: '✓',
      openai: '✓',
      cohere: '✓ (100+)',
      huggingface: '✓',
    },
    {
      feature: '自定义训练',
      sentenceTransformers: '✓',
      openai: '✗',
      cohere: '✗',
      huggingface: '✓',
    },
    {
      feature: '推理速度',
      sentenceTransformers: '中等',
      openai: '快',
      cohere: '快',
      huggingface: '中等',
    },
    {
      feature: '学习曲线',
      sentenceTransformers: '中等',
      openai: '简单',
      cohere: '简单',
      huggingface: '中等',
    },
    {
      feature: '运维复杂度',
      sentenceTransformers: '高',
      openai: '无',
      cohere: '无',
      huggingface: '高',
    },
    {
      feature: '性能',
      sentenceTransformers: '高',
      openai: '高',
      cohere: '高',
      huggingface: '中等',
    },
    {
      feature: '适用场景',
      sentenceTransformers: '自建应用',
      openai: '生产环境',
      cohere: '多语言应用',
      huggingface: '研究实验',
    },
  ],
};
