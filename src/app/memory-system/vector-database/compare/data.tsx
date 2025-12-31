export interface VectorDatabase {
  name: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  pricing: string;
}

export const vectorDatabases: VectorDatabase[] = [
  {
    name: 'Weaviate',
    description: '开源的向量搜索引擎，支持模块化和多模态数据',
    features: [
      'GraphQL API 和 RESTful API',
      '内置向量化模块（OpenAI、Cohere、HuggingFace）',
      '多模态支持（文本、图像、音频）',
      'Schema 验证和数据建模',
      '实时过滤和聚合查询',
      '水平扩展能力',
    ],
    pros: [
      '开源免费，可自托管',
      '模块化架构，易于扩展',
      '支持多种嵌入模型',
      'GraphQL API 灵活易用',
      '社区活跃，文档完善',
    ],
    cons: [
      '学习曲线较陡峭',
      '需要一定的运维经验',
      '大规模部署需要更多资源',
      '性能优化需要深入理解',
    ],
    useCases: [
      '语义搜索',
      '多模态检索',
      '知识图谱构建',
      '推荐系统',
      '企业级应用',
    ],
    pricing: '开源免费，云服务按使用量计费',
  },
  {
    name: 'Chroma',
    description: '轻量级开源向量数据库，专注于简单易用',
    features: [
      '简单的 Python 和 JavaScript API',
      '本地持久化存储',
      '支持多种嵌入模型',
      '元数据过滤',
      '轻量级部署',
      '快速集成',
    ],
    pros: [
      '极其简单易用',
      '快速上手，适合原型开发',
      '轻量级，资源占用少',
      'Python/JavaScript 生态集成好',
      '适合本地开发和测试',
    ],
    cons: [
      '不适合大规模生产环境',
      '功能相对简单',
      '扩展性有限',
      '高级功能较少',
    ],
    useCases: [
      '快速原型开发',
      '个人项目',
      '教育和学习',
      '小型应用',
      '本地测试',
    ],
    pricing: '完全开源免费',
  },
  {
    name: 'Pinecone',
    description: '托管式向量数据库服务，专注于易用性和性能',
    features: [
      '完全托管服务',
      '自动扩展和负载均衡',
      '高性能索引算法',
      '实时更新和删除',
      '元数据过滤',
      '多区域部署',
    ],
    pros: [
      '零运维，开箱即用',
      '高性能和低延迟',
      '自动扩展，无需管理',
      '企业级可靠性',
      '优秀的文档和支持',
    ],
    cons: [
      '价格较高',
      '数据存储在第三方',
      '自定义能力有限',
      '依赖云服务',
    ],
    useCases: [
      '企业级生产环境',
      '高并发应用',
      '需要快速部署的项目',
      '对性能要求高的场景',
      '团队资源有限的项目',
    ],
    pricing: '按使用量计费，起步价 $70/月',
  },
];

export const comparisonTable = {
  headers: ['特性', 'Weaviate', 'Chroma', 'Pinecone'],
  rows: [
    {
      feature: '部署方式',
      weaviate: '自托管/云服务',
      chroma: '自托管',
      pinecone: '托管服务',
    },
    {
      feature: '开源',
      weaviate: '✓',
      chroma: '✓',
      pinecone: '✗',
    },
    {
      feature: 'API 类型',
      weaviate: 'GraphQL + REST',
      chroma: 'Python/JS SDK',
      pinecone: 'REST + SDK',
    },
    {
      feature: '多模态支持',
      weaviate: '✓',
      chroma: '✓',
      pinecone: '✓',
    },
    {
      feature: '元数据过滤',
      weaviate: '✓',
      chroma: '✓',
      pinecone: '✓',
    },
    {
      feature: '水平扩展',
      weaviate: '✓',
      chroma: '✗',
      pinecone: '✓',
    },
    {
      feature: '学习曲线',
      weaviate: '中等',
      chroma: '简单',
      pinecone: '简单',
    },
    {
      feature: '运维复杂度',
      weaviate: '高',
      chroma: '低',
      pinecone: '无',
    },
    {
      feature: '性能',
      weaviate: '高',
      chroma: '中等',
      pinecone: '高',
    },
    {
      feature: '适用场景',
      weaviate: '企业级应用',
      chroma: '原型开发',
      pinecone: '生产环境',
    },
  ],
};
