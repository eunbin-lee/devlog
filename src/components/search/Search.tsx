import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Container>
      <SearchInput />
      {q && <SearchResult query={q} />}
    </Container>
  );
}

export default Search;

const Container = styled.div`
  overflow: hidden;
  width: 768px;
  margin: 0 auto;
  padding: 1rem 0;

  ${theme.media.large} {
    width: 100%;
  }
  ${theme.media.xsmall} {
    width: 320px;
  }
`;
