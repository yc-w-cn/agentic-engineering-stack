import { StackDetail } from '@/lib/stack/types';

export const collaborationDetail: StackDetail = {
  title: '协作能力',
  description: '多个 Agent 之间协同工作，完成复杂目标',
  sections: [
    {
      title: '协作模式',
      content: [
        '层级协作：主从关系的 Agent 协作',
        '平等协作：多个 Agent 平等协作',
        '竞争协作：通过竞争优化结果',
        '混合协作：结合多种协作模式',
      ],
    },
    {
      title: '通信机制',
      content: [
        '消息传递：Agent 之间的消息交换',
        '共享状态：共享内存或数据库',
        '事件驱动：基于事件的异步通信',
        '协议定义：标准化的通信协议',
      ],
    },
    {
      title: '协调策略',
      content: [
        '任务分配：根据能力分配任务',
        '冲突解决：处理 Agent 之间的冲突',
        '资源调度：协调共享资源的使用',
        '同步机制：保持 Agent 之间的同步',
      ],
    },
    {
      title: '应用场景',
      content: [
        '软件开发：多个 Agent 协作开发软件',
        '研究分析：分工合作进行数据分析',
        '项目管理：不同 Agent 负责不同项目阶段',
        '客户服务：多个 Agent 协作处理复杂请求',
      ],
    },
  ],
};
