
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! 警告 !!
    // あなたのプロジェクトに型エラーがあっても、プロダクションビルドを
    // 正常に完了することを危険に許可します。
    // !! 警告 !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
