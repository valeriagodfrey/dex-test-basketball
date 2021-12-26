import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import signOut from "../../assets/icons/sign_out.svg";
import { Icon } from "../icon/Icon";
interface Props {
  type?: "teams" | "players";
}
export const Menu = ({ type }: Props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuLine>
        <Icons>
          {type === "teams" ? (
            <IconContainer onClick={() => navigate("/teams")}>
              <Icon type="teams" color="red" />
              <Label color="red">Teams</Label>
            </IconContainer>
          ) : (
            <IconContainer onClick={() => navigate("/teams")}>
              <Icon type="teams" color="grey" />
              <Label color="grey">Teams</Label>
            </IconContainer>
          )}

          {type === "players" ? (
            <IconContainer onClick={() => navigate("/players")}>
              <Icon type="players" color="red" />
              <Label color="red">Players</Label>
            </IconContainer>
          ) : (
            <IconContainer onClick={() => navigate("/players")}>
              <Icon type="players" color="grey" />
              <Label color="grey">Players</Label>
            </IconContainer>
          )}
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
  min-width: 140px;
  min-height: calc(100vh - 80px);
  position: fixed;
  top: 0;
  margin-top: 80px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
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
