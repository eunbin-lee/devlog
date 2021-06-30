import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
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
    </>
  );
}

export default WriteEditor;
