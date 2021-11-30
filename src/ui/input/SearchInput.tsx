import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

import { theme } from "../../core/theme/theme";

type Props = InputHTMLAttributes<HTMLInputElement>;

type SearchProps = Props;
export const SearchInput = forwardRef<HTMLInputElement, SearchProps>((params, ref) => {
  return (
    <>
      <SearchContainer>
        <Search {...params} ref={ref}></Search>
        <Icon>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.12447 7.64771H8.65113L11.4778 10.4877C11.7511 10.761 11.7511 11.2077 11.4778 11.481C11.2045 11.7544 10.7578 11.7544 10.4845 11.481L7.65113 8.64771V8.12105L7.47113 7.93438C6.5378 8.73438 5.26447 9.14771 3.91113 8.92105C2.0578 8.60771 0.5778 7.06105 0.351133 5.19438C0.00446653 2.37438 2.3778 0.00104859 5.1978 0.347715C7.06447 0.574382 8.61113 2.05438 8.92447 3.90771C9.15113 5.26105 8.7378 6.53438 7.9378 7.46771L8.12447 7.64771ZM1.65114 4.64772C1.65114 6.30772 2.99114 7.64772 4.65114 7.64772C6.31114 7.64772 7.65114 6.30772 7.65114 4.64772C7.65114 2.98772 6.31114 1.64772 4.65114 1.64772C2.99114 1.64772 1.65114 2.98772 1.65114 4.64772Z"
              fill="#9C9C9C"
            />
          </svg>
        </Icon>
      </SearchContainer>
    </>
  );
});
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 12px;
`;
const Search = styled.input`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  display: flex;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${theme.colors.grey};
  border: 0.5px solid ${theme.colors.lightestGrey};
  background-color: ${theme.colors.white};
  :hover {
    box-shadow: 0px 0px 5px ${theme.colors.lightestGrey2};
  }
  :focus {
    box-shadow: 0px 0px 5px ${theme.colors.lightestGrey2};
    outline: none;
  }
  transition: all 0.1s linear;
`;
