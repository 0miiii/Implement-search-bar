import { styled } from "styled-components";

export const Wrapper = styled.ul`
  padding: 8px;
  margin: 0;
  list-style: none;
`;

export const DropdownItem = styled.li<{ active?: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "transparent")};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
