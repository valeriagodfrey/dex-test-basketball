import React, { useState } from "react";
import styled from "styled-components";

import checkIcon from "../../assets/icons/check.svg";
import disabledCheck from "../../assets/icons/disabled_check.svg";
import { CustomError } from "../error/CustomError";

interface Props {
  text?: string;
  disabled?: boolean;
  error?: string;
  disabled_check?: boolean;
}
export const Checkbox = ({ text, disabled, error, disabled_check }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <CheckboxContainer>
        <CustomCheckbox
          onClick={() => setChecked((s) => !s)}
          disabled={disabled}
          error={error}
          disabled_check={disabled_check}
        >
          {checked && disabled !== true ? (
            <Icon src={checkIcon} alt="check" />
          ) : disabled_check && disabled ? (
            <Icon src={disabledCheck} alt="disabled_check" />
          ) : null}
        </CustomCheckbox>
        <Text
          check={checked}
          disabled={disabled}
          disabled_check={disabled_check}
          error={error}
          onClick={() => setChecked((s) => !s)}
        >
          {text}
        </Text>
      </CheckboxContainer>
      <CustomError>{!checked ? error : null}</CustomError>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const CheckboxContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;
const CustomCheckbox = styled.div<{ disabled?: boolean; error?: string; disabled_check?: boolean }>`
  width: 12px;
  height: 12px;
  border: 1px solid;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  border-radius: 2px;
  margin-right: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled === true ? theme.colors.lightestGrey1 : theme.colors.white};
  border-color: ${({ disabled, error, theme }) =>
    disabled === true
      ? theme.colors.lightestGrey
      : error
      ? theme.colors.lightestRed
      : theme.colors.lightGrey};

  :hover {
    border-color: ${({ disabled, theme }) => (disabled === true ? null : theme.colors.red)};
  }
  transition: all 0.15s linear;
`;
const Icon = styled.img`
  position: absolute;
  top: -1px;
  left: -1px;
`;
const Text = styled.div<{
  disabled?: boolean;
  disabled_check?: boolean;
  error?: string;
  check?: boolean;
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ disabled, disabled_check, error, check, theme }) =>
    disabled === true || disabled_check === true
      ? theme.colors.lightestGrey
      : error && !check
      ? theme.colors.lightestRed
      : theme.colors.grey};
  padding-top: 1px;
`;
