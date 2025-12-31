import { StackDetail } from '@/lib/stack/types';

export const ragDetail: StackDetail = {
  title: 'RAG 检索增强生成',
  description: '结合检索和生成，为 LLM 提供外部知识，提升回答准确性和时效性',
  sections: [
    {
      title: '核心原理',
      content: [
        '文档索引：将知识库文档切分并转换为向量存储',
        '语义检索：根据用户问题检索最相关的文档片段',
        '上下文注入：将检索结果作为上下文注入到 LLM 提示中',
        '答案生成：LLM 基于检索到的知识生成准确回答',
      ],
    },
    {
      title: '工作流程',
      content: [
        '文档预处理：清洗、切分、去重原始文档',
        '向量化：使用嵌入模型将文本转换为向量',
        '检索：基于问题向量在向量数据库中搜索',
        '排序：对检索结果进行相关性排序和过滤',
        '生成：将检索结果和问题一起输入 LLM 生成答案',
      ],
    },
    {
      title: '关键技术',
      content: [
        '嵌入模型：OpenAI text-embedding、Cohere、Sentence Transformers',
        '向量数据库：Pinecone、Chroma、Weaviate、Qdrant',
        '检索策略：语义搜索、混合检索、重排序',
        '上下文管理：窗口大小、重叠度、相关性阈值',
      ],
    },
    {
      title: '优化策略',
      content: [
        '混合检索：结合语义搜索和关键词匹配提升召回率',
        '重排序：使用交叉编码器对检索结果二次排序',
        '查询扩展：通过同义词、相关词扩展查询范围',
        '多轮检索：根据初步结果进行迭代检索',
      ],
    },
  ],
};
