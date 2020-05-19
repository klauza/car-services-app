importScripts("/precache-manifest.c14a8236f5c5590a838baa65a788396f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache'
  })
)

self.addEventListener('install', event => {
  const asyncInstall = new Promise(resolve => {
    // console.log("Waiting to resolve...")
    setTimeout(resolve, 2500)
  })
  event.waitUntil(asyncInstall)
})
self.addEventListener('activate', event => {
  // console.log('service worker has been activated')
})

self.addEventListener('fetch', event => {
  // console.log('fetch event start', event);
})
