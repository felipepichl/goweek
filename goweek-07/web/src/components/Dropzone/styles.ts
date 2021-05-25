import styled from 'styled-components';

export const Container = styled.div`
  height: 180px;
  border: 1px dashed #ddd;
  border-radius: 4px;
  background: #fafafa;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
`;

export const AnimationContainer = styled.div`
  z-index: 1;

  P {
    color: #fff;
    font-weight: bold;
    padding: 4px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 1px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    filter: blur(4px);
    object-fit: cover;
  }

  position: absolute;
`;
