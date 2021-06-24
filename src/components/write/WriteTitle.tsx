import React from 'react';
import styled from 'styled-components';

function WriteTitle() {
  return (
    <>
      <TitleInput type="text" placeholder="제목을 입력하세요" />
    </>
  );
}

export default WriteTitle;

const TitleInput = styled.input`
  width: 100%;
  height: 10vh;
  padding: 0 2rem;
  font-size: 2rem;
  border: none;
`;
