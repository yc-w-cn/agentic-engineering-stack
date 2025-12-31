export default function Footer() {
  return (
    <footer className="mt-24 pt-8 pb-8 px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        <p className="text-[16px] text-gray-500 dark:text-gray-500">
          基于 Swiss 设计风格构建 · 专注于清晰与功能性
        </p>
        <p className="text-[14px] text-gray-400 dark:text-gray-600">
          版本: v{process.env.APP_VERSION} · 构建时间: {process.env.BUILD_DATE}
        </p>
      </div>
    </footer>
  );
}
