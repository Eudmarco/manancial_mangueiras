// sw.js

const CACHE_NAME = 'manancial-static-v1';

// Lista de origens cujos recursos devem ser armazenados em cache.
const CACHEABLE_ORIGINS = [
  self.location.origin,
  'https://kjunynajewbtxqojxbok.supabase.co',
  'https://fonts.gstatic.com',
];

// O evento 'install' é acionado quando o service worker é registrado pela primeira vez.
self.addEventListener('install', event => {
  // Força o novo service worker a se tornar ativo imediatamente.
  self.skipWaiting();
});

// O evento 'activate' é acionado quando o service worker se torna ativo.
self.addEventListener('activate', event => {
  // Limpa caches antigos para garantir que estamos usando a versão mais recente.
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
});

// O evento 'fetch' intercepta todas as solicitações de rede da página.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Apenas lida com solicitações GET de origens permitidas.
  if (request.method !== 'GET' || !CACHEABLE_ORIGINS.includes(url.origin)) {
    // Deixa o navegador lidar com a solicitação normalmente.
    return;
  }
  
  // Usa uma estratégia de "cache-first": tenta servir do cache primeiro.
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(request).then(cachedResponse => {
        // Se encontrarmos uma resposta no cache, a retornamos imediatamente.
        if (cachedResponse) {
          return cachedResponse;
        }

        // Se não, buscamos da rede.
        return fetch(request).then(networkResponse => {
          // Se a resposta da rede for válida, a armazenamos em cache para uso futuro.
          if (networkResponse && networkResponse.status === 200) {
            // É preciso clonar a resposta, pois ela só pode ser consumida uma vez.
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        });
      });
    })
  );
});

