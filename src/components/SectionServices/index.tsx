import React from 'react'

import { Heading, Container, CardModule } from 'components'

import * as S from './styles'
import { SectionServicesProps } from 'types/api'

const SectionServices = ({ services }: SectionServicesProps) => (
  <Container>
    <S.ServicesWrapper>
      <Heading reverseColor as="h2">Serviços</Heading>
      <S.Content>
        {services.map(({ icon, children }, index) => (
          <CardModule key={index} icon={icon}>
            {children}
          </CardModule>
        ))}
      </S.Content>
    </S.ServicesWrapper>
  </Container>
)

export default SectionServices
