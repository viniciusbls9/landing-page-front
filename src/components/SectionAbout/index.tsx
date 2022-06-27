import React from 'react'

import { Heading, Container, Button } from 'components'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAbout = ({
  title,
  description,
  image,
  button
}: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={image.url}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading as="h2">{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          <Button reverseColor href={button.href}>{button.label}</Button>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAbout
