import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPlayer } from "../../modules/players/getPlayerThunk";
import { PlayersForm } from "../../ui/form/PlayersForm";
import { Layout } from "../../ui/layout/Layout";
import { playerSelector } from "../player/player";

export const EditPlayer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector(playerSelector);

  useEffect(() => {
    dispatch(getPlayer({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout>{status === "loaded" ? <PlayersForm data={content} isEdit /> : "Loading..."}</Layout>
  );
};
