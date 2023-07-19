import React from "react";
import { sick } from "../../types";

interface Props {
  sickInfo: sick[];
}

export const RecommendedSearch: React.FC<Props> = ({ sickInfo }) => {
  if (sickInfo.length === 0) {
    return <div>검색어 없음</div>;
  }

  return (
    <ul>
      {sickInfo.map((sick) => (
        <li key={sick.sickCd}>{sick.sickNm}</li>
      ))}
    </ul>
  );
};
