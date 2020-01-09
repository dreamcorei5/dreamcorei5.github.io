// self.addEventListener('install', () => self.skipWaiting());
// self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          // '/css/bootstrap.css',
          // '/css/main.css',
          // '/js/bootstrap.min.js',
          // '/js/jquery.min.js',
          '/index.html'
          // Add anything else you need to be cached during the SW install
        ]
      );
    })
  );
});
