import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "../ui/buttons/PrimaryButton";
import { SecondaryButton } from "../ui/buttons/SecondaryButton";

export const UIElements = () => {
  return (
    <Container>
      <PrimaryButton>Hello world</PrimaryButton>
      <PrimaryButton buttonType="disabled">Goodbye world</PrimaryButton>
      <SecondaryButton>Programmer</SecondaryButton>
      <SecondaryButton buttonType="disabled">Not a Programmer</SecondaryButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
