export interface ThemeColours {
  white: string
  offwhite: string

  primary: string
  secondary: string
  stroke: string
  background: string
  'background-mobile': string
  'card-background-mobile': string
  'menu-background-mobile': string
}

export interface ThemeFontSizes {
  xl: string
  lg: string
  md: string
  sm: string
  xs: string
  tag: string
}

export interface ThemeFontWeights {
  regular: number
  medium: number
  bold: number
}

export interface ThemeLayoutProperties {
  'top-140': string
}

export interface Theme {
  colours: ThemeColours
  fontSizes: ThemeFontSizes
  fontWeights: ThemeFontWeights
  layoutProperties: ThemeLayoutProperties
}

export const theme: Theme = {
  colours: {
    white: '#fff',
    offwhite: '#a1a1aa',

    primary: '#7D58EA',
    secondary: '#42298A',
    stroke: 'rgba(255, 255, 255, 0.1)',
    background: 'rgba(0, 0, 0, 0.2),',
    'background-mobile': '#09090b',
    'card-background-mobile': '#101013',
    'menu-background-mobile': '#09090b',
  },

  fontSizes: {
    xl: '2rem',
    lg: '1.5rem',
    md: '1.25rem',
    sm: '1.125rem',
    xs: '1rem',
    tag: '0.875rem',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  layoutProperties: {
    'top-140': '140px',
  },
}
