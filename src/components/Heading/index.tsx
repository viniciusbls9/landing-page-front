import React from 'react'

import * as S from './styles'

export type Props = {
  reverseColor?: boolean
  children: string
}

const Heading: React.FC<Props> = ({
  reverseColor = false,
  children
}) => (
  <S.Wrapper reverseColor={reverseColor}>
    {children}
  </S.Wrapper>
)

export default Heading
