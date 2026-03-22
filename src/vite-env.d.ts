/// <reference types="vite/client" />

import 'styled-components'
import type { Theme } from './types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

declare module '*.json' {
  const value: Record<string, unknown>
  export default value
}
