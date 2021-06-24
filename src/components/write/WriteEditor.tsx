import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import Button from '../common/Button';
import { HiArrowLeft } from 'react-icons/hi';
import theme from '../../styles/theme';

function WriteEditor() {
  return (
    <>
      <Editor
        previewStyle="vertical"
        height="82vh"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
      <EditorButtons>
        <Exit>
          <HiArrowLeft
            style={{ marginRight: '0.275rem', fontSize: '1.125rem' }}
          />
          나가기
        </Exit>
        <Button size="large">출간하기</Button>
      </EditorButtons>
    </>
  );
}

export default WriteEditor;

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
