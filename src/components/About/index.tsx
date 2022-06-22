import React from 'react'

import {Heading, Container} from 'components'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const About = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?t=st=1655893511~exp=1655894111~hmac=d1b7b8d3306d9dcd8e3ec55cb49f4be5f675b5659dcef2cf193081558b85cc12&w=740'
          alt='Sobre nós'
          loading="lazy"
        />
        <div>
          <Heading reverseColor>sd</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: '' }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default About
