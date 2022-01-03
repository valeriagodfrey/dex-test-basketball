import { FC } from "react";
import styled from "styled-components";

import { media } from "../../core/theme/media";

export const Main: FC = ({ children }) => {
  return (
    <MainContainer>
      <MainBlock>{children}</MainBlock>
    </MainContainer>
  );
};
const MainContainer = styled.main`
  margin-left: 0px;
  width: 100%;
  padding-top: 80px;
  display: block;
  min-height: calc(100vh - 80px);
  ${media.desktop},${media.largeDesktop} {
    margin-left: 140px;
    max-width: calc(100vw - 140px);
  }
`;

const MainBlock = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightestGrey1};
  ${media.desktop},${media.largeDesktop} {
    padding: 30px 80px;
    min-height: 100vh;
  }
`;
