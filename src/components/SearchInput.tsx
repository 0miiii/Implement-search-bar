import React, { InputHTMLAttributes } from "react";
import * as s from "./SearchInput.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: React.FC<Props> = ({ ...inputProps }) => {
  return (
    <s.Wrapper>
      <s.Input {...inputProps} />
      <s.Button>검색</s.Button>
    </s.Wrapper>
  );
};

export default SearchInput;
