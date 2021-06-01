import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

function AuthSocial({ message }) {
  return (
    <>
      <Title>소셜 계정으로 {message}</Title>
      <SocialList>
        <SocialItem>구글</SocialItem>
        <SocialItem>카카오</SocialItem>
        <SocialItem>깃허브</SocialItem>
      </SocialList>
    </>
  );
}

export default AuthSocial;

const Title = styled.p`
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
  color: ${theme.palette.gray6};
`;
const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SocialItem = styled.li`
  margin: 0 1.5rem;
  padding: 0.125rem;
  font-size: ${theme.fontSizes.xsmall};
  cursor: pointer;
`;
