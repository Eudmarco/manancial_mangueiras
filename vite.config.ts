import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Removemos a definição REPO_NAME, pois não é necessária para domínio personalizado.

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente
    const env = loadEnv(mode, process.cwd(), '');

    return {
      // 1. CONFIGURAÇÃO BASE CORRIGIDA: Deve ser '/' para domínio personalizado
      base: '/', 
      
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
