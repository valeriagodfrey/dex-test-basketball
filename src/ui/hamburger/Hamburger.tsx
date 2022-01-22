import styled from "styled-components";

import { media } from "../../assets/theme/media";

interface Props {
  src?: string;
  alt?: string;
  onClick?: () => void;
}
export const Hamburger = ({ src, alt, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <StyledHamburger src={src} alt={alt}></StyledHamburger>
    </Container>
  );
};
const StyledHamburger = styled.img`
  cursor: pointer;
  ${media.desktop} {
    display: none;
  }
`;
const Container = styled.div`
  ${media.desktop} {
    display: none;
  }
`;
