import { StackItem, StackDetail } from './types';
import { llmDetail } from './llm';
import { promptEngineeringDetail } from './prompt-engineering';
import { toolCallingDetail } from './tool-calling';
import { memorySystemDetail } from './memory-system';
import { planningReasoningDetail } from './planning-reasoning';
import { multimodalDetail } from './multimodal';
import { autonomyDetail } from './autonomy';
import { collaborationDetail } from './collaboration';

export const stackItems: StackItem[] = [
  {
    slug: 'llm',
    number: '01',
    title: '大语言模型',
    description: '作为 Agent 的核心大脑，提供理解、推理和生成能力',
  },
  {
    slug: 'prompt-engineering',
    number: '02',
    title: '提示工程',
    description: '精心设计的提示词引导模型产生期望的行为和输出',
  },
  {
    slug: 'tool-calling',
    number: '03',
    title: '工具调用',
    description: 'Agent 通过 API 调用外部工具，扩展能力边界',
  },
  {
    slug: 'memory-system',
    number: '04',
    title: '记忆系统',
    description: '短期和长期记忆帮助 Agent 维持上下文和经验',
  },
  {
    slug: 'planning-reasoning',
    number: '05',
    title: '规划与推理',
    description: '将复杂任务分解为可执行的子任务序列',
  },
  {
    slug: 'multimodal',
    number: '06',
    title: '多模态能力',
    description: '处理文本、图像、音频等多种输入输出形式',
  },
  {
    slug: 'autonomy',
    number: '07',
    title: '自主性',
    description: '独立决策和执行任务，无需人工持续干预',
  },
  {
    slug: 'collaboration',
    number: '08',
    title: '协作能力',
    description: '多个 Agent 之间协同工作，完成复杂目标',
  },
];

export const stackDetails: Record<string, StackDetail> = {
  llm: llmDetail,
  'prompt-engineering': promptEngineeringDetail,
  'tool-calling': toolCallingDetail,
  'memory-system': memorySystemDetail,
  'planning-reasoning': planningReasoningDetail,
  multimodal: multimodalDetail,
  autonomy: autonomyDetail,
  collaboration: collaborationDetail,
};

export type { StackItem, StackDetail, StackSection } from './types';
