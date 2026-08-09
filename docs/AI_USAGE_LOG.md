# AI Usage Log

## Project Information

**Project:** ABTalks Redesign
**Hackathon:** 36-Hour Vibe Hackathon

## Purpose

This document records how AI tools were used during the development of the ABTalks redesign project.

AI was used as a development and learning assistant for project planning, implementation, debugging, responsive design, state management, and edge-case handling. AI-generated code was reviewed and manually tested before being committed to the repository.

---

## 1. Initial Project Planning

### AI Tool

ChatGPT

### Purpose

Used ChatGPT to understand and break down the ABTalks problem statement into smaller development milestones suitable for a beginner.

### Key Tasks

* Understood the three required routes:

  * `/`
  * `/dashboard`
  * `/day/12`
* Identified the required features for the landing page, dashboard, and challenge-day page.
* Planned a mobile-first approach for a 390px viewport.
* Identified that authentication, real accounts, production database, and real GitHub/LinkedIn APIs were out of scope.
* Planned the use of mocked data.

### Result

The high-level application flow and project scope were clarified before implementation.

---

## 2. Project Structure Planning

### AI Tool

ChatGPT

### Purpose

Used ChatGPT to understand how to organize the React project into manageable sections.

### Key Tasks

* Reviewed the existing Vite + React project structure.
* Identified the `src/components`, `src/pages`, and `src/utils` folders.
* Planned separate page components for:

  * Landing Page
  * Student Dashboard
  * Challenge Day
* Planned a future `src/data/mockData.json` file for mocked student and challenge information.

### Result

The codebase layout was organized around reusable components, route-level pages, shared utilities, and static mock data.

---

## 3. Landing Page Development

### AI Tool

Cursor AI

### Purpose

Used Cursor AI during the initial development of the landing page.

### Key Tasks

* Assisted with generating and organizing the landing page implementation.
* Created React components for different sections of the landing page.
* Assisted with styling and responsive design.

### Landing Page Components

The landing page currently uses components including:

* Header
* Hero
* How It Works
* Why ABTalks
* Challenge Tracks
* Social Proof
* CTA
* Footer

### Result

A working landing page was created and tested locally using the Vite development server.

---

## 4. React Router Setup

### AI Tool

ChatGPT

### Purpose

Used ChatGPT to understand and implement routing for the three required hackathon routes.

### Key Tasks

* Identified that React Router was required for multiple application routes.
* Installed `react-router-dom`.
* Added routing to `src/App.jsx`.
* Created page components:

  * `src/pages/Dashboard.jsx`
  * `src/pages/ChallengeDay.jsx`

### Routes Implemented

```text
/
/dashboard
/day/12
```

---

## 5. Student Dashboard Development

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to build the Student Dashboard according to the ABTalks hackathon problem statement.

### Key Tasks

* Created a mobile-first Student Dashboard at `/dashboard`.
* Created reusable Dashboard-specific components inside `src/components/dashboard/`.
* Updated `src/pages/Dashboard.jsx`.
* Added sections for:

  * Current streak
  * Today's task
  * 60-day challenge progress
  * Overall completion
  * Student standing
  * Achievements
* Used static/mock content for the Dashboard.
* Did not add any external dependencies.
* Kept the existing Landing Page and Challenge Day route unchanged.
* Verified that the project builds successfully using `npm.cmd run build`.

### Dashboard Components

The Dashboard currently uses reusable components including:

* `DashboardHeader`
* `DashboardIcon`
* `StreakCard`
* `TodayTaskCard`
* `ProgressOverview`
* `StandingCard`
* `Achievements`

### Result

The Student Dashboard was implemented as a cohesive dashboard experience built from reusable UI components.

---

## 6. Challenge Day Development

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to implement the Challenge Day page according to the ABTalks hackathon problem statement.

### Key Tasks

* Implemented the Challenge Day page at `/day/12`.
* Added the Day 12 challenge information.
* Added the current streak display.
* Added today's task and task explanation.
* Added a "What to build" section.
* Added expected output information.
* Added GitHub proof submission.
* Added LinkedIn proof submission.
* Added completion state after both proofs are submitted.
* Added mock/local state handling for proof submissions.
* Added functionality so submitted proof state persists after refreshing the page.
* Connected Challenge Day interaction with the student's challenge progress and streak state.
* Verified the page at the required mobile viewport.

### Testing

The following functionality was manually tested:

* `/day/12` loads correctly.
* GitHub proof can be submitted.
* LinkedIn proof can be submitted.
* Completion state appears after both proofs are submitted.
* Streak and progress update correctly.
* Submitted state remains after page refresh.
* Dashboard route continues to work.
* Landing Page route continues to work.

### Result

The Challenge Day page is now functional rather than being only a static UI.

---

## 7. Centralized Mock Data and Challenge State

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to centralize the application's static student and challenge information and connect the Dashboard and Challenge Day pages to a shared mock-data structure.

