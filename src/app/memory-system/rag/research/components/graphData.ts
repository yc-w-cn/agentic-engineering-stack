import { GraphLink, GraphNode } from './KnowledgeGraph';

export const knowledgeGraphData = {
  nodes: [
    { id: 'lightrag', label: 'LightRAG', group: 1 },
    { id: 'corrective-rag', label: 'Corrective-RAG', group: 2 },
    { id: 'multi-head-rag', label: 'Multi-Head RAG', group: 3 },
    { id: 'self-rag', label: 'SELF-RAG', group: 4 },
    { id: 'sfr-rag', label: 'SFR-RAG', group: 5 },
    { id: 'adaptive-rag', label: 'Adaptive-RAG', group: 6 },
    { id: 'graphrag', label: 'GraphRAG', group: 7 },
    { id: 'nano-graphrag', label: 'Nano-GraphRAG', group: 7 },
    { id: 'fast-graphrag', label: 'Fast-GraphRAG', group: 7 },
  ] as GraphNode[],
  links: [
    { source: 'lightrag', target: 'graphrag', value: 2 },
    { source: 'lightrag', target: 'nano-graphrag', value: 1 },
    { source: 'corrective-rag', target: 'self-rag', value: 2 },
    { source: 'corrective-rag', target: 'adaptive-rag', value: 1 },
    { source: 'multi-head-rag', target: 'adaptive-rag', value: 2 },
    { source: 'multi-head-rag', target: 'sfr-rag', value: 1 },
    { source: 'self-rag', target: 'adaptive-rag', value: 2 },
    { source: 'sfr-rag', target: 'adaptive-rag', value: 2 },
    { source: 'graphrag', target: 'nano-graphrag', value: 3 },
    { source: 'graphrag', target: 'fast-graphrag', value: 3 },
    { source: 'nano-graphrag', target: 'fast-graphrag', value: 2 },
    { source: 'lightrag', target: 'corrective-rag', value: 1 },
    { source: 'graphrag', target: 'adaptive-rag', value: 1 },
    { source: 'self-rag', target: 'graphrag', value: 1 },
  ] as GraphLink[],
};
