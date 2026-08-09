# ABTalks Redesign — AI Prompts

This document contains the prompts used during the development of the ABTalks redesign project.

The project was developed with AI-assisted coding using Codex. The prompts below document the major development, refinement, testing, and validation tasks performed during the project.

---

## 1. Project Setup

Prompt:

Create a React + Vite project for the ABTalks 60-day coding challenge redesign hackathon.

The application should be mobile-first and optimized for a 390px viewport.

Required routes:

- /
- /dashboard
- /day/12

Use React Router for navigation.

---

## 2. Landing Page

Prompt:

Build the ABTalks landing page for a 60-day coding challenge aimed at Indian college students.

The landing page should include:

- Hero section
- How It Works
- Why ABTalks
- Challenge Tracks
- Social Proof
- Final CTA
- Footer

The design should be mobile-first and optimized for a 390px viewport.

---

## 3. Student Dashboard

Prompt:

Create the Student Dashboard for the ABTalks 60-day coding challenge.

The dashboard should display:

- Current streak
- Today's task
- Challenge progress
- Overall completion
- Student standing
- Achievements

Use reusable components inside:

src/components/dashboard/

Use centralized mock data from:

src/data/mockData.json

---

## 4. Challenge Day

Prompt:

Create the Challenge Day 12 experience.

The page should allow the student to:

- Read the task
- Understand what needs to be built
- View expected output
- Follow the build checklist
- View guidance
- Submit mocked GitHub proof
- Submit mocked LinkedIn proof
- Complete the challenge after both proofs are submitted

Use reusable components inside:

src/components/challenge/

---

## 5. Challenge Completion

Prompt:

Implement the Challenge Day completion flow.

When both GitHub proof and LinkedIn proof are submitted:

- Mark the challenge as completed
- Update the streak from 12 to 13
- Update progress from 20% to 22%
- Update the dashboard
- Persist the state using browser localStorage

Create/use:

src/utils/challengeDayState.js

---

## 6. Centralized Mock Data

Prompt:

Move the application's static/mock data into:

src/data/mockData.json

Use this centralized data for both the Student Dashboard and Challenge Day experience.

Avoid duplicating the same data directly inside individual pages.

---

## 7. Responsive Design

Prompt:

Review the entire application for mobile responsiveness.

The primary evaluation viewport is 390px wide.

Ensure:

- No horizontal scrolling
- Buttons remain inside the viewport
- Text does not overflow
- Cards remain within the viewport
- Touch targets are usable
- Typography scales appropriately

Desktop should remain responsive as a secondary layout.

---

## 8. Final Testing

Prompt:

Review the complete ABTalks redesign project.

Verify:

- All required routes work
- Dashboard navigation works
- Challenge Day flow works
- GitHub proof mock works
- LinkedIn proof mock works
- Challenge completion works
- LocalStorage state persists correctly
- Mobile layout works at 390px
- Production build succeeds with npm run build

Fix only issues that are necessary for the above requirements.

---

## 9. 390px Mobile Responsiveness Fix

### Goal

Fix the responsive layout so the ABTalks application works correctly at the required 390px mobile viewport.

### Instructions Given to Codex

- Inspect the existing UI before making changes.
- Fix the layout specifically for a 390px viewport.
- Prevent horizontal overflow and content from extending outside the viewport.
- Ensure cards, buttons, text, inputs, navigation, and sections fit within the screen.
- Preserve the existing UI design, styling, layout direction, and functionality.
- Do not redesign the application.
- Do not remove or change existing features.
- Do not change the required routes.
- Make the smallest necessary CSS/layout changes.
- Verify the result using the Vite development server and Chrome DevTools at approximately 390px × 844px.

### Validation

- Tested the application locally.
- Checked the required screens at 390px width.
- Verified that the UI remains usable without horizontal scrolling or clipped content.

---

## 10. Edge-Case Handling

### Goal

Implement the real-world student states required by the ABTalks hackathon without affecting the normal student journey.

### Edge Cases

#### New Student

Handle a student who is starting the challenge:

- 0-day streak
- No completed challenge days
- No achievements
- Clear first-day experience
- Clear action to begin the challenge

#### Missed Challenge Day

Handle a student who has missed a challenge day:

