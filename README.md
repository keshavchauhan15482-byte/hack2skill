# Krishna Security Decision Assistant — PromptWars prototype

**Proposed vertical:** cybersecurity assistance for students, small-business owners and IT administrators. The exact organizer-provided vertical has not yet been confirmed; do not represent this choice as an official challenge category.

## User problem and logic
People facing suspicious messages, account concerns or website disruption need safe, understandable next steps matched to their situation. The assistant uses four explicit inputs: persona, scenario, reported evidence and available support. The decision engine gives a priority, ordered actions, and a reason for every action; changes in context change the output. No user data is transmitted or persisted. No automated containment, external AI model, or live attack diagnosis is claimed.

## Run
`python3 -m http.server 8000 --directory promptwars` then open http://localhost:8000/. The app is dependency-free. `node --test promptwars/decision-engine.test.cjs` checks all 90 combinations, invalid inputs, and context sensitivity.

## Accessibility
Semantic landmarks, skip link, labeled native controls, keyboard focus indicators, live status, responsive layout, reduced-motion support and text-based priorities. Automated WCAG conformance is not claimed.

## Assumptions
Users report their own evidence; priority is not a calibrated threat score. Actions are advisory and restricted to authorized systems. The separate existing cybersecurity research project is retained below as supporting context; its deployed dashboard is not the same as the new assistant.

---

# Krishna Defence System — lightweight submission

Live demo: https://krishna-defence-system.vercel.app/

Compact review snapshot of the original project at commit [c92720929b37579520452c144afe7a0664280dd7](https://github.com/keshavchauhan15482-byte/defencekrishna/commit/c92720929b37579520452c144afe7a0664280dd7). The live deployment remains connected to the original project, not this submission repository.

## Architecture
Vercel frontend and bounded HTTP request guards; authenticated Render Python telemetry relay; PostgreSQL storage; Garuda GNN/LSTM packet forecasting research; Arjuna known-input protection; Krishna historical structural inspection; Sudarshana restricted-resource checks and independent signed-scope tooling.

## Run and review
- `node deployment/vercel/build_site.mjs` prepares the frontend in public/.
- `npm ci` installs Node dependencies for local research and tests.
- See `vercel.json`, `render.yaml`, `deployment/`, `api/`, `garuda_v3/` and `docs/release/`.
- The compact Garuda model bundles (calibrated_host_v6 and residual_run) are retained. Full training datasets, large archived experiments, generated backups and full integration workflow are excluded. Retrieve original inputs and provenance from the pinned original commit, subject to dataset licenses, before reproducing full training or running dataset-dependent tests.
- Configure deployment credentials privately; no production credentials should be copied into this repository.

## Deployment boundary
Hosted HTTP monitoring and bounded request guards work without a local Mac. Packet forecasts remain separate, shadow-only and require genuine supported captures. No verified live pre-compromise warning, automatic containment or full-site managed OWASP enforcement is claimed. Independent signed approvals are required for scoped containment. See docs/release/OPERATOR_APPROVAL_AND_FORECAST_READINESS.md.
