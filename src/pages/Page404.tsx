import styled from "styled-components";

import img from "../assets/icons/404.svg";
import { media } from "../assets/theme/media";
export const Page404 = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={img} alt="404" />
        <Title>Page not found</Title>
        <Label>{"Sorry, we can’t find what you’re looking for"}</Label>
      </ImageContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 275px;
  ${media.desktop} {
    max-width: 380px;
  }
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
  line-height: 25px;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightestRed};
  margin-top: 48px;
  text-align: center;
  ${media.desktop} {
    margin-top: 56px;
    font-size: 36px;
  }
`;

const Label = styled.div`
  margin-top: 16px;
  font-size: 15px;
  line-height: 24px;
  ${media.desktop} {
    margin-top: 24px;
    font-size: 24px;
    line-height: 33px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
