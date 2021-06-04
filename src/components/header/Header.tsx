import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../common/Button';
import HeaderSearch from './HeaderSearch';
import AuthModal from '../auth/AuthModal';

function Header() {
  const router = useRouter();
  const { route } = router;

  const [visible, setVisible] = useState(false);
  const [authMode, setAuthMode] = useState('');
  const onShowModal = useCallback(
    (mode: string) => {
      setAuthMode(mode);
      setVisible(true);
    },
    [visible],
  );
  const onToggleMode = useCallback(() => {
    if (authMode === 'LOGIN') {
      setAuthMode('REGISTER');
    } else {
      setAuthMode('LOGIN');
    }
  }, [authMode]);
  const onCloseModal = useCallback(() => {
    setVisible(false);
  }, [visible]);

  return (
    <Container className={route !== '/' && 'shadowing'}>
      <Inner>
        <Logo>
          <Link href="/">Devlog</Link>
        </Logo>
        <Gnb>
          <HeaderSearch />
          <Login onClick={() => onShowModal('LOGIN')}>Log in</Login>
          <Button
            border={true}
            onClick={() => onShowModal('REGISTER')}
            style={{ padding: '1rem', borderRadius: '1.25rem' }}
          >
            Get started
          </Button>
        </Gnb>
        <AuthModal
          visible={visible}
          mode={authMode}
          onSwitch={onToggleMode}
          onClose={() => onCloseModal()}
        />
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
  width: 1024px;
  margin: 0 auto;
  padding: 1.25rem 0;

  ${theme.media.large} {
    width: 100%;
    padding: 1.25rem 1rem;
  }
  ${theme.media.small} {
    width: 320px;
  }
`;
const Logo = styled.div`
  float: left;
  font-size: ${theme.fontSizes.large};
`;
const Gnb = styled.div`
  float: right;
  display: flex;
  align-items: center;
`;
const Login = styled.button`
  margin: 0 1.25rem;
  font-size: ${theme.fontSizes.default};
  color: ${theme.palette.violet1};
`;
