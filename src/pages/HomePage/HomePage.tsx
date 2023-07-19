import { useState } from "react";
import { searchService } from "../../services";
import { Input, RecommendedSearch } from "../../components";
import { useFocus } from "../../hooks";
import { sick } from "../../types";

export const HomePage = () => {
  const [searchResult, setSearchResult] = useState<sick[]>([]);

  const {
    isFocus,
    focusHandler: turnOnRecommendedSearch,
    blurHandler: turnOffRecommendedSearch,
  } = useFocus();

  const fetchData = async (query: string) => {
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
      <Input
        onChange={fetchDataByInputChange}
        onFocus={turnOnRecommendedSearch}
        onBlur={turnOffRecommendedSearch}
      />
      {isFocus && <RecommendedSearch sickInfo={searchResult} />}
    </div>
  );
};
