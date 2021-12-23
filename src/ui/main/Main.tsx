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
  width: calc(100vw - 140px);
  min-height: calc(100vh - 80px);
`;

const MainBlock = styled.div`
  padding: 30px 80px;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightestGrey1};
`;
