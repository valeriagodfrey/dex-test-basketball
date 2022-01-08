import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getTeam } from "../../modules/teams/getTeamThunk";
import { Layout } from "../../ui/layout/Layout";
import { Roster } from "./components/roster/Roster";
import { TeamInfo } from "./components/TeamInfo";

export const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector((state: RootState) => state.getTeam);
  useEffect(() => {
    dispatch(getTeam({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout type="teams">
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
          <Roster />
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
