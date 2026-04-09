import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ShowMoreButton } from './style'
import { PROJECT_DESCRIPTION_MAX_LENGTH } from '../../constants'

interface ExpandableDescriptionProps {
  text: string
  maxLength?: number
}

export function ExpandableDescription({
  text,
  maxLength = PROJECT_DESCRIPTION_MAX_LENGTH,
}: ExpandableDescriptionProps) {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  if (text.length <= maxLength) {
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  const truncatedText = text.slice(0, maxLength) + '...'

  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: isExpanded ? text : truncatedText,
        }}
      />
      <ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? t('show-less') : t('show-more')}
      </ShowMoreButton>
    </>
  )
}
