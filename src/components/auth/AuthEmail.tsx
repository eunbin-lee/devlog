import React from 'react';
import useInput from '../../lib/hooks/useInput';
import Button from '../common/Button';

function AuthEmail({ mode, message }) {
  const [email, onChangeEmail] = useInput();

  return (
    <form>
      <input
        type="text"
        placeholder="이메일을 입력하세요."
        value={email}
        onChange={onChangeEmail}
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <Button
        type="submit"
        style={{ padding: '1.125rem', borderRadius: '1.125rem' }}
      >
        {message}
      </Button>
    </form>
  );
}

export default AuthEmail;
