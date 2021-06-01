import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { GoX } from 'react-icons/go';
import AuthEmail from './AuthEmail';
import AuthSocial from './AuthSocial';

interface AuthModalProps {
  visible: boolean;
  mode: 'LOGIN' | 'REGISTER' | string;
  onShow: (mode: string) => void;
  onClose: () => void;
}

function AuthModal({ visible, mode, onShow, onClose }: AuthModalProps) {
  const message = mode === 'LOGIN' ? '로그인' : '회원가입';

  return (
    <>
      {visible && (
        <ModalBg>
          <Wapper>
            <Header>{mode === 'LOGIN' ? 'Log in' : 'Join us'}</Header>
            <AuthEmail message={message} />
            <AuthSocial message={message} />
            {mode === 'LOGIN' ? (
              <Suggest>
                아직 회원이 아니신가요?{' '}
                <span onClick={() => onShow('REGISTER')}>회원가입</span>
              </Suggest>
            ) : (
              <Suggest>
                이미 계정이 있으신가요?{' '}
                <span onClick={() => onShow('LOGIN')}>로그인</span>
              </Suggest>
            )}
            <Close onClick={() => onClose()}>
              <GoX />
            </Close>
          </Wapper>
        </ModalBg>
      )}
    </>
  );
}

export default AuthModal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  ${theme.media.medium} {
    background: ${theme.palette.white};
  }
  ${theme.media.small} {
    width: 320px;
  }
`;
const Wapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 31.25rem;
  height: 26.875rem;
  margin: 0 auto;
  margin-top: calc(50vh - 13.4375rem);
  background: ${theme.palette.white};
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 11;
  ${theme.media.medium} {
    width: 100%;
    height: 100vh;
    margin-top: 0;
    box-shadow: none;
  }
`;
const Header = styled.h1`
  margin-top: 5rem;
  margin-bottom: 2.75rem;
  font-size: 1.75rem;
  color: ${theme.palette.black};
`;
const Suggest = styled.p`
  position: absolute;
  bottom: 2.25rem;
  right: 2rem;
  font-size: ${theme.fontSizes.small};
  span {
    font-weight: bold;
    color: ${theme.palette.violet1};
    cursor: pointer;
  }
`;
const Close = styled.button`
  position: absolute;
  top: 1.75rem;
  right: 2rem;
  padding: 0.5rem;
  font-size: ${theme.fontSizes.large};
  color: ${theme.palette.gray6};
  ${theme.media.medium} {
    top: 1rem;
    right: 1rem;
  }
`;
