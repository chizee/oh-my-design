# 스킬 산출물 품질 게이트

`npm run gate:quality` — 등록된 스킬 산출물마다 결정론적 검사기를 돌린다.
`npm run gate:quality:strict` — MISSING·STALE 도 실패로 센다(커버리지 감사용).

## 왜 있나

2.0.1 도그푸딩은 네 경로가 **「돌아간다」까지만** 확인했다. 결과물의 대비·뷰포트 이탈·브랜드 일치는
사람이 따로 봐야 했고, T3-3 레인 A에서 같은 종류의 결함(합의 결함 19건 중 11건이 CONTRAST)이 반복됐다.
이 게이트는 그 확인을 기계에 맡긴다. 2026-09-29부터는 **태그 전에 오너 기계에서 돌리는 단계**다 — CI의 `npm publish` 가 돌리는 `prepublishOnly` 에서는 뺐다(아래 「현재 상태」).

## 판정

| 상태 | 뜻 | 게이트 |
|---|---|---|
| PASS | 등록된 검사 전부 통과 | 통과 |
| FAIL | 검사기가 결함을 냈다 | **막는다** |
| STALE | 산출물이 그 스킬 파일보다 오래됐다 — 지금 통과해도 지금 스킬을 검증한 게 아니다 | `--strict` 에서만 막는다 |
| MISSING | 그 칸의 산출물이 아직 없다 — 커버리지 구멍 | `--strict` 에서만 막는다 |

MISSING 을 목록에서 빼지 않는다. **있는 것만 검사해 통과시키면 커버리지 부족이 숨는다.**

## 픽스처 추가·갱신

1. `test-v2/content-runs/fixtures.json` 의 `fixtures[]` 에 칸을 적는다(id·skill·brand·artifact·checks).
2. 해당 스킬을 실제로 돌려 `artifact` 경로에 산출물을 만든다. 스킬을 고쳤으면 다시 만든다 — STALE 이 그 신호다.
3. `sourceSkills` 는 그 스킬의 「고치면 픽스처가 낡는」 파일 목록이다. 규칙을 새 파일로 옮기면 여기도 고친다.

## 픽스처의 출처 규칙 (2026-09-03 정정)

픽스처는 **배포되는 스킬**로 만든 산출물이어야 한다. 최초 등록 때 autopilot 두 칸이 동결 벤치 팩
(`benchmarks/…/competitor-skills-2.0/omd-autopilot-v2/`, 배포 스킬과 584줄 차이)으로 만든 산출물이었다 —
그 칸이 실패해도 배포 스킬의 실패가 아니고, 통과해도 배포 스킬의 통과가 아니다. `test-v2/content-runs/gate/`
아래에 배포 스킬로 다시 만들어 교체했다. 각 칸의 `provenance` 가 어떤 프롬프트로 만들어졌는지 밝힌다.

## 현재 상태 (2026-09-29 — 로컬 pre-tag 단계, 2.0.2 는 오너 waiver)

**어디서 도나.** 태그를 밀기 전에 오너 기계에서 `npm run gate:quality:strict` 를 돌린다. `prepublishOnly` 에서는 뺐다 —
CI는 이 게이트를 돌릴 수 없다. 픽스처 산출물은 커스터디 정책으로 gitignore 돼 있어(`test-v2/content-runs/.gitignore`,
루트 `.gitignore` 의 `.omd/`) CI 체크아웃에서는 여섯 칸 전부 MISSING 이고, receipt 는 만든 기계의 절대 경로를 `root` 로
묶어서(`quality-gate.mjs` 의 `receipt root mismatch`) 다른 체크아웃에서는 검증되지 않는다. 판정 규칙과 `--strict` 의 뜻은
그대로다 — 바뀐 것은 강제하는 자리뿐이다.

**2026-09-29 로컬 결과** (오너 기계, strict): **BLOCKED** — FAIL 3 · UNVERIFIED 2 · REVIEW_PENDING 1.

| 픽스처 | 상태 | 사유 |
|---|---|---|
| `landing/stripe` | FAIL | landing-integrity — 깊이 신호 0 · 메시/그레인 0 · `::selection` 미지정. receipt 없음 |
| `landing/toss` | FAIL | landing-integrity — 잉크 12% 미만 화면 5/12 · 폴드 미디어 1개 · 깊이 신호 0. receipt 없음 |
| `landing/karrot` | FAIL | landing-integrity — 잉크 12% 미만 5/10 · 깊이 신호 0 · 메시/그레인 0. receipt STALE(스킬·체커·레퍼런스 바이트 변경) |
| `autopilot/stripe` | UNVERIFIED | receipt 없음. 라이브 render·contrast 는 PASS |
| `autopilot/toss` | UNVERIFIED | receipt 없음. 라이브 render·contrast 는 PASS |
| `autopilot/karrot` | REVIEW_PENDING | receipt 유효. style 항목(source-contract-conflicts · owner-visual-adoption) 대기 |

**2.0.2 는 이 게이트가 green 이 아닌 채 오너 waiver 로 나간다.** landing 세 칸은 `fixtures.json` 의 `exclusions` 에
오너 결정 D4(2026-09-29, 「integrity FAIL; receipts to regenerate」)로 기록돼 있고, 게이트가 매 실행마다 그 기록을 출력한다.
출력 전용이다 — 그 칸들도 그대로 검사·집계되고 판정은 BLOCKED 그대로다. autopilot 세 칸도 green 이 아니다.
다음 릴리스 전에 receipt 를 다시 만든다. 산출물을 만든 프롬프트·체인은 `gate/runs/*.txt`, `landing/runs/*.txt` 에 추적돼 있다.
