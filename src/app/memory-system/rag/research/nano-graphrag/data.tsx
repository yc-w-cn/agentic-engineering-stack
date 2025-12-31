import { StackDetail } from '@/lib/stack/types';

export const nanoGraphRAGDetail: StackDetail = {
  title: 'Nano-GraphRAG',
  description: '轻量级 GraphRAG，适合小规模知识库的图增强检索',
  sections: [
    {
      title: '核心特性',
      content: [
        '轻量设计：优化的图结构，适合小规模知识库',
        '快速构建：快速构建知识图谱',
        '低资源需求：内存和计算资源需求低',
        '易于部署：简单易用，快速部署',
      ],
    },
    {
      title: '技术架构',
      content: [
        '简化图结构：使用简化的图结构表示知识',
        '轻量索引：优化的图索引结构',
        '快速检索：高效的图遍历算法',
        '本地部署：支持本地部署和运行',
      ],
    },
    {
      title: '优化策略',
      content: [
        '图剪枝：移除冗余节点和边',
        '社区简化：简化社区检测算法',
        '层次压缩：压缩层次结构',
        '缓存机制：缓存常用查询结果',
      ],
    },
    {
      title: '应用场景',
      content: [
        '小规模知识库：适合小规模文档集',
        '个人知识管理：个人知识库的检索',
        '快速原型：快速原型开发',
        '边缘设备：适合边缘设备部署',
      ],
    },
  ],
};
