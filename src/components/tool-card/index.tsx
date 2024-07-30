import { Card } from './style'

interface ToolCardProps {
  image: string
  title: string
}

export function ToolCard({ image, title }: ToolCardProps) {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Card>
  )
}
