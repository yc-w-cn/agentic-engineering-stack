import { StackDetail } from '@/lib/stack/types';

export const promptEngineeringDetail: StackDetail = {
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
};
