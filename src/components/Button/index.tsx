import React from 'react';

import * as S from './styles';

type Props = {
  reverseColor?: boolean
  children: React.ReactNode;
  href: string;
  maxWidth?: string
};

const Button: React.FC<Props> = ({ children, href, maxWidth, reverseColor }) => (
  <S.ButtonWrapper href={href} maxWidth={maxWidth} reverseColor={reverseColor}>{children}</S.ButtonWrapper>
);

export default Button;
