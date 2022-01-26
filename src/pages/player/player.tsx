import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getPlayer } from "../../modules/players/getPlayerThunk";
import { Layout } from "../../ui/layout/Layout";
import { PlayerInfo } from "./components/PlayerInfo";

export const playerSelector = (state: RootState) => state.getPlayer;

export const Player = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { content, status } = useSelector(playerSelector);

  useEffect(() => {
    dispatch(getPlayer({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout fullWidthForMobile>
      {status === "loaded" ? (
        <Container>
          <PlayerInfo
            id={content?.id}
            avatarUrl={content?.avatarUrl}
            name={content?.name}
            position={content?.position}
            teamName={content?.teamName}
            height={content?.height}
            weight={content?.weight}
            birthday={content?.birthday}
          />
        </Container>
      ) : (
        "Loading..."
      )}
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
`;
