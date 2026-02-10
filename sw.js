self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('poker-timer-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './5min.mp3',
        './1min.mp3',
        './levelup.mp3'
      ]);
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
