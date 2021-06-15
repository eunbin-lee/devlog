import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import devlog from '../../../static/devlog.png';
import logo from '../../../static/logo.png';
import styled from 'styled-components';
import theme from '../../styles/theme';
import HeaderGnb from './HeaderGnb';

function Header() {
  const router = useRouter();
  const { route, asPath } = router;

  const onClickHome = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Container className={route !== '/' && 'shadowing'}>
      <Inner>
        <LogoBlock>
          {route.includes('username') ? (
            <UserBlock>
              <img src={logo} alt="Devlog logo" onClick={onClickHome} />
              <Username>{asPath.slice(2)}</Username>
            </UserBlock>
          ) : (
            <img src={devlog} alt="Devlog logo" onClick={onClickHome} />
          )}
        </LogoBlock>
        <HeaderGnb />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  padding: 1.25rem 0;

  ${theme.media.large} {
    width: 100%;
    padding: 1.25rem 1rem;
  }
  ${theme.media.xsmall} {
    width: 320px;
  }
`;
const LogoBlock = styled.div``;
const UserBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Username = styled.span`
  margin-left: 0.25rem;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: bold;
  color: ${theme.palette.gray8};
`;
