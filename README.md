# SkillSync

SkillSync is a platform I built to help students connect with each other. It's basically a "Team Finder" for hackathons, projects, or just finding study partners.

I made this because finding the right people to work with is often harder than the work itself. This app solves that by letting you create a profile, show off your skills, and find others who match what you're looking for.

## Live Demo
- **Live Site:** [https://skillsynkrish.netlify.app/](https://skillsynkrish.netlify.app/)
- **GitHub Repo:** [https://github.com/Krish9006/SkillSync-](https://github.com/Krish9006/SkillSync-)

## What it does
- **Find Teammates:** You can scroll through student profiles to find people with the skills you need.
- **Connect:** Send connection requests to people you want to work with.
- **Smart Profiles:** Users can make detailed profiles with their bio, skills, and links.
- **Real-time Matching:** (In progress) Filter and find users essentially instantly.


## Tech Stack
I used the MERN stack but with Next.js for better performance and SEO.

**Frontend:**
- **Next.js 14** (App Router) - For the structure and routing.
- **Tailwind CSS** - For styling everything quickly.
- **Framer Motion & Three.js** - Added some cool 3D elements and smooth animations to make it feel premium.

**Backend:**
- **Node.js & Express** - Handles the API and server logic.
- **MongoDB** - Stores all the user data and requests.
- **JWT** - Secure login and authentication.

## How to run it locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/skillsync.git
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create a .env file with your MONGO_URI and JWT_SECRET
   npm start
   ```

## Why I built this
I wanted to build something that solves a real problem I see in college every day. Plus, I wanted to really push my frontend skills with things like 3D graphics and complex layouts.
