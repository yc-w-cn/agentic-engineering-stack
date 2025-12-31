export default function Footer() {
  return (
    <footer className="py-4 px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[14px] text-gray-400 dark:text-gray-600">
          版本: v{process.env.APP_VERSION} · 构建时间: {process.env.BUILD_DATE}
        </p>
      </div>
    </footer>
  );
}
