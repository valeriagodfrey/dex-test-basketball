import { baseRequest } from "../baseRequest";
import { ISaveImageRequest, ISaveImageResponse } from "../dto/ISaveImage";

export const saveImageRequest = ({ file }: ISaveImageRequest) => {
  const formData = new FormData();
  formData.append("file", file);

  return baseRequest<Record<string, never>, ISaveImageResponse>({
    url: "/api/Image/SaveImage",
    method: "POST",
    formData,
  });
};
