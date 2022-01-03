import { useSelector } from "react-redux";
import styled from "styled-components";

import logo from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/profile.svg";
import { RootState } from "../../core/redux/store";

export const Header = () => {
  const userName = useSelector((state: RootState) => state.authorization.content?.name);

  return (
    <Container>
      <HeaderLine>
        <Logo src={logo} alt="logo"></Logo>
        <LogoContainer>
          <UserName>{userName}</UserName>
          <Profile src={profile} alt="profile"></Profile>
        </LogoContainer>
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

const UserName = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const HeaderLine = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 51px;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 191px;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 36px;
  cursor: pointer;
  margin-left: 19px;
`;
