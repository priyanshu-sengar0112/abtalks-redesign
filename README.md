# ABTalks Redesign

A mobile-first redesign of the ABTalks 60-Day Coding Challenge, created for the Vibe Hackathon.

The project focuses on helping college students build consistency through daily coding tasks while encouraging them to create public proof of work using GitHub and LinkedIn.

---

## 📖 About

ABTalks Redesign is a student-focused experience built around a structured **60-Day Coding Challenge**.

Instead of simply presenting coding resources, the platform encourages students to build a consistent learning habit through daily challenges, progress tracking, streaks, achievements, and public proof of work.

The redesign focuses on:

- Clear student journey
- Motivating progress feedback
- Daily challenge completion
- GitHub and LinkedIn proof of work
- Mobile-first responsive design
- Contextual next actions

The application is primarily designed and tested for a **390px mobile viewport**, which is the main evaluation target for the hackathon.

---

## ✨ Features

### 🎯 60-Day Coding Challenge

- Daily coding challenges
- Today's task
- Challenge progress tracking
- Current challenge day
- Challenge completion flow
- Streak tracking
- Progress updates

### 📊 Student Dashboard

The dashboard provides students with an overview of their learning journey.

- Current streak
- Today's task
- 60-day challenge progress
- Overall completion
- Student standing
- Achievements
- Contextual Next Best Action

The **Next Best Action** adapts to the student's current state and provides a clear action to continue their journey.

### 🛠 Challenge Day Experience

Each challenge day provides a structured workflow for completing the task.

- Task description
- Why the task matters
- Expected output
- Build checklist
- Task guidance
- GitHub proof submission
- LinkedIn proof submission
- Challenge completion

### 🔗 Proof of Work

The challenge encourages students to publicly document their work.

**GitHub Proof** — Students can submit mocked:
- Repository information
- Commit proof

**LinkedIn Proof** — Students can submit mocked:
- LinkedIn post proof

Both proofs are required before the challenge can be completed.

### 🔥 Streak & Progress Tracking

When Challenge Day 12 is completed successfully:

```text
Before
Day: 12
Streak: 12
Progress: 20%

After
Day: 13
Streak: 13
Progress: 22%
```

The updated challenge state is persisted using browser `localStorage`.

### 🧠 Thoughtful UX — Next Best Action

The dashboard provides a contextual action based on the student's current state.

Examples include:

```text
Start your 60-day journey  →  Start Day 1
Today's goal                →  Continue Day 12
Get back on track           →  Continue Challenge
Complete your profile       →  Complete Profile
```

This helps students understand what they should do next without having to search through the dashboard.

### 📱 Responsive Design

The application follows a mobile-first design approach.

**Primary evaluation viewport:** 390px × 844px

The interface was tested for:

- Mobile phones
- Desktop screens
- Responsive layouts
- Touch-friendly interactions
- Responsive typography
- Cards and buttons fitting within the viewport
- No horizontal scrolling
- No clipped content

Desktop is treated as a secondary responsive layout.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Language | JavaScript (ES6+) |
| Routing | React Router |
| Styling | CSS |
| Data | JSON Mock Data |
| Client State | Browser localStorage |
| Version Control | Git & GitHub |
| Deployment | Vercel |

---

## 📂 Project Structure

```text
abtalks-redesign/
│
├── docs/
│   ├── AI_USAGE_LOG.md
│   └── ROUTE_MAP.md
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── challenge/
│   │   ├── dashboard/
│   │   ├── ChallengeTracks.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── SocialProof.jsx
│   │   └── WhyABTalks.jsx
│   │
│   ├── data/
│   │   └── mockData.json
│   │
│   ├── pages/
│   │   ├── ChallengeDay.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── utils/
│   │   ├── challengeDayState.js
│   │   ├── helpers.js
│   │   └── studentState.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── PROMPTS.md
└── README.md
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/priyanshu-sengar0112/abtalks-redesign.git
```

Move into the project:

```bash
cd abtalks-redesign
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will normally be available at:

## 🌐 Live Demo

[Vercel](https://abtalks-redesign-ten-bay.vercel.app/)

## 📂 GitHub Repository

[GitHub](https://github.com/priyanshu-sengar0112/abtalks-redesign)

---

### AI Usage Log

A detailed record of AI-assisted development is available in:
`docs/AI_USAGE_LOG.md`

### Development Prompts

The major prompts used during the development process are documented in:
`PROMPTS.md`

The prompt documentation includes prompts related to:

- Project setup
- Landing Page
- Student Dashboard
- Challenge Day
- Challenge completion
- Centralized mock data
- 390px mobile responsiveness
- Edge-case handling
- Next Best Action UX
- UI polish and visual refinement
- Final route testing
- Production build verification

### Route Documentation

The application's route structure and user journey are documented in:
`docs/ROUTE_MAP.md`

---

## 🔮 Future Enhancements

Potential future improvements include:

- Real authentication
- Backend integration
- Persistent cloud-based student progress
- Real GitHub API integration
- Real LinkedIn integration
- Real-time leaderboard
- More challenge days
- Advanced student analytics
- Notifications and reminders
- Expanded achievement system

---

## 👨‍💻 Developer

**Priyanshu Sengar**

GitHub: [https://github.com/priyanshu-sengar0112](https://github.com/priyanshu-sengar0112)

---

## 🙏 Acknowledgements

Developed as part of the ABTalks Redesign Vibe Hackathon.

The project was created using an iterative AI-assisted development workflow. AI-generated suggestions were reviewed, tested, refined, and integrated during development.