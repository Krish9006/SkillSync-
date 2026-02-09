export const teams = [
    {
        id: 1,
        title: "AgriTech Solvers",
        type: "Hackathon",
        description: "Building an AI-driven crop disease detection app for Smart India Hackathon 2024. We need a frontend wizard to bring our ML model to life.",
        tags: ["AI/ML", "React Native", "TensorFlow"],
        members: [
            { name: "Aarav", role: "ML Engineer" },
            { name: "Priya", role: "Backend Dev" },
            { name: "Rohan", role: "Data Scientist" }
        ],
        lookingFor: ["Mobile App Dev", "UI/UX Designer"],
        createdAt: "2024-03-10",
        activityScore: 95,
        skillSyncScore: 98,
        teamHealth: 92,
        image: "🌾"
    },
    {
        id: 2,
        title: "FinFlow India",
        type: "Startup",
        description: "Simplifying UPI payments for street vendors with voice-assisted transactions. Pre-incubated at IIT Bombay E-Cell.",
        tags: ["Fintech", "Voice AI", "Flutter"],
        members: [
            { name: "Ishaan", role: "Founder" },
            { name: "Neha", role: "Tech Lead" },
            { name: "Vikram", role: "Marketing" },
            { name: "Ananya", role: "Operations" }
        ],
        lookingFor: ["Flutter Developer", "Growth Hacker"],
        createdAt: "2024-01-15",
        activityScore: 88,
        skillSyncScore: 94,
        teamHealth: 85,
        image: "💸"
    },
    {
        id: 3,
        title: "MediConnect",
        type: "Project",
        description: "A decentralized health record system for rural clinics. Aiming to solve data fragmentation in Indian healthcare.",
        tags: ["Blockchain", "Web3", "Next.js"],
        members: [
            { name: "Sarthak", role: "Blockchain Dev" },
            { name: "Meera", role: "Frontend Dev" }
        ],
        lookingFor: ["Smart Contract Dev", "Product Manager"],
        createdAt: "2024-02-20",
        activityScore: 72,
        skillSyncScore: 85,
        teamHealth: 78,
        image: "🏥"
    },
    {
        id: 4,
        title: "EdVantage",
        type: "Startup",
        description: "Gamified learning platform for JEE/NEET aspirants. We are building a metaverse classroom experience.",
        tags: ["EdTech", "Unity", "VR/AR"],
        members: [
            { name: "Rahul", role: "Game Dev" },
            { name: "Simran", role: "3D Artist" },
            { name: "Kabir", role: "Content Head" }
        ],
        lookingFor: ["Unity Developer", "Backend Engineer"],
        createdAt: "2024-03-01",
        activityScore: 90,
        skillSyncScore: 91,
        teamHealth: 88,
        image: "🎓"
    },
    {
        id: 5,
        title: "CleanCity AI",
        type: "Hackathon",
        description: "Smart waste management system using IoT sensors and computer vision. Targeting the 'Swachh Bharat' innovation challenge.",
        tags: ["IoT", "Computer Vision", "Python"],
        members: [
            { name: "Aditya", role: "IoT Engineer" },
            { name: "Kavya", role: "Python Dev" }
        ],
        lookingFor: ["Embedded Systems Eng", "Data Analyst"],
        createdAt: "2024-03-12",
        activityScore: 85,
        skillSyncScore: 89,
        teamHealth: 82,
        image: "♻️"
    },
    {
        id: 6,
        title: "LegalEase",
        type: "Research",
        description: "NLP model to summarize complex Indian legal documents into simple vernacular languages. Research paper targeting top conferences.",
        tags: ["NLP", "Research", "Python"],
        members: [
            { name: "Dr. Rao", role: "Mentor" },
            { name: "Arjun", role: "Researcher" }
        ],
        lookingFor: ["NLP Researcher", "Linguist"],
        createdAt: "2024-01-05",
        activityScore: 60,
        skillSyncScore: 96,
        teamHealth: 95,
        image: "⚖️"
    },
    {
        id: 7,
        title: "SpaceXplore",
        type: "Project",
        description: "Building a sounding rocket for the Spaceport India competition. Need mechanical and avionics enthusiasts.",
        tags: ["Aerospace", "Avionics", "Physics"],
        members: [
            { name: "Varun", role: "Team Lead" },
            { name: "Sana", role: "Propulsion" },
            { name: "Dev", role: "Structures" },
            { name: "Riya", role: "Avionics" },
            { name: "Om", role: "Recovery" }
        ],
        lookingFor: ["Simulation Expert"],
        createdAt: "2023-12-10",
        activityScore: 98,
        skillSyncScore: 92,
        teamHealth: 90,
        image: "🚀"
    },
    {
        id: 8,
        title: "CyberGuard",
        type: "Hackathon",
        description: "Developing a phishing detection browser extension for senior citizens. Participating in Kavach 2024.",
        tags: ["Cybersecurity", "JavaScript", "Chrome Ext"],
        members: [
            { name: "Nikhil", role: "Security Analyst" },
            { name: "Tanvi", role: "Frontend Dev" }
        ],
        lookingFor: ["Backend Dev", "Tester"],
        createdAt: "2024-03-15",
        activityScore: 92,
        skillSyncScore: 88,
        teamHealth: 80,
        image: "🛡️"
    },
    {
        id: 9,
        title: "ArtisanConnect",
        type: "Startup",
        description: "D2C marketplace connecting rural Indian artisans directly with global buyers. Empowering local craftsmanship.",
        tags: ["E-commerce", "Social Impact", "MERN"],
        members: [
            { name: "Anjali", role: "CEO" },
            { name: "Raj", role: "CTO" }
        ],
        lookingFor: ["Full Stack Dev", "Digital Marketer"],
        createdAt: "2024-02-28",
        activityScore: 78,
        skillSyncScore: 87,
        teamHealth: 84,
        image: "🎨"
    },
    {
        id: 10,
        title: "QuantumLeap",
        type: "Research",
        description: "Exploring quantum algorithms for optimization problems. Collaboration with university professors.",
        tags: ["Quantum Computing", "Qiskit", "Math"],
        members: [
            { name: "Prof. Singh", role: "Advisor" },
            { name: "Vihaan", role: "Student Researcher" }
        ],
        lookingFor: ["Physics Major", "Algorithm Specialist"],
        createdAt: "2024-01-20",
        activityScore: 55,
        skillSyncScore: 99,
        teamHealth: 96,
        image: "⚛️"
    }
];

