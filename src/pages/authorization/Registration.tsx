import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import regImg from "../../assets/icons/reg_img.svg";
import { media } from "../../assets/theme/media";
import { fetchRegistration } from "../../modules/authorization/authorizationThunk";
import { Button } from "../../ui/button/Button";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import { Input } from "../../ui/input/Input";
import { CustomLink } from "../../ui/link/CustomLink";

interface RegisterProps {
  userName: string;
  login: string;
  password: string;
  password2: string;
  check: boolean;
}

export const Registration = () => {
  const dispatch = useDispatch();

  const {
    register,
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterProps>();

  const onSubmit = (data: RegisterProps) => dispatch(fetchRegistration(data));

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign Up</Title>
          <InputContainer>
            <Input
              label="Name:"
              {...register("userName", { required: true })}
              error={errors.userName?.type === "required" ? "Please, enter your name." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Login:"
              {...register("login", { required: true })}
              error={errors.login?.type === "required" ? "Please, enter your login." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Password:"
              type="password"
              {...register("password", {
                required: true,
              })}
              error={errors.password?.type === "required" ? "Please, enter your password." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Enter your password again:"
              type="password"
              {...register("password2", {
                required: true,
                validate: () => getValues("password2") === getValues("password"),
              })}
              error={
                errors.password2 && errors.password2.type === "validate"
                  ? "Please, enter right password."
                  : errors.password2?.type === "required"
                  ? "Please, enter your password again"
                  : ""
              }
            ></Input>
          </InputContainer>

          <Controller
            name="check"
            control={control}
            render={(props) => (
              <InputContainer>
                <Checkbox
                  {...register("check", { required: true })}
                  {...props}
                  checked={props.field.value}
                  onChange={(value) => {
                    value = !props.field.value;
                    props.field.onChange(value);
                  }}
                  error={errors.check?.type === "required" ? "Please, check this." : ""}
                  label="I accept the agreement"
                />
              </InputContainer>
            )}
          />
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
};

const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  ${media.desktop} {
    grid-template-columns: 606px 1fr;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 366px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 0 64px;

  display: none;
  ${media.desktop} {
    display: flex;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 660px;
`;

const Title = styled.div`
  margin-bottom: 32px;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.blue};

  text-align: center;
  ${media.desktop} {
    text-align: left;
  }
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
