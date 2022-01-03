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
        <Burger>
          <img src={burger} alt="burger" />
        </Burger>

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
  justify-content: center;
  align-items: center;
  padding: 16px 51px;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  ${media.desktop},${media.largeDesktop} {
    justify-content: space-between;
  }
`;

const ProfileContainer = styled.div`
  display: none;
  ${media.desktop},${media.largeDesktop} {
    display: flex;
    align-items: center;
  }
`;

const Burger = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
  ${media.desktop},${media.largeDesktop} {
    display: none;
  }
`;
const Logo = styled.img`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  height: 34px;
  ${media.desktop},${media.largeDesktop} {
    height: 48px;
  }
`;

const Profile = styled.img`
  width: 36px;
  cursor: pointer;
  margin-left: 19px;
`;
