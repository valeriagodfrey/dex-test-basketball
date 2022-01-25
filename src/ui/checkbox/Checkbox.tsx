import styled from "styled-components";

import { CheckIcon } from "../../assets/icons/CheckIcon";
import { CustomError } from "../error/CustomError";

interface Props {
  label?: string;
  disabled?: boolean;
  error?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox = ({ label, disabled, error, checked, onChange }: Props) => {
  return (
    <Container>
      <CheckboxContainer>
        <CustomCheckbox
          checked={checked}
          onClick={(value) => onChange(!value)}
          disabled={disabled}
          error={error}
        >
          <CheckIcon checked={checked} disabled={disabled} error={error} />
        </CustomCheckbox>
        <Label
          checked={checked}
          disabled={disabled}
          error={error}
          onClick={(value) => onChange(!value)}
        >
          {label}
        </Label>
      </CheckboxContainer>
      <CustomError>{error}</CustomError>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckboxContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;
const CustomCheckbox = styled.div<{ disabled?: boolean; error?: string; checked?: boolean }>`
  width: 12px;
  height: 12px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  border-radius: 2px;
  margin-right: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled === true ? theme.colors.lightestGrey1 : theme.colors.white};

  :hover {
    border-color: ${({ disabled, theme }) => (disabled === true ? null : theme.colors.red)};
  }
  transition: all 0.15s linear;
`;

const Label = styled.div<{
  disabled?: boolean;
  error?: string;
  checked?: boolean;
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ disabled, error, checked, theme }) =>
    disabled === true || (checked === true && disabled !== false)
      ? theme.colors.lightestGrey
      : error && !checked
      ? theme.colors.lightestRed
      : theme.colors.grey};
  padding-top: 1px;
`;
