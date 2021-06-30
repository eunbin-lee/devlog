import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../common/Button';
import theme from '../../styles/theme';
import { HiArrowLeft } from 'react-icons/hi';

function WriteButtons() {
  const router = useRouter();

  const onClickExit = () => {
    history.back();
  };
  const onClickPublish = () => {};

  return (
    <EditorButtons>
      <Exit onClick={onClickExit}>
        <HiArrowLeft
          style={{ marginRight: '0.275rem', fontSize: '1.125rem' }}
        />
        나가기
      </Exit>
      <Button size="large">출간하기</Button>
    </EditorButtons>
  );
}

export default WriteButtons;

const EditorButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  padding: 0 1.5rem;
`;
const Exit = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${theme.fontSizes.default};
`;
