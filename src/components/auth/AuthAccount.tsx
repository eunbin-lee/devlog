import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../lib/hooks/useInput';
import { isValidId, isValidPw } from '../../lib/utils';
import theme from '../../styles/theme';
import Button from '../common/Button';

interface AccountType {
  id: string;
  password: string;
}

function AuthAccount({ mode, message }) {
  const router = useRouter();
  const [userId, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const [users, setUsers] = useState([]);
  const USER = 'user';
  const userStorage: AccountType[] = JSON.parse(localStorage.getItem(USER));

  useEffect(() => {
    if (users.length === 0) {
      setUsers(users.concat(userStorage));
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === 'REGISTER') {
      const account: AccountType = { id: userId, password: password };
      if (userStorage && userStorage.find((user) => user.id === userId)) {
        alert('이미 존재하는 아이디입니다.');
      } else {
        setUsers(users.concat(account));
        localStorage.setItem('user', JSON.stringify(account));
        alert('회원가입에 성공하셨습니다. 로그인 해주세요.');
        router.push('/');
      }
    }
  };

  return (
    <AccountForm onSubmit={onSubmit}>
      <div style={{ position: 'relative' }}>
        <AccountItem>아이디</AccountItem>
        <AccountInput
          type="text"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={onChangeId}
          autoFocus
        />
        {mode === 'REGISTER' && !isValidId(userId) && (
          <Notice>4~12자 영문 소문자</Notice>
        )}
      </div>
      <div style={{ position: 'relative' }}>
        <AccountItem>비밀번호</AccountItem>
        <AccountInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={onChangePassword}
        />
        {mode === 'REGISTER' && !isValidPw(password) && (
          <Notice>8자 이상 영문 소문자, 숫자 조합</Notice>
        )}
      </div>
      <Button
        type="submit"
        style={{
          marginTop: '1.25rem',
          padding: '1.25rem',
          borderRadius: '1.25rem',
        }}
      >
        {message}
      </Button>
    </AccountForm>
  );
}

export default AuthAccount;

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AccountItem = styled.span`
  display: inline-block;
  width: 4rem;
  margin-right: 0.75rem;
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
  color: ${theme.palette.gray7};
`;
const AccountInput = styled.input`
  width: 12.5rem;
  margin-bottom: 1.5rem;
  padding: 0.425rem;
`;
const Notice = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  margin-left: 4.75rem;
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.palette.red};
`;
