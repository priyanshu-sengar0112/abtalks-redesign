# ABTalks Redesign — Route Map

This document provides the routes and application flow required for the ABTalks redesign hackathon submission.

The application is designed **mobile-first** and will be evaluated primarily at a **390px viewport width**.

---

## Required Routes

The application contains the three required routes:

- `/` — Landing Page
- `/dashboard` — Student Dashboard
- `/day/12` — Challenge Day 12

---

## Route 1 — Landing Page

### URL

`/`

### Purpose

The Landing Page is the first experience for a student who has never heard of ABTalks.

It explains the 60-day coding challenge and motivates students to participate.

### Main Content

- Hero section
- How It Works
- Why ABTalks
- Challenge Tracks
- Social Proof
- Final CTA
- Footer

### Main Goal

A new student should understand:

1. What the 60-day challenge is.
2. What they need to do every day.
3. How GitHub and LinkedIn proof of work are used.
4. Why consistency and public proof of work matter.

---

## Route 2 — Student Dashboard

### URL

`/dashboard`

### Purpose

The Student Dashboard is the student's home screen during the challenge.

### Dashboard Information

- Current streak
- Today's task
- 60-day challenge progress
- Overall completion
- Student standing
- Achievements

### Component Organization

Dashboard-specific reusable components are located in:

`src/components/dashboard/`

### Data Source

The Dashboard uses centralized mock data from:

`src/data/mockData.json`

The mock data contains:

- Student information
- Current streak
- Current challenge day
- Challenge progress
- Today's task
- Student standing
- Achievements

---

## Route 3 — Challenge Day 12

### URL

`/day/12`

### Purpose

This page provides the complete experience for a single challenge day.

### Student Can

- Read the day's task.
- Understand what needs to be built.
- View the expected output.
- Follow the build checklist.
- View task guidance.
- Submit mocked GitHub repository/commit proof.
- Submit mocked LinkedIn post proof.
- Complete the challenge after submitting both proofs.
- See the updated streak and challenge progress.

### Component Organization

Challenge-specific reusable components are located in:

`src/components/challenge/`

### Data Source

Challenge Day content is initially loaded from:

`src/data/mockData.json`

This includes:

- Task information
- Task description
- Why the task matters
- Expected output
- Build checklist
- Guidance
- GitHub proof information
- LinkedIn proof information

### Challenge State

Challenge completion state is handled on the frontend using browser/local storage.

The challenge state utility is located at:

`src/utils/challengeDayState.js`

Local storage is used to preserve the student's submission and completion state during testing.

---

## Centralized Mock Data

The application uses a centralized mock-data file instead of maintaining separate hard-coded data inside individual pages.

The centralized data is located at:

`src/data/mockData.json`

The data is shared by the Dashboard and Challenge Day experience.

This provides a consistent initial source of information for:

- Student details
- Challenge progress
- Current streak
- Today's task
- Achievements
- Challenge Day content
- GitHub proof
- LinkedIn proof

---

## Challenge Completion Flow

When the student completes Challenge Day 12 by submitting both required proofs:

```text
GitHub Proof
     +
LinkedIn Proof
     ↓
Challenge Completed
     ↓
Streak Updated
     ↓
Challenge Progress Updated
     ↓
Dashboard Updated