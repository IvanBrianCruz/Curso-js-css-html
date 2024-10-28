import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/IvanBrianCruz/curso-js.git', // Asegúrate de usar el nombre de tu repositorio aquí
});
