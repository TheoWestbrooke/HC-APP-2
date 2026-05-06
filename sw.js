const CACHE = 'hc-debt-model-v8';
const ASSETS = ['./','./index.html','./style.css','./model.js','./app.js','./jszip.min.js','./manifest.webmanifest','./assets/HC Debt Only Model.xlsx','./logo.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))); });
