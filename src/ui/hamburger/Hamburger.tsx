import styled from "styled-components";

import { BurgerIcon } from "../../assets/icons/BurgerIcon";
import { media } from "../../assets/theme/media";

interface Props {
  onClick?: () => void;
}
export const Hamburger = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <BurgerIcon />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  ${media.desktop} {
    display: none;
  }
`;
