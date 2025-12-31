import { comparisonTable } from '../data';

export default function ComparisonTable() {
  return (
    <section className="mb-8">
      <h2 className="text-[20px] font-semibold text-black dark:text:white mb-4">
        功能对比
      </h2>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-800">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              {comparisonTable.headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-[14px] font-semibold text-black dark:text:white ${
                    index === 0 ? 'w-1/5' : 'w-1/5'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTable.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-100 dark:border-gray-900 last:border-0"
              >
                <td className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                  {row.feature}
                </td>
                <td className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                  {row.sentenceTransformers}
                </td>
                <td className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                  {row.openai}
                </td>
                <td className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                  {row.cohere}
                </td>
                <td className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                  {row.huggingface}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
