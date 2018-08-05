let toCashe = 'restaurant-cashe-1';

let urlToCashe = [
    '/',
    '/restaurant.html',
    '/css',
    '/data',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/index.html',
    '/js',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js'
];

/* help with code from https://developers.google.com/web/fundamentals/codelabs/offline/
https: //www.youtube.com/watch?v=BfL3pprhnms <-- how to set up basic service worker
https: //www.youtube.com/watch?v=TxXwlOAXUko <-- Udacity study jam */

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(toCashe).then(function (cache) {
            console.log(cashe);
            return cache.addAll(urlToCashe);
        }).catch(error => {
            console.log(error);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        cashes.keys().then(function (casheNames) {
            return Promise.all(
                casheNames.filter(function (casheName) {
                    return casheName.startsWith('restaurant-') &&
                    casheName != toCashe;
                }).map(function (casheName) {
                    return cashes.delete(casheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        cashes.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});