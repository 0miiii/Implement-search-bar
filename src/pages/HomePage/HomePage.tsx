import { useState } from "react";
import { searchService } from "../../services";
import { Input, RecommendedSearch } from "../../components";
import { sick } from "../../types";

export const HomePage = () => {
  const [searchResult, setSearchResult] = useState<sick[]>([]);

  const fetchData = async (query: string) => {
    console.info("calling api");
    try {
      const response = await searchService(query);
      setSearchResult(response);
    } catch (error) {
      console.error("데이터 요청 실패:", error);
    }
  };

  const fetchDataByInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    fetchData(event.target.value);
  };

  return (
    <div>
      HomePage
      <Input onChange={fetchDataByInputChange} />
      <RecommendedSearch sickInfo={searchResult} />
    </div>
  );
};
