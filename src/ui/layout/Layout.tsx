import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Menu } from "../menu/Menu";

interface Props {
  type?: "teams" | "players";
}
export const Layout: FC<Props> = ({ children, type }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      {type === "teams" ? <Menu type="teams" /> : <Menu type="players" />}
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
`;
