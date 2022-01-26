import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import player from "../../../assets/images/player.png";
import { media } from "../../../assets/theme/media";
import { calculateAge } from "../../../core/helpers/calculateAge";
import { deletePlayer } from "../../../modules/players/playerThunks";
import { Breadcrumbs } from "../../../ui/breadcrumbs/Breadcrumbs";

interface PlayerInfoProps {
  name?: string;
  number?: number;
  position?: string;
  team?: number;
  birthday?: string;
  height?: number;
  weight?: number;
  avatarUrl?: string;
  id?: number;
  teamName?: string;
}
export const PlayerInfo = ({ ...rest }: PlayerInfoProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = [
    { path: "/players", name: "Players" },
    { path: location.pathname, name: rest.name },
  ];

  return (
    <CardContainer>
      <Header>
        <Breadcrumbs data={data} />
        <Icons>
          <Link to={`/players/${rest.id}/edit`}>
            <EditIcon />
          </Link>
          <Icon>
            <DeleteIcon
              onClick={() =>
                dispatch(
                  deletePlayer({
                    params: { id: rest.id },
                    onSuccess: () => {
                      navigate("/players");
                    },
                  }),
                )
              }
            />
          </Icon>
        </Icons>
      </Header>
      <CardInfo>
        <Image src={rest.avatarUrl || player} alt="logo" />
        <Info>
          <Title>
            <Name>{rest.name}</Name>
            <Number>#{rest.number}</Number>
          </Title>
          <Wrapper>
            <Box>
              <Label>Position</Label>
              <Caption>{rest.position}</Caption>
            </Box>
            <Box>
              <Label>Team</Label>
              <Caption>{rest.teamName}</Caption>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Label>Height</Label>
              <Caption>{rest.height ? `${rest.height} cm` : "-"}</Caption>
            </Box>
            <Box>
              <Label>Weight</Label>
              <Caption>{rest.weight ? `${rest.weight} kg` : "-"}</Caption>
            </Box>
          </Wrapper>
          <Box>
            <Label>Age</Label>
            <Caption>{rest.birthday ? calculateAge(rest.birthday) : "-"}</Caption>
          </Box>
        </Info>
      </CardInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  ${media.desktop} {
    border-radius: 10px;
  }
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 48px;
  padding: 48px 0px;
  align-items: center;
  justify-items: center;
  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);

  ${media.desktop} {
    grid-template-columns: 400px 1fr;
    grid-column-gap: 40px;
    justify-items: flex-end;
    padding: 45px 0px 0px;
    border-radius: 0px 0px 10px 10px;
  }
  ${media.extraLargeDesktop} {
    grid-template-columns: 531px 1fr;
    grid-column-gap: 56px;
    justify-items: flex-start;
    padding: 65px 0px 0px;
    border-radius: 0px 0px 10px 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  ${media.desktop} {
    padding: 24px 32px;
  }
`;

const Icon = styled.div`
  margin-left: 16px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.lightRed};
`;

const Image = styled.img`
  width: 143px;

  ${media.desktop} {
    width: 400px;
    align-self: flex-end;
  }
  ${media.extraLargeDesktop} {
    padding-top: 35px;
    width: 531px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 32px;
  justify-items: center;
  ${media.desktop} {
    justify-items: normal;
    :last-child {
      margin-bottom: 50px;
      grid-row-gap: 35px;
    }
  }
  ${media.extraLargeDesktop} {
    justify-items: normal;
    :last-child {
      margin-bottom: 65px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 32px;
  grid-template-columns: 1fr;
  justify-items: center;
  ${media.desktop} {
    grid-template-columns: 180px 1fr;
    max-width: 480px;
    justify-items: normal;
    grid-row-gap: 6px;
  }
  ${media.extraLargeDesktop} {
    grid-template-columns: 272px 1fr;
    max-width: 480px;
    justify-items: normal;
    grid-row-gap: 6px;
  }
`;

const Box = styled.div`
  justify-items: center;
`;

const Label = styled.div`
  font-size: 17px;
  line-height: 25px;
  font-style: normal;
  font-weight: 800;
  align-items: center;
  text-align: center;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
  ${media.desktop} {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: start;
  }
`;

const Title = styled.div`
  font-size: 17px;
  display: flex;
  font-weight: 800;
  align-items: center;
  margin-bottom: 16px;
  ${media.desktop} {
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    text-align: start;
    margin-bottom: 0px;
  }
`;

const Name = styled.div`
  font-size: 17px;
  line-height: 25px;
  font-style: normal;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    font-size: 36px;
    line-height: 49px;
    margin-right: 10px;
  }
`;

const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${media.desktop} {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-align: start;
  }
`;
