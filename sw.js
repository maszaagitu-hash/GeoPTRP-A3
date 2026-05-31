// Service Worker Minimalis untuk Syarat PWA Vercel
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    // Membiarkan online fetch berjalan normal
    event.respondWith(fetch(event.request));
});