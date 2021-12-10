import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";

import regImg from "../assets/icons/reg_img.svg";
import { Button } from "../../ui/buttons/Button";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import { Input } from "../../ui/input/Input";
import { CustomLink } from "../../ui/link/CustomLink";
interface RegisterProps {
  name: string;
  login: string;
  password: string;
  password2: string;
  check: boolean;
}

export default function Registration() {
  const [check, setCheck] = useState(false);
  const notify = () => toast.success("Wow so easy!");
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterProps>();

  const onSubmit: SubmitHandler<RegisterProps> = (data: RegisterProps) => console.log(data);

  const password = getValues("password");
  const password2 = getValues("password2");

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label onClick={notify}>Sign Up</Label>
          <Container>
            <Input
              label="Name:"
              {...register("name", { required: true })}
              error={errors.name?.type === "required" ? "Please, enter your name." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Login:"
              {...register("login", { required: true })}
              error={errors.login?.type === "required" ? "Please, enter your login." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Password:"
              type="password"
              {...register("password", { required: true })}
              error={errors.password?.type === "required" ? "Please, enter your password." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Enter your password again:"
              type="password"
              {...register("password2", { required: true })}
              error={
                password !== password2 && password2 !== ""
                  ? "Please, enter right password."
                  : errors.password2?.type === "required"
                  ? "Please, enter your password again"
                  : ""
              }
            ></Input>
          </Container>
          <Container>
            <Checkbox
              {...register("check", { required: true })}
              error={errors.check?.type === "required" ? "Please, check his." : ""}
              onChange={() => setCheck((s) => !s)}
              checked={check}
              label="I accept the agreement"
            />
          </Container>
          <Button buttonType="primary">Sign Up</Button>
          <Caption>
            Already a member? <CustomLink to={"/authorization"}>Sign In</CustomLink>
          </Caption>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Img src={regImg} alt="basketball" />
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
  margin-top: 226px;
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
  width: 75%;
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
const Container = styled.div`
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
  text-align: center;
`;
