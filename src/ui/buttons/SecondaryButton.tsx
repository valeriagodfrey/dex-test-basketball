import React, { FC, useState } from "react";
import styled from "styled-components";

import { theme } from "../../core/theme/theme";

interface Props {
  buttonType?: "default" | "disabled";
}

export const SecondaryButton: FC<Props> = ({ buttonType = "default", children }) => {
  const [click, setClick] = useState(false);
  const buttonClick = () => {
    setClick(!click);
  };
  return (
    <Button
      buttonType={buttonType}
      onClick={buttonClick}
      style={{
        backgroundColor: click === true && buttonType === "default" ? theme.colors.lightGrey : "",
        borderColor: click === true && buttonType === "default" ? theme.colors.grey : "",
        color: click === true && buttonType === "default" ? theme.colors.grey : "",
      }}
    >
      {children}
    </Button>
  );
};
const Button = styled.button<{ buttonType?: "default" | "disabled" }>`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  color: ${({ buttonType }) =>
    buttonType === "default" ? theme.colors.lightGrey : theme.colors.lightestGrey};
  border-radius: 4px;
  border: 1px solid ${theme.colors.lightGrey};
  background-color: ${({ buttonType }) =>
    buttonType === "default" ? theme.colors.white : theme.colors.lightestGrey1};
  :hover {
    background-color: ${({ buttonType }) =>
      buttonType === "default" ? theme.colors.lightestGrey : null};
  }
`;
