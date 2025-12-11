import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const config = createTamagui({
  ...defaultConfig,

  tokens: {
    ...defaultConfig.tokens, // ✅ keep existing token sets (size, space, etc.)
  },

  themes: {
    light: {
      ...defaultConfig.themes.light,
      background: 'white',
      color: '#1E1E1E',
      borderColor: '#E8ECF4',
      placeholderColor: '#A0A3B1',
      cardBg: 'red',
      inputBg: '#FAFAFA',
      shadowColor: 'rgba(0,0,0,0.1)',
    },
    dark: {
      ...defaultConfig.themes.dark,
      background: 'black',
      color: '#F7F8F9',
      borderColor: '#3A3A3A',
      placeholderColor: '#888',
      cardBg: 'green',
      inputBg: '#333333',
      shadowColor: 'rgba(255,255,255,0.1)',
    },
  },

  media: {
    ...defaultConfig.media,
  },
})

type OurConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
