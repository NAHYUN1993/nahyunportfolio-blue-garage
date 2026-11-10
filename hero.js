/* Play the muted showreel only while visible in the active tab. */
window.initPortfolioHero = ({ root, project, esc, openShowreel }) => {
  const intro = document.querySelector('#about');
  root.className = 'showreel-banner';
  root.innerHTML = `<video class="showreel-background" src="${esc(project.videoSrc)}" poster="${esc(project.poster)}" loop muted playsinline preload="metadata" aria-label="AI 영상 쇼릴, 무음 반복 재생"></video>`;
  if (intro) root.append(intro);
  const video = root.querySelector('video');
  root.querySelector('.reel-open')?.addEventListener('click', openShowreel);
  video.muted = true;
  video.defaultMuted = true;
  let inView = false;
  const shouldPlay = () => inView && document.visibilityState === 'visible';
  const syncPlayback = () => {
    if (!shouldPlay()) {
      video.pause();
      return;
    }
    video.muted = true;
    if (video.paused) {
      video.play().then(() => {
        // Visibility may change while the browser starts playback.
        if (!shouldPlay()) video.pause();
      }).catch(() => {});
    }
  };
  const observer = new IntersectionObserver(entries => {
    inView = entries.some(entry => entry.isIntersecting && entry.intersectionRatio > 0);
    syncPlayback();
  }, { threshold: 0 });
  observer.observe(video);
  video.addEventListener('canplay', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
  window.addEventListener('pageshow', syncPlayback);
  window.addEventListener('pagehide', () => video.pause());
};
