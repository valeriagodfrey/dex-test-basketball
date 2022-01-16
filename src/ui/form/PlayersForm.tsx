import { format } from "date-fns";
import { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IGetPlayerResponse } from "../../core/api/dto/IGetPlayers";
import { media } from "../../core/theme/media";
import { addPlayers } from "../../modules/players/addPlayersThunk";
import { updatePlayers } from "../../modules/players/updatePlayersThunk";
import { getPositionsSelector } from "../../modules/positions/getPositionsSelector";
import { getPositions } from "../../modules/positions/getPositionsThunk";
import { saveImage } from "../../modules/saveImage/saveImageThunk";
import { getTeamsOptionsSelector } from "../../modules/teams/getTeamsSelector";
import { getTeams } from "../../modules/teams/getTeamsThunk";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";
import { MyDropzone } from "../dropzone/Dropzone";
import { Input } from "../input/Input";
import { CustomSelect } from "../select/CustomSelect";
import { IOption } from "../select/data";

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
    setValue,
    reset,
  } = useForm<FormProps>();

  useEffect(() => {
    reset({
      ...data,
      birthday: format(new Date(data?.birthday || ""), "yyyy-MM-dd"),
    });
  }, [data, reset]);

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getTeams());
  }, [dispatch]);

  const positions = useSelector(getPositionsSelector);

  const teams = useSelector(getTeamsOptionsSelector);

  const action = isEdit ? updatePlayers : addPlayers;

  const onSubmit = (params: FormProps) =>
    dispatch(
      action({
        params: { ...params, birthday: new Date(params.birthday).toISOString() },
        onSuccess: () => {
          navigate("/players");
        },
      }),
    );

  const onChangeImage = useCallback(
    (file) => {
      dispatch(saveImage({ file, onSuccess: (avatarUrl) => setValue("avatarUrl", avatarUrl) }));
    },
    [dispatch, setValue],
  );

  const location = useLocation();

  const paths = [
    { path: "/players", name: "Players" },
    { path: location.pathname, name: data ? data.name : "Add new player" },
  ];

  return (
    <FormContainer>
      <FormHeader>
        <Breadcrumbs data={paths} />
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyDropzone onChange={onChangeImage} defaultValue={data?.avatarUrl} />
        <Information>
          <Container>
            <Input
              label="Name"
              {...register("name", { required: true })}
              error={errors.name?.type === "required" ? "Please, enter a player's name." : ""}
            ></Input>
          </Container>
          <Container>
            <Controller
              name="position"
              control={control}
              rules={{ required: true }}
              render={(props) => (
                <CustomSelect
                  options={positions || []}
                  value={(positions || []).filter((i) => i.value === props.field.value)[0]}
                  onChange={(value) => props.field.onChange((value as IOption).value)}
                  error={
                    errors.position && errors.position.type === "required"
                      ? "Please, choose a position."
                      : ""
                  }
                  label="Position"
                />
              )}
            />
          </Container>
          <Container>
            <Controller
              name="team"
              control={control}
              rules={{ required: true }}
              render={(props) => (
                <CustomSelect
                  options={teams}
                  value={teams.filter((i) => i.value === props.field.value)[0]}
                  onChange={(value) => props.field.onChange((value as IOption).value)}
                  error={
                    errors.position && errors.position.type === "required"
                      ? "Please, choose a team."
                      : ""
                  }
                  label="Team"
                />
              )}
            />
          </Container>
          <Box>
            <Container>
              <Input
                label="Height"
                {...register("height", { required: true, valueAsNumber: true })}
                error={errors.height?.type === "required" ? "Please, enter a player's height." : ""}
              ></Input>
            </Container>
            <Container>
              <Input
                label="Weight"
                {...register("weight", { required: true, valueAsNumber: true })}
                error={errors.weight?.type === "required" ? "Please, enter a player's weight." : ""}
              ></Input>
            </Container>
          </Box>
          <Box>
            <Container>
              <Input
                label="Birthday"
                type="date"
                {...register("birthday", { required: true })}
                error={
                  errors.birthday?.type === "required" ? "Please, choose a player's birthday." : ""
                }
              ></Input>
            </Container>
            <Container>
              <Input
                label="Number"
                {...register("number", { required: true, valueAsNumber: true })}
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

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
`;

const Container = styled.div`
  margin-bottom: 24px;
  cursor: pointer;
`;

const Information = styled.div`
  width: 100%;
  ${media.desktop} {
    max-width: 366px;
  }
`;
