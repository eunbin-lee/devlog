import * as React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

type ColorType = 'violet' | 'lightGray' | 'darkGray';
type SizeType = 'small' | 'default' | 'large';

const CustomButton = styled.button<{
  color: ColorType;
  size: SizeType;
  border?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.25rem;
      padding: 0 0.75rem;
      font-size: ${theme.fontSizes.small};
      border-radius: 0.625rem;
    `};
  ${(props) =>
    props.size === 'default' &&
    css`
      height: 1.75rem;
      padding: 0 1rem;
      font-size: ${theme.fontSizes.default};
      border-radius: 0.875rem;
    `};
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 2rem;
      padding: 1.125rem 1.25rem;
      font-size: ${theme.fontSizes.default};
      border-radius: 1.25rem;
    `};
  color: ${(props) => theme.buttonColors[props.color].color};
  background: ${(props) => theme.buttonColors[props.color].background};
  &:hover,
  &:focus {
    background: ${(props) => theme.buttonColors[props.color].hoverBackground};
  }
  ${(props) =>
    props.border &&
    css<{ color: ColorType }>`
      font-weight: normal;
      color: ${(props) => theme.buttonColors[props.color].background};
      background: ${theme.palette.white};
      border: 1px solid ${(props) => theme.buttonColors[props.color].background};
      &:hover,
      &:focus {
        color: ${theme.palette.white};
        background: ${(props) => theme.buttonColors[props.color].background};
        border-color: ${(props) => theme.buttonColors[props.color].background};
      }
    `};
  transition: 0.1s all ease-in-out;
  box-sizing: border-box;
`;

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  color?: ColorType;
  size?: SizeType;
  border?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'violet',
  size = 'default',
  border = false,
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <CustomButton color={color} size={size} border={border} {...htmlProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
