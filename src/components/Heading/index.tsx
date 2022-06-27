import React from 'react'

import * as S from './styles'

export type Props = {
  reverseColor?: boolean
  as: React.ElementType
  children: string
}

const Heading: React.FC<Props> = ({
  reverseColor = false,
  as,
  children
}) => (
  <S.Wrapper reverseColor={reverseColor} as={as}>
    {children}
  </S.Wrapper>
)

export default Heading
