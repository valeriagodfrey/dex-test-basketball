import React, { FC } from "react";
import styled from "styled-components";

export const CustomError: FC = ({ children }) => {
  return <Error>{children}</Error>;
};
const Error = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightestRed};
`;
