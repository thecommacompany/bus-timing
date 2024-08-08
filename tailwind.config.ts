// tailwind.config.ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./presets/**/*.{js,vue,ts}",
    // other paths
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#44315F',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}

export default config
