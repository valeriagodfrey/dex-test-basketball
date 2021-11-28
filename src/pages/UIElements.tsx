import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "../ui/buttons/PrimaryButton";
import { SecondaryButton } from "../ui/buttons/SecondaryButton";
import { Input } from "../ui/input/Input";

export const UIElements = () => {
  return (
    <Container>
      <Buttons>
        <PrimaryButton>Hello world</PrimaryButton>
        <PrimaryButton buttonType="disabled">Goodbye world</PrimaryButton>
        <SecondaryButton>Programmer</SecondaryButton>
        <SecondaryButton buttonType="disabled">Not a Programmer</SecondaryButton>
      </Buttons>
      <Input label="Login" />
      <Input label="Password" />
      <Input disabled label="Email" value="hey" />
      <Input error="Error" label="Age" />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
  margin: 10px 0px 15px 0;
`;
