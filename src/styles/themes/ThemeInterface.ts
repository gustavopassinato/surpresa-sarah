interface Colors {
  primary: string
  lightPrimary: string
  secondary: string
  lightSecondary: string
  alternative: string
  white: string
}

interface Fonts {
  fontFamily: string
  fontSize: number
}

export interface ThemeInterface {
  color: Colors
  fonts: Fonts
}
