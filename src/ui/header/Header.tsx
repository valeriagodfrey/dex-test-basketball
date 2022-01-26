import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import logo from "../../assets/images/logo.png";
import { media } from "../../assets/theme/media";
import { Drawer } from "../drawer/Drawer";
import { Hamburger } from "../hamburger/Hamburger";

export const Header = () => {
  const userName = localStorage.getItem("userName");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <HeaderLine>
          <Hamburger onClick={() => setShow((s) => !s)} />
          <Logo src={logo} alt="logo" onClick={() => navigate("/")}></Logo>
          <ProfileContainer>
            <UserName>{userName}</UserName>
            <ProfileIcon display="desktop" />
          </ProfileContainer>
        </HeaderLine>
      </Container>
      <Drawer onClick={() => setShow((s) => !s)} visible={show} userName={userName} />
    </div>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  width: 100%;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 55;
`;

const UserName = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-right: 19px;
`;

const HeaderLine = styled.div`
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
  flex: 1;
  ${media.desktop} {
    grid-template-columns: 1fr auto;
    justify-items: flex-start;
  }

  margin: 14px 12px;
  ${media.desktop} {
    margin: 16px 51px;
  }
`;

const ProfileContainer = styled.div`
  display: none;
  ${media.desktop} {
    display: flex;
    align-items: center;
    justify-items: flex-end;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  height: 34px;
  ${media.desktop} {
    height: 48px;
  }
`;
