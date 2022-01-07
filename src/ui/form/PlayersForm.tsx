import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IGetPlayerResponse } from "../../core/api/dto/IGetPlayers";
import { media } from "../../core/theme/media";
import { addPlayers } from "../../modules/players/addPlayersThunk";
import { updatePlayers } from "../../modules/players/updatePlayersThunk";
import { Button } from "../button/Button";
import { MyDropzone } from "../dropzone/Dropzone";
import { Input } from "../input/Input";
import { CustomSelect } from "../select/CustomSelect";
import { IOptions } from "../select/data";

interface FormProps {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl: string;
  id: number;
  teamName: string;
}

interface IProps {
  data?: IGetPlayerResponse;
  isEdit?: boolean;
}
export const PlayersForm = ({ data, isEdit }: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormProps>();

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const action = isEdit ? updatePlayers : addPlayers;

  const onSubmit = (params: FormProps) =>
    dispatch(
      action({
        params,
        onSuccess: () => {
          navigate("/players");
        },
      }),
    );

  return (
    <FormContainer>
      <FormHeader>
        <Сrumbs>Players / Add new player</Сrumbs>
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyDropzone />
        <Information>
          <Container>
            <Input
              label="Name"
              {...register("name", { required: true })}
              error={errors.name?.type === "required" ? "Please, enter a player's name." : ""}
            ></Input>
          </Container>
          {/* <Container>
            <Controller
              name="position"
              control={control}
              rules={{ required: true }}
              render={(props) => (
                <CustomSelect
                  {...register("position", { required: true })}
                  {...props}
                  options={[{ value: "Denver", label = "Denver" }]}
                  isMulti
                  error={
                    errors.position && errors.position.type === "required"
                      ? "Please, choose a position."
                      : ""
                  }
                  label="I accept the agreement"
                />
              )}
            /> */}
          <Container>
            <Input
              label="Position"
              {...register("position", { required: true })}
              error={errors.position?.type === "required" ? "Please, choose a position." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Team"
              {...register("team", { required: true })}
              error={errors.team?.type === "required" ? "Please, choose a team." : ""}
            ></Input>
          </Container>
          {/* <Container>
            <CustomSelect options={IOptions} label="Team" />
          </Container> */}
          <Box>
            <Container>
              <Input
                label="Height"
                {...register("height", { required: true })}
                error={errors.height?.type === "required" ? "Please, enter a player's height." : ""}
              ></Input>
            </Container>
            <Container>
              <Input
                label="Weight"
                {...register("weight", { required: true })}
                error={errors.weight?.type === "required" ? "Please, enter a player's weight." : ""}
              ></Input>
            </Container>
          </Box>
          <Box>
            <Container>
              <Input
                label="Birthday"
                {...register("birthday", { required: true })}
                error={
                  errors.birthday?.type === "required" ? "Please, choose a player's birthday." : ""
                }
              ></Input>
            </Container>
            <Container>
              <Input
                label="Number"
                {...register("number", { required: true })}
                error={errors.number?.type === "required" ? "Please, enter a player's number." : ""}
              ></Input>
            </Container>
          </Box>
          <Box>
            <Button buttonType="secondary" type="button" onClick={() => navigate("/players")}>
              Cancel
            </Button>
            <Button buttonType="primary">Save</Button>
          </Box>
        </Information>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    border-radius: 10px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  padding: 48px 24px;
  grid-row-gap: 48px;

  ${media.desktop} {
    grid-template-columns: 185px 1fr;
    grid-column-gap: 80px;
    padding: 48px;
  }

  ${media.largeDesktop} {
    grid-template-columns: 336px 1fr;
    grid-column-gap: 110px;
    padding: 48px 73px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  padding: 16px;
  ${media.desktop} {
    padding: 24px 32px;
  }
`;

const Сrumbs = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
`;

const Container = styled.div`
  margin-bottom: 24px;
`;

const Information = styled.div`
  width: 100%;
  ${media.desktop} {
    max-width: 366px;
  }
`;
