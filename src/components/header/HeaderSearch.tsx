import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { GoSearch } from 'react-icons/go';

function HeaderSearch() {
  return (
    <Search>
      <Link href="/search">
        <GoSearch />
      </Link>
    </Search>
  );
}

export default HeaderSearch;

const Search = styled.button`
  padding-top: 0.3rem;
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.palette.gray7};
`;
