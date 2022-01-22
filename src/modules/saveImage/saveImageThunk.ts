import { createAsyncThunk } from "@reduxjs/toolkit";

import { ISaveImageRequest } from "../../api/dto/ISaveImage";
import { saveImageRequest } from "../../api/requests/saveImageRequest";

export const saveImage = createAsyncThunk(
  "saveImage",
  async ({ onSuccess, ...params }: ISaveImageRequest & { onSuccess: (url: string) => void }) => {
    const url = await saveImageRequest(params);
    onSuccess(url);

    return url;
  },
);
