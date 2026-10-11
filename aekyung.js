/* ============================================================
   JYP 블루개러지 지원용 섹션 — aekyung.js (애경 버전에서 복사)
   대표 작업 · 전체 작업 탭을 그린다. 히어로·쇼릴은 script.js/hero.js 그대로.
   이전 전체 버전: git 태그 ver2, 폴더 ../nahyunportfolio_ver2
   ============================================================ */
(() => {
'use strict';

const P3 = 'https://nahyun1993.github.io/portfolio3/images';

/* ── 대표 작업 ──
   layout: 'lead'(맨 위 큰 가로 카드) · 'wide'(가로 16:9) · 'pano'(파노라마) · 'tall'(세로 9:16)
   processMedia: 이미지 경로 문자열, 또는 { src, cap, wide } (cap = 캡션, wide = 한 줄 전체) */
const OT = 'images/onetake';
const works = [
  {
    id: 'onetake',
    layout: 'lead',
    tags: ['AI 아티스트', '퍼포먼스 영상'],
    title: '원테이크 카메라 무빙',
    meta: 'AI 아티스트 퍼포먼스 영상 · 6초 원테이크 · 1080p · 음악 NMIXX – Heavy Serenade',
    line: '직접 설계한 원테이크 카메라 무빙을 AI 아티스트의 댄스 영상에 그대로 입혔습니다',
    video: 'videos/onetake.mp4',
    poster: 'images/posters/onetake.jpg',
    goal: 'AI 아티스트의 퍼포먼스 영상에서 카메라 무빙, 안무, 얼굴을 모두 의도대로 제어하는 것을 목표로 했습니다. 프롬프트만으로는 카메라 경로와 동작 타이밍을 정확하게 지정할 수 없어서, 원하는 무빙을 Blender 프리비즈로 먼저 만들고 이를 생성 모델의 레퍼런스로 쓰는 방식을 택했습니다.',
    process: [
      '16mm 광각 짐벌이 인물 쪽으로 파고들었다가 돌아 나오는 원테이크 무빙을 설계하고, Blender로 세트와 카메라 경로를 프리비즈로 제작',
      'ComfyUI로 안무 레퍼런스 영상에서 DWPose(뼈대)와 Depth(깊이)를 추출한 뒤, 프리비즈 카메라의 깊이 패스 안에 원근을 맞춰 합성 · 카메라 무빙과 안무를 하나의 레퍼런스 영상으로 제어',
      'Nano Banana 2로 얼굴·전신 정면/측면/후면 턴어라운드 시트를 만들어 모든 프레임에서 같은 얼굴과 의상을 유지',
      'Seedance 2.5 옴니 레퍼런스로 생성 · 480p 드래프트로 카메라와 동작을 먼저 검증하고 1080p로 완성',
      '원곡 음원을 안무 타이밍에 맞춰 싱크'
    ],
    results: [],
    processMedia: [
      ...[1, 2, 3].flatMap(n => [
        { src: `${OT}/step-${n}-0.jpg`, cap: n === 1 ? '① Blender 프리비즈 카메라' : '' },
        { src: `${OT}/step-${n}-1.jpg`, cap: n === 1 ? '② 깊이 + 뼈대 레퍼런스' : '' },
        { src: `${OT}/step-${n}-2.jpg`, cap: n === 1 ? '③ 결과' : '' }
      ]),
      { src: `${OT}/turnaround.jpg`, cap: '얼굴·전신 턴어라운드 시트 (Nano Banana 2)', wide: true }
    ],
    tools: ['Blender', 'ComfyUI', 'DWPose', 'Nano Banana 2', 'Seedance 2.5', 'Premiere Pro']
  },
  {
    id: 'medihel',
    layout: 'wide',
    tags: ['뷰티', 'AI 제작'],
    title: '메디힐 토너패드',
    meta: '가로 브랜드 필름 · 메디힐 공모전 출품작',
    line: '입문자에게 3단계 루틴을 알려주는 토너패드 브랜드 필름',
    thumb: `${P3}/Thumbnails/공모전_메디힐.png`,
    preview: 'videos/preview/medihel.mp4?v=3',
    driveId: '1eSSpwG9XS92l4zofZlsaio4MO2V_PiHY',
    goal: '토너패드 입문자에게 올바른 사용법을 알려주기 위해 기획한 브랜드 필름입니다. 네모난 패드가 얼굴 곡면에 빈틈없이 밀착된다는 구조적 특징을 핵심 USP로 잡고, 팩토 → 닦토 → 흡토 3단계 루틴을 한 편 안에서 자연스럽게 익힐 수 있도록 구성했습니다.',
    process: [
      'NotebookLM으로 뷰티 시장 리서치',
      '흔한 감성 뷰티 광고와 차별화하기 위해 상반된 키워드를 의도적으로 충돌시켜 \'1mm의 빈틈도 허락하지 않는 완벽주의자\' 컨셉 도출 · 패드가 얼굴에 빈틈없이 밀착된다는 USP를 인물의 성격으로 표현',
      'Midjourney로 톤앤무드와 인물 페르소나 설정',
      'Nano Banana로 장면 간 인물·의상·조명 일관성 유지',
      'ComfyUI 워크플로우로 다양한 카메라 앵글 일괄 생성',
      'AI가 왜곡한 로고·텍스트 영역에 실제 제품 에셋 합성',
      'Kling으로 영상화, Premiere Pro로 최종 편집'
    ],
    results: [],
    processMedia: [1, 2, 3, 4, 5, 6].map(n => `${P3}/주요장면/메디힐/메디힐 주요장면_0${n}.png`),
    tools: ['NotebookLM', 'Midjourney', 'Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro']
  },
  {
    id: 'desk-tour',
    layout: 'tall',
    tags: ['인스타그램 릴스', '실사 촬영'],
    title: '왓츠 온 마이 데스크',
    meta: '닥터조 인스타그램 · 53초 릴스',
    line: '데스크 투어로 보여준 스틱형 영양제의 USP',
    video: 'videos/desk-tour.mp4',
    poster: 'images/posters/desk-tour.jpg',
    goal: '스틱형 개별 포장의 핵심 USP인 \'식물마다 필요한 시비량에 맞춰 정량을 넣을 수 있다\'는 점을 실제 사용 장면으로 보여주기 위해 기획했습니다. 광고 모델 대신 직원이 직접 키우는 식물을 그대로 보여주며 진정성을 더했습니다.',
    process: [
      '\'왓츠 인 마이 백\' 형식을 책상으로 옮긴 데스크 투어 포맷 기획',
      '등장하는 두 사람 모두 초보 식집사의 시선으로 구성해, 식물을 막 키우기 시작한 시청자의 공감 유도',
      '\'식물 소개 → 고민 → 제품으로 해결\' 흐름으로 구성, USP는 자막 한 줄로 압축(\'뜯어서 몇 알씩\', \'6개월 지속\')',
      '마지막 장면을 "식물 키우세요?"라는 질문으로 끝내 댓글 참여 유도'
    ],
    results: [
      { n: '9,841', label: '조회수' },
      { n: '122', label: '좋아요' },
      { n: '47', label: '저장' }
    ],
    link: 'https://www.instagram.com/reel/DA0OmOIqINq/',
    processMedia: [],
    tools: []
  },
  {
    id: 'potting-soil',
    layout: 'tall',
    tags: ['숏폼 광고', 'AI 제작'],
    title: '분갈이흙',
    meta: '세로 숏폼 광고 · 10초',
    line: '\'섞을 필요 없이 한 번에\'를 10초에 담은 숏폼 광고',
    video: 'videos/potting-soil-v2.mp4',
    poster: 'images/posters/potting-soil.jpg',
    goal: '분갈이를 처음 하는 사람에게 가장 큰 진입 장벽은 흙 배합입니다. \'섞을 필요 없이 한 번에\'라는 올인원 USP를 10초 안에 전달하는 것을 목표로 삼았습니다.',
    process: [
      '\'어디에 심든 흙이 좋으면 잘 자란다\'는 카피를 과장해 보여주기 위해, 화분 대신 구두·세탁기·칵테일 잔처럼 식물과 어울리지 않는 오브제를 선택 · 낯선 조합으로 첫 장면에서 스크롤을 멈추게 하는 효과도 노림',
      '후반부에 제품을 등장시키고, \'섞을 필요 없이\' · \'그냥 한 번에\' 자막을 짧게 끊어 USP를 한 번 더 강조'
    ],
    results: [
      { n: '20,393', label: '조회수' },
      { n: '88', label: '좋아요' },
      { n: '103', label: '저장' }
    ],
    link: 'https://www.instagram.com/reel/DdiUVwgqAC7/',
    processMedia: [],
    tools: []
  },
  {
    id: 'bug-all-kill',
    layout: 'tall',
    tags: ['홈케어', 'AI 제작'],
    title: '버그올킬',
    meta: '세로 숏폼 광고 · 살충제',
    line: '벌레를 젤리 캐릭터로 바꿔 혐오감을 낮춘 살충제 광고',
    video: 'videos/bug-all-kill.mp4',
    poster: 'images/posters/bug-all-kill.jpg',
    goal: '살충제 광고에서 시청 이탈을 부르는 가장 큰 요인은 벌레에 대한 혐오감입니다. 혐오감을 낮추면서도 제품의 강력함은 유지하는 것을 목표로 삼았습니다.',
    process: [
      '구매층의 여성 비율이 압도적으로 높아, 여성에게 어필할 수 있도록 벌레를 귀엽게 표현 · 핑크 세계관에 반투명 젤리 질감의 벌레 캐릭터로 설정',
      '스프레이를 뿌리는 순간 파티클이 터지듯 퍼지는 장면으로 제품의 효과를 시각화',
      '빠르게 지나가는 앞 장면과 달리 제품 컷은 카메라가 천천히 다가가도록 연출해 제품에 시선이 머물게 함'
    ],
    results: [
      { n: '7,033', label: '조회수' },
      { n: '59', label: '좋아요' },
      { n: '27', label: '저장' }
    ],
    processMedia: [],
    tools: ['Nano Banana', 'Kling', 'Seedance 2.0']
  }
];

/* ── RENDER ── */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function cardMedia(w) {
  const src = w.video || w.preview;
  if (src) {
    return `<video class="ak-card-video" src="${src}" poster="${w.poster || w.thumb}" muted loop playsinline preload="none" aria-hidden="true"></video>`;
  }
  return `<img src="${esc(w.thumb)}" alt="" loading="lazy"><span class="ak-card-play" aria-hidden="true">▶</span>`;
}

function cardResults(w) {
  if (!w.results.length) return '';
  return `<p class="ak-card-results">${w.results.slice(0, 3).map(r => `<span><b>${esc(r.n)}</b> ${esc(r.label)}</span>`).join('')}</p>`;
}

/* 한 화면 그리드: 세로 4개 한 줄 + 파노라마 한 줄 */
function renderWorks() {
  const block = (w, i) => `
    <article class="ak-card ak-card--${w.layout === 'pano' || w.layout === 'lead' ? w.layout : 'cell'}">
      <button class="ak-card-hit" type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
        <div class="ak-card-media${w.id === 'medihel' ? ' is-medihel' : ''}">${cardMedia(w)}</div>
        <div class="ak-card-body">
          <p class="ak-card-tags"><span class="ak-card-num">${String(i + 1).padStart(2, '0')}</span>${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</p>
          <h3 class="ak-card-title">${esc(w.title)}</h3>
          <p class="ak-card-line">${esc(w.line)}</p>
          ${cardResults(w)}
        </div>
      </button>
    </article>`;
  const lead = works.filter(w => w.layout === 'lead');
  const pano = works.filter(w => w.layout === 'pano');
  const rest = works.filter(w => w.layout !== 'pano' && w.layout !== 'lead');
  let n = 0;
  const top = lead.map(w => block(w, n++)).join('');
  const row = `<div class="ak-row4">${rest.map(w => block(w, n++)).join('')}</div>`;
  $('#ak-grid').innerHTML = top + row + pano.map(w => block(w, n++)).join('');
}

/* 화면에 보이는 카드 영상만 재생한다 */
function watchCardVideos() {
  if (reduceMotion) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && !sheet.classList.contains('is-open')) { v.preload = 'auto'; v.play().catch(() => {}); }
      else v.pause();
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('.ak-card-video').forEach(v => io.observe(v));
}

/* ── DETAIL SHEET ── */
const sheet = $('#ak-sheet');
const panel = $('#ak-sheet-panel');
let lastFocus = null;

function sheetMedia(w) {
  if (w.driveId) {
    return `<div class="ak-sm ak-sm--wide"><iframe src="https://drive.google.com/file/d/${w.driveId}/preview" allow="autoplay; fullscreen" allowfullscreen title="${esc(w.title)} 영상"></iframe></div>`;
  }
  if (w.layout === 'lead') {
    return `<div class="ak-sm ak-sm--wide"><video src="${w.video}" poster="${w.poster}" controls autoplay loop playsinline></video></div>`;
  }
  if (w.layout === 'pano') {
    return `
      <div class="ak-sm ak-sm--pano"><video src="${w.video}" poster="${w.poster}" controls muted autoplay loop playsinline></video></div>
      <div class="ak-slides" aria-label="캐러셀 4장">${w.slides.map((s, i) => `<figure><img src="${s}" alt="캐러셀 ${i + 1}장" loading="lazy"><figcaption>${i + 1} / ${w.slides.length}</figcaption></figure>`).join('')}</div>`;
  }
  return `<div class="ak-sm ak-sm--tall"><video src="${w.video}" poster="${w.poster}" controls autoplay playsinline></video></div>`;
}

function sheetProcessMedia(w) {
  if (!w.processMedia.length) return '';
  return `<div class="ak-pm-grid">${w.processMedia.map((m, i) => {
    const { src, cap = '', wide = false } = typeof m === 'string' ? { src: m } : m;
    return `<figure class="ak-pm${wide ? ' ak-pm--wide' : ''}"><img src="${esc(src)}" alt="${esc(cap || `${w.title} 과정 자료 ${i + 1}`)}" loading="lazy">${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
  }).join('')}</div>`;
}

function openSheet(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;
  lastFocus = document.activeElement;
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());

  panel.className = `ak-sheet-panel ak-sheet-panel--${w.layout === 'lead' ? 'wide' : w.layout}`;
  panel.innerHTML = `
    <button class="ak-sheet-close" type="button" data-ak-close aria-label="닫기">✕</button>
    <div class="ak-sheet-media">${sheetMedia(w)}</div>
    <div class="ak-sheet-text">
      <p class="ak-card-tags">${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</p>
      <h2 class="ak-sheet-title" id="ak-sheet-title">${esc(w.title)}</h2>
      <p class="ak-sheet-meta">${esc(w.meta)}</p>

      ${w.results.length ? `
      <section class="ak-block">
        <h3>결과</h3>
        <ul class="ak-res">${w.results.map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>
        ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">원본 게시물 보기 ↗</a>` : ''}
      </section>` : ''}

      <section class="ak-block">
        <h3>목표</h3>
        <p>${esc(w.goal)}</p>
      </section>

      <section class="ak-block">
        <h3>과정</h3>
        <ol class="ak-steps">${w.process.map(p => `<li>${esc(p)}</li>`).join('')}</ol>
        ${sheetProcessMedia(w)}
      </section>

      ${w.tools.length ? `
      <section class="ak-block">
        <h3>사용 도구</h3>
        <p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p>
      </section>` : ''}
    </div>`;

  sheet.classList.add('is-open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  panel.scrollTop = 0;
  $('.ak-sheet-close', panel).focus();
}

function closeSheet() {
  if (!sheet.classList.contains('is-open')) return;
  sheet.classList.remove('is-open');
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.innerHTML = '';
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', e => {
  const card = e.target.closest('[data-ak-work]');
  if (card) { openSheet(card.dataset.akWork); return; }
  if (e.target.closest('[data-ak-close]')) closeSheet();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

/* ── 전체 작업: 접기/펼치기 + 카테고리 탭 ── */
const archive = $('#archive');
const toggle = $('.ak-archive-toggle', archive);
const body = $('#ak-archive-body');

/* 숨겨진 상태에서 계산된 메이슨리 높이를 다시 잡는다(script.js의 layoutAllGrids) */
const relayout = () => requestAnimationFrame(() => window.layoutAllGrids && window.layoutAllGrids());

function setArchive(open) {
  toggle.setAttribute('aria-expanded', String(open));
  body.hidden = !open;
  $('.ak-archive-title', toggle).textContent = open ? '전체 작업 접기' : '전체 작업 보기';
  $('.ak-archive-icon', toggle).textContent = open ? '−' : '+';
  if (open) relayout();
}
toggle.addEventListener('click', () => setArchive(body.hidden));

archive.querySelectorAll('[data-ak-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    archive.querySelectorAll('[data-ak-tab]').forEach(t => t.setAttribute('aria-selected', String(t === tab)));
    archive.querySelectorAll('.ak-panel').forEach(p => { p.hidden = p.id !== tab.dataset.akTab; });
    relayout();
    if (window.innerWidth <= 760) $('.ak-tabs', archive).scrollIntoView({ block: 'start' });
  });
});

/* 상단 메뉴 '전체 작업'이나 예전 주소(#work, #images …)로 들어오면 펼쳐서 보여준다 */
document.addEventListener('click', e => {
  if (e.target.closest('[data-nav="archive"]')) setArchive(true);
}, true);
const OLD_HASH = { work: 'work', cinematic: 'work', artfilm: 'work', commercial: 'work', liveaction: 'work',
  images: 'images', 'ai-image': 'images', photography: 'images', motion: 'motion', subtitle: 'motion', tools: 'tools', dashboard: 'tools' };
const hashTab = OLD_HASH[location.hash.slice(1)];
if (hashTab) {
  setArchive(true);
  archive.querySelector(`[data-ak-tab="${hashTab}"]`).click();
}

renderWorks();
watchCardVideos();
})();
