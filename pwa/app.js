function openHaka() {
  window.location.href = "https://kothamangalamhaka.github.io/Haka/";
}

// Service Worker register
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
