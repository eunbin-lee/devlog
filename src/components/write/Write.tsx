import React from 'react';
import dynamic from 'next/dynamic';
import WriteTitle from './WriteTitle';
import WriteButtons from './WriteButtons';

const WriteEditor = dynamic(() => import('../write/WriteEditor'), {
  ssr: false,
});

function WriteLayout() {
  return (
    <>
      <WriteTitle />
      <WriteEditor />
      <WriteButtons />
    </>
  );
}

export default WriteLayout;
