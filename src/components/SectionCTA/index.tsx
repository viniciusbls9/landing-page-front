import React from 'react'

import { Container, Heading, Button } from 'components'

import * as S from './styles'
import { SectionCTAProps } from 'types/api'

const SectionCTA = ({ title, description, button }: SectionCTAProps) => (
  <S.SectionCTAWrapper>
    <Container>
      <S.Box>
        <Heading as="h2">{title}</Heading>
        <Heading as="p">{description}</Heading>

        <Button href={button.href}>{button.label}</Button>
      </S.Box>
    </Container>
  </S.SectionCTAWrapper>
)

export default SectionCTA
