import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getPlayers } from "../../modules/players/getPlayersThunk";
import { getTeam } from "../../modules/teams/getTeamThunk";
import { Layout } from "../../ui/layout/Layout";
import { playersSelector } from "../players/PlayersList";
import { Roster } from "./components/roster/Roster";
import { TeamInfo } from "./components/TeamInfo";

export const teamSelector = (state: RootState) => state.getTeam;

export const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector(teamSelector);
  const player = useSelector(playersSelector);

  useEffect(() => {
    dispatch(getTeam({ id: Number(id) }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPlayers({ teamIds: [Number(id)] }));
  }, [dispatch, id]);

  return (
    <Layout fullWidthForMobile>
      {status === "loaded" ? (
        <Container>
          <TeamInfo
            id={content?.id}
            imageUrl={content?.imageUrl}
            name={content?.name}
            foundationYear={content?.foundationYear}
            division={content?.division}
            conference={content?.conference}
          />
          <Roster data={player.content?.data} />
        </Container>
      ) : (
        "loading..."
      )}
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
`;
