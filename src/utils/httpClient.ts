import axios, { AxiosError } from "axios";
import { Storage } from "./webStorage";

interface HttpClient {
  get: <T>(url: string) => Promise<T>;
  post: <T, D>(url: string, data: D) => Promise<T>;
  put: <T, D>(url: string, data: D) => Promise<T>;
  remove: <T>(url: string) => Promise<T>;
}

function createHttpClient(baseURL: string, tokenStorage?: Storage): HttpClient {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = tokenStorage?.get();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        console.error("API 오류 응답:", error.response.data);
        console.error("응답 상태 코드:", error.response.status);
      } else if (error.request) {
        console.error("API 응답 없음:", error.request);
      } else {
        console.error("API 요청 오류:", error.message);
      }
      return Promise.reject(error);
    },
  );

  async function get<T>(url: string): Promise<T> {
    const response = await instance.get(url);
    return response.data;
  }

  async function post<T, D>(url: string, data: D): Promise<T> {
    const response = await instance.post(url, data);
    return response.data;
  }

  async function put<T, D>(url: string, data: D): Promise<T> {
    const response = await instance.put(url, data);
    return response.data;
  }

  async function remove<T>(url: string): Promise<T> {
    const response = await instance.delete(url);
    return response.data;
  }

  return { get, post, put, remove };
}

export default createHttpClient;
