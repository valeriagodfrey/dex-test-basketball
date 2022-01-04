import { useSelector } from "react-redux";
import styled from "styled-components";

import burger from "../../assets/icons/burger.svg";
import logo from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/profile.svg";
import { RootState } from "../../core/redux/store";
import { media } from "../../core/theme/media";

export const Header = () => {
  const userName = useSelector((state: RootState) => state.authorization.content?.name);

  return (
    <Container>
      <HeaderLine>
        <Burger src={burger} alt="burger" />

        <Logo src={logo} alt="logo"></Logo>
        <ProfileContainer>
          <UserName>{userName}</UserName>
          <Profile src={profile} alt="profile"></Profile>
        </ProfileContainer>
      </HeaderLine>
    </Container>
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

const Burger = styled.img`
  cursor: pointer;
  ${media.desktop} {
    display: none;
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

const Profile = styled.img`
  width: 36px;
  cursor: pointer;
  margin-left: 19px;
`;
