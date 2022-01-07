import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "../../core/redux/store";
import { getPlayer } from "../../modules/players/getPlayerThunk";
import { PlayersForm } from "../../ui/form/PlayersForm";
import { Layout } from "../../ui/layout/Layout";

export const EditPlayer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector((state: RootState) => state.getPlayer);

  useEffect(() => {
    dispatch(getPlayer({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout type="players">
      {status === "loaded" ? <PlayersForm data={content} isEdit /> : "...loading"}
    </Layout>
  );
};
