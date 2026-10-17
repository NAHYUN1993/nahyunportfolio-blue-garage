/* ============================================================
   Blue portfolio — project evidence and accessible case reader
   3D → 자동화 → 캐릭터 연구 → 콘텐츠 순서로 작업을 소개한다.
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
  "conceptBeats": [
    "수영장 — 정장 차림의 인물이 분홍색 회전식 전화기를 너무 당연하게 다룹니다. 장소·복장·행동의 불일치로 낯선 일상과 캐릭터의 태연함을 보여줍니다.",
    "붉은 코트 — 이미 선이 그어진 공간에 직접 원을 그립니다. 바깥의 규칙뿐 아니라 자신이 만드는 경계도 있다는 양면성을 담고, 손을 털며 다음 장면으로 넘어갑니다.",
    "작업실 — 겹친 반투명 천 사이에서 얼굴과 시선이 드러납니다. 마지막 “그다음은?”은 이후를 스스로 선택하려는 태도이자, 앞으로 공개될 아티스트의 이야기를 기다리게 하는 질문입니다."
  ],
  "process": [
    "공간 기획 · Midjourney에서 blue anime, ghost, wes anderson, moodboard #34 등의 무드보드를 단독·조합으로 탐색하고 수영장·붉은 코트·반투명 천이 있는 작업실을 선정했습니다. 수영장에는 색감을 맞춘 분홍색 회전식 전화기를 배치했습니다.",
    "캐릭터 레퍼런스 · 안면 계측 연구에 사용한 캐릭터 B를 출발점으로 얼굴·헤어·의상을 정리한 캐릭터 시트를 적용했습니다. 인물 시트와 공간 이미지를 별도 레퍼런스로 제공해 같은 인물이 서로 다른 장소에 등장하도록 설계했습니다.",
    "R2V 연출 설계 · 인물·공간 정의, 유지할 특징, 샷별 시간, 행동, 구도, 카메라 움직임과 사운드를 나눠 프롬프트를 작성했습니다. 10초 단위로 생성하고, 수중 시점·코트 부감·천 사이의 시선 등 공간별로 다른 구도를 배치했습니다.",
    "드래프트 검토 · Seedance 2.5 Draft 결과에서 얼굴과 의상, 공간의 거리감, 행동의 의미와 전환을 검토했습니다. 작업실 수정안은 원본과 비교한 뒤 원본을 선택했고, 채택한 드래프트 ID로 1080p 파이널을 출력했습니다. 수영장은 Higgsfield, 코트·작업실은 Comfy Cloud에서 제작했습니다.",
    "최종 편집 · 수영장의 소매 정리와 분필 줍는 장면을 삭제해 수중 샷에서 선 긋기로 바로 연결했습니다. 코트는 손을 털고 뻗기 직전에 잘라 작업실로 전환했습니다. 원본 대사·현장음을 살리고 엔딩 타이틀을 제거해 21.5초로 압축했습니다."
  ],
  "results": [],
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
    processScreens: [{ src: 'images/process/comfyui-depthpose-workflow.webp', cap: 'ComfyUI 작업 화면 · 안무 영상에서 Depth Anything V2와 DWPose로 깊이·뼈대를 추출하고 합성' }],
    poster: 'images/posters/onetake.jpg',
    goal: '원하는 카메라 경로와 안무가 함께 반영되는 AI 퍼포먼스 영상을 만들고자 했습니다. Blender에서 카메라 무빙을 직접 지정하고, depth·pose 가이드와 멀티 레퍼런스로 움직임과 캐릭터 일관성을 제어했습니다.',
    process: [
      'Blender에서 16mm 광각 카메라의 접근·후퇴 경로와 타이밍을 직접 지정하고, 세트와 함께 프리비즈로 제작',
      'ComfyUI에서 DWPose로 뼈대, Depth Anything V2로 깊이를 추출한 뒤, 프리비즈 카메라의 깊이 패스 안에 원근을 맞춰 합성 · 카메라 무빙과 안무를 하나의 레퍼런스 영상으로 제어',
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
    tools: ['Blender', 'ComfyUI', 'Depth Anything V2', 'DWPose', 'Nano Banana 2', 'Seedance 2.5', 'Premiere Pro']
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
  "line": "장면마다 감정이 달라져도 같은 캐릭터의 표정으로 이어지도록, 감정·강도별 지시와 선택 기준을 정리",
  "role": "표정 비교 실험 · AU·강도 프롬프트 설계 · 결과 선별 · 라이브러리 구성",
  "goal": "앞으로 AI 캐릭터 영상에서 감정과 강도가 달라져도 같은 인물의 표정으로 이어지도록, 표정을 지시하고 선별할 기준을 마련하는 연구입니다. 감정명과 얼굴 움직임 단위(AU)를 비교하고, 연기 의도에 맞는 표현과 선택 이유를 쌓아 다음 제작에 활용하고자 합니다.",
  "outcome": "표정 이미지 82장과 프롬프트·연기 의도·선별 이유를 웹 라이브러리로 정리",
  "process": [
    "감정명만 입력한 이미지와 FACS의 얼굴 움직임 단위(AU)를 함께 입력한 이미지를 비교했습니다.",
    "A–E 강도 변화와 두 감정의 조합, 감정이 다른 감정으로 넘어가는 경계 표현을 실험했습니다.",
    "82장을 자체 기준으로 제작 승인 55장, 조건부 11장, R&D 참고 16장으로 분류하고 선택 이유를 기록했습니다. 이후 제작에서 같은 감정과 강도를 다시 지시할 수 있도록 프롬프트와 선별 기준을 함께 남겼습니다."
  ],
  "findings": "FACS 지시가 모든 감정에서 더 좋은 결과를 만들지는 않았습니다. 테스트 2의 진심 어린 미소는 FACS 지시, 억지웃음은 감정명 지시 결과를 선택했습니다.",
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
  "line": "여러 장면에서 같은 얼굴을 유지하기 위해, 기준 얼굴의 비율과 레퍼런스 적용 조건을 비교·정리",
  "role": "안면 계측 · 조건별 생성 실험 · 유사도 비교 · 프롬프트·측정값 정리",
  "goal": "앞으로 같은 AI 캐릭터를 여러 장소·구도·장면에서 제작할 때 얼굴 일관성을 유지할 기준을 마련하는 연구입니다. 기준 얼굴의 특징과 비율을 스펙으로 정리하고, 이미지 레퍼런스와 함께 적용했을 때 어떤 조건이 인물 유지에 도움이 되는지 비교했습니다.",
  "outcome": "6개 모델의 얼굴 비교 이미지 69장, 모델별 프롬프트와 계측·유사도 기록 정리",
  "process": [
    "기준 얼굴의 특징과 비율을 계측하고 생성 지시로 사용할 스펙 문장을 작성했습니다.",
    "레퍼런스만 / 레퍼런스+스펙 / 스펙만 조건으로 비교했습니다. 6개 모델의 지원 조건에 따라 3개 장면에서 69장을 생성했습니다.",
    "ArcFace 코사인 유사도와 안면 계측, 비교 이미지를 함께 검토하고 모델별 결과와 프롬프트를 연결했습니다."
  ],
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
  "processMedia": [
    {
      "src": "images/workflows/edit-structure.webp",
      "cap": "Whisper Large 전사 → LLM 서사 구성 → EDL·FCPXML·자막·오디오 출력 구조",
      "wide": true
    },
    {
      "src": "images/workflows/edit-mapping.webp",
      "cap": "원본 발화와 편집 구간·선택 의도를 연결한 대응표",
      "wide": true
    }
  ],
  "galleryLayout": "documents",
  "id": "interview-workflow",
  "title": "인터뷰 편집 자동화",
  "tags": [
    "편집 워크플로우",
    "Premiere Pro"
  ],
  "meta": "Whisper Large 전사 → 서사 구성 → Premiere Pro MCP 연동",
  "line": "인터뷰의 핵심 발화로 이야기 흐름을 빠르게 구성하고, Premiere에서 수정 가능한 편집 초안까지 연결",
  "role": "영상의 서사 흐름·발화 선택 기준 설계 · AI 도구를 활용한 구현 · Premiere MCP 연동 · 편집 초안 검토",
  "goal": "긴 인터뷰에서 핵심 발화를 골라 영상의 도입·전개·마무리를 빠르게 구성하고, 편집 초안을 만드는 데 드는 공수와 시간을 줄이고자 했습니다. 발화의 의미와 원본 타임코드를 연결해 이야기 흐름을 먼저 잡고, Premiere에서 바로 검토·수정할 수 있는 타임라인으로 옮겼습니다.",
  "outcome": "18분 20초 인터뷰를 14개 구간으로 구성한 약 8분 편집 초안과 Premiere 타임라인·자막·오디오",
  "process": [
    "Whisper Large로 18분 20초 인터뷰를 전사하고, 282개 발화 구간의 텍스트와 타임코드를 추출했습니다. 필요한 내용을 찾을 수 있도록 원본 위치를 함께 보존했습니다.",
    "LLM Editorial Agent로 발화의 의미를 분석해 도입·문제·경험·비교·마무리의 흐름을 구성했습니다. 오프닝 발화와 문장의 끝맺음을 검토하고, 14개 구간을 재배열한 EDL 편집 초안으로 정리했습니다.",
    "FCPXML v4로 영상·오디오 트랙을 타임라인에 옮기고, 문장 단위 자막을 연결했습니다. FFmpeg로 오디오 레벨을 정리해 Premiere에서 수정할 수 있는 편집 초안을 구성했습니다.",
    "Premiere Pro MCP를 연결해 편집 명령을 실행하고, 타임라인·자막·오디오를 확인했습니다. 원본-편집본 대응표와 함께 컷의 순서와 길이를 검토했습니다."
  ],
  "gallery": [
    {
      "src": "images/workflows/edit-premiere-mcp.webp",
      "cap": "Premiere Pro 작업 화면 · MCP 패널과 편집 명령 실행 로그"
    },
    {
      "src": "images/workflows/edit-timeline.webp",
      "cap": "Premiere에서 확인한 편집 타임라인 · 영상·자막·오디오 트랙"
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
    "Whisper Large",
    "LLM Editorial Agent",
    "Premiere Pro MCP",
    "FCPXML v4",
    "FFmpeg"
  ],
  "toolRoles": [
    {
      "tool": "Whisper Large",
      "use": "음성 전사 · 발화별 텍스트와 타임코드 추출"
    },
    {
      "tool": "LLM Editorial Agent",
      "use": "발화 의미 분석 · 이야기 흐름 구성 · 편집 구간 선택"
    },
    {
      "tool": "FCPXML v4",
      "use": "영상·오디오 편집 구성을 Premiere 타임라인으로 전달"
    },
    {
      "tool": "Premiere Pro + MCP",
      "use": "편집 명령 실행 · 타임라인·자막 검토와 수정"
    },
    {
      "tool": "FFmpeg",
      "use": "오디오 처리 · 레벨 정리"
    }
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
    },
    {
      "src": "images/workflows/board-video-generation.webp",
      "cap": "영상 제작 · 컷별 모션 생성 결과 재생·검토 및 승인",
      "wide": true
    },
    {
      "src": "images/workflows/board-subtitle-generation.webp",
      "cap": "자막 제작 · 회사의 카피·타이포 규칙을 적용한 컷별 자막 시안 생성·검토",
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
  "meta": "회사 전용 AI 콘텐츠 제작 도구 · 스토리보드 → 이미지·영상 생성 → 자막 제작",
  "line": "회사의 콘텐츠 구성·연출·카피·자막 규칙을 반영해, 기획부터 이미지·영상·자막 제작까지 연결한 전용 제작판",
  "role": "제작 절차·검토 단계 설계 · AI 도구를 활용한 웹앱 구현 · 컷별 결과 선별",
  "goal": "AI 영상 제작에서는 프롬프트 입력과 참조 이미지 첨부를 반복해야 했습니다. 회사의 콘텐츠 구성과 연출, 제품 표현, 카피·자막 규칙을 정리해 제작 기준으로 반영했습니다. 이를 바탕으로 프롬프트 입력과 참조 이미지 첨부의 반복을 줄이고, 스토리보드부터 이미지·영상·자막 생성까지 연결하는 제작 자동화 시스템을 구축했습니다. 단계별 결과는 직접 검토하고 승인하도록 설계했습니다.",
  "outcome": "프롬프트 입력과 참조 이미지 첨부의 반복을 줄인 제작 자동화 시스템 구축",
  "process": [
    "회사의 콘텐츠 구성·연출·제품 표현·카피·자막 규칙을 정리하고, Antigravity 에이전트가 이 제작 기준을 읽어 컷별 연출·내레이션·사운드·프롬프트를 구성하도록 설계했습니다. 기획과 스토리보드는 다음 생성 전에 직접 검토합니다.",
    "Magnific MCP로 이미지·자막 생성을 연결하고, Flask로 만든 검토 화면에서 Z-Image · Nano Banana · GPT 2.5 · Seedream의 시안을 비교합니다. 컷마다 모델과 프롬프트를 바꾸고 승인하거나 재생성할 수 있습니다.",
    "선택한 이미지를 바탕으로 MiniMax · Kling · Seedance 영상 생성 단계로 이어지도록 구성했습니다. 컷별 영상을 재생해 움직임을 확인하고 승인·재생성을 결정합니다.",
    "영상 검토 후 회사의 카피·타이포 규칙에 맞춘 컷별 자막 시안을 생성하고 검토합니다. Python으로 결과 파일을 내려받고 FFmpeg로 조립하는 흐름을 연결했으며, 프로젝트 상태는 project.json으로 관리합니다."
  ],
  "gallery": [
    {
      "src": "images/workflows/board-output.webp",
      "cap": "컷별 영상 생성 결과와 검토·승인 화면"
    }
  ],
  "galleryCaption": "제작 자동화 시스템 · 컷별 생성 결과 검토·승인",
  "previewImages": [
    {
      "src": "images/workflows/board-review.webp",
      "cap": "AI 제작판의 이미지 비교 및 승인 화면"
    }
  ],
  "previewType": "screen",
  "tools": [
    "Antigravity",
    "Magnific MCP",
    "Flask",
    "Z-Image · Nano Banana · GPT 2.5 · Seedream",
    "MiniMax · Kling · Seedance",
    "Python · FFmpeg"
  ],
  "toolRoles": [
    {
      "tool": "Antigravity",
      "use": "제작 규칙을 읽고 단계별 생성 작업을 호출하는 에이전트"
    },
    {
      "tool": "Magnific MCP",
      "use": "이미지·영상·음성·음악 생성 도구 연동"
    },
    {
      "tool": "Flask",
      "use": "스토리보드 확인 · 시안 승인·반려 · 프롬프트 수정 화면"
    },
    {
      "tool": "Z-Image · Nano Banana · GPT 2.5 · Seedream",
      "use": "컷별 이미지·자막 시안 생성과 비교"
    },
    {
      "tool": "MiniMax · Kling · Seedance",
      "use": "승인한 이미지에서 영상 생성"
    },
    {
      "tool": "Python · FFmpeg",
      "use": "결과 파일 다운로드 · 영상 조립"
    }
  ]
},
  {
    id: 'lg-youth',
    layout: 'tall',
    tags: ['공모전', 'AI 숏폼'],
    title: '가장 나다운 순간',
    meta: 'LG유플러스 유쓰 AI 쇼츠 페스티벌 출품작 · 세로 숏폼',
    line: '상반된 취향을 가진 인물의 성격을 셀피 시점과 짧은 반전으로 표현',
    role: '콘셉트 기획 · 인물 이미지 생성 · 셀피 시점 연출 · AI 영상 제작',
    outcome: 'LG유플러스 유쓰 AI 쇼츠 페스티벌 우수상 수상',
    video: 'videos/lg-youth-festival.mp4',
    poster: 'images/posters/lg-youth-festival.jpg',
    goal: 'LG유플러스 유쓰 AI 쇼츠 페스티벌의 ‘나다움’ 주제에 맞춰 제출한 작품입니다. 상반된 취향과 서툰 순간들을 일상적인 셀피 시점으로 담고, ‘무너지면 주워 먹는 사람’이라는 태도로 나다움을 표현했습니다.',
    process: [
      '‘나다움’에는 정해진 답이 없어 제작보다 기획에 더 많은 시간을 썼습니다. 좋아하는 것과 실제 행동이 어긋나는 순간들을 돌아보고, 그 모순과 서툶을 대하는 태도를 이야기의 중심으로 잡았습니다.',
      '주최 브랜드인 LG유플러스 유쓰와 ‘심플리 유플러스’ 슬로건, 취향과 일상을 담으라는 부문 설명을 함께 살폈습니다. 기술을 과시하는 화려한 연출을 덜어내고, 일상적이고 정서적인 톤을 선택했습니다.',
      'ChatGPT로 이미지 프롬프트를 정리하고 Higgsfield Soul로 인물 이미지 생성',
      '화면 밖 팔의 방향과 시선으로 셀피 시점을 구성하고, 인물의 외형과 스타일을 장면의 공통 기준으로 사용',
      'Kling과 Seedance 2.0으로 영상화하고 컷 전환과 카메라 무빙에 변화를 주어 짧은 이야기로 완성'
    ],
    results: [{ n: '우수상', label: 'LG유플러스 유쓰 AI 쇼츠 페스티벌' }],
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
    line: '식집사의 하루를 따라 넘기며 제품 사용 장면을 만나는 파노라마 캐러셀',
    video: 'videos/pure-solution.mp4',
    poster: 'images/posters/pure-solution.jpg',
    slides: [1, 2, 3, 4].map(n => `images/pure-solution/slide-${n}.webp`),
    goal: '퓨어솔루션을 식집사의 일상 속 관리 루틴으로 소개하고자 했습니다. 한 장의 제품 광고보다 식물과 보내는 하루를 순서대로 보여주기 위해 캐러셀을 선택했습니다. 식물을 바라보고 돌보는 장면에서 제품을 사용하는 장면으로 이어지게 해, 생활 속에서 제품의 쓰임을 자연스럽게 발견하도록 구성했습니다.',
    process: [
      '첫 장은 식물과 함께하는 공간과 인물로 식집사의 일상을 소개하고, 다음 장에서는 물주기와 식물을 돌보는 행동으로 이어지도록 구성했습니다.',
      '돌보는 장면에 제품을 넣고 희석하는 사용 모습을 배치했습니다. 제품 설명만 따로 떼어내지 않고, 앞에서 보여준 식물 관리 행동의 다음 순서로 연결했습니다. 마지막에는 패키지와 브랜드를 보여주며 제품을 기억하도록 마무리했습니다.',
      '초록 배경과 인물·식물·오브제를 하나의 파노라마로 연결한 뒤 4장으로 나눴습니다. 장의 경계를 넘어 이어지는 요소가 다음 화면을 궁금하게 만들고, 넘기는 순서가 식집사의 하루와 제품 사용의 흐름이 되도록 배치했습니다.'
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
  'lg-youth': { purpose: 'LG유플러스 유쓰 공모전의 나다움 주제 표현', process: '셀피 시점 연출 → 인물 생성 → 숏폼 구성', result: 'LG유플러스 유쓰 AI 쇼츠 페스티벌 우수상' },
  'pure-solution': { purpose: '식집사의 일상에서 제품의 쓰임을 자연스럽게 소개', process: '인물·오브제가 이어지는 4장 파노라마 구성', result: '조회수 16,745 · 외부링크 클릭 422건' },
  'expression-lab': { purpose: '이후 제작에서 표정 일관성을 유지할 기준 마련', process: '감정명·FACS 비교 → 강도·복합 감정 실험', result: '표정 이미지 82장과 선별 이유 정리' },
  'identity-lab': { purpose: '여러 장면에서 같은 얼굴을 유지할 기준 마련', process: '얼굴 계측 → 스펙·레퍼런스 조합 → 모델 비교', result: '6개 모델 · 비교 이미지 69장' },
  'interview-workflow': { purpose: '이야기 흐름을 빠르게 구성하고 편집 공수 절감', process: 'Whisper 전사 → 서사 구성 → Premiere MCP', result: '14개 구간으로 구성한 약 8분 편집 초안' },
  'production-board': { purpose: '프롬프트 입력과 참조 이미지 첨부의 반복 감소', process: '회사 제작 기준 반영 → 단계별 생성 → 직접 검토·승인', result: '스토리보드·이미지·영상·자막 생성 자동화' }
};
/* 확인 가능한 제작 기록을 기준으로 개선 전후와 연구의 쓰임을 설명한다. */
const caseNotes = {
  'interview-workflow': {
    before: '원본을 재생하며 발화를 찾고, 구간 선택·순서 구성·타임라인 배치를 각각 진행해야 하는 편집 초안 단계.',
    after: '타임코드가 연결된 전사문에서 발화를 선택하고, 편집 구성·자막·오디오를 Premiere에서 수정 가능한 초안으로 연결했습니다.',
    proof: '편집 초안 구성 시간 약 60~70% 단축 · 약 4~5시간 → 약 1시간 30분',
    performance: { title: '인터뷰 편집 초안 구성 시간 약 60~70% 단축', description: '발화 선택·이야기 구성·타임라인 연결을 자동화해, 기존 약 4~5시간 걸리던 작업을 약 1시간 30분으로 줄였습니다.' },
    stats: [{ n: '282개', label: '원본 발화 구간' }, { n: '14개', label: '선택·재배열 구간' }, { n: '약 8분', label: '편집 초안 길이' }],
    scope: '초안 구성과 편집 도구 연동을 구현했습니다. 발화의 의미와 연결, 컷의 순서와 길이는 직접 검토합니다.'
  },
  'production-board': {
    before: 'AI 영상을 제작할 때마다 프롬프트를 입력하고 참조 이미지를 첨부하는 작업을 반복했습니다.',
    after: '회사의 콘텐츠 구성·연출·제품 표현·카피·자막 규칙을 제작 기준으로 반영해 반복 입력과 첨부를 줄이고, 스토리보드부터 이미지·영상·자막 생성까지 연결했습니다.',
    proof: '프롬프트 입력과 참조 이미지 첨부의 반복 감소',
    beforeLabel: '개선 전 · 반복 입력·첨부',
    afterLabel: '구현 후 · 제작 기준을 반영한 자동화',
    scope: '생성된 결과를 자동으로 확정하지 않고, 컷별 연출과 브랜드 적합성을 직접 확인해 승인합니다.'
  },
  'expression-lab': {
    proof: '표정 이미지 82장 · 프롬프트와 선택 이유 기록',
    application: '같은 미소라도 진심 어린 미소와 억지웃음은 지시 방식에 따라 결과가 달랐습니다. 감정과 강도에 맞는 표정을 골라 캐릭터의 연기 의도를 전달할 수 있도록 선택 기준을 정리했습니다.',
    scope: '정지 이미지의 표정 비교 결과이며, 영상에서의 표정 전환과 시간에 따른 일관성은 별도 검증이 필요합니다.'
  },
  'identity-lab': {
    proof: '6개 모델 · 비교 이미지 69장 · 얼굴 유사도와 계측 기록',
    application: '컷과 장소가 달라져도 같은 인물로 보이는 것이 캐릭터 영상의 연속성을 좌우합니다. 얼굴 스펙을 무조건 더하기보다, 모델별 비교 결과에 맞춰 이미지 레퍼런스와 스펙 조합을 고르는 기준을 마련했습니다.',
    findings: '이번 이미지 실험에서 GPT Image 2의 평균 얼굴 유사도는 레퍼런스만 사용했을 때 0.72, 스펙을 함께 사용했을 때 0.78이었습니다. Qwen은 0.80에서 0.74로 낮아져, 스펙 추가 효과가 모델마다 다름을 확인했습니다.',
    scope: '기준 얼굴 1명의 정지 이미지 비교 결과입니다. 영상 전 구간에서 얼굴이 유지되는지는 별도 검증이 필요합니다.'
  }
};
function changeMarkup(note) {
  return note?.before ? `<section class="case-change"><h3>개선 전후</h3><dl class="change-comparison"><div><dt>${esc(note.beforeLabel || '개선 전 · 나뉜 작업')}</dt><dd>${esc(note.before)}</dd></div><div><dt>${esc(note.afterLabel || '구현 후 · 연결한 작업')}</dt><dd>${esc(note.after)}</dd></div></dl></section>` : '';
}
const stepTitles = {
  'onetake': ['카메라 무빙 직접 지정', 'ComfyUI에서 뼈대·깊이 추출과 합성', '캐릭터 멀티 레퍼런스', '드래프트 검토와 최종 생성', '음원과 안무 싱크'],
  'out-of-frame': ['공간과 소품 기획', '캐릭터 레퍼런스', '장면별 행동·카메라 연출', '드래프트 검토와 최종 출력', '행동의 시작과 끝을 고르는 편집'],
  'lg-youth': ['나다움의 해석', '주제·브랜드에 맞춘 톤 결정', '인물 이미지 생성', '셀피 시점 연출', '영상 생성과 컷 구성'],
  'pure-solution': ['식집사의 하루로 시작', '관리 루틴 안에서 제품 노출', '캐러셀을 선택한 이유와 연결 방식'],
  'expression-lab': ['감정명과 FACS 비교', '강도·복합 감정 실험', '표정 선별과 라이브러리 정리'],
  'identity-lab': ['기준 얼굴 계측', '조건별·모델별 이미지 생성', '계측·유사도·이미지 비교'],
  'interview-workflow': ['음성 전사', '발화 선택과 편집 구성', '타임라인·자막·오디오 출력', 'Premiere Pro MCP 연동과 검토'],
  'production-board': ['회사 콘텐츠 규칙과 스토리보드', '이미지·자막 생성과 시안 비교', '영상 생성과 검토', '자막 제작과 결과 조립']
};

