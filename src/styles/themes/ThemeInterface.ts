interface Colors {
  primary: string
  secondary: string
}

interface Fonts {
  fontFamily: string
  fontSize: number
}

export interface ThemeInterface {
  color: Colors
  fonts: Fonts
}
