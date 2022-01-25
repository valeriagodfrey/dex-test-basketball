import React, { FC } from "react";
import styled from "styled-components";

import { Main } from "../main/Main";

interface Props {
  fullWidthForMobile?: boolean;
}
export const Layout: FC<Props> = ({ children, fullWidthForMobile }) => {
  return (
    <Container>
      <Main fullWidthForMobile={fullWidthForMobile}>{children}</Main>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
`;
