import { EvaluationTool } from '../data';

interface EvaluationToolCardProps {
  tool: EvaluationTool;
}

export default function EvaluationToolCard({ tool }: EvaluationToolCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 p-5">
      <h3 className="text-[18px] font-semibold text-black dark:text:white mb-2">
        {tool.name}
      </h3>
      <p className="text-[13px] leading-5 text-gray-600 dark:text-gray-400 mb-4">
        {tool.description}
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="text-[14px] font-semibold text-black dark:text:white mb-2">
            核心特性
          </h4>
          <ul className="space-y-1">
            {tool.features.map((feature, index) => (
              <li
                key={index}
                className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span className="w-1 h-1 bg-black dark:bg:white rounded-full mt-2 mr-3 shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-semibold text-black dark:text:white mb-2">
            优势
          </h4>
          <ul className="space-y-1">
            {tool.pros.map((pro, index) => (
              <li
                key={index}
                className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span className="w-1 h-1 bg-black dark:bg:white rounded-full mt-2 mr-3 shrink-0"></span>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-semibold text-black dark:text:white mb-2">
            劣势
          </h4>
          <ul className="space-y-1">
            {tool.cons.map((con, index) => (
              <li
                key={index}
                className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span className="w-1 h-1 bg-black dark:bg:white rounded-full mt-2 mr-3 shrink-0"></span>
                {con}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-semibold text-black dark:text:white mb-2">
            适用场景
          </h4>
          <ul className="space-y-1">
            {tool.useCases.map((useCase, index) => (
              <li
                key={index}
                className="text-[13px] leading-5 text-gray-700 dark:text-gray-300 flex items-start"
              >
                <span className="w-1 h-1 bg-black dark:bg:white rounded-full mt-2 mr-3 shrink-0"></span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-semibold text-black dark:text:white mb-2">
            定价
          </h4>
          <p className="text-[13px] leading-5 text-gray-700 dark:text-gray-300">
            {tool.pricing}
          </p>
        </div>
      </div>
    </div>
  );
}
