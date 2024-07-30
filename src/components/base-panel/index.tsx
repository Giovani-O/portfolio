import { PanelContent, PanelSection } from './style'

interface BasePanelProps {
  children: React.ReactNode
}

export function BasePanel({ children }: BasePanelProps) {
  return (
    <PanelSection>
      <PanelContent>{children}</PanelContent>
    </PanelSection>
  )
}
