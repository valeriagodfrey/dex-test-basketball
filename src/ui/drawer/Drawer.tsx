import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import profile from "../../assets/icons/profile.svg";
import signOut from "../../assets/icons/sign_out.svg";
import { media } from "../../assets/theme/media";
import { Icon } from "../icon/Icon";

interface Props {
  userName?: string;
  visible?: boolean;
  onClick?: () => void;
}
export const Drawer = ({ userName, visible, onClick }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const teamUrl = useMatch("/teams/:id");
  const playerUrl = useMatch("/players/:id");

  return (
    <Container>
      <CSSTransition in={visible} timeout={300} classNames="drawer-menu" unmountOnExit>
        <Menu visible={visible}>
          <ProfileContainer>
            <Profile src={profile} alt="profile"></Profile>
            <UserName>{userName}</UserName>
          </ProfileContainer>
          <MenuLine>
            <Icons>
              {location.pathname === "/teams" || teamUrl ? (
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

              {location.pathname === "/players" || playerUrl ? (
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
        </Menu>
      </CSSTransition>

      <CSSTransition in={visible} timeout={300} classNames="drawer-area" unmountOnExit>
        <Area onClick={onClick} />
      </CSSTransition>
    </Container>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  z-index: 10;
  height: 100vh;

  .drawer-menu-enter {
    transform: translateX(-100%);
  }
  .drawer-menu-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  .drawer-menu-exit {
    transform: translateX(0);
  }
  .drawer-menu-exit-active {
    transform: translateX(-100%);
    transition: transform 300ms;
  }

  .drawer-area-enter {
    opacity: 0;
  }
  .drawer-area-active {
    opacity: 0.6;
    transition: opacity 300ms;
  }
  .drawer-area-exit {
    opacity: 0.6;
  }
  .drawer-area-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  .drawer-area-enter-done {
    opacity: 0.6;
  }

  ${media.desktop} {
    display: none;
  }
`;

const Menu = styled.div<{ visible?: boolean }>`
  padding-top: 62px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
`;

const Area = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const UserName = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  padding: 20px;
  border-bottom: ${({ theme }) => ` 0.5px solid ${theme.colors.lightGrey}`};
`;

const Profile = styled.img`
  width: 40px;
  cursor: pointer;
  margin-right: 12px;
`;

const Label = styled.div<{ color?: "red" | "grey" }>`
  color: ${({ color, theme }) => (color === "red" ? theme.colors.red : theme.colors.lightGrey)};
  display: flex;
  margin-left: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 36px;
  }
`;

const Icons = styled.div``;

const MenuLine = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px 20px;
  justify-content: space-between;
  flex: 1;
`;

const SignOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
