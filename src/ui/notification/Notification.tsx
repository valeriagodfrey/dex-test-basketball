import React, { FC } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled, { css } from "styled-components";

export const Notification: FC = ({ children }) => {
  const notify = () => toast.warning({ children });
  return <StyledContainer>{notify}</StyledContainer>;
};
const StyledContainer = styled(ToastContainer).attrs({
  // пользовательские реквизиты
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: ${({ theme }) => theme.colors.red};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
