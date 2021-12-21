import React, { FC } from "react";
import styled from "styled-components";

export const Main: FC = ({ children }) => {
  return (
    <MainContainer>
      <MainBlock>{children}</MainBlock>
    </MainContainer>
  );
};
const MainContainer = styled.main`
  display: block;
  margin-left: 140px;
  padding-top: 80px;
  min-height: calc(100vh - 80px);
`;

const MainBlock = styled.div`
  padding: 30px;
`;
