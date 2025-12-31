import { StackDetail } from './types';

export const toolCallingDetail: StackDetail = {
  title: '工具调用',
  description: 'Agent 通过 API 调用外部工具，扩展能力边界',
  sections: [
    {
      title: '工具类型',
      content: [
        'API 调用：RESTful API、GraphQL 接口',
        '数据库查询：SQL、NoSQL 数据库操作',
        '文件操作：读写、解析各种格式文件',
        '计算工具：数学计算、数据分析、可视化',
      ],
    },
    {
      title: '调用机制',
      content: [
        '函数调用：模型生成结构化的函数调用参数',
        '工具注册：定义工具的名称、描述和参数',
        '参数解析：从自然语言中提取结构化参数',
        '结果整合：将工具返回结果整合到对话中',
      ],
    },
    {
      title: '常用工具',
      content: [
        '搜索引擎：Google、Bing、DuckDuckGo',
        '代码执行：Python、JavaScript 解释器',
        '数据分析：Pandas、NumPy、Matplotlib',
        'API 集成：OpenAI、Anthropic、各种第三方服务',
      ],
    },
    {
      title: '安全考虑',
      content: [
        '权限控制：限制工具访问范围',
        '输入验证：验证和清理工具参数',
        '错误处理：优雅处理工具调用失败',
        '审计日志：记录所有工具调用行为',
      ],
    },
  ],
};
