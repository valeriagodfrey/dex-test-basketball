import React from "react";
import { matchPath } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import signOut from "../../assets/icons/sign_out.svg";
import { media } from "../../assets/theme/media";
import { Icon } from "../icon/Icon";

export const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActiveTeams = matchPath("/teams/*", pathname);
  const isActivePlayers = matchPath("/players/*", pathname);
  return (
    <Container>
      <MenuLine>
        <Icons>
          <IconContainer onClick={() => navigate("/teams")}>
            <Icon type="teams" color={isActiveTeams ? "red" : "grey"} />
            <Label color={isActiveTeams ? "red" : "grey"}>Teams</Label>
          </IconContainer>

          <IconContainer onClick={() => navigate("/players")}>
            <Icon type="players" color={isActivePlayers ? "red" : "grey"} />
            <Label color={isActivePlayers ? "red" : "grey"}>Players</Label>
          </IconContainer>
        </Icons>
        <SignOut
          onClick={() => {
            localStorage.removeItem("token");
            window.dispatchEvent(new Event("storage"));
          }}
        >
          <img src={signOut} alt="signOut"></img>
          <Label color="red">Sign out</Label>
        </SignOut>
      </MenuLine>
    </Container>
  );
};
const Container = styled.div`
  display: none;
  ${media.desktop},${media.largeDesktop} {
    display: initial;
    min-width: 140px;
    min-height: calc(100vh - 80px);
    position: fixed;
    top: 0;
    margin-top: 80px;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  }
`;

const MenuLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: auto;
  padding-right: auto;
  min-height: calc(100vh - 144px);
`;

const Label = styled.div<{ color?: "red" | "grey" }>`
  color: ${({ color, theme }) => (color === "red" ? theme.colors.red : theme.colors.lightGrey)};
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 36px;
  }
`;

const Icons = styled.div``;
const SignOut = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
