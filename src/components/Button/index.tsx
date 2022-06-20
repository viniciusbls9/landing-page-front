import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  href: string;
  maxWidth?: string
};

const Button: React.FC<Props> = ({ children, href, maxWidth }) => (
  <S.ButtonWrapper href={href} maxWidth={maxWidth}>{children}</S.ButtonWrapper>
);

export default Button;
