import createHttpClient from "../utils/httpClient";

const httpClient = createHttpClient("http://localhost:4000");

export const getSearchResult = async <T>(query: string) => {
  const response = await httpClient.get<T>(`/sick?q=${query}`);
  return response;
};
