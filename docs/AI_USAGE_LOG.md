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

## 11. Development Approach

### AI Tools

ChatGPT, Cursor AI, and Codex

### Approach

The project is being developed incrementally instead of generating the entire application at once.

### Current Development Milestones

1. Initial project planning
2. React project structure
3. Landing Page
4. React Router setup
5. Student Dashboard
6. Challenge Day
7. Mock GitHub and LinkedIn proof submission
8. Centralized mock data
9. Connected Dashboard and Challenge Day state
10. 390px mobile responsive testing and fixes
11. Required edge-case handling

### Review Process

AI-generated code is reviewed and tested manually before being committed to the repository.

Manual validation includes:

* Running the application locally.
* Testing the required routes.
* Testing GitHub and LinkedIn proof submission.
* Verifying streak and progress updates.
* Testing edge-case states.
* Testing the application at the required 390px mobile viewport.
* Checking that existing functionality remains intact after AI-assisted changes.

---

## 12. Current Development Status

### Completed

The following major milestones have been completed:

* Landing Page
* React Router setup
* Student Dashboard
* Challenge Day
* Mock GitHub and LinkedIn proof submission
* Centralized mock data
* Connected Dashboard and Challenge Day state
* 390px mobile responsiveness
* Required edge-case handling

### Remaining Work

* Implement and validate the final thoughtful student-experience improvement.
* Perform final UI and UX polish.
* Perform final testing of all three required routes at 390px.
* Verify the production build.
* Review the Git repository and required documentation.
* Prepare the final hackathon submission.
