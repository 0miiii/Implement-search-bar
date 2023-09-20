import { useState } from "react";
import useCache from "./useCache";
import useDebounce from "./useDebounce";
import { getSearchResult } from "../services/searchService";
import { Sick } from "../types";

const useSearchSuggestion = () => {
  const [suggestions, setSuggestions] = useState<Sick[]>([]);
  const { getFromCache, setToCache } = useCache();

  const getSuggestions = useDebounce((value: string) => {
    const cachedData = getFromCache<Sick[]>(value);

    if (cachedData) {
      setSuggestions(cachedData);
      return;
    }

    if (value) {
      getSearchResult<Sick[]>(value)
        .then((res) => {
          setToCache(value, res);
          setSuggestions(res);
        })
        .catch((error) => console.log(error));
    } else {
      setSuggestions([]);
    }
  }, 300);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    getSuggestions(event.currentTarget.value);
  };

  return { suggestions, changeHandler };
};

export default useSearchSuggestion;
