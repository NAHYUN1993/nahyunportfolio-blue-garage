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
    goal: '원하는 카메라 경로와 안무가 함께 반영되는 AI 퍼포먼스 영상을 만들고자 했습니다. Blender에서 카메라 무빙을 직접 지정하고, depth·pose 가이드와 멀티 레퍼런스로 움직임과 캐릭터 일관성을 제어했습니다.',
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
  "layout": "research",
  "resultLabel": "연구 산출물",
  "processMedia": [],
  "id": "expression-lab",
  "title": "표정 연구",
  "tags": [
    "개인 R&D",
    "FACS · 감정 표현"
  ],
  "meta": "감정명과 FACS 지시 비교 · 표정 라이브러리",
  "line": "진심 어린 미소와 억지웃음처럼 가까운 감정의 차이를 비교하고, 표정의 강도와 복합 감정을 실험",
  "role": "표정 비교 실험 · AU·강도 프롬프트 설계 · 결과 선별 · 라이브러리 구성",
  "goal": "같은 캐릭터가 서로 다른 감정을 어떻게 표현하는지 실험했습니다. 감정명만 지시한 결과와 얼굴 움직임 단위(AU)를 함께 지시한 결과를 비교하고, 장면의 연기 의도에 맞는 표정을 선별했습니다.",
  "outcome": "표정 이미지 82장과 프롬프트·연기 의도·선별 이유를 웹 라이브러리로 정리",
  "process": [
    "감정명만 입력한 이미지와 FACS의 얼굴 움직임 단위(AU)를 함께 입력한 이미지를 비교했습니다.",
    "A–E 강도 변화와 두 감정의 조합, 감정이 다른 감정으로 넘어가는 경계 표현을 실험했습니다.",
    "82장을 자체 기준으로 제작 승인 55장, 조건부 11장, R&D 참고 16장으로 분류하고 선택 이유를 기록했습니다."
  ],
  "findings": "FACS 지시가 모든 감정에서 더 좋은 결과를 만들지는 않았습니다. 테스트 2의 진심 어린 미소는 FACS 지시, 억지웃음은 감정명 지시 결과를 선택했습니다.",
  "limitation": "승인·조건부는 개인 연구의 선별 기준입니다. 표정 비교 이미지와 기록을 정리한 연구이며, 최종 영상의 연기 품질을 측정한 결과는 아닙니다.",
  "results": [
    {
      "n": "82",
      "label": "표정 라이브러리 이미지"
    }
  ],
  "gallery": [
    {
      "src": "images/identity/b-smile-emotion.png",
      "cap": "진심 어린 미소 · 감정명"
    },
    {
      "src": "images/identity/b-smile-facs.png",
      "cap": "진심 어린 미소 · 감정명 + FACS (선택)"
    },
    {
      "src": "images/identity/b-forced-smile-emotion.png",
      "cap": "억지웃음 · 감정명 (선택)"
    },
    {
      "src": "images/identity/b-forced-smile-facs.png",
      "cap": "억지웃음 · 감정명 + FACS"
    }
  ],
  "galleryCaption": "같은 감정을 두 가지 입력 방식으로 생성한 비교. 선택 이유는 라이브러리에 기록했습니다.",
  "previewImages": [
    {
      "src": "images/identity/b-smile-emotion.png",
      "cap": "감정명으로 생성한 미소"
    },
    {
      "src": "images/identity/b-smile-facs.png",
      "cap": "FACS를 함께 지시한 미소"
    }
  ],
  "link": "https://facs-expression-library.dan-asa.chatgpt.site/#facs",
  "linkLabel": "표정 연구 사이트 보기 ↗",
  "tools": [
    "FACS",
    "GPT Image 2"
  ]
},
{
  "layout": "research",
  "resultLabel": "연구 산출물",
  "processMedia": [],
  "id": "identity-lab",
  "title": "얼굴 계측 연구",
  "tags": [
    "개인 R&D",
    "안면 계측 · 얼굴 일관성"
  ],
  "meta": "기준 얼굴 계측 · 6개 모델 · 3개 장면 비교",
  "line": "기준 얼굴의 비율을 스펙으로 정리하고, 레퍼런스와 함께 입력했을 때 얼굴 일관성이 어떻게 달라지는지 비교",
  "role": "안면 계측 · 조건별 생성 실험 · 유사도 비교 · 프롬프트·측정값 정리",
  "goal": "같은 얼굴을 다른 장소와 구도에서도 유지할 수 있는지 확인하기 위해 기준 얼굴을 계측했습니다. 얼굴 비율을 설명한 스펙과 이미지 레퍼런스의 조합을 바꾸며 모델별 결과를 비교했습니다.",
  "outcome": "6개 모델의 얼굴 비교 이미지 69장, 모델별 프롬프트와 계측·유사도 기록 정리",
  "process": [
    "기준 얼굴의 특징과 비율을 계측하고 생성 지시로 사용할 스펙 문장을 작성했습니다.",
    "레퍼런스만 / 레퍼런스+스펙 / 스펙만 조건으로 비교했습니다. 6개 모델의 지원 조건에 따라 3개 장면에서 69장을 생성했습니다.",
    "ArcFace 코사인 유사도와 안면 계측, 비교 이미지를 함께 검토하고 모델별 결과와 프롬프트를 연결했습니다."
  ],
  "findings": "스펙 추가 효과는 모델별로 달랐습니다. GPT Image 2의 평균 유사도는 0.72→0.78, Seedream은 0.83→0.83으로 나타났습니다.",
  "limitation": "단일 캐릭터에 대한 실험이며 모델별 샘플 수와 지원 조건이 다릅니다. 유사도는 정확도(%)가 아니며, 최종 영상 전체에 대한 일관성 측정 결과는 아닙니다.",
  "results": [
    {
      "n": "69",
      "label": "얼굴 비교 이미지"
    },
    {
      "n": "6",
      "label": "비교 모델"
    }
  ],
  "gallery": [
    {
      "src": "images/identity/gptimage2-comparison.jpg",
      "cap": "GPT Image 2 · 레퍼런스 / 레퍼런스+스펙 / 스펙"
    },
    {
      "src": "images/identity/seedream5-comparison.jpg",
      "cap": "Seedream 5.0 Pro · 조건별 얼굴 비교"
    }
  ],
  "galleryLayout": "documents",
  "galleryCaption": "모델별 비교 이미지 · 눌러서 원본 크기로 보기",
  "previewImages": [
    {
      "src": "images/identity/reference-b.webp",
      "cap": "계측 기준 얼굴"
    },
    {
      "src": "images/identity/gptimage2-ref-spec-cafe-1.webp",
      "cap": "레퍼런스와 얼굴 스펙을 적용한 카페 장면"
    }
  ],
  "link": "https://facs-expression-library.dan-asa.chatgpt.site/#anthropometry",
  "linkLabel": "얼굴 계측 연구 사이트 보기 ↗",
  "tools": [
    "ComfyUI",
    "MediaPipe",
    "ArcFace"
  ]
},
{
  "layout": "workflow",
  "results": [],
  "processMedia": [],
  "galleryLayout": "documents",
  "id": "interview-workflow",
  "title": "인터뷰 편집 자동화",
  "tags": [
    "편집 워크플로우",
    "Premiere Pro"
  ],
  "meta": "인터뷰 전사 → 편집 구성 → 타임라인·자막·오디오",
  "line": "인터뷰 발화를 분석해 편집 순서를 구성하고, Premiere에서 수정 가능한 타임라인과 자막으로 연결",
  "role": "편집 구조·자동화 흐름 설계 · AI 도구를 활용한 구현 · Premiere 결과 검토",
  "goal": "긴 인터뷰에서 필요한 발화를 찾고 편집 순서와 자막을 옮기는 반복 작업을 연결했습니다. 원본 구간과 편집 의도를 함께 기록해 초안을 검토하고 수정할 수 있도록 구성했습니다.",
  "outcome": "18분 20초 인터뷰를 14개 구간으로 구성한 약 8분 편집 초안과 Premiere 타임라인·자막·오디오",
  "process": [
    "인터뷰 음성을 전사하고 발화별 시간과 내용을 정리했습니다.",
    "발화 내용을 바탕으로 도입·문제·경험·비교의 흐름을 구성하고, 선택 구간과 편집 의도를 원본 타임코드에 연결했습니다.",
    "편집 구성을 타임라인 파일과 자막·오디오로 출력하고 Premiere에서 확인했습니다.",
    "타임라인과 원본-편집본 대응표를 함께 보며 컷 순서와 구간을 검토할 수 있도록 정리했습니다."
  ],
  "gallery": [
    {
      "src": "images/workflows/edit-timeline.webp",
      "cap": "Premiere에서 확인한 편집 타임라인 · 영상·자막·오디오 트랙"
    },
    {
      "src": "images/workflows/edit-mapping.webp",
      "cap": "원본 타임코드 → 편집 구간 → 선택 이유 대응표"
    }
  ],
  "galleryCaption": "실제 작업 화면 · 눌러서 원본 크기로 보기",
  "previewImages": [
    {
      "src": "images/workflows/edit-timeline.webp",
      "cap": "인터뷰 편집 자동화의 Premiere 타임라인"
    }
  ],
  "previewType": "screen",
  "tools": [
    "Whisper",
    "LLM",
    "FCPXML",
    "FFmpeg",
    "Premiere Pro"
  ]
},
{
  "layout": "workflow",
  "results": [],
  "processMedia": [
    {
      "src": "images/workflows/board-storyboard.webp",
      "cap": "스토리보드 · 컷별 연출·내레이션·사운드·프롬프트",
      "wide": true
    },
    {
      "src": "images/workflows/board-review.webp",
      "cap": "이미지 시안 비교 · 승인·모델 선택·재생성",
      "wide": true
    }
  ],
  "galleryLayout": "documents",
  "id": "production-board",
  "title": "AI 영상 제작판",
  "tags": [
    "제작 워크플로우",
    "컷별 검토·재생성"
  ],
  "meta": "스토리보드 → 이미지 선택 → 영상 생성 · 첫 프로젝트 적용 중",
  "line": "컷별 연출과 생성 결과를 한 화면에서 검토하고, 모델 선택·프롬프트 수정·재생성을 연결한 제작 도구",
  "role": "제작 절차·검토 단계 설계 · AI 도구를 활용한 웹앱 구현 · 컷별 결과 선별",
  "goal": "기획부터 이미지 선택과 영상 생성까지 흩어진 작업을 컷 단위로 관리하기 위해 제작판을 만들었습니다. 단계별로 사람이 결과를 검토하고 다음 생성을 결정할 수 있도록 구성했습니다.",
  "outcome": "스토리보드·이미지 비교·승인·재생성 화면 구축, 첫 프로젝트 7개 컷 영상 출력",
  "process": [
    "브랜드 숏폼의 제작 절차와 캐릭터 규칙을 정리하고, 컷별 연출·내레이션·사운드·프롬프트를 스토리보드로 구성했습니다.",
    "이미지 시안을 비교해 선택하고, 필요한 컷은 프롬프트나 모델을 바꿔 재생성하도록 검토 화면을 만들었습니다.",
    "선택한 이미지에서 영상 생성으로 이어지도록 구성하고 컷별 출력 결과와 진행 상태를 확인했습니다.",
    "첫 프로젝트에서 7개 컷의 영상 출력을 확인하며 제작 절차와 검토 기준을 다듬고 있습니다."
  ],
  "gallery": [
    {
      "src": "images/workflows/board-output.webp",
      "cap": "7개 컷 영상 출력과 컷별 재생·검토 화면"
    }
  ],
  "galleryCaption": "첫 프로젝트 적용 화면 · 완성본 게시 전, 컷별 영상 출력 단계",
  "previewImages": [
    {
      "src": "images/workflows/board-review.webp",
      "cap": "AI 제작판의 이미지 비교 및 승인 화면"
    }
  ],
  "previewType": "screen",
  "tools": [
    "Antigravity",
    "Flask",
    "MCP",
    "Python",
    "FFmpeg"
  ]
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

const briefs = {
  'onetake': { purpose: '원하는 카메라 무빙과 안무를 함께 제어', process: '카메라 무빙 직접 지정 → Depth·Pose → AI 생성', result: '6초 원테이크 · 1080p 완성' },
  'out-of-frame': { purpose: '태도와 시선으로 솔로 아이돌의 콘셉트 소개', process: '인물·공간 레퍼런스 설계 → 생성·선별 → 편집', result: '세 공간을 연결한 21.5초 트레일러' },
  'lg-youth': { purpose: '상반된 취향과 반전으로 인물의 개성 표현', process: '셀피 시점 연출 → 인물 생성 → 숏폼 구성', result: 'LG 유쓰 AI 쇼츠 페스티벌 우수상' },
  'pure-solution': { purpose: '다음 장을 넘기며 제품을 살펴보도록 기획', process: '인물·오브제가 이어지는 4장 파노라마 구성', result: '조회수 16,745 · 외부링크 클릭 422건' },
  'expression-lab': { purpose: '비슷한 감정의 차이와 표정 강도 제어', process: '감정명·FACS 비교 → 강도·복합 감정 실험', result: '표정 이미지 82장과 선별 이유 정리' },
  'identity-lab': { purpose: '다른 장면에서도 같은 얼굴을 유지하는 조건 확인', process: '얼굴 계측 → 스펙·레퍼런스 조합 → 모델 비교', result: '6개 모델 · 비교 이미지 69장' },
  'interview-workflow': { purpose: '발화 선택부터 편집 초안까지 반복 작업 연결', process: '전사·구성 → 타임라인·자막 → Premiere 검토', result: '14개 구간으로 구성한 약 8분 편집 초안' },
  'production-board': { purpose: '컷별 생성과 사람이 검토하는 과정을 한곳에서 관리', process: '스토리보드 → 이미지 선택·재생성 → 영상 출력', result: '검토용 웹앱 · 첫 프로젝트 7개 컷 출력' }
};
const stepTitles = {
  'onetake': ['카메라 무빙 직접 지정', 'ComfyUI에서 뼈대·깊이 추출과 합성', '캐릭터 멀티 레퍼런스', '드래프트 검토와 최종 생성', '음원과 안무 싱크'],
  'out-of-frame': ['공간과 소품 기획', '캐릭터 레퍼런스', '장면별 행동·카메라 연출', '드래프트 검토와 최종 출력', '행동의 시작과 끝을 고르는 편집'],
  'lg-youth': ['인물과 반전 기획', '인물 이미지 생성', '셀피 시점 연출', '영상 생성과 컷 구성'],
  'pure-solution': ['4장 파노라마 구성', '장을 넘기는 흐름 설계'],
  'expression-lab': ['감정명과 FACS 비교', '강도·복합 감정 실험', '표정 선별과 라이브러리 정리'],
  'identity-lab': ['기준 얼굴 계측', '조건별·모델별 이미지 생성', '계측·유사도·이미지 비교'],
  'interview-workflow': ['음성 전사', '발화 선택과 편집 구성', '타임라인·자막·오디오 출력', 'Premiere에서 초안 검토'],
  'production-board': ['제작 규칙과 스토리보드', '이미지 비교·선택·재생성', '영상 생성과 진행 상태', '7개 컷 출력과 기준 보완']
};

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

function briefMarkup(w) {
  const b = briefs[w.id];
  return `<dl class="work-brief"><div><dt>목적</dt><dd>${esc(b.purpose)}</dd></div><div><dt>과정</dt><dd>${esc(b.process)}</dd></div><div><dt>결과</dt><dd>${esc(b.result)}</dd></div></dl>`;
}
function renderWorks() {
  const ordered = ['onetake', 'out-of-frame', 'lg-youth', 'pure-solution'].map(id => works.find(w => w.id === id));
  $('#ak-grid').innerHTML = ordered.map((w, i) => `<article class="work-choice">
    <button type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
      <div class="work-choice-media">${cardMedia(w)}<span aria-hidden="true">${String(i + 1).padStart(2, '0')} ↗</span></div>
      <div class="work-choice-copy"><p class="work-choice-kind">${esc(w.tags.join(' · '))}</p><h3>${esc(w.title)}</h3>${briefMarkup(w)}</div>
    </button></article>`).join('');
  const support = w => `<article class="ak-support-card">
    <button class="ak-support-open" type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
      <div class="ak-support-preview${w.previewType === 'screen' ? ' ak-support-preview--screen' : ''}">${w.previewImages.map(m => `<img src="${m.src}" alt="${esc(m.cap)}" loading="lazy">`).join('')}</div>
      <div class="ak-support-copy"><p class="work-choice-kind">${esc(w.tags.join(' · '))}</p><h3 class="ak-card-title">${esc(w.title)}</h3>${briefMarkup(w)}<span class="ak-card-cta">상세 보기 ↗</span></div>
    </button>${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">${esc(w.linkLabel)}</a>` : ''}</article>`;
  $('#ak-research').innerHTML = works.filter(w => w.layout === 'research').map(support).join('');
  $('#ak-workflows').innerHTML = works.filter(w => w.layout === 'workflow').map(support).join('');
}
function watchCardVideos() {
  if (reduceMotion) return;
  document.querySelectorAll('.work-choice button').forEach(button => {
    const v = button.querySelector('video');
    if (!v) return;
    button.addEventListener('pointerenter', () => { if (matchMedia('(hover: hover)').matches) v.play().catch(() => {}); });
    button.addEventListener('pointerleave', () => v.pause());
    button.addEventListener('blur', () => v.pause());
  });
}

/* ── DETAIL SHEET ── */
const sheet = $('#ak-sheet');
const panel = $('#ak-sheet-panel');
let lastFocus = null;

function sheetMedia(w) {
  if (w.gallery) {
    const documents = w.galleryLayout === 'documents';
    const labels = w.id === 'identity-lab' ? ['GPT Image 2', 'Seedream'] : ['타임라인', '구간·의도 대응표'];
    return `${documents && w.gallery.length > 1 ? `<div class="document-selector" role="group" aria-label="비교 자료 선택">${w.gallery.map((m,i) => `<button type="button" data-document="${i}" aria-pressed="${i===0}">${labels[i] || `자료 ${i+1}`}</button>`).join('')}</div>` : ''}<div class="ak-identity-gallery${documents ? ' ak-identity-gallery--documents' : ''}">${w.gallery.map((m,i) => `<figure ${documents ? `data-document-page="${i}" ${i ? 'hidden' : ''}` : ''}><a href="${m.src}" target="_blank" rel="noopener" aria-label="${esc(m.cap)} 크게 보기"><img src="${m.src}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}</div><p class="ak-media-caption">${esc(w.galleryCaption)}</p>`;
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

  panel.className = 'ak-sheet-panel case-reader';
  panel.innerHTML = `
    <header class="case-heading"><div><p class="work-choice-kind">${esc(w.tags.join(' · '))}</p><h2 id="ak-sheet-title">${esc(w.title)}</h2><p>${esc(w.meta)}</p></div><button class="case-close" type="button" data-ak-close aria-label="닫고 목록으로 돌아가기">✕ <span>목록으로</span></button></header>
    <div class="case-tabs" role="tablist" aria-label="작품 상세 내용">
      <button type="button" role="tab" id="case-result-tab" aria-controls="case-result" aria-selected="true" data-case-tab="result">작품·결과</button>
      <button type="button" role="tab" id="case-purpose-tab" aria-controls="case-purpose" aria-selected="false" tabindex="-1" data-case-tab="purpose">목적·역할</button>
      <button type="button" role="tab" id="case-process-tab" aria-controls="case-process" aria-selected="false" tabindex="-1" data-case-tab="process">${w.layout === 'research' ? '연구 과정' : '제작 과정'}</button>
    </div>
    <div class="case-content">
      <section id="case-result" role="tabpanel" aria-labelledby="case-result-tab" tabindex="0">
        <div class="case-result-layout"><div class="case-result-media">${sheetMedia(w)}${w.musicCredit ? `<p class="ak-sheet-meta">${esc(w.musicCredit)}</p>` : ''}</div><div class="case-result-copy"><h3>${w.layout === 'research' ? '연구 산출물' : '제작 결과'}</h3><p>${esc(w.outcome)}</p>
        ${w.results.length ? `<ul class="ak-res" aria-label="${esc(w.resultLabel || '게시 성과')}">${w.results.slice(0, 3).map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
        ${w.findings ? `<h3>확인한 점</h3><p>${esc(w.findings)}</p><p class="case-note">${esc(w.limitation)}</p>` : ''}
        ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">${esc(w.linkLabel || '원본 게시물 보기 ↗')}</a>` : ''}
        <button type="button" class="case-next" data-case-goto="purpose">만든 목적과 역할 보기 →</button></div></div>
      </section>
      <section id="case-purpose" role="tabpanel" aria-labelledby="case-purpose-tab" tabindex="0" hidden>
        <div class="case-purpose-grid"><div><h3>만든 목적</h3><p class="case-purpose-text">${esc(w.goal)}</p>${w.conceptBeats ? `<details class="case-step"><summary>기획 의도 · 세 공간의 흐름</summary><ol class="ak-steps">${w.conceptBeats.map(p => `<li>${esc(p)}</li>`).join('')}</ol></details>` : ''}</div><div><h3>담당 역할</h3><p>${esc(w.role)}</p>${w.tools.length ? `<h3>사용 도구</h3><p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p>` : ''}</div></div>
        <button type="button" class="case-next" data-case-goto="process">${w.layout === 'research' ? '연구' : '제작'} 과정 보기 →</button>
      </section>
      <section id="case-process" role="tabpanel" aria-labelledby="case-process-tab" tabindex="0" hidden>
        <p class="case-process-intro">${esc(briefs[w.id].process)}<br><span>각 단계를 눌러 설명과 작업 자료를 확인하세요.</span></p>
        ${w.comparison ? `<details class="case-step" name="case-evidence"><summary>가이드와 완성 영상 동시 비교</summary>${sheetComparison(w)}</details>` : ''}
        ${w.process.map((p,i) => { const media=w.processStepMedia?.[i]; return `<details class="case-step" name="case-evidence"><summary><span>${String(i+1).padStart(2,'0')}</span>${esc(stepTitles[w.id]?.[i] || `단계 ${i+1}`)}</summary><div class="case-step-body"><p>${esc(p)}</p>${media ? `<figure><a href="${esc(media.src)}" target="_blank" rel="noopener"><img src="${esc(media.src)}" alt="${esc(media.cap)}" loading="lazy"></a><figcaption>${esc(media.cap)}</figcaption></figure>` : ''}</div></details>`; }).join('')}
        ${w.processMedia.length ? `<details class="case-step" name="case-evidence"><summary>작업 화면 · 레퍼런스 ${w.processMedia.length}장</summary>${sheetProcessMedia(w)}</details>` : ''}
        <button type="button" class="case-next" data-case-goto="result">작품과 결과 다시 보기 →</button>
      </section>
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
  $('.case-close', panel).focus();
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

function selectCaseTab(key, focus = false) {
  panel.querySelectorAll('[data-case-tab]').forEach(tab => {
    const active = tab.dataset.caseTab === key;
    tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  panel.querySelectorAll('[role="tabpanel"]').forEach(p => p.hidden = p.id !== `case-${key}`);
  panel.querySelectorAll('video').forEach(v => v.pause());
  panel.querySelector('.case-content').scrollTop = 0;
}
panel.addEventListener('click', e => {
  const tab = e.target.closest('[data-case-tab], [data-case-goto]');
  if (tab) selectCaseTab(tab.dataset.caseTab || tab.dataset.caseGoto, true);
  const doc = e.target.closest('[data-document]');
  if (doc) {
    panel.querySelectorAll('[data-document]').forEach(b => b.setAttribute('aria-pressed', String(b === doc)));
    panel.querySelectorAll('[data-document-page]').forEach(p => p.hidden = p.dataset.documentPage !== doc.dataset.document);
  }
});
panel.addEventListener('keydown', e => {
  const tab = e.target.closest('[data-case-tab]');
  if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
  e.preventDefault();
  const tabs = [...panel.querySelectorAll('[data-case-tab]')];
  const index = tabs.indexOf(tab);
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length-1 : (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  selectCaseTab(tabs[next].dataset.caseTab, true);
});
panel.addEventListener('toggle', e => {
  if (e.target.matches('.case-step') && !e.target.open) e.target.querySelectorAll('video').forEach(v => v.pause());
}, true);

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

const routeAliases = { featured: 'selected', top: 'hero', work: 'archive', images: 'archive', motion: 'archive', tools: 'archive', about: 'stack', cinematic: 'archive', artfilm: 'archive', commercial: 'archive', liveaction: 'archive', subtitle: 'archive', 'ai-image': 'archive', photography: 'archive', dashboard: 'archive' };
window.akNavigate = (id, writeHistory = true) => {
  const route = routeAliases[id] || id || 'selected';
  const active = ['selected','research','workflows','archive','stack','hero'].includes(route) ? route : 'selected';
  closeSheet();
  for (const [key, element] of Object.entries({ selected: 'featured', research: 'research', workflows: 'workflows', archive: 'archive', stack: 'stack', hero: 'hero' })) document.getElementById(element).hidden = key !== active;
  $('#portfolio-intro').hidden = active !== 'selected';
  document.querySelectorAll('[data-nav]').forEach(a => { a.classList.toggle('is-active', a.dataset.nav === active); if (a.dataset.nav === active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  document.querySelectorAll('main video').forEach(v => v.pause());
  if (active === 'archive') { setArchive(true); relayout(); }
  document.body.dataset.portfolioView = active;
  document.body.classList.remove('menu-open');
  $('#menu-toggle').setAttribute('aria-expanded','false');
  if (writeHistory && location.hash !== `#${active}`) history.pushState(null, '', `#${active}`);
  window.scrollTo({ top: 0, behavior: 'instant' });
  window.dispatchEvent(new Event('resize'));
};
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-portfolio-route], a.skip-link, #hero a[href="#selected"]');
  if (!a) return;
  e.preventDefault(); window.akNavigate(a.dataset.portfolioRoute || 'selected');
});
history.scrollRestoration = 'manual';
window.addEventListener('load', () => requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' })));
window.addEventListener('popstate', () => window.akNavigate(location.hash.slice(1), false));
window.addEventListener('hashchange', () => window.akNavigate(location.hash.slice(1), false));

renderWorks();
watchCardVideos();
})();
