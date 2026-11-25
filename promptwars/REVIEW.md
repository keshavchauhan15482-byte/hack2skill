# Challenge requirements and evidence

The supplied PromptWars instructions require a smart dynamic assistant, logical decision making based on user context, real-world usability, clean maintainable code, a chosen vertical and persona. The official list of verticals and exact problem statement were not supplied and remain unverified. This implementation therefore treats cybersecurity guidance as a proposed vertical, not an asserted organizer-approved category.

| Supplied requirement | Implementation | Review procedure |
|---|---|---|
| Dynamic assistant | Action plan updates on context changes; examples and downloadable plan | Generate a sample then change evidence or role |
| Logical decisions | Deterministic role/scenario/evidence/support rules with reasons | Compare student, owner, and admin examples |
| Real-world usability | Safe, prioritized next steps and explicit follow-up | Review and save a plan; no credentials required |
| Maintainability | Separate pure decision engine, view, CSS and tests | Run node --test promptwars/decision-engine.test.cjs |
| Accessibility | Native labels, landmarks, keyboard focus, live status, responsive layout, reduced motion, forced colors, text priorities | Manual keyboard and zoom checks; screen-reader and automated audit still needed |

## Manual review checklist
- Tab to skip link and activate; focus should reach main.
- Navigate all four native selects, example buttons and generate/reset controls with keyboard.
- Generate a plan: focus should move to result heading and status should announce priority.
- Change context: result should update without stealing focus.
- Reset: old result and save action should clear.
- At 320 CSS px width and 200% browser zoom, controls should remain usable without horizontal scrolling.
- Enable reduced motion and forced colors. Verify visible focus and text.
- Save action plan: verify the text includes only the displayed plan and selected context.

No generative model, full WCAG certification, or independently verified compromise is claimed. The separate original research dashboard is not this submission assistant.
