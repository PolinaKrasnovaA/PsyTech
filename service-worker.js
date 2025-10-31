const CACHE_NAME = 'emotion-circles-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/rain.wav',
  '/flute.wav',
  '/storm.wav',
  '/icon-192.png',
  '/icon-512.png',
  // сюда можно добавить остальные необходимые файлы
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
