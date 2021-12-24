import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getTeams } from "../../modules/teams/getTeamsThunk";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/cards/Card";
import { Team } from "../../ui/cards/Team";
import { SearchInput } from "../../ui/input/SearchInput";
import { Layout } from "../../ui/layout/Layout";

export const TeamsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const { content, status } = useSelector((state: RootState) => state.getTeams);

  return (
    <Layout type="teams">
      <Row>
        <Box type="long">
          <SearchInput placeholder="Search..." />
        </Box>
        <Box type="short" onClick={() => navigate("/teams/add")}>
          <Button buttonType="primary" svg="add">
            Add
          </Button>
        </Box>
      </Row>
      <TeamsContainer onClick={() => navigate("/teams/add")}>
        {status === "loaded" ? (
          <List>
            {content?.data.map((item) => (
              <Team name={item.name} foundationYear={item.foundationYear} key={item.id} />
            ))}
          </List>
        ) : content?.count === 0 ? (
          <Card type="teams" />
        ) : (
          ""
        )}
      </TeamsContainer>
    </Layout>
  );
};

const TeamsContainer = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 139px;
`;
const Box = styled.div<{ type?: "short" | "long" }>`
  display: flex;
  min-width: ${({ type }) => (type === "short" ? `104px` : `364px`)};
`;
