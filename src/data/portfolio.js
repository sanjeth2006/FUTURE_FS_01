import { Github, Linkedin, Mail } from "lucide-react";

export const userData = {
    profile: {
        name: "Sanjeth",
        role: "CS Student | Full-Stack Developer",
        tagline: "Building projects with React, Python, and AI tools",
        bio: "Computer Science student passionate about coding and problem-solving. Currently working on full-stack web applications and personal projects. Eager to learn and contribute to software development teams.",
        email: "sanjeths2006@gmail.com",
    },
    social: {
        github: "https://github.com/sanjeth2006",
        linkedin: "https://linkedin.com/in/",
        email: "mailto:sanjeth@example.com"
    },
    skills: {
        frontend: ["React.js", "HTML/CSS", "JavaScript"],
        backend: ["Python", "Java", "Flask", "FastAPI", "REST APIs"],
        databases: ["MySQL", "MongoDB Atlas"],
        ai_ml: ["TensorFlow", "PyTorch", "OpenCV", "MediaPipe", "YOLOv8", "NLP-SQL Pipelines", "LangChain"],
        tools: ["Git", "VS Code", "GitHub"]
    },
    projects: [
        {
            title: "Career Counselling Platform",
            description: [
                "Engineered an AI-driven career platform using RAG-based question generation with Google Gemini, delivering intelligent assessments and personalized guidance, increasing recommendation accuracy by 35%.",
                "Constructed a secure MERN stack ecosystem with JWT + Google OAuth, scalable APIs, and an interactive chat-style onboarding flow, boosting user engagement by 40% while ensuring reliable multi-user performance."
            ],
            tech: ["React", "Node.js", "Express", "MongoDB", "Google Cloud AI", "RAG"],
            github: "#",
            demo: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=Career+Counselling"
        },
        {
            title: "Smart Doorbell System",
            description: [
                "Built a computer-vision smart doorbell with face recognition, thumbs-up gesture access, and event detection, reducing false alerts by ~35%.",
                "Developed a FastAPI backend with WebSocket live streaming for low-latency video and faster real-time notifications.",
                "Integrated MongoDB Atlas + GridFS for secure, scalable storage and retrieval of video frames."
            ],
            tech: ["Python", "OpenCV", "MediaPipe", "FastAPI", "MongoDB Atlas"],
            github: "https://github.com/sanjeth2006/smartdoorbell",
            demo: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=Smart+Doorbell"
        },
        {
            title: "AI-Powered Groundwater Intelligence Chatbot",
            description: [
                "Built a multilingual, voice-enabled groundwater assistant using LangChain SQL Agent to convert natural-language queries into dynamic SQL, improving data accuracy by ~5%.",
                "Created interactive Plotly and Folium dashboards to visualize groundwater quality, depth, and extraction trends.",
                "Integrated Google Gemini Pro with a Streamlit UI for faster, more accurate groundwater insights (~50% quicker responses)."
            ],
            tech: ["Python", "Streamlit", "Gemini Pro", "LangChain", "SQL"],
            github: "https://github.com/sanjeth2006/groundwater-chatbot",
            demo: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=Groundwater+Chatbot"
        },
    ]
};
