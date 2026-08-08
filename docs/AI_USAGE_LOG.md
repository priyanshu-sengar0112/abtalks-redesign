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
