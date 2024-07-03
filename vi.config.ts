import { defineConfig } from '@varlet/icon-builder'

export default defineConfig({
  name: 'l-icons',
  namespace: 'i',
  fontFamilyClassName: 'i',
  output: './svg-fonts',
  generate: {
    framework: 'react'
  }
})
