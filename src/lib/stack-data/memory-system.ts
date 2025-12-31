import { StackDetail } from './types';

export const memorySystemDetail: StackDetail = {
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
};
