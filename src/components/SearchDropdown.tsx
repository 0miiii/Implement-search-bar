import React from "react";
import { Sick } from "../types";
import * as s from "./SearchDropdown.style";

interface Props {
  suggestions: Sick[];
  activeIndex: number;
}

const SearchDropdown: React.FC<Props> = ({ suggestions, activeIndex }) => {
  if (suggestions.length === 0) {
    return (
      <s.Wrapper>
        <s.DropdownItem>추천 검색어가 없습니다</s.DropdownItem>
      </s.Wrapper>
    );
  }

  return (
    <s.Wrapper>
      {suggestions.map((suggestion, index) => (
        <s.DropdownItem key={suggestion.sickCd} active={activeIndex === index}>
          {suggestion.sickNm}
        </s.DropdownItem>
      ))}
    </s.Wrapper>
  );
};

export default SearchDropdown;
