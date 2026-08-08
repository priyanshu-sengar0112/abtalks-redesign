# ABTalks Redesign — Route Map

This document provides the routes required for the ABTalks redesign hackathon submission.

The application is designed mobile-first and will be evaluated at a **390px viewport width**.

---

## Required Routes

The three required routes are listed below in the exact order specified by the hackathon:

```text
/
/dashboard
/day/12
Route 1 — Landing Page
URL
/
Purpose

The Landing Page is the first experience for a student who has never heard of ABTalks.

It explains the 60-day coding challenge and motivates students to participate.

Main Content
Hero section
How It Works
Why ABTalks
Challenge Tracks
Social Proof
Final CTA
Footer
Main Goal

A new student should understand:

What the 60-day challenge is.
What they need to do every day.
How GitHub and LinkedIn proof of work are used.
Why consistency and public proof of work matter.
Route 2 — Student Dashboard
URL
/dashboard
Purpose

The Student Dashboard is the student's home screen after joining the challenge.

Dashboard Information
Current streak
Today's task
60-day challenge progress
Overall completion
Student standing
Achievements
Component Organization

Dashboard-specific reusable components are located in:

src/components/dashboard/
Route 3 — Challenge Day 12
URL
/day/12
Purpose

This page provides the complete experience for a single challenge day.

Student Can
Read the day's task.
Understand what needs to be built.
View the expected output.
Submit mocked GitHub repository/commit proof.
Submit mocked LinkedIn post proof.
Complete the challenge after submitting both proofs.
See the mocked streak update after completion.
Implementation

The Challenge Day functionality uses frontend state/local storage.

Real:

GitHub API
LinkedIn API
Authentication
Production database

are not required.

Student Journey

The intended flow through the application is:

Landing Page
     |
     | Start Challenge
     ↓
Student Dashboard
     |
     | Start Today's Task
     ↓
Challenge Day 12
Mobile Viewport

The hackathon evaluates the application at:

390px width
Design Approach
Mobile-first
Responsive layout
Single-column layout where appropriate
Touch-friendly buttons
Responsive typography
No horizontal scrolling

Desktop is treated as a secondary responsive layout.

Local Development

From the project root:

npm install
npm run dev

The local development server normally runs at:

http://localhost:5173
Routes for Local Testing
http://localhost:5173/
http://localhost:5173/dashboard
http://localhost:5173/day/12
Production Build

To create a production build:

npm run build

To preview the production build locally:

npm run preview
Out of Scope

The following are intentionally not implemented:

Authentication
Real user accounts
Production database
Real GitHub API
Real LinkedIn API
Recruiter dashboard
Admin panel

Mocked/static data is used where appropriate.