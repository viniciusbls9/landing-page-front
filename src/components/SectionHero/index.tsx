import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

import Container from 'components/Container'
import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Logo src={logo.url} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url}>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={header.image.url}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
