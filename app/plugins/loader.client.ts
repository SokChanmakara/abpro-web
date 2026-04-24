export default defineNuxtPlugin((nuxtApp) => {
  // Inject a style tag that makes the page invisible until we remove it.
  // We do this in a <style> tag rather than body { display:none } because
  // display:none can break layout-dependent JS (e.g. anything reading
  // offsetWidth). opacity:0 + pointer-events:none is safer.
  const style = document.createElement('style')
  style.id = '__loader-veil'
  style.textContent = `
    body > *:not([data-loader]) {
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `
  document.head.appendChild(style)

  // Once Vue is fully hydrated and all components have mounted,
  // remove the veil so the AppLoader's own fade-in takes over cleanly.
  nuxtApp.hook('app:suspense:resolve', () => {
    style.remove()
  })
})