### Key Tasks

* Created `src/data/mockData.json`.
* Centralized:

  * Student information
  * Challenge progress
  * Today's task
  * Achievements
  * Challenge Day content
* Updated Dashboard components to use centralized mock data.
* Updated Challenge Day components to use the same challenge information.
* Added frontend state handling for challenge completion.
* Added mocked GitHub and LinkedIn proof submission.
* Added local browser state so submitted proofs are remembered during testing.
* Connected challenge completion with Dashboard progress.
* Verified the following example flow:

  * Streak increases from 12 to 13.
  * Challenge day increases from 12 to 13.
  * Progress updates from 20% to 22%.
* No real GitHub or LinkedIn API was implemented.

### Result

The Dashboard and Challenge Day now behave like a connected student journey rather than independent static screens.

---

## 8. Mobile Responsiveness Testing

### AI Tool

ChatGPT

### Purpose

Used ChatGPT to understand how to test the application at the required 390px mobile viewport.

### Key Tasks

* Opened Chrome Developer Tools.
* Enabled the device toolbar.
* Set the viewport width to 390px.
* Tested the Landing Page at 390px.
* Confirmed that the Landing Page responds correctly at the required mobile width.
* Confirmed that the Landing Page remained usable at the required viewport.

### Result

The Landing Page was successfully tested at a 390px viewport and remained usable and responsive.

---

## 9. 390px Mobile Responsive Fix

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to identify and fix responsive layout issues so that the application works correctly within the hackathon's required 390px mobile viewport.

### Problem Identified

During testing at:

```text
Width: 390px
Height: 844px
```

some elements were extending outside the intended screen dimensions.

### Key Tasks

* Inspected the existing layout for overflow issues.
* Identified CSS and layout constraints causing elements to extend beyond the viewport.
* Fixed the underlying responsive layout issues.
* Preserved the existing UI design.
* Preserved existing colors, typography, spacing, components, routes, and functionality.
* Ensured buttons and other components remain within the viewport.
* Avoided changing the application's intended functionality.

### Testing

The application was manually tested using:

* `npm run dev`
* Chrome Developer Tools
* 390px mobile viewport

The following were verified:

* No unwanted horizontal overflow.
* Buttons remain within the screen.
* Components remain within the viewport.
* Existing pages remain usable.
* Existing functionality continues to work.

### Result

The application now works correctly within the required 390px mobile viewport while preserving the existing UI and functionality.

---

## 10. Edge-Case Handling

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to implement the real-world student states specifically required by the ABTalks hackathon problem statement.

### Edge Cases Implemented

#### First-Day Student

Implemented a new-student state with:

* 0-day streak
* No completed challenge days
* No achievements
* Appropriate first-day experience

#### Missed Challenge Day

Implemented a student state where:

* Previous challenge progress exists.
* A challenge day has been missed.
* The interface communicates the missed day clearly.
* The student can understand what to do next.

#### Empty Profile

Implemented a student state where:

* Profile information is missing or incomplete.
* The interface communicates that the profile needs to be completed.
* A clear next action is provided.

### Implementation

* Used the existing mock-data architecture.
* Added reusable components for student-state and profile-related messaging.
* Updated Dashboard and Challenge Day components to handle different student states.
* Preserved the normal student experience.
* Did not add authentication, backend services, production database functionality, or real external APIs.
* Kept the three required routes unchanged.

### Testing

The edge cases were manually tested locally using the Vite development server.

The normal student flow was also re-tested to ensure:

* GitHub proof submission still works.
* LinkedIn proof submission still works.
* Completing both proofs updates the streak and progress.
* Dashboard functionality continues to work.
* Challenge Day functionality continues to work.
* The 390px mobile layout remains usable.

### Result

The application now handles the required first-day, missed-day, and empty-profile scenarios while maintaining the existing student journey and functionality.

---
## 11. Thoughtful UX Improvement — Next Best Action

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to implement a thoughtful student-experience improvement based on the hackathon requirement to introduce at least one idea that improves the student experience.

### Feature Implemented

Added a contextual **Next Best Action** section to the Student Dashboard.

The section provides a clear recommended action based on the student's current state instead of showing the same action to every student.

### Student States Supported

#### New Student

Shows:

* "Start your 60-day journey"
* A short message encouraging the student to begin.
* "Start Day 1" action.

#### Normal Active Student

Shows:

* "Today's goal"
* A reminder to complete the current challenge and submit both proofs.
* "Continue Day 12" action.

#### Missed Day

Shows:

* "Get back on track"
* A message explaining the missed challenge day.
* "Continue Challenge" action.

#### Incomplete Profile

Shows:

* "Complete your profile"
* A message explaining that profile information is incomplete.
* "Complete Profile" action.

### Implementation

