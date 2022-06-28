import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import * as S from './styles'

type Props = {
  id: number
  name: string
  image?: string
  description: string
}

const ReviewCard: React.FC<Props> = ({ id, name, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <p className="description">{description}</p>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
