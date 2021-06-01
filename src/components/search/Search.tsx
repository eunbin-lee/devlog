import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import SearchInput from './SearchInput';

function Search() {
  const onSearch = () => {};

  return (
    <Container>
      <SearchInput onSearch={onSearch} />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  overflow: hidden;
  width: 1240px;
  margin: 0 auto;
  padding: 1rem 0;

  ${theme.media.xlarge} {
    width: 100%;
  }
  ${theme.media.small} {
    width: 320px;
  }
`;
