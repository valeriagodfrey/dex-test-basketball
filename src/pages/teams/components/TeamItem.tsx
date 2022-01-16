import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import denver_nuggets from "../../../assets/icons/denver_nuggets.svg";
import { ITeam } from "../../../core/api/dto/IGetTeams";
import { media } from "../../../core/theme/media";

interface Props {
  data: ITeam;
}
export const TeamItem = ({ data: { name, foundationYear, id, imageUrl } }: Props) => {
  return (
    <Container to={`/teams/${id}`}>
      <LogoContainer>
        <Image src={imageUrl || denver_nuggets} alt="team" />
      </LogoContainer>
      <Info>
        <Name>{name}</Name>
        <Year>Year of foundation: {foundationYear}</Year>
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

  padding: 32px 24px 24px;
  ${media.desktop} {
    padding: 65px 24px;
  }
`;

const Image = styled.img`
  width: 58px;
  ${media.desktop} {
    width: 150px;
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
  padding: 11px;
  min-height: 72px;
  justify-content: center;
`;

const Name = styled.label`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 6px;
  text-align: center;
  ${media.desktop} {
    font-size: 18px;
  }
`;

const Year = styled.label`
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
