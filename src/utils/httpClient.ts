import axios, { AxiosInstance, AxiosError } from "axios";

interface HttpClient {
  (baseURL: string): AxiosInstance;
}

export const createHttpClient: HttpClient = (baseURL) => {
  const httpClient = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  httpClient.interceptors.request.use((config) => {
    console.log("calling api");
    return config;
  });

  httpClient.interceptors.response.use(
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

  return httpClient;
};
