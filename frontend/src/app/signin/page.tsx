'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login } from '@/utils/auth';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (username.trim() === '') {
      newErrors.username = '아이디를 입력해주세요.';
    }

    if (password.trim() === '') {
      newErrors.password = '비밀번호를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        await login(username, password);
        console.log('로그인 성공:', username);
        router.push('/');
      } catch (error) {
        setErrors({ login: '아이디 또는 비밀번호가 올바르지 않습니다.' });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-theme('spacing.32'))] bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md px-4">
        <div className="bg-light-cardBg dark:bg-dark-cardBg shadow-md rounded-lg px-8 py-10">
          <h1 className="text-3xl font-bold mb-6 text-center text-light-text dark:text-dark-text">
            로그인
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
              />
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            {errors.login && (
              <p className="error-message text-center mb-4">{errors.login}</p>
            )}
            <button type="submit" className="submit-button">
              로그인
            </button>
          </form>
          <p className="mt-6 text-center text-light-text dark:text-dark-text">
            계정이 없으신가요?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
