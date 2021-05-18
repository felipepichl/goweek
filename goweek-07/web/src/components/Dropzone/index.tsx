import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Animation from 'react-lottie';

import uploadAnimation from '../../assets/upload.json';
import uploadAnimationComplete from '../../assets/uploadComplete.json';
import uploadAnimationError from '../../assets/error.json';

import { Container, ImageContainer, AnimationContainer } from './styles';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [seletedFileUrl, setSeletedFileUrl] = useState('');

  const [invalidFile, setInvalidFile] = useState(false);

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      if (!file) {
        setInvalidFile(true);
        return;
      }

      setInvalidFile(false);
      setSeletedFileUrl('');

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

      {invalidFile ? (
        <>
          <Animation
            options={{
              animationData: uploadAnimationError,
            }}
            height={70}
            width={70}
          />

          <p>Unsupported file, only images</p>
        </>
      ) : (
        <>
          <AnimationContainer>
            <Animation
              options={{
                animationData: seletedFileUrl
                  ? uploadAnimationComplete
                  : uploadAnimation,

                loop: !seletedFileUrl,
              }}
              height={70}
              width={70}
            />
            {seletedFileUrl && <p>Upload success</p>}
          </AnimationContainer>

          {seletedFileUrl ? (
            <>
              <ImageContainer>
                <img src={seletedFileUrl} alt="" />
              </ImageContainer>
            </>
          ) : (
            <p>Drag a photo or click</p>
          )}
        </>
      )}
    </Container>
  );
};

export default Dropzone;
