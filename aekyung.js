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
  "id": "out-of-frame",
  "layout": "wide",
  "tags": [
    "AI 아이돌",
    "콘셉트 트레일러"
  ],
  "title": "OUT OF FRAME — 아이돌 콘셉트 트레일러",
  "meta": "개인 프로젝트 · 21.5초 · 1920×1080 · 24fps",
  "line": "하나의 캐릭터와 세 공간을 연결하며, 정해진 틀을 벗어나려는 태도를 짧은 행동과 시선으로 표현",
  "role": "콘셉트 기획 · 공간·소품 아트 디렉션 · 레퍼런스 설계 · 생성 결과 선별 · 컷 편집",
  "outcome": "수영장·붉은 코트·작업실을 잇는 21.5초 콘셉트 트레일러 완성",
  "video": "videos/out-of-frame.mp4",
  "poster": "images/out-of-frame/poster.jpg",
  "goal": "정해진 틀 밖에서 자신의 다음 장면을 선택하는 솔로 아이돌을 소개합니다. 앨범 공개 전의 콘셉트 트레일러를 상정해, 설명적인 서사보다 낯선 상황을 대하는 태도와 시선으로 캐릭터를 드러내고자 했습니다.",
  "conceptBeats": ["수영장 — 정장 차림의 인물이 분홍색 회전식 전화기를 너무 당연하게 다룹니다. 장소·복장·행동의 불일치로 낯선 일상과 캐릭터의 태연함을 보여줍니다.", "붉은 코트 — 이미 선이 그어진 공간에 직접 원을 그립니다. 바깥의 규칙뿐 아니라 자신이 만드는 경계도 있다는 양면성을 담고, 손을 털며 다음 장면으로 넘어갑니다.", "작업실 — 겹친 반투명 천 사이에서 얼굴과 시선이 드러납니다. 마지막 “그다음은?”은 이후를 스스로 선택하려는 태도이자, 앞으로 공개될 아티스트의 이야기를 기다리게 하는 질문입니다."],
  "process": [
    "공간 기획 · Midjourney에서 blue anime, ghost, wes anderson, moodboard #34 등의 무드보드를 단독·조합으로 탐색하고 수영장·붉은 코트·반투명 천이 있는 작업실을 선정했습니다. 수영장에는 색감을 맞춘 분홍색 회전식 전화기를 배치했습니다.",
    "캐릭터 레퍼런스 · 안면 계측 연구에 사용한 캐릭터 B를 출발점으로 얼굴·헤어·의상을 정리한 캐릭터 시트를 적용했습니다. 인물 시트와 공간 이미지를 별도 레퍼런스로 제공해 같은 인물이 서로 다른 장소에 등장하도록 설계했습니다.",
    "R2V 연출 설계 · 인물·공간 정의, 유지할 특징, 샷별 시간, 행동, 구도, 카메라 움직임과 사운드를 나눠 프롬프트를 작성했습니다. 10초 단위로 생성하고, 수중 시점·코트 부감·천 사이의 시선 등 공간별로 다른 구도를 배치했습니다.",
    "드래프트 검토 · Seedance 2.5 Draft 결과에서 얼굴과 의상, 공간의 거리감, 행동의 의미와 전환을 검토했습니다. 작업실 수정안은 원본과 비교한 뒤 원본을 선택했고, 채택한 드래프트 ID로 1080p 파이널을 출력했습니다. 수영장은 Higgsfield, 코트·작업실은 Comfy Cloud에서 제작했습니다.",
    "최종 편집 · 수영장의 소매 정리와 분필 줍는 장면을 삭제해 수중 샷에서 선 긋기로 바로 연결했습니다. 코트는 손을 털고 뻗기 직전에 잘라 작업실로 전환했습니다. 원본 대사·현장음을 살리고 엔딩 타이틀을 제거해 21.5초로 압축했습니다."
  ],
  "results": [],
  "findings": "생성 결과를 그대로 잇기보다 행동의 시작과 끝을 다시 선택하는 편집이 중요했습니다. 불필요한 제스처와 공간 전환을 덜어내고, 마지막 시선과 짧은 대사가 남도록 구성했습니다.",
  "limitation": "얼굴 연구의 기준 캐릭터와 레퍼런스 구성 경험을 활용했습니다. 이 최종 영상 전체에 대한 프레임별 안면 계측이나 정량적 일관성 검증은 수행하지 않았습니다.",
  "processMedia": [
    {
      "src": "images/out-of-frame/character-sheet.png",
      "cap": "동일 인물의 얼굴·헤어·의상 기준을 정리한 캐릭터 시트",
      "wide": true
    },
    {
      "src": "images/out-of-frame/pool.webp",
      "cap": "공간 레퍼런스 01 · 수영장"
    },
    {
      "src": "images/out-of-frame/court.webp",
      "cap": "공간 레퍼런스 02 · 붉은 코트"
    },
    {
      "src": "images/out-of-frame/workshop.webp",
      "cap": "공간 레퍼런스 03 · 작업실"
    }
  ],
  "tools": [
    "Midjourney",
    "Seedance 2.5",
    "Higgsfield",
    "Comfy Cloud",
    "FFmpeg"
  ]
},
  {
    id: 'onetake',
    layout: 'lead',
    tags: ['AI 아티스트', '퍼포먼스 영상'],
    title: '프리비즈 기반 AI 퍼포먼스',
    meta: 'AI 아티스트 제작 연구 · 6초 시퀀스 · 1080p',
    role: '카메라 무빙 지정 · Blender 프리비즈 · AI 제작 흐름 설계 · 편집',
    outcome: '카메라와 안무를 통합한 레퍼런스로 6초 원테이크 영상 완성',
    line: 'Blender 프리비즈와 뼈대·깊이 정보를 결합해 카메라와 안무를 함께 제어',
    video: 'videos/onetake.mp4',
    comparison: 'onetake-compare',
    processStepMedia: {
      1: { src: 'images/process/comfyui-depthpose.jpg', cap: 'ComfyUI 작업 화면 · 안무 영상에서 DWPose(뼈대)와 Depth(깊이) 추출 · 눌러서 크게 보기 ↗' }
    },
    poster: 'images/posters/onetake.jpg',
    goal: 'Blender에서 카메라 무빙을 직접 지정하고, depth·pose 가이드와 멀티 레퍼런스로 캐릭터 일관성을 유지한 AI 영상입니다.',
    process: [
      'Blender에서 16mm 광각 카메라의 접근·후퇴 경로와 타이밍을 직접 지정하고, 세트와 함께 프리비즈로 제작',
      'ComfyUI로 안무 레퍼런스 영상에서 DWPose(뼈대)와 Depth(깊이)를 추출한 뒤, 프리비즈 카메라의 깊이 패스 안에 원근을 맞춰 합성 · 카메라 무빙과 안무를 하나의 레퍼런스 영상으로 제어',
      'Nano Banana 2로 얼굴·전신 턴어라운드 시트를 제작하고, 캐릭터의 얼굴과 의상을 유지하기 위한 멀티 레퍼런스로 사용',
      'Seedance 2.5 옴니 레퍼런스로 생성 · 480p 드래프트로 카메라와 동작을 먼저 검증하고 1080p로 완성',
      '원곡 음원을 안무 타이밍에 맞춰 싱크'
    ],
    results: [],
    processMedia: [
      ...[1, 2, 3].flatMap(n => [
        { src: `${OT}/step-${n}-0.jpg`, cap: `${n} · Blender 프리비즈 카메라` },
        { src: `${OT}/step-${n}-1.jpg`, cap: `${n} · 깊이 + 뼈대 레퍼런스` },
        { src: `${OT}/step-${n}-2.jpg`, cap: `${n} · 최종 결과` }
      ]),
      { src: `${OT}/turnaround.jpg`, cap: '얼굴·전신 턴어라운드 시트 (Nano Banana 2)', wide: true }
    ],
    musicCredit: '음악: NMIXX – Heavy Serenade',
    tools: ['Blender', 'ComfyUI', 'DWPose', 'Nano Banana 2', 'Seedance 2.5', 'Premiere Pro']
  },
  {
    id: 'identity-lab',
    layout: 'research',
    tags: ['FACS 표정', '얼굴 일관성', 'R&D'],
    title: 'AI 캐릭터 표정·얼굴 일관성 연구',
    meta: '개인 R&D · FACS 표정 테스트 + 안면 계측 · 웹 라이브러리',
    line: '감정의 미세한 차이와 같은 얼굴을 유지하는 조건을 실험하고, 비교 이미지와 프롬프트를 웹 라이브러리로 정리',
    thumb: 'images/identity/b-smile-facs.png',
    role: '표정 비교 실험 · AU·강도 프롬프트 설계 · 안면 계측 · 결과 선별 · 라이브러리 구성',
    outcome: '표정 라이브러리 82장과 얼굴 일관성 비교 이미지 69장, 프롬프트·측정값·선별 기록 정리',
    goal: '같은 캐릭터가 장면마다 다른 감정을 표현하면서도 같은 얼굴로 보이도록, 표정 제어와 얼굴 일관성을 각각 실험했습니다. 생성 이미지와 비교 기록을 정리한 연구이며, 완성 영상에 적용한 사례와는 구분합니다.',
    process: [
      'FACS 표정 테스트 · 감정명만 지시한 결과와 얼굴 움직임 단위(AU)를 함께 지시한 결과를 비교. 진심 어린 미소와 억지웃음, 분노를 억누름과 울음을 참음 등 장면에 필요한 표현을 검토',
      '강도·복합 감정 실험 · A–E 강도 변화, 두 감정의 조합, 감정이 다른 감정으로 넘어가는 경계 표현을 비교하고 연기 의도와 선별 이유를 기록',
      '표정 라이브러리 · 82장을 자체 검토 기준으로 제작 승인 55장, 조건부 11장, R&D 참고 16장으로 구분. 감정·연기 비트·AU·생성 방식으로 검색할 수 있게 구성',
      '얼굴 일관성 실험 · 기준 얼굴을 계측해 스펙 문장으로 만들고 레퍼런스만 / 레퍼런스+스펙 / 스펙만 조건을 비교. 6개 모델의 지원 조건에 따라 3개 장면에서 69장 생성',
      '얼굴 비교 · ArcFace 코사인 유사도와 안면 계측, 비교 이미지를 함께 검토하고 모델별 결과와 프롬프트를 연결'
    ],
    findings: '표정 실험에서는 FACS 지시가 모든 감정에 더 좋지는 않았습니다. 테스트 2의 진심 어린 미소는 FACS, 억지웃음은 감정명 지시 결과를 선택했습니다. 얼굴 실험에서도 스펙 추가 효과는 모델별로 달랐습니다. GPT Image 2의 평균 유사도는 0.72→0.78, Seedream은 0.83→0.83으로 나타났습니다.',
    limitation: '제작 승인·조건부는 개인 연구의 선별 기준입니다. 얼굴 비교는 단일 캐릭터에 대한 실험이며 모델별 샘플 수와 지원 조건이 다릅니다. 유사도는 정확도(%)가 아니며, 영상 품질이나 제작 효율 향상을 측정한 결과는 아닙니다.',
    results: [{ n: '82', label: '표정 라이브러리 이미지' }, { n: '69', label: '얼굴 비교 이미지' }, { n: '6', label: '얼굴 비교 모델' }],
    resultLabel: '연구 산출물',
    gallery: [
      { src: 'images/identity/b-smile-emotion.png', cap: '진심 어린 미소 · 감정명' },
      { src: 'images/identity/b-smile-facs.png', cap: '진심 어린 미소 · 감정명 + FACS (선택)' },
      { src: 'images/identity/b-forced-smile-emotion.png', cap: '억지웃음 · 감정명 (선택)' },
      { src: 'images/identity/b-forced-smile-facs.png', cap: '억지웃음 · 감정명 + FACS' }
    ],
    galleryCaption: '표정 테스트 2 · 같은 감정의 두 입력 방식을 비교했습니다. 선택 여부와 판단 이유는 라이브러리에 기록했습니다.',
    link: 'https://facs-expression-library.dan-asa.chatgpt.site/#index',
    linkLabel: '얼굴 연구 사이트 전체 보기 ↗',
    researchLinks: [
      { href: 'https://facs-expression-library.dan-asa.chatgpt.site/#facs', label: 'FACS 표정 테스트 ↗' },
      { href: 'https://facs-expression-library.dan-asa.chatgpt.site/#anthropometry', label: '안면 계측·얼굴 일관성 ↗' }
    ],
    processMedia: [
      { src: 'images/identity/gptimage2-comparison.jpg', cap: '얼굴 일관성 · GPT Image 2 · 레퍼런스만 / 레퍼런스+스펙 / 스펙만', wide: true },
      { src: 'images/identity/seedream5-comparison.jpg', cap: '얼굴 일관성 · Seedream 5.0 Pro · 동일 조건 비교', wide: true }
    ],
    tools: ['GPT Image 2', 'ComfyUI', 'MediaPipe', 'ArcFace']
  },
  {
    id: 'lg-youth',
    layout: 'tall',
    tags: ['인물 중심 숏폼', '우수상'],
    title: '가장 나다운 순간',
    meta: 'LG 유쓰 AI 쇼츠 페스티벌 우수상 · 세로 숏폼',
    line: '상반된 취향을 가진 인물의 성격을 셀피 시점과 짧은 반전으로 표현',
    role: '콘셉트 기획 · 인물 이미지 생성 · 셀피 시점 연출 · AI 영상 제작',
    outcome: 'LG 유쓰 AI 쇼츠 페스티벌 우수상 수상',
    video: 'videos/lg-youth-festival.mp4',
    poster: 'images/posters/lg-youth-festival.jpg',
    goal: '커피 향은 좋아하지만 커피는 못 마시고, 책은 사지만 읽지는 않는 모순적인 취향에서 이야기를 시작했습니다. 셀피처럼 가까운 시점으로 인물의 성격을 보여주고, “무너지면 주워 먹는 사람”이라는 반전으로 마무리했습니다.',
    process: [
      '공모전 주제인 가장 나다운 순간을 상반된 취향과 행동으로 풀고, 마지막에 인물을 대하는 태도가 드러나도록 구성',
      'ChatGPT로 이미지 프롬프트를 정리하고 Higgsfield Soul로 인물 이미지 생성',
      '화면 밖 팔의 방향과 시선으로 셀피 시점을 구성하고, 인물의 외형과 스타일을 장면의 공통 기준으로 사용',
      'Kling과 Seedance 2.0으로 영상화하고 컷 전환과 카메라 무빙에 변화를 주어 짧은 이야기로 완성'
    ],
    results: [{ n: '우수상', label: 'LG 유쓰 AI 쇼츠 페스티벌' }],
    resultLabel: '수상 결과',
    processMedia: [],
    tools: ['ChatGPT', 'Higgsfield Soul', 'Kling', 'Seedance 2.0']
  },
  {
    id: 'medihel',
    layout: 'wide',
    tags: ['뷰티', 'AI 제작'],
    title: '메디힐 토너패드',
    meta: '가로 브랜드 필름 · 메디힐 공모전 출품작',
    role: '콘셉트 기획 · 인물·스타일 설계 · AI 영상 제작 · 제품 합성 · 편집',
    outcome: '인물의 일관성과 제품 정보를 함께 담은 브랜드 필름 완성',
    line: '완벽주의자 캐릭터로 밀착 USP를 표현하고, 장면 간 인물·의상·조명을 일관되게 구성',
    thumb: `${P3}/Thumbnails/공모전_메디힐.png`,
    preview: 'videos/preview/medihel.mp4?v=3',
    driveId: '1eSSpwG9XS92l4zofZlsaio4MO2V_PiHY',
    goal: '패드의 밀착력을 ‘1mm의 빈틈도 허락하지 않는 완벽주의자’ 캐릭터로 표현했습니다. 팩토·닦토·흡토의 사용 루틴을 연결해 제품의 특징과 사용법을 함께 전달했습니다.',
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
    id: 'pure-solution',
    layout: 'pano',
    tags: ['인스타그램 캐러셀', 'AI 제작'],
    title: '퓨어솔루션 캐러셀',
    meta: '닥터조 인스타그램 · 4장 파노라마 캐러셀',
    role: '캐러셀 기획 · 파노라마 구성 · 인물·오브제 배치',
    outcome: '4장의 연결된 비주얼로 제품을 소개하고 외부링크 클릭 422건 기록',
    line: '인물과 오브제가 다음 장으로 이어지는 4장 구성 · 외부링크 클릭 422건',
    video: 'videos/pure-solution.mp4',
    poster: 'images/posters/pure-solution.jpg',
    slides: [1, 2, 3, 4].map(n => `images/pure-solution/slide-${n}.webp`),
    goal: '식물 관리가 일상에 녹아드는 모습을 하나의 파노라마로 구성했습니다. 장면의 연결을 따라 다음 장을 넘기며 제품을 살펴보도록 기획했습니다.',
    process: [
      '하나의 파노라마를 4장으로 나누고, 인물과 오브제가 장의 경계를 넘나들도록 배치',
      '화면이 다음 장에서 이어지기 때문에, 넘기는 행위 자체가 콘텐츠가 되도록 설계'
    ],
    results: [
      { n: '16,745', label: '조회수' },
      { n: '422', label: '외부링크 클릭' },
      { n: '76', label: '저장' },
      { n: '54', label: '좋아요' }
    ],
    processMedia: [],
    tools: []
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
  return `<img src="${esc(w.thumb)}" alt="" loading="lazy">`;
}

