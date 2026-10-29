// Service worker mínimo: permite que Android ofrezca "Instalar".
// No guarda datos: todo se sigue leyendo en línea desde el aplicativo.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});
