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

  const [invalidFile, setInvalidFile] = useState(false);

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      if (!file) {
        setInvalidFile(true);
        return;
      }
      setInvalidFile(false);

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
        <p>File not suported</p>
      ) : (
        <>
          <UploadButton
            options={{
              animationData: seletedFileUrl
                ? uploadAnimationComplete
                : uploadAnimation,

              loop: !seletedFileUrl,
            }}
            height={70}
            width={70}
          />

          {seletedFileUrl ? <p>Upload OK</p> : <p>Drag a photo or click</p>}
        </>
      )}
    </Container>
  );
};

export default Dropzone;
