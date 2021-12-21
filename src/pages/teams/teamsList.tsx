import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getTeams } from "../../modules/teams/getTeamsThunk";
import { Button } from "../../ui/buttons/Button";
import { Layout } from "../../ui/layout/Layout";

export const TeamsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  const { content, status } = useSelector((state: RootState) => state.getTeams);

  return (
    <Layout type="teams">
      <Button buttonType="primary">Click</Button>
      <TeamsContainer>
        {status === "loaded" && content?.count !== 0 ? (
          <List>
            {content?.data.map((item) => (
              <Team>{item}</Team>
            ))}
          </List>
        ) : status === "loaded" && content?.count === 0 ? (
          "Empty"
        ) : (
          "error"
        )}
      </TeamsContainer>
    </Layout>
  );
};

const TeamsContainer = styled.div``;
const List = styled.div``;
const Team = styled.div``;
