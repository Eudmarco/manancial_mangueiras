import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Define o nome do repositório como o caminho base
const REPO_NAME = '/manancial_mangueiras/';

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente, buscando no diretório de trabalho atual (process.cwd())
    const env = loadEnv(mode, process.cwd(), '');

    return {
      // 1. CONFIGURAÇÃO BASE (CRUCIAL PARA GITHUB PAGES)
      base: REPO_NAME,
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      
      // Define variáveis de ambiente no código do cliente
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      
      // Simplificado o alias '@' para apontar diretamente para a pasta 'src'
      resolve: {
        alias: {
          '@': '/src',
        }
      }
    };
});
