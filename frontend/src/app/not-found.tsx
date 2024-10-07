import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-theme('spacing.32'))] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="mb-8">
        죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 주소를 다시
        확인해주세요.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-headerFooter-background text-headerFooter-text rounded-md hover:bg-headerFooter-hover transition-colors duration-300"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
