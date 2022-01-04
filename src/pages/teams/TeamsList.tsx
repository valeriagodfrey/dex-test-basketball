import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { media } from "../../core/theme/media";
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
        <SearchInput placeholder="Search..." />
        <Button buttonType="primary" svg="add" onClick={() => navigate("/teams/add")}>
          Add
        </Button>
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

const TeamsContainer = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  align-items: stretch;
  ${media.desktop} {
    grid-gap: 24px;
  }
  ${media.extraLargeDesktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 16px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${media.desktop} {
    grid-template-columns: 1fr auto;
    margin-bottom: 40px;

    & > :first-child {
      max-width: 364px;
    }
  }
`;
