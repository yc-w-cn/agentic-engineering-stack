import { StackDetail } from '@/lib/stack/types';

export const fastGraphRAGDetail: StackDetail = {
  title: 'Fast-GraphRAG',
  description: '快速 GraphRAG，优化图遍历算法提升检索速度',
  sections: [
    {
      title: '核心特性',
      content: [
        '高性能：优化的图遍历算法',
        '快速检索：毫秒级响应时间',
        '并发处理：支持并发查询',
        '可扩展：支持大规模知识图谱',
      ],
    },
    {
      title: '技术架构',
      content: [
        '图索引：高效的图索引结构',
        '缓存机制：多层缓存策略',
        '并行处理：并行图遍历',
        '增量更新：支持增量更新',
      ],
    },
    {
      title: '优化策略',
      content: [
        '图分区：将大图分区处理',
        '预计算：预计算常用路径',
        '索引优化：优化索引结构',
        '查询优化：查询计划优化',
      ],
    },
    {
      title: '应用场景',
      content: [
        '大规模知识库：适合大规模文档集',
        '实时检索：需要快速响应的场景',
        '高并发：高并发查询场景',
        '企业级应用：企业级知识管理',
      ],
    },
  ],
};