* Reused the existing student-state logic.
* Reused existing mock data and application state.
* Reused existing routing.
* Preserved the existing Dashboard design and functionality.
* Did not introduce authentication, backend services, databases, or real external APIs.
* Did not change the three required routes.

### UX Benefit

The Dashboard now gives students a clear answer to the question:

> "What should I do next?"

The recommended action changes according to the student's current journey, making the experience more contextual and actionable.

### Testing

The feature was manually tested locally to verify:

* New-student action.
* Normal-student action.
* Missed-day action.
* Incomplete-profile action.
* CTA navigation.
* Existing Dashboard functionality.
* Existing Challenge Day functionality.
* Existing streak and progress behavior.
* 390px mobile usability.

### Result

The Dashboard now provides contextual guidance based on the student's current state, satisfying the hackathon's thoughtful student-experience requirement.
## 12. UI Polish and Visual Refinement

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to review and refine the existing interface after completing the core functionality.

### Key Tasks

* Reviewed the visual consistency of the Landing Page, Dashboard, and Challenge Day screens.
* Refined spacing and alignment where necessary.
* Checked button sizing and placement.
* Improved consistency between reusable components.
* Ensured text and interactive elements remain readable and accessible within the mobile layout.
* Preserved the existing visual direction rather than introducing a new design system.
* Avoided changes that could affect existing functionality.

### Testing

UI changes were manually reviewed in the local development environment.

The interface was checked at the required 390px mobile viewport to ensure that visual refinements did not introduce overflow or layout issues.

### Result

The application received a final visual refinement pass while preserving the existing functionality and mobile-first design.
## 13. Final Route Testing

### AI Tool

ChatGPT and Codex

### Purpose

Performed final manual testing of all three required hackathon routes before deployment.

### Required Routes Tested

```text
/
/dashboard
/day/12
```

### Testing Performed

#### Landing Page — `/`

* Verified the page loads correctly.
* Verified navigation and primary interactions.
* Checked the layout at 390px width.
* Checked for horizontal overflow.

#### Student Dashboard — `/dashboard`

* Verified dashboard content loads correctly.
* Verified student-state handling.
* Verified Next Best Action behavior.
* Verified streak and progress information.
* Checked the layout at 390px width.
* Checked for horizontal overflow.

#### Challenge Day — `/day/12`

* Verified Day 12 content loads correctly.
* Verified GitHub proof submission.
* Verified LinkedIn proof submission.
* Verified completion state.
* Verified streak and progress updates.
* Checked the layout at 390px width.
* Checked for horizontal overflow.

### Cross-Route Validation

* Verified navigation between the required screens.
* Verified existing state is preserved where expected.
* Verified edge-case behavior does not break the normal student flow.
* Verified the application remains usable at the required 390px mobile viewport.

### Result

All three required hackathon routes were manually tested and verified locally before deployment.
## 14. Development Approach

### AI Tools

ChatGPT, Cursor AI, and Codex integrated in VS Code

### Approach

The project was developed incrementally rather than generating the entire application at once.

Development followed a feature-by-feature approach:

1. Initial project planning
2. React project structure
3. Landing Page
4. React Router setup
5. Student Dashboard
6. Challenge Day
7. Mock GitHub and LinkedIn proof submission
8. Centralized mock data
9. Connected Dashboard and Challenge Day state
10. 390px mobile responsiveness and layout fixes
11. Required edge-case handling
12. Thoughtful UX improvement — Next Best Action
13. UI polish and visual refinement
14. Final testing of all required routes

AI-generated code was reviewed, tested, and validated manually before being committed to the repository.

---

## 15. Current Development Status

### Completed

The following major requirements and development tasks have been completed:

* Landing Page
* React Router setup
* Student Dashboard
* Challenge Day
* Mock GitHub proof submission
* Mock LinkedIn proof submission
* Centralized mock data
* Connected Dashboard and Challenge Day state
* Streak and progress updates
* 390px mobile responsiveness
* First-day student handling
* Missed-day handling
* Empty-profile handling
* Next Best Action UX improvement
* UI polish and visual refinement
* Final testing of:

  * `/`
  * `/dashboard`
  * `/day/12`
* AI Usage Log documentation

### Final Validation

The application was manually tested locally using the Vite development server.

The final validation included:

* Required routes loading correctly.
* Normal student flow working correctly.
* Edge cases working correctly.
* GitHub and LinkedIn proof submission working correctly.
* Streak and progress updates working correctly.
* Next Best Action displaying the appropriate student action.
* 390px mobile viewport testing.
* Horizontal overflow checks.
* Cross-route functionality checks.

---

## 16. Final Project Status

The ABTalks redesign now provides a complete mobile-first student journey across the three required routes.

The application includes the required challenge functionality, realistic mocked student data, proof-of-work submission, progress tracking, real-world student edge cases, contextual next actions, and a final responsive UI pass.

 

 