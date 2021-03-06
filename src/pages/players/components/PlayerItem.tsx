import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IPlayer } from "../../../api/dto/IGetPlayers";
import player from "../../../assets/images/player.png";
import { media } from "../../../assets/theme/media";

interface Props {
  data: IPlayer;
}
export const PlayerItem = ({ data: { name, avatarUrl, number, team, id } }: Props) => {
  return (
    <Container to={`/players/${id}`}>
      <LogoContainer>
        <Image src={avatarUrl || player} alt="player" />
      </LogoContainer>
      <Info>
        <Box>
          <Name>{name}</Name>
          <Number>#{number}</Number>
        </Box>
        <Team>{team}</Team>
      </Info>
    </Container>
  );
};
const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const LogoContainer = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 0px;
  ${media.desktop} {
    padding: 73px 45px 0px;
  }
`;

const Image = styled.img`
  width: 122px;
  ${media.desktop} {
    width: 274px;
  }
`;

const Info = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 18px 0px;
`;

const Name = styled.label`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  ${media.desktop} {
    font-size: 18px;
  }
`;

const Number = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.lightRed};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const Team = styled.label`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
