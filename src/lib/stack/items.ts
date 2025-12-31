import { autonomyDetail } from '@/app/autonomy/data';
import { collaborationDetail } from '@/app/collaboration/data';
import { knowledgeGraphDetail } from '@/app/knowledge-graph/data';
import { llmDetail } from '@/app/llm/data';
import { memorySystemDetail } from '@/app/memory-system/data';
import { multimodalDetail } from '@/app/multimodal/data';
import { planningReasoningDetail } from '@/app/planning-reasoning/data';
import { promptEngineeringDetail } from '@/app/prompt-engineering/data';
import { ragDetail } from '@/app/rag/data';
import { toolCallingDetail } from '@/app/tool-calling/data';
import { vectorDatabaseDetail } from '@/app/vector-database/data';

export const stackItems = [
  {
    slug: 'llm',
    number: '01',
    title: llmDetail.title,
    description: llmDetail.description,
  },
  {
    slug: 'prompt-engineering',
    number: '02',
    title: promptEngineeringDetail.title,
    description: promptEngineeringDetail.description,
  },
  {
    slug: 'tool-calling',
    number: '03',
    title: toolCallingDetail.title,
    description: toolCallingDetail.description,
  },
  {
    slug: 'memory-system',
    number: '04',
    title: memorySystemDetail.title,
    description: memorySystemDetail.description,
  },
  {
    slug: 'planning-reasoning',
    number: '05',
    title: planningReasoningDetail.title,
    description: planningReasoningDetail.description,
  },
  {
    slug: 'multimodal',
    number: '06',
    title: multimodalDetail.title,
    description: multimodalDetail.description,
  },
  {
    slug: 'autonomy',
    number: '07',
    title: autonomyDetail.title,
    description: autonomyDetail.description,
  },
  {
    slug: 'collaboration',
    number: '08',
    title: collaborationDetail.title,
    description: collaborationDetail.description,
  },
  {
    slug: 'rag',
    number: '09',
    title: ragDetail.title,
    description: ragDetail.description,
  },
  {
    slug: 'vector-database',
    number: '10',
    title: vectorDatabaseDetail.title,
    description: vectorDatabaseDetail.description,
  },
  {
    slug: 'knowledge-graph',
    number: '11',
    title: knowledgeGraphDetail.title,
    description: knowledgeGraphDetail.description,
  },
];
