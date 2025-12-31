import { StackDetail } from '@/lib/stack/types';

export const knowledgeGraphDetail: StackDetail = {
  title: '知识图谱',
  description: '结构化存储实体和关系，支持复杂推理和知识发现',
  sections: [
    {
      title: '核心概念',
      content: [
        '实体：现实世界中的对象、概念或事物',
        '关系：实体之间的语义关联',
        '属性：实体的特征和属性值',
        '三元组：主体-谓语-客体的基本知识单元',
      ],
    },
    {
      title: '图数据库',
      content: [
        'Neo4j：最流行的图数据库，支持 Cypher 查询语言',
        'ArangoDB：多模型数据库，支持图、文档和键值存储',
        'Amazon Neptune：托管式图数据库服务',
        'TigerGraph：原生并行图数据库，适合大规模图计算',
      ],
    },
    {
      title: '构建方法',
      content: [
        '知识抽取：从非结构化文本中提取实体和关系',
        '实体链接：将实体映射到统一的知识库',
        '关系抽取：识别实体之间的语义关系',
        '知识融合：合并多源知识解决冲突',
      ],
    },
    {
      title: '应用场景',
      content: [
        '问答系统：基于图谱结构回答复杂问题',
        '推荐系统：利用实体关系进行个性化推荐',
        '推理引擎：基于图谱路径进行逻辑推理',
        '知识发现：发现隐藏的实体关系和模式',
      ],
    },
  ],
};
