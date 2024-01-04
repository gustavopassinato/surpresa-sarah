import { ThemeProvider } from 'styled-components'
import { defaultLight } from './styles/themes/defaultLight'
import { GlobalStyle } from './styles/global'
import { StyledButton } from './components/Button/style'

export function App() {
  return (
    <ThemeProvider theme={defaultLight}>
      <h1>Olá mundo!</h1>

      <StyledButton isActive={true}>Olá</StyledButton>
      <GlobalStyle />
    </ThemeProvider>
  )
}
