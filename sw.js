// A simple development service worker that intercepts network requests
// and feeds them through cleanly without aggressive local caching.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Directly fetch from network so your iPad updates immediately on code push
  event.respondWith(fetch(event.request));
});
