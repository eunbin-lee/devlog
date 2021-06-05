import React from 'react';
import styled from 'styled-components';
import useInput from '../../lib/hooks/useInput';
import theme from '../../styles/theme';
import Button from '../common/Button';

function AuthAccount({ mode, message }) {
  const [userId, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();

  const onSubmit = () => {};

  return (
    <AccountForm>
      <div>
        <AccountItem>아이디</AccountItem>
        <AccountInput
          type="text"
          placeholder="아이디를 입력하세요."
          value={userId}
          onChange={onChangeId}
        />
      </div>
      <div>
        <AccountItem>비밀번호</AccountItem>
        <AccountInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <Button
        type="submit"
        style={{
          marginTop: '0.75rem',
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
  margin-bottom: 1rem;
  padding: 0.5rem;
`;
