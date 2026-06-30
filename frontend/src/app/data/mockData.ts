export const currentUser = {
  id: "1",
  name: "Nancy Chen",
  firstName: "Nancy",
  email: "nancy.chen@devlink.com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  role: "Senior Full-Stack Developer",
  location: "San Francisco, CA",
  bio: "Passionate about building scalable web applications and open-source contributions. 5+ years of experience in React, Node.js, and cloud architecture.",
  skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
  availability: "Open to projects",
  followers: 1247,
  following: 389,
  projects: 12,
  contributions: 2847
};

export const stats = [
  { label: "Active Projects", value: "8", change: "+12%", trend: "up" },
  { label: "Applications", value: "24", change: "+8%", trend: "up" },
  { label: "Messages", value: "12", change: "-3%", trend: "down" },
  { label: "Profile Views", value: "1.2K", change: "+24%", trend: "up" }
];

export const recentActivity = [
  {
    id: "1",
    type: "application",
    title: "Applied to DevOps Engineer position",
    project: "CloudScale Platform",
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    type: "message",
    title: "New message from Sarah Johnson",
    project: "AI Content Generator",
    time: "5 hours ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    type: "project",
    title: "Project milestone completed",
    project: "E-commerce Dashboard",
    time: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    type: "invitation",
    title: "Invited to join TaskFlow project",
    project: "TaskFlow",
    time: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  }
];

export const recentApplications = [
  {
    id: "1",
    project: "AI Content Generator",
    role: "Frontend Developer",
    status: "under_review",
    date: "June 28, 2026",
    founder: "Sarah Johnson",
    founderAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    project: "CloudScale Platform",
    role: "DevOps Engineer",
    status: "interview",
    date: "June 26, 2026",
    founder: "Michael Chen",
    founderAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    project: "HealthTrack Mobile",
    role: "React Native Developer",
    status: "accepted",
    date: "June 24, 2026",
    founder: "Emily Rodriguez",
    founderAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
  }
];

export const suggestedBuilders = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "UX/UI Designer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    skills: ["Figma", "Design Systems", "Prototyping"],
    location: "New York, NY",
    availability: "Available",
    projects: 18,
    followers: 892
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Backend Engineer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    skills: ["Python", "Django", "PostgreSQL"],
    location: "Austin, TX",
    availability: "Available",
    projects: 24,
    followers: 1243
  },
  {
    id: "3",
    name: "David Kim",
    role: "Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    skills: ["React Native", "iOS", "Android"],
    location: "Seattle, WA",
    availability: "Busy",
    projects: 31,
    followers: 2104
  }
];

export const allBuilders = [
  ...suggestedBuilders,
  {
    id: "4",
    name: "Emma Wilson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    skills: ["Product Strategy", "Agile", "User Research"],
    location: "Los Angeles, CA",
    availability: "Available",
    projects: 15,
    followers: 634
  },
  {
    id: "5",
    name: "James Chen",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    skills: ["Kubernetes", "AWS", "CI/CD"],
    location: "Boston, MA",
    availability: "Available",
    projects: 22,
    followers: 1567
  },
  {
    id: "6",
    name: "Sophia Martinez",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    location: "Chicago, IL",
    availability: "Busy",
    projects: 19,
    followers: 987
  }
];

export const projects = [
  {
    id: "1",
    title: "AI Content Generator",
    description: "Building an AI-powered content creation platform using GPT-4 and modern web technologies.",
    founder: "Sarah Johnson",
    founderAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    requiredSkills: ["React", "Node.js", "OpenAI API"],
    stage: "MVP",
    teamSize: 4,
    maxTeamSize: 6,
    status: "Open",
    category: "AI/ML",
    posted: "3 days ago"
  },
  {
    id: "2",
    title: "CloudScale Platform",
    description: "Enterprise cloud infrastructure management platform with real-time monitoring and automation.",
    founder: "Michael Chen",
    founderAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    requiredSkills: ["Kubernetes", "AWS", "Python"],
    stage: "Growth",
    teamSize: 8,
    maxTeamSize: 12,
    status: "Open",
    category: "DevOps",
    posted: "1 week ago"
  },
  {
    id: "3",
    title: "HealthTrack Mobile",
    description: "Mobile app for tracking fitness goals, nutrition, and wellness with social features.",
    founder: "Emily Rodriguez",
    founderAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    requiredSkills: ["React Native", "Firebase", "UI/UX"],
    stage: "Beta",
    teamSize: 5,
    maxTeamSize: 7,
    status: "Closed",
    category: "Health",
    posted: "2 weeks ago"
  },
  {
    id: "4",
    title: "E-commerce Dashboard",
    description: "Modern analytics dashboard for e-commerce businesses with real-time insights.",
    founder: "Alex Morgan",
    founderAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    requiredSkills: ["TypeScript", "Next.js", "PostgreSQL"],
    stage: "Idea",
    teamSize: 2,
    maxTeamSize: 5,
    status: "Open",
    category: "E-commerce",
    posted: "5 days ago"
  }
];

