import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { GoSearch } from 'react-icons/go';
import { useRouter } from 'next/router';

function HeaderSearch() {
  const router = useRouter();
  const onClickSearch = () => {
    router.push('/search');
  };

  return (
    <Search onClick={onClickSearch}>
      <GoSearch />
    </Search>
  );
}

export default HeaderSearch;

const Search = styled.button`
  padding-top: 0.3rem;
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.palette.gray7};
`;
