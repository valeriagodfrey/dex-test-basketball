import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

import addImage from "../../assets/icons/add_photo.svg";
export const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // eslint-disable-next-line no-console
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <AddImage {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        "error"
      ) : (
        <ImageContainer>
          <Image src={addImage} alt="add_image"></Image>
        </ImageContainer>
      )}
    </AddImage>
  );
};
const ImageContainer = styled.div`
  display: flex;
  min-width: 336px;
  max-height: 261px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
`;
const AddImage = styled.div`
  display: flex;
`;
const Image = styled.img`
  margin: auto;
`;
