import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";
import useFocus from "../hooks/useFocus";
import useArrowKeyNavigation from "../hooks/useKeboardNavigation";
import useSearchSuggestion from "../hooks/useSearchSuggestion";
import * as s from "./SearchBar.style";

interface Props {
  onEnter: (searchWord: string) => void;
}

const SearchBar: React.FC<Props> = ({ onEnter }) => {
  const { isFocus, focusHandler, blurHandler } = useFocus();
  const { suggestions, changeHandler } = useSearchSuggestion();
  const { currentIndex, keyDownHandler } = useArrowKeyNavigation(suggestions.length);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEnter(suggestions[currentIndex].sickNm);
  };

  return (
    <s.Wrapper>
      <form onSubmit={submitHandler}>
        <SearchInput
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
        {isFocus && <SearchDropdown suggestions={suggestions} activeIndex={currentIndex} />}
      </form>
    </s.Wrapper>
  );
};

export default SearchBar;
