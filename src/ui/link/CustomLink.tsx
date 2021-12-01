import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

interface Props extends LinkProps {
  disabled?: boolean;
}
export const CustomLink: FC<Props> = ({ children, disabled = false, ...rest }) => {
  return (
    <CustomizeLink {...rest} disabled={disabled}>
      {children}
    </CustomizeLink>
  );
};

const CustomizeLink = styled(Link)<{ disabled?: boolean }>`
  pointer-events: ${({ disabled }) => (disabled === true ? "none" : "initial")};
  color: ${({ theme, disabled }) =>
    disabled === true ? theme.colors.lightestGrey : theme.colors.lightRed};
`;
