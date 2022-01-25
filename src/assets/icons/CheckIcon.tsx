import { theme } from "../theme/theme";

interface Props {
  checked?: boolean;
  disabled?: boolean;
  error?: string;
}
export const CheckIcon = ({ checked, disabled, error }: Props) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="11"
        height="11"
        rx="1.5"
        fill={
          checked && disabled !== true
            ? theme.colors.red
            : checked && disabled === true
            ? theme.colors.lightestGrey
            : "none"
        }
        stroke={
          disabled === true
            ? theme.colors.lightestGrey
            : error
            ? theme.colors.lightestRed
            : !disabled && checked
            ? theme.colors.red
            : theme.colors.lightGrey
        }
      />
      <path
        d="M5.64624 8.39625C5.45124 8.59125 5.13624 8.59125 4.94124 8.39625L3.14624 6.60125C3.05262 6.50783 3 6.38101 3 6.24875C3 6.11649 3.05262 5.98967 3.14624 5.89625C3.34124 5.70125 3.65624 5.70125 3.85124 5.89625L5.29124 7.33625L8.73124 3.89625C8.92624 3.70125 9.24124 3.70125 9.43624 3.89625C9.63124 4.09125 9.63124 4.40625 9.43624 4.60125L5.64624 8.39625Z"
        fill="white"
      />
    </svg>
  );
};
