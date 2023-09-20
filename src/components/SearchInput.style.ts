import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;
  flex-grow: 1;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
`;
