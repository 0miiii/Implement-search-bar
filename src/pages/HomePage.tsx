import SearchBar from "../components/SearchBar";
import * as s from "./HomePage.style";

const HomePage = () => {
  const enterHandler = (search: string) => {
    alert(`검색어${search}`);
  };

  return (
    <s.Container>
      <h1>검색창 구현하기</h1>
      <SearchBar onEnter={enterHandler} />
    </s.Container>
  );
};

export default HomePage;
