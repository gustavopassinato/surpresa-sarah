import { ThemeProvider } from 'styled-components'
import { defaultLight } from './styles/themes/defaultLight'
import { GlobalStyle } from './styles/global'
import { HeaderStyled } from './components/Header'

import dormindo from './assets/dormindo.jpeg'
import forto1 from './assets/foto1.jpeg'
import nos from './assets/nos.jpeg'
import sorriso from './assets/sorriso.jpeg'
import { StyledMoldura } from './components/Moldura'
import { StyledSection } from './components/Section'

export function App() {
  return (
    <ThemeProvider theme={defaultLight}>
      <HeaderStyled>Surpresa meu AMOR! Feliz Aniversário</HeaderStyled>
      <main>
        <StyledSection>
          <p>
            Esta é uma simples omenagem de alguem que te ama muito, que ama ver
            esse seu lindo sorriso
          </p>
          <StyledMoldura>
            <img src={sorriso} alt="" />
          </StyledMoldura>
        </StyledSection>

        <StyledSection>
          <p>
            Sou muito feliz em estar ao seu lado, dividindo minha vida contigo,
            estando junto de você por mais um ano de sua vida.
          </p>
          <StyledMoldura>
            <img src={nos} alt="" />
          </StyledMoldura>
        </StyledSection>

        <StyledSection>
          <p>
            Pois Bem, isto é so pra te desejar um feliz anivesário, e que Deus
            possa sempre te abençoar e te guiar. Te amo do fundo do meu coração
            e saiba que sempre poderá contar comigo
          </p>
          <StyledMoldura>
            <img src={forto1} alt="" />
          </StyledMoldura>
        </StyledSection>
        <StyledSection>
          <p>
            Agora chega, tenho que ir pois estou meio cansado e com sono HeHeHe,
            bjs bb!
          </p>
          <StyledMoldura>
            <img src={dormindo} alt="" />
          </StyledMoldura>
        </StyledSection>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  )
}
