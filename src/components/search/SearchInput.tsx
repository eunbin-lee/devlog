import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import useInput from '../../lib/hooks/useInput';

function SearchInput() {
  const router = useRouter();
  const [searchInput, onChangeSearch] = useInput();

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        router.push(`/search?q=${searchInput}`);
      }
    },
    [searchInput],
  );

  return (
    <SearchForm>
      <Input
        placeholder="검색어를 입력하세요"
        value={searchInput}
        onChange={onChangeSearch}
        onKeyPress={onKeyPress}
        autoFocus
      />
    </SearchForm>
  );
}

export default SearchInput;

const SearchForm = styled.form`
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 2.5rem;

  ${theme.media.medium} {
    font-size: 1.5rem;
  }
`;
