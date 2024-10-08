import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const register = async (
  username: string,
  password: string,
  mainCharacter: string,
  apiKey: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`,
      { username, password, mainCharacter, apiKey },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      { username, password },
      { withCredentials: true }
    );
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  // 서버에 로그아웃 요청을 보내 Refresh Token을 무효화할 수 있습니다.
  return axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
