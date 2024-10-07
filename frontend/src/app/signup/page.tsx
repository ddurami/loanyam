'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mainCharacter, setMainCharacter] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (username.trim() === '') {
      newErrors.username = '아이디를 입력해주세요.';
    } else if (username.length < 4) {
      newErrors.username = '아이디는 4자 이상이어야 합니다.';
    }

    if (password.trim() === '') {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (mainCharacter.trim() === '') {
      newErrors.mainCharacter = '대표 캐릭터 이름을 입력해주세요.';
    } else if (mainCharacter.length < 2) {
      newErrors.mainCharacter = '대표 캐릭터 이름은 2자 이상이어야 합니다.';
    }

    if (apiKey.trim() === '') {
      newErrors.apiKey = 'API Key를 입력해주세요.';
    } else if (apiKey.length < 10) {
      newErrors.apiKey = 'API Key는 10자 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // TODO: 회원가입 로직 구현
      console.log('회원가입 시도:', username, password, mainCharacter, apiKey);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-theme('spacing.32'))] bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md px-4">
        <div className="bg-light-cardBg dark:bg-dark-cardBg shadow-md rounded-lg px-8 py-10">
          <h1 className="text-3xl font-bold mb-6 text-center text-light-text dark:text-dark-text">
            회원가입
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
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="대표 캐릭터"
                value={mainCharacter}
                onChange={(e) => setMainCharacter(e.target.value)}
                className="input-field"
              />
              {errors.mainCharacter && (
                <p className="error-message">{errors.mainCharacter}</p>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="input-field"
              />
              {errors.apiKey && (
                <p className="error-message">{errors.apiKey}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              회원가입
            </button>
          </form>
          <p className="mt-6 text-center text-light-text dark:text-dark-text">
            이미 계정이 있으신가요?{' '}
            <Link href="/signin" className="text-blue-500 hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
