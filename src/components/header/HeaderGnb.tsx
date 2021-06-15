import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import HeaderSearch from './HeaderSearch';
import AuthModal from '../auth/AuthModal';

function HeaderGnb() {
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
    <>
      <Gnb>
        <HeaderSearch />
        <Button
          onClick={() => onShowModal('LOGIN')}
          border={true}
          style={{
            marginLeft: '1.25rem',
            padding: '1rem',
            borderRadius: '1.25rem',
          }}
        >
          Log in
        </Button>
      </Gnb>
      <AuthModal
        visible={visible}
        mode={authMode}
        onSwitch={onToggleMode}
        onClose={() => onCloseModal()}
      />
    </>
  );
}

export default HeaderGnb;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;
