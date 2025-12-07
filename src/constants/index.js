const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 50, suffix: "+", label: "Students Mentored" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];
const projects = [
  {
    title: "Real-Time Chat Application",
    description: "Secure MERN stack chat app with Socket.io for instant messaging, JWT authentication, and bcrypt password hashing for end-to-end security.",
    imgPath: "/images/project1.png",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Bcrypt"]
  },
  {
    title: "AI Advertisement Generator",
    description: "Generative AI tool that creates unique, high-quality advertisement images based on shop details and product inputs.",
    imgPath: "/images/project2.png",
    link: "#",
    technologies: ["MERN Stack", "Generative AI", "Image Processing"]
  },
 
  {
    title: "AI Resume Analyzer",
    description: "Client-side tool that parses resumes and provides AI-driven feedback on keywords, formatting, and ATS compatibility.",
    imgPath: "/images/project4.png",
    link: "https://ai-resume-analyzer-jade-ten.vercel.app/",
    technologies: ["React", "AI/ML", "NLP", "Vercel"]
  },
  {
    title: "MERN Blog Platform",
    description: "Full-featured blogging platform with JWT authentication, CRUD operations, and public/private content controls.",
    imgPath: "/images/project5.png",
    link: "https://mernnotesapp-1fn3.onrender.com",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"]
  },
  {
    title: "React Native Recipe App",
    description: "Cross-platform mobile app fetching real-time recipe data with detailed ingredients and cooking instructions.",
    imgPath: "/images/project6.png",
    link: "#",
    technologies: ["React Native", "REST API", "Mobile Development"]
  },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "End-to-End Product Ownership",
    desc: "Turning ideas into fully deployed products, from database design and backend APIs to responsive frontends and production deployment.",
  },
  {
    imgPath: "/images/chat.png",
    title: "MERN Stack & API Engineering",
    desc: "Building scalable, secure backends with Node.js, Express, and modern databases, and integrating clean REST APIs with React-based frontends.",
  },
  {
    imgPath: "/images/time.png",
    title: "AI & Generative Development",
    desc: "Integrating AI and generative models into applications to power features like resume analysis, content generation, and smart automation.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Real-Time & Cross-Platform Apps",
    desc: "Creating real-time experiences using technologies like WebSockets and Socket.io, and shipping cross-platform apps with React Native.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Testing & Code Quality",
    desc: "Identifying and resolving critical bugs while maintaining clean, maintainable code supported by version control and CI/CD workflows.",
  },
  {
    imgPath: "/images/time.png",
    title: "Mentorship & Collaboration",
    desc: "Teaching juniors through bootcamps, explaining complex concepts clearly, and collaborating effectively with teams and clients.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Arjun delivered an exceptional e-commerce platform with secure payment integration and inventory management. His technical expertise and dedication to quality exceeded our expectations.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer (Freelance)",
    date: "2025 - Present",
    responsibilities: [
      "Engineered and deployed a complete full-stack e-commerce website for a UAE-based client (Yarn Store) at https://www.roohhayati.com/",
      "Implemented secure payment integration and inventory management system",
      "Delivered end-to-end solution from database design to production deployment",
    ],
  },
  {
    review: "Arjun's contributions to our enterprise application have been outstanding. He demonstrates strong problem-solving skills and works effectively in a cross-functional team environment.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Intern",
    date: "2024 - 2025",
    responsibilities: [
      "Contributed to a large-scale enterprise application using React.js, Express.js, and PostgreSQL at Logix Space Technologies",
      "Served as dedicated software tester, identifying and documenting critical bugs to improve application stability",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
    ],
  },
  {
    review: "Arjun built a robust real-time hall and turf management system that streamlined our campus booking procedures. His full-stack and AI expertise brought innovative solutions to our startup.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack & AI Developer",
    date: "2023 - Present",
    responsibilities: [
      "Architected and built a full-stack real-time hall and turf management system using MERN stack at SWIPE (Campus-Based Startup)",
      "Streamlined campus booking procedures with efficient real-time features",
      "Integrated AI capabilities to enhance platform functionality",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
 
];

const socialImgs = [

];

export {
  words,
  abilities,
  projects,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
