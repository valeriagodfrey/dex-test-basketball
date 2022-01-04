import { FC } from "react";
import styled from "styled-components";

import { media } from "../../core/theme/media";

interface IProps {
  fullWidthForMobile?: boolean;
}
export const Main: FC<IProps> = ({ children, fullWidthForMobile }) => {
  return (
    <MainContainer>
      <MainBlock fullWidthForMobile={fullWidthForMobile}>{children}</MainBlock>
    </MainContainer>
  );
};
const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-left: 0px;
  background-color: ${({ theme }) => theme.colors.lightestGrey1};
  width: 100%;
  padding-top: 62px;
  min-height: calc(100vh - 80px);
  ${media.desktop} {
    padding-top: 80px;
    margin-left: 140px;
    max-width: calc(100% - 140px);
  }
`;

const MainBlock = styled.div<{ fullWidthForMobile?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: ${({ fullWidthForMobile }) => (fullWidthForMobile ? "16px 0" : "16px 12px")};
  width: 100%;
  ${media.desktop} {
    padding: 32px 0;
    max-width: 804px;
    min-height: 100vh;
  }
  ${media.extraLargeDesktop} {
    max-width: 1140px;
  }
`;
