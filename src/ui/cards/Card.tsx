import React from "react";
import styled from "styled-components";

import emptyPlayers from "../../assets/icons/empty_players.svg";
import emptyTeams from "../../assets/icons/empty_teams.svg";
import { media } from "../../assets/theme/media";
interface Props {
  type?: "teams" | "players";
  onClick?: () => void;
}
export const Card = ({ type, onClick }: Props) => {
  return (
    <Container type={type} onClick={onClick}>
      {type === "teams" ? (
        <Image src={emptyTeams} alt="empty_teams" />
      ) : (
        <Image src={emptyPlayers} alt="empty_players" />
      )}
      <Label>Empty here</Label>
      <Caption>
        {type === "teams" ? "Add new teams to continue" : "Add new players to continue"}
      </Caption>
    </Container>
  );
};
const Container = styled.div<{ type?: "teams" | "players" }>`
  display: flex;
  width: 100%;
  max-width: 556px;
  align-items: center;
  flex-direction: column;
  padding: ${({ type }) => (type === "teams" ? `48px 0px` : `48px 0px`)};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
const Image = styled.img`
  max-height: 320px;
  margin-bottom: 48px;
  max-width: 339px;
  ${media.desktop} {
    max-width: 480px;
  }
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.lightRed};
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-size: 24px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.grey};
`;
