import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { SectionReviewsProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ title, reviews }: SectionReviewsProps) => (
  <S.SectionReviewsWrapper>
    <Container>
      <S.SectionReviewsContainer>
        <Heading as="h2">{title}</Heading>
      </S.SectionReviewsContainer>
      <S.Content>
        <Slider {...settings}>
          {reviews.map(({ name, text }, index) => (
            <ReviewCard
              key={index}
              name={name}
              description={text}
              id={index}
            />
            ))}
        </Slider>
      </S.Content>

    </Container>
  </S.SectionReviewsWrapper>
)

export default SectionReviews
