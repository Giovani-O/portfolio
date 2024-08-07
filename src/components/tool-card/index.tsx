import React from 'react'
import { Card } from './style'

interface ToolCardProps {
  image: string
  title: string
}

export const ToolCard = React.memo(function ({ image, title }: ToolCardProps) {
  return (
    <Card>
      <img src={image} alt={title} loading="lazy" />

      <h3>{title}</h3>
    </Card>
  )
})