- Existing challenge progress remains visible.
- Clearly communicate that a day was missed.
- Explain what the student should do next.
- Allow the student to continue the challenge.

#### Empty / Incomplete Profile

Handle a student whose profile information is missing or incomplete:

- Clearly communicate that the profile needs attention.
- Provide a clear next action.
- Preserve the normal dashboard experience.

### Implementation Requirements

- Reuse the existing mock-data architecture.
- Reuse existing state and components where possible.
- Keep the three required routes unchanged:
  - /
  - /dashboard
  - /day/12
- Do not add authentication, backend services, production databases, or real external APIs.
- Do not break the existing GitHub/LinkedIn proof submission.
- Do not change existing streak/progress calculations unnecessarily.

### Validation

Test all edge cases locally and then re-test the normal student flow to ensure existing functionality still works.

---

## 11. Thoughtful UX Improvement — Next Best Action

### Goal

Implement at least one thoughtful idea that improves the student experience, as required by the hackathon.

### Feature

Add a contextual **Next Best Action** section to the Student Dashboard.

The action should change according to the student's current state.

### New Student

Display:

> Start your 60-day journey

Supporting message:

> Your first challenge is waiting for you.

CTA:

> Start Day 1

### Normal Active Student

Display:

> Today's goal

Supporting message:

> Complete Day 12 and submit both proofs.

CTA:

> Continue Day 12

Navigate to:

/day/12

### Missed Day

Display:

> Get back on track

Supporting message:

> You missed Day 11. Don't worry—continue today's challenge and rebuild your streak.

CTA:

> Continue Challenge

### Incomplete Profile

Display:

> Complete your profile

Supporting message:

> Add your information so your learning journey is ready to be shared.

CTA:

> Complete Profile

### Implementation Requirements

- Reuse the existing student-state logic.
- Reuse existing mock data and routing.
- Do not create duplicate state-management systems.
- Do not redesign the existing Dashboard.
- Match the existing UI style.
- Keep the feature mobile-first.
- Ensure it works at 390px.
- Do not affect existing challenge, streak, progress, GitHub, or LinkedIn functionality.

### Validation

Test each student state and verify that the correct action is displayed and works correctly.

---

## 12. UI Polish and Visual Refinement

### Goal

Perform a final visual refinement pass without changing the application's existing design direction or functionality.

### Instructions Given to Codex

- Review the Landing Page, Dashboard, and Challenge Day screens.
- Check visual consistency across components.
- Refine spacing and alignment where necessary.
- Check button sizing and placement.
- Check text readability and hierarchy.
- Improve consistency between reusable components.
- Preserve the existing colors, typography, visual style, and overall layout.
- Do not introduce unnecessary redesigns.
- Do not remove existing functionality.
- Do not add unnecessary dependencies.
- Keep the interface mobile-first.
- Ensure visual changes do not introduce horizontal overflow at 390px.

### Validation

- Run the application locally.
- Review all three required screens.
- Test the final UI at 390px × 844px.
- Verify that existing functionality continues to work.

---

## 13. Final Route Testing

### Goal

Perform final testing of all three routes required by the ABTalks hackathon.

### Required Routes

/
 /dashboard
/day/12

### Landing Page — /

Verify:

- Page loads correctly.
- Navigation works.
- Primary interactions work.
- Layout is responsive at 390px.
- No horizontal overflow exists.

### Student Dashboard — /dashboard

Verify:

- Dashboard loads correctly.
- Student states work correctly.
- Next Best Action displays the correct action.
- Streak and progress are displayed correctly.
- Layout works at 390px.
- No horizontal overflow exists.

### Challenge Day — /day/12

Verify:

- Day 12 content loads correctly.
- GitHub proof submission works.
- LinkedIn proof submission works.
- Completion state works.
- Streak and progress update correctly.
- Layout works at 390px.
- No horizontal overflow exists.

### Cross-Route Validation

- Verify navigation between the required screens.
- Verify existing state is preserved where expected.
- Verify edge cases do not break the normal student flow.
- Verify the Next Best Action does not interfere with existing functionality.
- Verify all three routes remain accessible.

### Final Build

Run:

npm run build

Confirm that the production build completes successfully without errors.

### Final Requirement

Do not make unrelated changes during final testing. If an issue is found, fix only the issue that affects the tested requirement and re-test the affected functionality.