export const students = [
    {
        id: "s1",
        name: "Arjun Mehta",
        role: "Full Stack Dev",
        college: "IIT Delhi",
        year: "3rd Year",
        skills: ["React", "Node.js", "PostgreSQL", "AWS"],
        bio: "Building scalable web apps since 2021. Won Smart India Hackathon '23. Looking for a designer to collaborate on a fintech project.",
        availability: "Open to Hackathons",
        github: "github.com/arjunm",
        badges: ["SIH Winner", "5★ Coder"],
        image: "👨‍💻",
        lookingFor: "UI/UX Designer",
        email: "arjun@example.com"
    },
    {
        id: "s2",
        name: "Riya Singh",
        role: "UI/UX Designer",
        college: "NIFT Mumbai",
        year: "4th Year",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        bio: "Obsessed with pixel-perfect designs and micro-interactions. Previously interned at Cred. Love dark mode UIs.",
        availability: "Freelance / Projects",
        github: "behance.net/riya",
        badges: ["Design Lead", "Creative"],
        image: "🎨",
        lookingFor: "Frontend Dev",
        email: "riya@example.com"
    },
    {
        id: "s3",
        name: "Vikram Patel",
        role: "AI/ML Engineer",
        college: "BITS Pilani",
        year: "3rd Year",
        skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
        bio: "Researching LLMs and their applications in education. Published a paper at IEEE. Looking for a team for the next hackathon.",
        availability: "Hackathons Only",
        github: "github.com/vikramp",
        badges: ["Researcher", "Kaggle Master"],
        image: "🤖",
        lookingFor: "Data Scientist",
        email: "vikram@example.com"
    },
    {
        id: "s4",
        name: "Ananya Gupta",
        role: "Frontend Dev",
        college: "IIIT Hyderabad",
        year: "2nd Year",
        skills: ["React", "Tailwind", "Three.js", "GSAP"],
        bio: "I make websites go whoosh! Love creating immersive 3D web experiences. Learning WebGL.",
        availability: "Side Projects",
        github: "github.com/ananyag",
        badges: ["Frontend Wizard", "Animator"],
        image: "✨",
        lookingFor: "Backend Dev",
        email: "ananya@example.com"
    },
    {
        id: "s5",
        name: "Rohan Das",
        role: "Blockchain Dev",
        college: "IIT Bombay",
        year: "4th Year",
        skills: ["Solidity", "Ethereum", "Web3.js", "Rust"],
        bio: "Building decentralized finance protocols. Bullish on Web3. Looking for a frontend dev to build a DApp UI.",
        availability: "Startup Co-founder",
        github: "github.com/rohand",
        badges: ["Web3 Native", "EthIndia Finalist"],
        image: "⛓️",
        lookingFor: "Smart Contract Auditor",
        email: "rohan@example.com"
    },
    {
        id: "s6",
        name: "Sanya Kapoor",
        role: "Product Manager",
        college: "IIM Bangalore",
        year: "MBA 1st Year",
        skills: ["Product Strategy", "User Stories", "Jira", "Market Research"],
        bio: "Transitioning from engineering to product. Love solving user problems. Looking for devs to build an MVP.",
        availability: "Startup Ideas",
        github: "linkedin.com/in/sanya",
        badges: ["Strategist", "Leader"],
        image: "📊",
        lookingFor: "Tech Co-founder",
        email: "sanya@example.com"
    },
    {
        id: "s7",
        name: "Kabir Khan",
        role: "Mobile Dev",
        college: "NIT Trichy",
        year: "3rd Year",
        skills: ["Flutter", "Dart", "Firebase", "Android"],
        bio: "Building cross-platform apps that feel native. 3 apps on Play Store with 10k+ downloads.",
        availability: "Contract Work",
        github: "github.com/kabirk",
        badges: ["App Master", "Publisher"],
        image: "📱",
        lookingFor: "UI Designer",
        email: "kabir@example.com"
    },
    {
        id: "s8",
        name: "Meera Reddy",
        role: "Data Scientist",
        college: "IIT Madras",
        year: "4th Year",
        skills: ["Python", "Pandas", "SQL", "Tableau"],
        bio: "Turning data into insights. Love visualizing complex datasets. Cricket enthusiast.",
        availability: "Research Projects",
        github: "github.com/meerar",
        badges: ["Data Geek", "Analyst"],
        image: "📈",
        lookingFor: "Data Engineer",
        email: "meera@example.com"
    },
    {
        id: "s9",
        name: "Ishaan Verma",
        role: "DevOps Engineer",
        college: "VIT Vellore",
        year: "3rd Year",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
        bio: "Automating everything. If you have to do it twice, script it. Cloud native enthusiast.",
        availability: "Open to Collaborate",
        github: "github.com/ishaanv",
        badges: ["Cloud Native", "Automation"],
        image: "☁️",
        lookingFor: "Full Stack Dev",
        email: "ishaan@example.com"
    },
    {
        id: "s10",
        name: "Priya Nair",
        role: "Cybersecurity",
        college: "Amrita University",
        year: "2nd Year",
        skills: ["Ethical Hacking", "Python", "Linux", "Network Security"],
        bio: "Breaking things to make them stronger. CTF player. Bug bounty hunter.",
        availability: "Security Audits",
        github: "github.com/priyan",
        badges: ["White Hat", "CTF Winner"],
        image: "🔒",
        lookingFor: "Penetration Tester",
        email: "priya@example.com"
    },
    {
        id: "s11",
        name: "Aditya Rao",
        role: "Game Dev",
        college: "Manipal",
        year: "3rd Year",
        skills: ["Unity", "C#", "Blender", "Game Design"],
        bio: "Creating indie games. Love pixel art and retro mechanics. Working on a platformer.",
        availability: "Game Jams",
        github: "github.com/adityar",
        badges: ["Indie Dev", "Artist"],
        image: "🎮",
        lookingFor: "Sound Designer",
        email: "aditya@example.com"
    },
    {
        id: "s12",
        name: "Neha Sharma",
        role: "Content Writer",
        college: "Delhi University",
        year: "2nd Year",
        skills: ["SEO", "Copywriting", "Blogging", "Social Media"],
        bio: "Words that sell. Helping tech startups tell their story. Tech blogger.",
        availability: "Freelance",
        github: "medium.com/@neha",
        badges: ["Storyteller", "Viral"],
        image: "✍️",
        lookingFor: "Web Developer",
        email: "neha@example.com"
    },
    {
        id: "s13",
        name: "Rahul Malhotra",
        role: "Backend Dev",
        college: "Thapar University",
        year: "3rd Year",
        skills: ["Go", "Microservices", "Redis", "gRPC"],
        bio: "Performance obsessed. Building high-throughput systems. Love open source.",
        availability: "Backend Heavy Projects",
        github: "github.com/rahulm",
        badges: ["Gopher", "System Design"],
        image: "⚙️",
        lookingFor: "Frontend Dev",
        email: "rahul@example.com"
    },
    {
        id: "s14",
        name: "Simran Kaur",
        role: "AR/VR Dev",
        college: "PEC Chandigarh",
        year: "4th Year",
        skills: ["Unity", "ARKit", "C#", "Oculus SDK"],
        bio: "Building the metaverse one polygon at a time. VR enthusiast.",
        availability: "XR Projects",
        github: "github.com/simrank",
        badges: ["Futurist", "XR Dev"],
        image: "👓",
        lookingFor: "3D Modeler",
        email: "simran@example.com"
    },
    {
        id: "s15",
        name: "Varun Chopra",
        role: "Robotics Eng",
        college: "IIT Kanpur",
        year: "3rd Year",
        skills: ["ROS", "C++", "Arduino", "Computer Vision"],
        bio: "Building autonomous bots. Robocon participant. Love hardware hacks.",
        availability: "Robotics Competitions",
        github: "github.com/varunc",
        badges: ["Maker", "Hardware"],
        image: "🦾",
        lookingFor: "Embedded Systems Eng",
        email: "varun@example.com"
    }
];


