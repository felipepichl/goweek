import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadButton from 'react-lottie';

import uploadAnimation from '../../assets/upload.json';
import uploadAnimationComplete from '../../assets/uploadComplete.json';

import { Container } from './styles';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [seletedFileUrl, setSeletedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSeletedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {seletedFileUrl ? (
        <img src={seletedFileUrl} alt="Point thumbnail" />
      ) : (
        <>
          <UploadButton
            options={{
              animationData: uploadAnimation,
              loop: true,
              autoplay: true,
            }}
            height={70}
            width={70}
          />
          <p>Drag a photo or click</p>
        </>
      )}
    </Container>
  );
};

export default Dropzone;
