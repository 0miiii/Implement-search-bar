import { createHttpClient, createCache } from "../utils";
import { sick } from "../types";

interface SearchService {
  (query: string): Promise<sick[]>;
}

const baseURL = "http://localhost:4000";
const searchCache = createCache<sick[]>();
const searchClient = createHttpClient(baseURL);

export const searchService: SearchService = async (query) => {
  if (!query) {
    return [];
  }

  const cachedData = searchCache.get(query);

  if (cachedData) {
    return cachedData;
  }

  try {
    const { data } = await searchClient.get(`/sick?q=${query}`);
    searchCache.set(query, data);
    return data;
  } catch (error) {
    console.error("데이터 요청 실패:", error);
    throw new Error("데이터 요청 실패");
  }
};
