import { StackDetail } from './types';

export const planningReasoningDetail: StackDetail = {
  title: '规划与推理',
  description: '将复杂任务分解为可执行的子任务序列',
  sections: [
    {
      title: '规划策略',
      content: [
        '任务分解：将复杂目标分解为可管理的子任务',
        '依赖分析：识别任务之间的依赖关系',
        '优先级排序：根据重要性和紧急性排序任务',
        '资源分配：合理分配计算和时间资源',
      ],
    },
    {
      title: '推理方法',
      content: [
        '演绎推理：从一般规则推导具体结论',
        '归纳推理：从具体案例总结一般规律',
        '类比推理：通过相似性进行推理',
        '因果推理：分析因果关系和影响链',
      ],
    },
    {
      title: '执行框架',
      content: [
        'ReAct：推理-行动循环模式',
        'Plan-and-Solve：先规划后执行',
        'Tree of Thoughts：思维树探索多种路径',
        'Self-Reflection：自我反思和调整',
      ],
    },
    {
      title: '优化技术',
      content: [
        '动态调整：根据执行情况调整计划',
        '回溯机制：失败时回退到之前状态',
        '并行执行：同时执行独立任务',
        '缓存策略：重用中间结果',
      ],
    },
  ],
};
