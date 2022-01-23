import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import authImg from "../../assets/icons/auth_img.svg";
import { media } from "../../assets/theme/media";
import { fetchAuthorization } from "../../modules/authorization/authorizationThunk";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { CustomLink } from "../../ui/link/CustomLink";

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

  const onSubmit = (data: AuthProps) => dispatch(fetchAuthorization(data));

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign In</Title>
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  ${media.desktop} {
    grid-template-columns: 606px 1fr;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 366px;
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
  max-width: 606px;
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
