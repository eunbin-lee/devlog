import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import useInput from '../../lib/hooks/useInput';

interface SearchInputProps {
  onSearch: (keyword: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const router = useRouter();
  const [searchInput, onChangeSearch] = useInput();

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSearch(searchInput);
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
  width: 70%;
  margin: 3rem auto 0;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 2.5rem;

  ${theme.media.medium} {
    font-size: 1.5rem;
  }
`;
