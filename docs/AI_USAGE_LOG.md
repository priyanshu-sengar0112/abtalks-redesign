# AI Usage Log

## Project
ABTalks Redesign

## Hackathon
36-Hour Vibe Hackathon

## Purpose
This document records how AI tools were used during the development of the ABTalks redesign project.

---

## 1. Initial Project Planning

### AI Tool
ChatGPT

### Purpose
Used ChatGPT to understand and break down the ABTalks problem statement into smaller development milestones suitable for a beginner.

### Key Tasks
- Understood the three required routes:
  - `/`
  - `/dashboard`
  - `/day/12`
- Identified the required features for the landing page, dashboard, and challenge-day page.
- Planned a mobile-first approach for a 390px viewport.
- Identified that authentication, real accounts, production database, and real GitHub/LinkedIn APIs were out of scope.
- Planned the use of mocked data.

---

## 2. Project Structure Planning

### AI Tool
ChatGPT

### Purpose
Used ChatGPT to understand how to organize the React project into manageable sections.

### Key Tasks
- Reviewed the existing Vite + React project structure.
- Identified the `src/components`, `src/pages`, and `src/utils` folders.
- Planned separate page components for:
  - Landing Page
  - Student Dashboard
  - Challenge Day
- Planned a future `src/data/mockData.json` file for mocked student and challenge information.

---

## 3. Landing Page Development

### AI Tool
Cursor AI

### Purpose
Used Cursor AI during the initial development of the landing page.

### Key Tasks
- Assisted with generating and organizing the landing page implementation.
- Created React components for different sections of the landing page.
- Assisted with styling and responsive design.

### Landing Page Components
The landing page currently uses components including:

- Header
- Hero
- How It Works
- Why ABTalks
- Challenge Tracks
- Social Proof
- CTA
- Footer

### Result
A working landing page was created and tested locally using the Vite development server.

---

## 4. React Router Setup

### AI Tool
ChatGPT

### Purpose
Used ChatGPT to understand and implement routing for the three required hackathon routes.

### Key Tasks
- Identified that React Router was required for multiple application routes.
- Installed `react-router-dom`.
- Added routing to `src/App.jsx`.
- Created placeholder page components:
  - `src/pages/Dashboard.jsx`
  - `src/pages/ChallengeDay.jsx`

### Routes Implemented

```text
/
/dashboard
/day/12

---

## 5. Student Dashboard Development

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to build the Student Dashboard according to the ABTalks hackathon problem statement.

### Key Tasks

- Created a mobile-first Student Dashboard at:
  - `/dashboard`
- Created reusable Dashboard-specific components inside:
  - `src/components/dashboard/`
- Updated:
  - `src/pages/Dashboard.jsx`
- Added sections for:
  - Current streak
  - Today's task
  - 60-day challenge progress
  - Overall completion
  - Student standing
  - Achievements
- Used static/mock content for the Dashboard.
- Did not add any external dependencies.
- Kept the existing Landing Page and Challenge Day route unchanged.
- Verified that the project builds successfully using:
  - `npm.cmd run build`

### Dashboard Components

The Dashboard currently uses reusable components including:

- DashboardHeader
- DashboardIcon
- StreakCard
- TodayTaskCard
- ProgressOverview
- StandingCard
- Achievements

---

## 6. Mobile Responsiveness Testing

### AI Tool

ChatGPT

### Purpose

Used ChatGPT to understand how to test the application at the required 390px mobile viewport.

### Key Tasks

- Opened Chrome Developer Tools.
- Enabled the device toolbar.
- Set the viewport width to 390px.
- Tested the Landing Page at 390px.
- Confirmed that the Landing Page responds correctly at the required mobile width.
- Confirmed that the Landing Page does not require a redesign for the 390px requirement.

### Result

The Landing Page was successfully tested at a 390px viewport and remained usable and responsive.

---

## 7. Development Approach

### AI Tools

ChatGPT and Codex

### Approach

The project is being developed incrementally instead of generating the entire application at once.

Current development milestones:

1. Landing Page
2. React Router setup
3. Student Dashboard
4. Connect application navigation
5. Challenge Day
6. Mock JSON data
7. Mock GitHub and LinkedIn proof submission
8. Edge-case handling
9. Final 390px responsive testing

AI-generated code is reviewed and tested manually before being committed to the repository.


---

## 8. Challenge Day Development

### AI Tool

Codex integrated in VS Code

### Purpose

Used Codex to implement the Challenge Day page according to the ABTalks hackathon problem statement.

### Key Tasks

- Implemented the Challenge Day page at:
  - `/day/12`
- Added the Day 12 challenge information.
- Added the current streak display.
- Added today's task and task explanation.
- Added a "What to build" section.
- Added expected output information.
- Added GitHub proof submission.
- Added LinkedIn proof submission.
- Added completion state after both proofs are submitted.
- Added mock/local state handling for the proof submissions.
- Added functionality so the submitted proof state can persist after refreshing the page.
- Connected the Challenge Day interaction with the student's challenge progress/streak state.
- Verified the page at the required mobile viewport.

### Testing

The following functionality was manually tested:

- `/day/12` loads correctly.
- GitHub proof can be submitted.
- LinkedIn proof can be submitted.
- Completion state appears after both proofs are submitted.
- Streak/progress state updates correctly.
- Submitted state remains after page refresh.
- Dashboard route continues to work.
- Landing Page route continues to work.

### Result

The Challenge Day page is now functional rather than being only a static UI.

---

## 9. Current Development Progress

The following major milestones have now been completed:

1. Landing Page
2. React Router setup
3. Student Dashboard
4. Challenge Day
5. Mock proof submission functionality
6. Mobile responsiveness testing

### Remaining Work

1. Create centralized mock JSON data.
2. Connect Dashboard and Challenge Day to the mock data.
3. Improve shared state between pages.
4. Handle edge cases and validation.
5. Perform final 390px responsive testing.
6. Perform final build and submission checks.

AI-generated code is reviewed and manually tested before being committed to the repository.