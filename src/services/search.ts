import { createHttpClient } from "../utils";

type sick = { sickCd: string; sickNm: string };

interface SearchService {
  (query: string): Promise<sick[]>;
}

const baseURL = "http://localhost:4000";
const searchClient = createHttpClient(baseURL);

export const searchService: SearchService = async (query) => {
  try {
    const { data } = await searchClient.get(`/sick?q=${query}`);
    return data;
  } catch (error) {
    console.error("데이터 요청 실패:", error);
    throw new Error("데이터 요청 실패");
  }
};