function cardResults(w) {
  if (!w.results.length) return '';
  return `<p class="ak-card-results">${w.results.slice(0, 3).map(r => `<span><b>${esc(r.n)}</b> ${esc(r.label)}</span>`).join('')}</p>`;
}

/* 대표 퍼포먼스 → 두 제작 사례 → 캐러셀 */
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
          <span class="ak-card-cta">목적 · 과정 · 결과 보기 <span aria-hidden="true">↗</span></span>
        </div>
      </button>
    </article>`;
  const lead = works.filter(w => w.layout === 'lead');
  const pano = works.filter(w => w.layout === 'pano' && !w.archiveOnly);
  const rest = works.filter(w => w.layout !== 'pano' && w.layout !== 'lead' && w.layout !== 'research');
  let n = 0;
  const top = lead.map(w => block(w, n++)).join('');
  const row = `<div class="ak-case-row${rest.length === 1 ? ' ak-case-row--single' : ''}">${rest.map(w => block(w, n++)).join('')}</div>`;
  $('#ak-grid').innerHTML = top + row + pano.map(w => block(w, n++)).join('');
  const research = works.find(w => w.layout === 'research');
  $('#ak-research').innerHTML = `<article class="ak-research-card">
    <button class="ak-research-open" type="button" data-ak-work="${research.id}" aria-label="${esc(research.title)} 자세히 보기">
      <div class="ak-research-faces">${research.gallery.map(m => `<img src="${m.src}" alt="${esc(m.cap)}" loading="lazy">`).join('')}</div>
      <div><p class="ak-card-tags"><span class="tag">개인 R&D</span><span class="tag">FACS · 안면 계측</span></p><h3 class="ak-card-title">${esc(research.title)}</h3><p class="ak-card-line">${esc(research.line)}</p>${cardResults(research)}<span class="ak-card-cta">실험 과정 · 비교 결과 보기 ↗</span></div>
    </button>
    <div class="ak-research-links">${research.researchLinks.map(l => `<a class="ak-ext" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>
  </article>`;
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
  if (w.gallery) {
    return `<div class="ak-identity-gallery">${w.gallery.map(m => `<figure><a href="${m.src}" target="_blank" rel="noopener" aria-label="${esc(m.cap)} 크게 보기"><img src="${m.src}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}</div><p class="ak-media-caption">${esc(w.galleryCaption)}</p>`;
  }
  if (w.driveId) {
    return `<div class="ak-sm ak-sm--wide"><iframe src="https://drive.google.com/file/d/${w.driveId}/preview" allow="autoplay; fullscreen" allowfullscreen title="${esc(w.title)} 영상"></iframe></div><a class="ak-ext" href="https://drive.google.com/file/d/${w.driveId}/preview" target="_blank" rel="noopener">영상 새 창에서 보기 ↗</a>`;
  }
  if (w.layout === 'lead' || w.layout === 'wide') {
    return `<div class="ak-sm ak-sm--wide"><video src="${w.video}" poster="${w.poster}" controls loop playsinline></video></div>`;
  }
  if (w.layout === 'pano') {
    return `
      <div class="ak-sm ak-sm--pano"><video src="${w.video}" poster="${w.poster}" controls muted loop playsinline></video></div>
      <div class="ak-slides" aria-label="캐러셀 4장">${w.slides.map((s, i) => `<figure><a href="${s}" target="_blank" rel="noopener" aria-label="캐러셀 ${i + 1}장 크게 보기"><img src="${s}" alt="캐러셀 ${i + 1}장" loading="lazy"></a><figcaption>${i + 1} / ${w.slides.length} · 눌러서 크게 보기 ↗</figcaption></figure>`).join('')}</div>`;
  }
  return `<div class="ak-sm ak-sm--tall"><video src="${w.video}" poster="${w.poster}" controls playsinline></video></div>`;
}

function sheetProcessMedia(w) {
  if (!w.processMedia.length) return '';
  return `<div class="ak-pm-grid">${w.processMedia.map((m, i) => {
    const { src, cap = '', wide = false } = typeof m === 'string' ? { src: m } : m;
    return `<figure class="ak-pm${wide ? ' ak-pm--wide' : ''}"><a href="${esc(src)}" target="_blank" rel="noopener" aria-label="${esc(cap || `${w.title} 과정 자료 ${i + 1}`)} 크게 보기"><img src="${esc(src)}" alt="${esc(cap || `${w.title} 과정 자료 ${i + 1}`)}" loading="lazy"></a>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
  }).join('')}</div>`;
}

function sheetComparison(w) {
  if (!w.comparison) return '';
  const layout = window.matchMedia('(max-width: 760px)').matches ? 'vertical' : 'horizontal';
  return `<figure class="ak-comparison" data-layout="${layout}">
    <figcaption>Depth·Pose 가이드와 완성 영상 비교</figcaption>
    <div class="ak-comparison-player">
      <video data-comparison="${w.comparison}" src="videos/${w.comparison}-${layout}.mp4" poster="images/posters/${w.comparison}-${layout}.jpg" controls muted playsinline preload="metadata" aria-label="Depth·Pose 가이드와 AI 완성 영상 동시 비교"></video>
      <span class="ak-comparison-label ak-comparison-label--guide" aria-hidden="true">Depth · Pose 가이드</span>
      <span class="ak-comparison-label ak-comparison-label--final" aria-hidden="true">AI 완성 영상</span>
    </div>
    <p class="ak-comparison-note">같은 시점에서 재생 · 속도 변경 없음 · 5.7초 가이드의 끝 장면을 약 0.3초 유지</p>
  </figure>`;
}

let cleanupComparison = null;
function setupComparison() {
  const video = panel.querySelector('[data-comparison]');
  if (!video) return;
  const query = window.matchMedia('(max-width: 760px)');
  const changeLayout = () => {
    const time = video.currentTime;
    const playing = !video.paused;
    const layout = query.matches ? 'vertical' : 'horizontal';
    video.closest('.ak-comparison').dataset.layout = layout;
    video.poster = `images/posters/${video.dataset.comparison}-${layout}.jpg`;
    video.src = `videos/${video.dataset.comparison}-${layout}.mp4`;
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = Math.min(time, video.duration);
      if (playing) video.play().catch(() => {});
    }, { once: true });
    video.load();
  };
  query.addEventListener('change', changeLayout);
  cleanupComparison = () => query.removeEventListener('change', changeLayout);
}

function openSheet(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;
  lastFocus = document.activeElement;
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());

  panel.className = `ak-sheet-panel ak-sheet-panel--${w.layout === 'lead' || w.layout === 'research' ? 'wide' : w.layout}`;
  panel.innerHTML = `
    <button class="ak-sheet-close" type="button" data-ak-close aria-label="닫기">✕</button>
    <header class="ak-sheet-summary">
      <p class="ak-card-tags">${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</p>
      <h2 class="ak-sheet-title" id="ak-sheet-title">${esc(w.title)}</h2>
      <p class="ak-sheet-meta">${esc(w.meta)}</p>
      <p class="ak-sheet-goal">${esc(w.goal)}</p>
      ${w.conceptBeats ? `<section class="ak-concept"><h3>기획 의도 · 세 공간의 흐름</h3><ol class="ak-steps">${w.conceptBeats.map(p => `<li>${esc(p)}</li>`).join('')}</ol></section>` : ''}
      <dl class="ak-facts">
        <div><dt>담당 역할</dt><dd>${esc(w.role)}</dd></div>
        <div><dt>${w.layout === 'research' ? '연구 산출물' : '제작 결과'}</dt><dd>${esc(w.outcome)}</dd></div>
      </dl>
      ${w.results.length ? `<ul class="ak-res" aria-label="${esc(w.resultLabel || '게시 성과')}">${w.results.slice(0, 3).map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
      ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">${esc(w.linkLabel || '원본 게시물 보기 ↗')}</a>` : ''}
      ${w.researchLinks ? `<div class="ak-research-links">${w.researchLinks.map(l => `<a class="ak-ext" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>` : ''}
    </header>
    <div class="ak-sheet-media">${sheetMedia(w)}${w.musicCredit ? `<p class="ak-sheet-meta">${esc(w.musicCredit)}</p>` : ''}</div>
    <div class="ak-sheet-text">
      <section class="ak-block">
        <h3>${w.layout === 'research' ? '연구 과정' : '제작 과정'}</h3>
        ${sheetComparison(w)}
        <ol class="ak-steps">${w.process.map((p, i) => {
          const media = w.processStepMedia?.[i];
          return `<li>${esc(p)}${media ? `<figure class="ak-pm ak-pm--wide ak-step-media"><a href="${esc(media.src)}" target="_blank" rel="noopener" aria-label="ComfyUI DWPose·Depth 작업 화면 크게 보기"><img src="${esc(media.src)}" alt="입력 안무 영상에서 Depth Anything V2와 DWPose로 깊이와 뼈대를 추출하고 합성하는 실제 ComfyUI 워크플로우" loading="lazy" width="3024" height="1744"></a><figcaption>${esc(media.cap)}</figcaption></figure>` : ''}</li>`;
        }).join('')}</ol>
        ${w.findings ? `<div class="ak-research-findings"><h3>실험 결과와 제작 판단</h3><p>${esc(w.findings)}</p><p class="ak-research-limit">${esc(w.limitation)}</p></div>` : ''}
        ${sheetProcessMedia(w)}
      </section>
      ${w.tools.length ? `<section class="ak-block"><h3>사용 도구</h3><p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p></section>` : ''}
    </div>`;

  setupComparison();
  panel.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
    panel.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  }));
  sheet.classList.add('is-open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  document.querySelectorAll('body > header, body > nav, body > main, body > footer').forEach(el => { el.inert = true; });
  panel.scrollTop = 0;
  $('.ak-sheet-close', panel).focus();
}

function closeSheet() {
  if (!sheet.classList.contains('is-open')) return;
  if (cleanupComparison) { cleanupComparison(); cleanupComparison = null; }
  sheet.classList.remove('is-open');
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.querySelectorAll('body > header, body > nav, body > main, body > footer').forEach(el => { el.inert = false; });
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.innerHTML = '';
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', e => {
  const card = e.target.closest('[data-ak-work]');
  if (card) { openSheet(card.dataset.akWork); return; }
  if (e.target.closest('[data-ak-close]')) closeSheet();
});
document.addEventListener('keydown', e => {
  if (!sheet.classList.contains('is-open')) return;
  if (e.key === 'Escape') { closeSheet(); return; }
  if (e.key !== 'Tab') return;
  const items = [...panel.querySelectorAll('button, a[href], video[controls], iframe, [tabindex="0"]')].filter(el => el.getClientRects().length);
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

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
