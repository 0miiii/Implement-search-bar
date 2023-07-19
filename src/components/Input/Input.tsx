import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...props }) => {
  return <input {...props} />;
};
