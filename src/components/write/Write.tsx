import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import theme from '../../styles/theme';
import WriteTitle from './WriteTitle';

const WriteEditor = dynamic(() => import('../write/WriteEditor'), {
  ssr: false,
});

function WriteLayout() {
  return (
    <>
      <WriteTitle />
      <WriteEditor />
    </>
  );
}

export default WriteLayout;

// const Container = styled.div``;
