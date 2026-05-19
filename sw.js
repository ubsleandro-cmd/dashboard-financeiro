const CACHE_NAME = 'financas-v2'; // Mude de v1 para v2 para forçar o celular a atualizar
const assets = [
  '/',
  'index.html',
  'manifest.json',
  'icone-app.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
