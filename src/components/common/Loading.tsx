import * as React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CustomLoading = styled.div`
  @keyframes loading {
    100% {
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 2.5rem;
  color: ${theme.palette.gray7};
  animation: loading 1s linear infinite;
`;

const Loading: React.FC = ({ ...rest }) => {
  const htmlProps = rest as any;
  return (
    <CustomLoading {...htmlProps}>
      <AiOutlineLoading3Quarters />
    </CustomLoading>
  );
};

export default Loading;
