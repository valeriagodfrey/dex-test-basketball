import React from "react";
import styled from "styled-components";

import denver_nuggets from "../../assets/icons/denver_nuggets.svg";
interface Props {
  name: string;
  foundationYear: 0;
}
export const Team = ({ name, foundationYear }: Props) => {
  return (
    <Container>
      <LogoContainer>
        <Image src={denver_nuggets} alt="denver_nuggets" />
      </LogoContainer>
      <Info>
        <Name>{name}</Name>
        <Year>Year of foundation: {foundationYear}</Year>
      </Info>
    </Container>
  );
};
const Container = styled.div``;
const LogoContainer = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
`;
const Image = styled.img`
  margin: 65px 107px;
`;
const Info = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Name = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
  margin-top: 24px;
`;
const Year = styled.label`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 24px;
`;
