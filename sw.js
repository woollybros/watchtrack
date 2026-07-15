const CACHE_NAME = "chronicle-cache";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./data.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];

// Save the essential app files for offline use.
self.addEventListener("install", function (event) {
    self.skipWaiting();

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(APP_FILES);
            })
    );
});

// Begin controlling open WatchTrack pages immediately.
self.addEventListener("activate", function (event) {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),

            // Remove any older WatchTrack caches.
            caches.keys().then(function (cacheNames) {
                return Promise.all(
                    cacheNames
                        .filter(function (cacheName) {
                            return cacheName !== CACHE_NAME;
                        })
                        .map(function (cacheName) {
                            return caches.delete(cacheName);
                        })
                );
            })
        ])
    );
});

// Online: use the newest file and update the cache.
// Offline: fall back to the cached file.
self.addEventListener("fetch", function (event) {
    const request = event.request;

    if (
        request.method !== "GET" ||
        new URL(request.url).origin !== self.location.origin
    ) {
        return;
    }

    event.respondWith(
        fetch(request)
            .then(function (networkResponse) {
                const responseCopy = networkResponse.clone();

                caches
                    .open(CACHE_NAME)
                    .then(function (cache) {
                        cache.put(request, responseCopy);
                    });

                return networkResponse;
            })
            .catch(function () {
                return caches.match(request);
            })
    );
});
