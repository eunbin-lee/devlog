import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../lib/hooks/useInput';
import theme from '../../styles/theme';

interface SearchInputProps {
  onSearch: (keyword: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchInput, onChangeSearch] = useInput();

  return (
    <SearchForm>
      <Input
        placeholder="검색어를 입력하세요"
        value={searchInput}
        onChange={onChangeSearch}
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