/* ── RENDER ── */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function cardMedia(w) {
  if (w.video) return `<video class="ak-card-video" src="${esc(w.video)}" poster="${esc(w.poster)}" muted loop playsinline preload="none" aria-hidden="true"></video>`;
  const images = w.previewImages || [{ src: w.thumb, cap: w.title }];
  return images.map(m => `<img src="${esc(m.src)}" alt="${esc(m.cap)}" loading="lazy">`).join('');
}
function briefMarkup(w) {
  const b = briefs[w.id];
  return `<dl class="work-brief"><div><dt>목적</dt><dd>${esc(b.purpose)}</dd></div><div><dt>과정</dt><dd>${esc(b.process)}</dd></div><div><dt>결과</dt><dd>${esc(b.result)}</dd></div></dl>`;
}
function renderWorks() {
  const labels = { onetake: 'Blender 3D 프리비즈 · 카메라·안무 제어', 'out-of-frame': '캐릭터의 태도와 분위기를 담은 AI 트레일러', 'interview-workflow': '음성 전사 · 편집 자동화', 'production-board': '생성 · 승인 · 재생성', 'expression-lab': '표정 · 감정 표현', 'identity-lab': '얼굴 일관성 · 모델 비교', 'lg-youth': '나다움을 셀피 시점으로 풀어낸 AI 숏폼', 'pure-solution': '식집사의 일상에 제품을 담은 AI 캐러셀' };
  const block = w => `<article class="project-card">
    <button class="ak-card-hit project-hit" type="button" data-ak-work="${w.id}" aria-label="${esc(w.title)} 자세히 보기">
      <div class="project-media${w.previewImages?.length > 1 ? ' project-media--pair' : ''}">${cardMedia(w)}${w.id === 'lg-youth' ? '<span class="project-badge">🏅 LG유플러스 유쓰 AI 쇼츠 페스티벌 · 우수상</span>' : ''}<span class="project-open" aria-hidden="true">${w.video ? '▶' : '↗'}</span></div>
      <div class="project-copy"><div><h3>${esc(w.title)}</h3><p class="project-category">${esc(labels[w.id])}</p></div><span class="project-link">자세히 ↗</span></div>
    </button>${caseNotes[w.id] ? `<div class="project-context">${caseNotes[w.id].proof ? `<p class="project-proof">${esc(caseNotes[w.id].proof)}</p>` : ''}${caseNotes[w.id].before ? `<p class="project-change"><b>개선 전</b>${esc(caseNotes[w.id].before)}</p><p class="project-change"><b>구현 후</b>${esc(caseNotes[w.id].after)}</p>` : ''}</div>` : ''}</article>`;
  const render = (target, ids) => { $(target).innerHTML = ids.map(id => block(works.find(w => w.id === id))).join(''); };
  render('#ak-grid', ['onetake', 'out-of-frame']);
  render('#ak-vertical', ['lg-youth', 'pure-solution']);
  const vertical = $('#ak-vertical');
  [{id:308,title:'분갈이흙',file:'potting-soil',caption:'공간별 식물 연출로 제품을 소개하는 AI 숏폼'},{id:304,title:'버그올킬',file:'bug-all-kill',caption:'젤리 캐릭터로 제품의 효과를 보여주는 AI 광고'}].forEach(w=>{
    vertical.insertAdjacentHTML('beforeend', `<article class="project-card"><button type="button" class="project-hit ak-card-hit" data-open="${w.id}" aria-label="${w.title} 자세히 보기"><div class="project-media"><video src="videos/${w.file}.mp4" poster="images/posters/${w.file}.jpg" muted loop playsinline preload="none" aria-hidden="true"></video><span class="project-open" aria-hidden="true">▶</span></div><div class="project-copy"><div><h3>${w.title}</h3><p class="project-category">${esc(w.caption)}</p></div><span class="project-link">자세히 ↗</span></div></button></article>`);
  });
  vertical.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>openModal(Number(button.dataset.open))));
  render('#ak-workflows', ['interview-workflow', 'production-board']);
  render('#ak-research', ['expression-lab', 'identity-lab']);
}

