import React, { useState } from "react";
import styled from "styled-components";

import checkIcon from "../../assets/icons/check.svg";
import disabledCheck from "../../assets/icons/disabled_check.svg";
import { theme } from "../../core/theme/theme";

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
          style={{
            color:
              disabled === true || disabled_check === true
                ? theme.colors.lightestGrey
                : error && !checked
                ? theme.colors.lightestRed
                : theme.colors.grey,
          }}
          onClick={() => setChecked((s) => !s)}
        >
          {text}
        </Text>
      </CheckboxContainer>
      <Error>{!checked ? error : null}</Error>
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
  background-color: ${({ disabled }) =>
    disabled === true ? theme.colors.lightestGrey1 : theme.colors.white};
  border-color: ${({ disabled, error }) =>
    disabled === true
      ? theme.colors.lightestGrey
      : error
      ? theme.colors.lightestRed
      : theme.colors.lightGrey};

  :hover {
    border-color: ${({ disabled }) => (disabled === true ? null : theme.colors.red)};
  }
  transition: all 0.15s linear;
`;
const Icon = styled.img`
  position: absolute;
  top: -1px;
  left: -1px;
`;
const Text = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.grey};
  padding-top: 1px;
`;
const Error = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: ${theme.colors.lightestRed};
`;
