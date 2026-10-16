/* The character follows the pointer by seeking real poses in the supplied take. */
window.initPortfolioHero = ({ root, openShowreel }) => {
  root.className = 'gallery-hero gaze-hero';
  root.innerHTML = `<div class="gaze-stage"><div class="hero-title"><h1>Lee Nahyun</h1></div><div class="gaze-frame"><video class="gaze-video" src="assets/character/gaze-new.mp4" poster="assets/character/gaze-new-poster.jpg" muted playsinline preload="auto" aria-label="마우스 방향을 바라보는 캐릭터"></video><canvas class="gaze-cutout" aria-hidden="true"></canvas></div><button class="gaze-toggle" type="button" aria-pressed="false">움직임 끄기</button></div>`;
  const stage = root.querySelector('.gaze-stage');
  const video = root.querySelector('video');
  const canvas = root.querySelector('canvas');
  const context = canvas.getContext('2d', {willReadFrequently:true});
  canvas.width=960; canvas.height=540;
  function renderPose() {
    if(video.readyState<2)return;
    context.drawImage(video,0,0,960,540);
    const frame=context.getImageData(0,0,960,540), data=frame.data;
    // Remove only the cyan backdrop; retain the violet clothing and white desk.
    for(let i=0;i<data.length;i+=4){
      const r=data[i],g=data[i+1],b=data[i+2];
      const key=Math.min((g-r-15)/35,(b-r-35)/45);
      if(key>0)data[i+3]=Math.round(255*(1-Math.min(1,key)));
    }
    context.putImageData(frame,0,0);
    stage.classList.add('is-keyed');
  }
  const toggle = root.querySelector('.gaze-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let disabled = reduced.matches, visible = true, target = 0, position = 0, raf = 0, last = 0;
  // Screen-left → up → right → down, measured from this seven-second take.
  const knots = [[0,1.8],[35,1.8],[90,3.7],[150,5.2],[210,5.2],[270,6.45],[315,1.8],[360,1.8]];
  function schedule() { if (!raf && visible && !document.hidden && !disabled) raf=requestAnimationFrame(tick); }
  function tick(now) {
    raf=0;
    if (!visible || disabled || document.hidden || video.readyState<2) { last=0; return; }
    const dt=last ? Math.min(50,now-last) : 16; last=now;
    const delta=(target-position)*(1-Math.exp(-dt/240));
    const maxStep=dt/1000*4;
    position+=Math.max(-maxStep,Math.min(maxStep,delta));
    if(Math.abs(target-position)<.025) position=target;
    if(!video.seeking && Math.abs(video.currentTime-position)>.02) video.currentTime=Math.min(position,video.duration-.05);
    if(position!==target) schedule(); else last=0;
  }
  stage.addEventListener('pointermove',e=>{
    if(disabled || e.pointerType==='touch') return;
    const r=video.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width*.5)/(r.width*.5);
    const y=(e.clientY-r.top-r.height*.3)/(r.height*.5);
    if(Math.hypot(x,y)<.25) target=0;
    else {
      const angle=(Math.atan2(-y,-x)*180/Math.PI+360)%360;
      for(let i=1;i<knots.length;i++) if(angle<=knots[i][0]) {
        const [a,t]=knots[i-1], [b,u]=knots[i]; target=t+(u-t)*(angle-a)/(b-a); break;
      }
    }
    schedule();
  },{passive:true});
  stage.addEventListener('pointerleave',()=>{target=0;schedule();});
  // Seeking/network buffering can temporarily drop readyState below HAVE_CURRENT_DATA.
  // Resume when frames are ready again, even when the pointer has stopped.
  const resumeFromMedia = () => { renderPose(); schedule(); };
  video.addEventListener('loadeddata',resumeFromMedia);
  video.addEventListener('canplay',resumeFromMedia);
  video.addEventListener('seeked',()=>{renderPose();if(Math.abs(video.currentTime-target)>.025)schedule();});
  function updateMotion(){
    toggle.textContent=disabled?'움직임 켜기':'움직임 끄기'; toggle.setAttribute('aria-pressed',String(disabled));
    if(disabled){cancelAnimationFrame(raf);raf=0;last=0;} else schedule();
  }
  toggle.addEventListener('click',()=>{disabled=!disabled;updateMotion();});
  reduced.addEventListener('change',e=>{disabled=e.matches;updateMotion();});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)schedule();}).observe(stage);
  document.addEventListener('visibilitychange',schedule);
  document.querySelector('#showreel-open')?.addEventListener('click',openShowreel);
  updateMotion();
  // A cached video may already have fired loadeddata before handlers were attached.
  if(video.readyState >= 2) resumeFromMedia();
};
