/* The top showreel plays continuously without sound. */
window.initPortfolioHero = ({ root, project, esc, openShowreel }) => {
  const intro = document.querySelector('#about');
  root.className = 'showreel-banner';
  root.innerHTML = `<video class="showreel-background" src="${esc(project.videoSrc)}" poster="${esc(project.poster)}" autoplay loop muted playsinline preload="auto" aria-label="AI 영상 쇼릴, 무음 반복 재생"></video>`;
  if (intro) root.append(intro);
  const video = root.querySelector('video');
  root.querySelector('.reel-open')?.addEventListener('click', openShowreel);
  video.muted = true;
  video.defaultMuted = true;
  let resumeTimer;
  const playMuted = () => {
    clearTimeout(resumeTimer);
    if (document.visibilityState === 'hidden' || !video.paused) return;
    video.muted = true;
    video.play().catch(() => {});
  };
  video.addEventListener('pause', () => {
    // A browser can suspend media without a new canplay event when it returns.
    resumeTimer = setTimeout(playMuted, 120);
  });
  video.addEventListener('canplay', playMuted);
  document.addEventListener('visibilitychange', playMuted);
  window.addEventListener('pageshow', playMuted);
  window.addEventListener('focus', playMuted);
  playMuted();
};
