import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled, { css } from "styled-components";

import addImage from "../../assets/icon/add_photo.svg";
import { media } from "../../assets/theme/media";

interface IProps {
  onChange?: (file: string) => void;
  defaultValue?: string;
}
export const MyDropzone = ({ onChange, defaultValue }: IProps) => {
  const [file, setFile] = useState<string | null>(defaultValue || null);
  useEffect(() => {
    setFile(defaultValue || null);
  }, [defaultValue]);

  const onDrop = useCallback(
    (files) => {
      // eslint-disable-next-line no-console

      if (FileReader && files && files.length) {
        const fr = new FileReader();
        fr.onload = function () {
          const result = fr.result as string;
          setFile(result);
          onChange?.(files[0]);
        };
        fr.readAsDataURL(files[0]);
      }
    },
    [onChange],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <AddImage>
      <input {...getInputProps()} />
      <ImageContainer {...getRootProps()} isDragActive={isDragActive}>
        {!file && <EmptyImage src={addImage} alt="add_image" />}
        {file && <Image src={file} />}
      </ImageContainer>
    </AddImage>
  );
};
const ImageContainer = styled.div<{ isDragActive?: boolean }>`
  display: flex;
  overflow: hidden;

  height: 144px;
  width: 185px;

  ${media.desktop} {
    width: 100%;
  }
  ${media.largeDesktop} {
    max-height: 230px;
    width: 90%;
    height: auto;
  }
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;

  ${({ isDragActive }) =>
    isDragActive &&
    css`
      opacity: 0.8;
    `}
`;
const AddImage = styled.div`
  display: flex;
  justify-self: center;
  ${media.desktop} {
    justify-self: stretch;
  }
`;
const EmptyImage = styled.img`
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