export const applications = [
  {
    id: "1",
    applicantName: "Jessica Brown",
    applicantAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    role: "Frontend Developer",
    project: "E-commerce Dashboard",
    appliedDate: "June 29, 2026",
    status: "pending",
    experience: "4 years",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "2",
    applicantName: "Robert Lee",
    applicantAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    role: "Backend Developer",
    project: "AI Content Generator",
    appliedDate: "June 28, 2026",
    status: "interview",
    experience: "6 years",
    skills: ["Node.js", "Python", "AWS"]
  },
  {
    id: "3",
    applicantName: "Maria Garcia",
    applicantAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    role: "UX Designer",
    project: "HealthTrack Mobile",
    appliedDate: "June 27, 2026",
    status: "accepted",
    experience: "3 years",
    skills: ["Figma", "User Research", "Prototyping"]
  },
  {
    id: "4",
    applicantName: "Kevin Patel",
    applicantAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    role: "DevOps Engineer",
    project: "CloudScale Platform",
    appliedDate: "June 26, 2026",
    status: "rejected",
    experience: "5 years",
    skills: ["Docker", "Kubernetes", "CI/CD"]
  }
];

export const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    lastMessage: "Sounds great! Let's schedule a call for tomorrow.",
    time: "2m ago",
    unread: 2,
    online: true
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    lastMessage: "Thanks for your application. We'd like to set up an interview.",
    time: "1h ago",
    unread: 1,
    online: true
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    lastMessage: "Welcome to the team! 🎉",
    time: "3h ago",
    unread: 0,
    online: false
  },
  {
    id: "4",
    name: "Alex Morgan",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    lastMessage: "Could you review the latest designs?",
    time: "1d ago",
    unread: 0,
    online: false
  }
];

export const messages = [
  {
    id: "1",
    conversationId: "1",
    senderId: "1",
    text: "Hi Sarah! I saw your AI Content Generator project. It looks amazing!",
    timestamp: "10:30 AM",
    isOwn: true
  },
  {
    id: "2",
    conversationId: "1",
    senderId: "2",
    text: "Thank you! I'm glad you're interested. Do you have experience with OpenAI API?",
    timestamp: "10:32 AM",
    isOwn: false
  },
  {
    id: "3",
    conversationId: "1",
    senderId: "1",
    text: "Yes, I've worked with GPT-3 and GPT-4 on several projects. I'd love to discuss how I can contribute.",
    timestamp: "10:35 AM",
    isOwn: true
  },
  {
    id: "4",
    conversationId: "1",
    senderId: "2",
    text: "That's perfect! Are you available for a quick call tomorrow to discuss the details?",
    timestamp: "10:38 AM",
    isOwn: false
  },
  {
    id: "5",
    conversationId: "1",
    senderId: "1",
    text: "Sounds great! Let's schedule a call for tomorrow.",
    timestamp: "10:40 AM",
    isOwn: true
  }
];

export const notifications = [
  {
    id: "1",
    type: "application",
    title: "New application received",
    message: "Jessica Brown applied for Frontend Developer position",
    time: "5 minutes ago",
    read: false
  },
  {
    id: "2",
    type: "message",
    title: "New message",
    message: "Sarah Johnson sent you a message",
    time: "2 hours ago",
    read: false
  },
  {
    id: "3",
    type: "project",
    title: "Project update",
    message: "E-commerce Dashboard milestone completed",
    time: "1 day ago",
    read: true
  }
];

export const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "The best error message is the one that never shows up.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast."
];
