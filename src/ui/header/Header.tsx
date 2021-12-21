import React from "react";
import styled from "styled-components";

import logo from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/profile.svg";

export const Header = () => {
  return (
    <Container>
      <HeaderLine>
        <Logo src={logo} alt="logo"></Logo>
        <Profile src={profile} alt="profile"></Profile>
      </HeaderLine>
    </Container>
  );
};
const Container = styled.div`
  height: auto;
  width: 100%;
  position: fixed;
  z-index: 55;
`;

const HeaderLine = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 51px;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`;
const Logo = styled.img`
  width: 191px;
  cursor: pointer;
`;
const Profile = styled.img`
  width: 36px;
  cursor: pointer;
`;
