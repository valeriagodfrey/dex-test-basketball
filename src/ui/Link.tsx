import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../core/theme/theme";

interface Props extends LinkProps {
  to: string;
  exact?: boolean;
  linkType: "active" | "disabled";
}
export const CustomLink: FC<Props> = ({ to, children, linkType, ...rest }) => {
  return (
    <Container>
      <Link
        style={{
          color: linkType === "active" ? theme.colors.lightRed : theme.colors.lightestGrey,
          pointerEvents: linkType === "disabled" ? "none" : "initial",
        }}
        to={to}
        {...rest}
      >
        {children}
      </Link>
    </Container>
  );
};
const Container = styled.div`
  color: red;
`;
