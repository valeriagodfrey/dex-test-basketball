import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import authImg from "../assets/icons/auth_img.svg";
import { Button } from "../ui/buttons/Button";
import { Input } from "../ui/input/Input";
import { CustomLink } from "../ui/link/CustomLink";
interface AuthProps {
  login: string;
  password: string;
}

export default function Auth() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthProps>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<AuthProps> = (data: AuthProps) => console.log(data);

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Sign In</Label>
          <InputContainer>
            <Input
              label="Login"
              {...register("login", { required: true })}
              error={errors.login?.type === "required" ? "Please, enter your login." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Password"
              type="password"
              {...register("password", { required: true })}
              error={errors.password?.type === "required" ? "Please, enter your password." : ""}
            ></Input>
          </InputContainer>

          <Button buttonType="primary">Sign In</Button>

          <Caption>
            Not a member yet? <CustomLink to={"/registration"}>Sign Up</CustomLink>
          </Caption>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Img src={authImg} alt="basketball" />
      </ImageContainer>
    </WrapperContainer>
  );
}
const WrapperContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  margin-top: 327px;
  width: 55%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
const Img = styled.img`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 307px;
`;
const Label = styled.div`
  margin-bottom: 32px;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.blue};
  margin-right: auto;
`;
const InputContainer = styled.div`
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
  text-align: center;
`;