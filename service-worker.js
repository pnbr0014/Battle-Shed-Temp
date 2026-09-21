// Minimal service worker — just enough presence to satisfy "installable" PWA
// criteria on Android/Chrome. It doesn't cache anything, so the dashboard
// always loads fresh data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
