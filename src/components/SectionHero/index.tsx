import React from 'react'

import Button from 'components/Button'
import * as S from './styles'

import Container from 'components/Container'
import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  logo?: LogoProps
  header?: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Logo src='https://preview.uideck.com/items/freelancer/assets/images/logo.svg' />

      <S.Content>
        <S.TextBlock>
          <S.Title>Title</S.Title>
          <S.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</S.Description>
          <S.ButtonWrapper>
            <Button href='#'>
              Clique aqui
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src='https://img.freepik.com/free-photo/happy-smiling-curly-haired-young-woman-types-message-mobile-phone-looks-with-glad-expression-display-wears-grey-jacket_273609-43347.jpg?t=st=1655809552~exp=1655810152~hmac=9928afd61df00ef2092f316eaba83fab7b9571348ea5f214418a64f7cb463593&w=1380'
          alt=''
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
