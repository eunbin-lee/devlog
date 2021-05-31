import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../common/Button';
import HeaderSearch from './HeaderSearch';

function Header() {
  const router = useRouter();
  const { route } = router;

  return (
    <Container className={route !== '/' && 'shadowing'}>
      <Inner>
        <Logo>Devlog</Logo>
        <Gnb>
          <HeaderSearch />
          <Button border={true}>로그인</Button>
        </Gnb>
      </Inner>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  &.shadowing {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  }
`;
const Inner = styled.div`
  overflow: hidden;
  width: 1240px;
  margin: 0 auto;
  padding: 1.25rem 0;

  ${theme.media.xlarge} {
    width: 100%;
    padding: 1rem;
  }
`;
const Logo = styled.div`
  float: left;
  font-size: ${theme.fontSizes.large};
`;
const Gnb = styled.div`
  float: right;
  display: flex;
  justify-content: right;
  align-items: center;
`;