function watchCardVideos() {
  if (reduceMotion) return;
  document.querySelectorAll('.ak-card-hit').forEach(button => {
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
    return `<div class="ak-identity-gallery${w.galleryLayout === 'documents' ? ' ak-identity-gallery--documents' : ''}">${w.gallery.map(m => `<figure><a href="${m.src}" target="_blank" rel="noopener" aria-label="${esc(m.cap)} 크게 보기"><img src="${m.src}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}</div><p class="ak-media-caption">${esc(w.galleryCaption)}</p>`;
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
  const layout = 'horizontal';
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


function openSheet(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;
  const note = caseNotes[w.id];
  lastFocus = document.activeElement;
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());

  panel.className = 'ak-sheet-panel case-reader';
  panel.innerHTML = `
    <header class="case-heading"><div><p class="work-choice-kind">${esc(w.tags.join(' · '))}</p><h2 id="ak-sheet-title">${esc(w.title)}</h2><p>${esc(w.meta)}</p></div><button class="case-close" type="button" data-ak-close aria-label="닫고 목록으로 돌아가기">✕ <span>목록으로</span></button></header>
    <div class="case-tabs" role="tablist" aria-label="작품 상세 내용">
      <button type="button" role="tab" id="case-result-tab" aria-controls="case-result" aria-selected="true" data-case-tab="result">작품 소개</button>
      <button type="button" role="tab" id="case-process-tab" aria-controls="case-process" aria-selected="false" tabindex="-1" data-case-tab="process">${w.layout === 'research' ? '연구 과정' : '제작 과정'}</button>
    </div>
    <div class="case-content">
      <section id="case-result" role="tabpanel" aria-labelledby="case-result-tab" tabindex="0">
        <div class="case-result-layout${w.gallery ? ' case-result-layout--visual-first case-result-layout--summary-first' : ''}"><div class="case-result-media">${sheetMedia(w)}${w.musicCredit ? `<p class="ak-sheet-meta">${esc(w.musicCredit)}</p>` : ''}</div><div class="case-result-copy"><h3>제작 목적</h3><p>${esc(w.goal)}</p><h3>담당 역할</h3><p>${esc(w.role)}</p>
        ${note?.performance ? `<section class="case-outcome"><h3>${esc(note.performance.title)}</h3><p>${esc(note.performance.description)}</p></section>` : ''}
        ${changeMarkup(note)}
        ${w.outcome ? `<section class="case-outcome"><h3>${w.layout === 'research' ? '연구 산출물' : w.layout === 'workflow' ? '구현 결과' : '작업 결과'}</h3><p>${esc(w.outcome)}</p></section>` : ''}
        ${note?.stats ? `<ul class="ak-res" aria-label="구현 산출물">${note.stats.map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
        ${note?.application ? `<section class="case-application"><h3>영상 품질과의 연결</h3><p>${esc(note.application)}</p></section>` : ''}
        ${w.findings || note?.findings ? `<section class="case-findings"><h3>비교에서 확인한 점</h3><p>${esc(w.findings || note.findings)}</p></section>` : ''}
        ${note?.scope ? `<p class="case-scope">${esc(note.scope)}</p>` : ''}
        ${w.results.length ? `<ul class="ak-res" aria-label="${esc(w.resultLabel || '게시 성과')}">${w.results.slice(0, 3).map(r => `<li><b>${esc(r.n)}</b><span>${esc(r.label)}</span></li>`).join('')}</ul>` : ''}
        ${w.link ? `<a class="ak-ext" href="${w.link}" target="_blank" rel="noopener">${esc(w.linkLabel || '원본 게시물 보기 ↗')}</a>` : ''}
        </div></div>
      </section>
      <section id="case-process" role="tabpanel" aria-labelledby="case-process-tab" tabindex="0" hidden>
        ${(w.processScreens || []).map(m => `<figure class="case-work-screen"><a href="${esc(m.src)}" target="_blank" rel="noopener"><img src="${esc(m.src)}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('')}
        ${sheetProcessMedia(w)}
        ${sheetComparison(w)}
        <p class="case-process-intro">${esc(briefs[w.id].process)}</p>
        ${w.conceptBeats ? `<section class="case-concept"><h3>기획 의도 · 세 공간의 흐름</h3><ol class="ak-steps">${w.conceptBeats.map(p => `<li>${esc(p)}</li>`).join('')}</ol></section>` : ''}
        <div class="case-process-steps">${w.process.map((p,i) => `<section class="case-process-step"><h3><span>${String(i+1).padStart(2,'0')}</span>${esc(stepTitles[w.id]?.[i] || `단계 ${i+1}`)}</h3><p>${esc(p)}</p></section>`).join('')}</div>
        ${w.toolRoles ? `<section class="case-tool-section"><h3>도구별 역할</h3><dl class="case-tools">${w.toolRoles.map(t => `<div><dt>${esc(t.tool)}</dt><dd>${esc(t.use)}</dd></div>`).join('')}</dl></section>` : w.tools.length ? `<section class="case-tool-section"><h3>사용 툴</h3><p class="ak-chips">${w.tools.map(t => `<span>${esc(t)}</span>`).join('')}</p></section>` : ''}
      </section>
    </div>`;
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
  const tab = e.target.closest('[data-case-tab]');
  if (tab) selectCaseTab(tab.dataset.caseTab, true);
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
setArchive(true);
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

const routeAliases = { featured: 'selected', top: 'hero', work: 'archive', images: 'archive', motion: 'archive', tools: 'archive', about: 'about', stack: 'about', cinematic: 'archive', artfilm: 'archive', commercial: 'archive', liveaction: 'archive', subtitle: 'archive', 'ai-image': 'archive', photography: 'archive', dashboard: 'archive' };
function scrollToPortfolioRoute(route) {
  const target = document.getElementById(route);
  if (!target) return;
  const offset = document.querySelector('.site-header').offsetHeight + 24;
  window.scrollTo({ top: route === 'hero' ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset), behavior: reduceMotion ? 'instant' : 'smooth' });
}
window.akNavigate = (id, writeHistory = true, scroll = true) => {
  const route = routeAliases[id] || id || 'selected';
  closeSheet();
  document.querySelectorAll('[data-nav]').forEach(a => { a.classList.toggle('is-active', a.dataset.nav === route); if (a.dataset.nav === route) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  document.querySelectorAll('.ak-card-video').forEach(v => v.pause());
  if (route === 'archive') { setArchive(true); relayout(); }
  if (writeHistory && location.hash !== `#${route}`) history.pushState(null, '', `#${route}`);
  if (scroll) scrollToPortfolioRoute(route);
};
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-portfolio-route], a.skip-link');
  if (!a) return;
  e.preventDefault(); window.akNavigate(a.dataset.portfolioRoute || 'selected');
});
history.scrollRestoration = 'manual';
window.addEventListener('load', () => requestAnimationFrame(() => scrollToPortfolioRoute(routeAliases[location.hash.slice(1)] || location.hash.slice(1) || 'hero')));
window.addEventListener('popstate', () => window.akNavigate(location.hash.slice(1), false));
window.addEventListener('hashchange', () => window.akNavigate(location.hash.slice(1), false));

renderWorks();
watchCardVideos();
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  document.querySelectorAll('[data-nav]').forEach(a => {
    const active = a.dataset.nav === visible.target.id;
    a.classList.toggle('is-active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -65% 0px' });
['about', 'selected', 'workflows', 'research', 'archive'].forEach(id => sectionObserver.observe(document.getElementById(id)));
})();
