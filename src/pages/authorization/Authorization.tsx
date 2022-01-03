import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import authImg from "../../assets/icons/auth_img.svg";
import { fetchAuthorization } from "../../modules/authorization/authorizationThunk";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { CustomLink } from "../../ui/link/CustomLink";
import { notify } from "../UIElements";
interface AuthProps {
  login: string;
  password: string;
}

export const Authorization = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthProps>();

  const onSubmit: SubmitHandler<AuthProps> = (data: AuthProps) =>
    dispatch(fetchAuthorization(data));

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label onClick={notify}>Sign In</Label>
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
};
const WrapperContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 340px auto 334px;
  width: 55%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  height: min-content;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
const Img = styled.img`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 305px;
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
