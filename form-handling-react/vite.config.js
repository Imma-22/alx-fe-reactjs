import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Allows .js files to contain JSX
    include: [
      'src/**/*.js', 'src/**/*.jsx' // Include all .js  and .jsx files in the src directory
    ],
    exclude: [],
  },
  
})

