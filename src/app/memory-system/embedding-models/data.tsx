import { StackDetail } from '@/lib/stack/types';

export const embeddingModelsDetail: StackDetail = {
  title: 'Embedding 模型',
  description: '将文本、图像等数据转换为高维向量表示，捕捉语义信息和特征',
  sections: [
    {
      title: '核心概念',
      content: [
        '向量表示：将离散数据映射到连续的向量空间',
        '语义嵌入：捕捉词汇、句子、文档之间的语义关系',
        '维度选择：平衡表达能力和计算效率',
        '预训练与微调：在大规模语料上预训练，在特定任务上微调',
      ],
    },
    {
      title: '主流模型',
      content: [
        'Sentence Transformers：基于 BERT 的句子嵌入模型',
        'OpenAI Embeddings：商业化的高质量嵌入服务',
        'Cohere Embeddings：多语言支持的嵌入模型',
        'HuggingFace Embeddings：开源的多种嵌入模型',
      ],
    },
    {
      title: '应用场景',
      content: [
        '语义搜索：基于语义相似度的文档检索',
        '文本聚类：将相似文本分组到同一类别',
        '推荐系统：根据内容相似度推荐相关项目',
        '文本分类：基于向量表示进行分类任务',
      ],
    },
    {
      title: '性能优化',
      content: [
        '模型蒸馏：使用更小的模型保持性能',
        '量化技术：减少模型大小和推理时间',
        '批量处理：提高吞吐量和 GPU 利用率',
        '缓存机制：缓存常用文本的嵌入向量',
      ],
    },
  ],
};
