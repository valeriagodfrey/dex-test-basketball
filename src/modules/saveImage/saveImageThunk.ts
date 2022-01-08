import { createAsyncThunk } from "@reduxjs/toolkit";

import { ISaveImageRequest } from "../../core/api/dto/ISaveImage";
import { saveImageRequest } from "../../core/api/requests/saveImageRequest";

export const saveImage = createAsyncThunk(
  "saveImage",
  async ({ onSuccess, ...params }: ISaveImageRequest & { onSuccess: (url: string) => void }) => {
    const url = await saveImageRequest(params);
    onSuccess(url);

    return url;
  },
);
