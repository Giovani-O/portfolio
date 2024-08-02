import { HashRouter } from 'react-router-dom'
import { Router } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <HashRouter>
          <Router />
        </HashRouter>

        <GlobalStyle />
      </I18nextProvider>
    </ThemeProvider>
  )
}
