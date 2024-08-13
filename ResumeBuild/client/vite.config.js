import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  theme: {
    extend: {},
  },
  server: {
    port: 5070
  }
})
