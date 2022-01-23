import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Menu } from "../menu/Menu";

interface Props {
  fullWidthForMobile?: boolean;
}
export const Layout: FC<Props> = ({ children, fullWidthForMobile }) => {
  return (
    <Container>
      <Header />
      <Main fullWidthForMobile={fullWidthForMobile}>{children}</Main>
      <Menu />
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
`;