export const requests = [
    {
        id: "r1",
        from: "Karthik",
        to: "You",
        type: "Team Invite",
        status: "Pending",
        message: "Hey! We need a frontend dev for our hackathon team. Interested?",
        timestamp: "2h ago",
        direction: "received" // received or sent
    },
    {
        id: "r2",
        from: "Sarah",
        to: "You",
        type: "Join Request",
        status: "Accepted",
        message: "I'd love to join your 'AgriTech' project. I have experience with ML.",
        timestamp: "1d ago",
        direction: "received"
    }
];

// ============================================
// 📦 REQUEST MANAGEMENT UTILITIES
// ============================================

const STORAGE_KEY = 'projectpals_requests';

// Initialize localStorage with sample data if empty
export const initializeRequests = () => {
    if (typeof window === 'undefined') return;

    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    }
};

// Get all requests from localStorage
export const getRequests = () => {
    if (typeof window === 'undefined') return requests;

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : requests;
    } catch (error) {
        console.error('Error loading requests:', error);
        return requests;
    }
};

// Add a new request
export const addRequest = (request) => {
    if (typeof window === 'undefined') return;

    try {
        const allRequests = getRequests();
        const newRequest = {
            id: `r${Date.now()}`,
            status: "Pending",
            timestamp: "Just now",
            direction: "sent", // default to sent for user-created requests
            ...request
        };

        const updated = [newRequest, ...allRequests];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return newRequest;
    } catch (error) {
        console.error('Error adding request:', error);
    }
};

// Update request status
export const updateRequestStatus = (id, status) => {
    if (typeof window === 'undefined') return;

    try {
        const allRequests = getRequests();
        const updated = allRequests.map(req =>
            req.id === id ? { ...req, status } : req
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
        console.error('Error updating request:', error);
    }
};

// Delete a request
export const deleteRequest = (id) => {
    if (typeof window === 'undefined') return;

    try {
        const allRequests = getRequests();
        const updated = allRequests.filter(req => req.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
        console.error('Error deleting request:', error);
    }
};

