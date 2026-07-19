// Portfolio data extracted from CV - Faiza Parveen

export const personalInfo = {
  name: "Faiza Parveen",
  title: "Junior Full Stack Developer",
  tagline: "Building Scalable Web Applications & Mentoring the Next Generation",
  email: "syedafaiza2610@gmail.com",
  phone: "+92 337 8016819",
  location: "North Karachi, Pakistan",
  linkedin: "https://linkedin.com/in/syeda-faiza-976196260",
  github: "https://github.com/syedafaiza2610",
  summary:
    "A results-driven Junior Full Stack Developer with hands-on experience in web development, database management, and IT training. Currently serving as an IT Instructor and Manager, with a proven ability to lead projects and train students. Skilled in .NET, PHP, JavaScript, and the MERN stack, with a strong interest in building scalable web applications and leveraging AI tools for efficient solutions. Prior internship experience as a Frontend Web Developer at a startup software company.",
};

export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Built", value: 11, suffix: "+" },
  { label: "Students Mentored", value: 100, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export const technicalSkills = [
  { name: "HTML5", category: "Frontend", level: 90 },
  { name: "CSS", category: "Frontend", level: 88 },
  { name: "JavaScript", category: "Frontend", level: 85 },
  { name: "React", category: "Frontend", level: 80 },
  { name: "Bootstrap / MUI", category: "Frontend", level: 85 },
  { name: "PHP", category: "Backend", level: 82 },
  { name: "Node.js", category: "Backend", level: 78 },
  { name: "Express.js", category: "Backend", level: 78 },
  { name: "ASP.NET", category: "Backend", level: 75 },
  { name: "C#", category: "Backend", level: 75 },
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "MySQL", category: "Database", level: 85 },
  { name: "SQL Server", category: "Database", level: 78 },
  { name: "RESTful APIs", category: "Backend", level: 82 },
  { name: "WordPress", category: "CMS", level: 75 },
  { name: "Canva", category: "Design", level: 85 },
  { name: "Git & GitHub", category: "Tools", level: 82 },
  { name: "MVC", category: "Architecture", level: 80 },
  { name: "OOP", category: "Architecture", level: 82 },
  { name: "DBMS", category: "Database", level: 82 },
  { name: "AI Prompting", category: "AI", level: 85 },
  { name: "SEO / SMM", category: "Marketing", level: 75 },
  { name: "Digital Marketing", category: "Marketing", level: 75 },
];

export const softSkills = [
  "Quick Learner",
  "Adaptable",
  "Team Player",
  "Leadership",
  "Effective Communication",
  "Works Under Pressure",
  "Time Management",
  "AI Prompt Engineering",
];

export const experience = [
  {
    role: "Manager Academics",
    company: "Aptech North Karachi",
    period: "2025 — Present",
    type: "Leadership",
    highlights: [
      "Managing and leading a team of faculty members, ensuring smooth academic and operational performance.",
      "Supervising daily activities of instructors and ensuring quality delivery of training programs.",
      "Providing guidance, support, and direction to team members to achieve organizational goals.",
      "Coordinating between management and faculty to maintain effective workflow and discipline.",
      "Monitoring student progress and ensuring high standards of teaching and learning.",
      "Fostering a collaborative and productive work environment within the team.",
    ],
  },
  {
    role: "Developer Lead & IT Instructor — Frontend Development",
    company: "Aptech North Karachi",
    period: "2024 — 2025",
    type: "Leadership",
    highlights: [
      "Led 50+ students through hands-on web development training in HTML5, CSS3, JavaScript, .NET, and PHP — acting as the primary technical mentor and project lead.",
      "Spearheaded 15+ full-stack student projects from concept to deployment, including e-commerce sites, library systems, and CRUD applications with database integration.",
      "Served as Developer Lead for the frontend track: designed curriculum, code-reviewed student work, and set coding standards across 4 batches.",
      "Architected real-world project workflows — guided students through Git version control, REST API integration, and database design with MySQL and SQL Server.",
      "Designed and authored 10+ course modules and teaching materials, improving student project completion rates by 40%.",
      "Mentored 100+ students in modern development tools including AI-assisted coding, debugging techniques, and digital marketing fundamentals.",
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "TechNest (Startup Software Company)",
    period: "2022 — Semester Break Internship",
    type: "Internship",
    highlights: [
      "Completed a semester-break internship at TechNest, a startup software company, working as a Frontend Web Developer.",
      "Built responsive, user-friendly web interfaces using HTML5, CSS3, and JavaScript for client projects.",
      "Collaborated closely with the senior development team to translate UI/UX designs into pixel-perfect, accessible web pages.",
      "Gained hands-on exposure to a real software development lifecycle, including agile standups, code reviews, and version control with Git.",
      "Contributed to component libraries and reusable UI snippets that accelerated the team's delivery on multiple client websites.",
      "Strengthened skills in cross-browser compatibility, performance optimization, and clean, maintainable frontend code.",
    ],
  },
];

export const projects = [
  {
    title: "Online Mobile Recharge System",
    description:
      "Built a full-stack online mobile recharge platform with ASP.NET MVC and SQL Server. Users can browse prepaid and postpaid recharge plans, select operators, and complete transactions securely. The backend handles user authentication, transaction history, wallet balance, and admin dashboards for managing plans, operators, and reports — with role-based access for customers and administrators.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
    category: "Full Stack",
    featured: true,
    icon: "smartphone",
    liveLink: "https://mobile-recharge.faiza-parveen.dev",
  },
  {
    title: "Airline Reservation System",
    description:
      "Developed a comprehensive airline reservation web application using ASP.NET and SQL Server. Passengers can search flights by source, destination, and date, book one-way or round-trip tickets, select seats, and manage bookings with a PNR reference. The admin module handles flight scheduling, route management, fare configuration, and passenger manifests — backed by normalized relational tables and stored procedures for reliable data integrity.",
    technologies: ["ASP.NET", "C#", "SQL Server", "ADO.NET", "HTML", "CSS"],
    category: "Full Stack",
    featured: true,
    icon: "plane",
    liveLink: "https://airline-reservation.faiza-parveen.dev",
  },
  {
    title: "Fitness Management System",
    description:
      "Built a full-stack fitness management application on the MERN stack for gyms and personal trainers. Members can register, browse workout plans, track daily exercises, log body metrics, and book training sessions. Trainers get a dashboard to assign custom workout and diet plans, monitor member progress, and send notifications. Includes JWT-based authentication, RESTful APIs, and a responsive React UI with charts for progress visualization.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    icon: "dumbbell",
    liveLink: "https://fitness-mern.faiza-parveen.dev",
  },
  {
    title: "Hotel Management System",
    description:
      "Developed a full-stack hotel management system on the MERN stack covering room booking, check-in/check-out, billing, and housekeeping. Guests can search available rooms by date, view room types, and book online with real-time availability. Staff modules manage reservations, guest profiles, restaurant orders, and generate invoices. Features role-based access for admin, receptionist, and staff with a clean, responsive React frontend and a Node/Express REST API.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux Toolkit"],
    category: "Full Stack",
    featured: true,
    icon: "bed-double",
    liveLink: "https://hotel-mern.faiza-parveen.dev",
  },
  {
  title: "Saylani Student Portal (Final Hackathon Project)",
description:
  "Developed a scalable student portal during the Saylani Final Hackathon to simplify access to student services and academic resources. The platform includes secure user authentication, responsive dashboards, backend API integration, and efficient data management to provide a seamless experience for students.",
technologies: ["MongoDB", "Express.js", "React", "Node.js"],
category: "Full Stack",
featured: true,
icon: "graduation-cap",
    liveLink: "https://student-portal-fa.vercel.app/",
  },
  {
    title: "MERN Stack Library Application",
    description:
      "Built a full-stack library management application with dynamic data handling and API integration. Features include book cataloging, member management, and real-time availability tracking.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack",
    featured: true,
    icon: "book-open",
    liveLink: "https://library-mern.faiza-parveen.dev",
  },
  {
    title: "Talent Showcase System",
    description:
      "Created a full-stack application with frontend and backend functionality to manage and display student talent with full CRUD operations. Built on the ASP.NET stack with SQL Server backend.",
    technologies: ["ASP.NET", "C#", "HTML", "CSS", "SQL Server"],
    category: "Full Stack",
    featured: true,
    icon: "trophy",
    liveLink: "https://talent-showcase.faiza-parveen.dev",
  },
  {
    title: "Vaccination Management System",
    description:
      "Developed a system to manage vaccination records with efficient data handling and a user-friendly interface. Includes patient tracking, scheduling, and record management.",
    technologies: ["PHP", "MySQL"],
    category: "Web App",
    featured: false,
    icon: "syringe",
    liveLink: "https://vaccination.faiza-parveen.dev",
  },
  {
    title: "Book Library Management System",
    description:
      "Built a web-based library system for managing books and users with full CRUD operations and database integration. Handles inventory, loans, and member records.",
    technologies: ["PHP", "MySQL"],
    category: "Web App",
    featured: false,
    icon: "library",
    liveLink: "https://smit-ba688.web.app/",
  },
  {
    title: "Puppy Care Website",
    description:
      "Developed a responsive website providing information about dog care, food, and health guidance. Features an engaging UI with smooth navigation and rich content presentation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: false,
    icon: "paw-print",
    liveLink: "https://puppy-care.faiza-parveen.dev",
  },
  {
    title: "Puppy Website",
    description:
      "Built an interactive web-based games platform for kids with engaging UI and smooth user experience. Includes multiple mini-games with score tracking and animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: false,
    icon: "gamepad",
    liveLink: "https://picnic-games.faiza-parveen.dev",
  },
];

export const education = [
  {
    degree: "Master's in Computer Science (MCS)",
    institution: "University of Karachi — Department of Computer Science (UBIT)",
    year: "2023",
    score: "CGPA: 3.38",
  },
  {
    degree: "Bachelors in Mathematics",
    institution: "University of Karachi — Department of Mathematics",
    year: "2020",
    score: "First Division",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Govt. Degree Girls College For Women, Nazimabad",
    year: "2017",
    score: "Pre-Engineering",
  },
];

export const certificates = [
  {
    title: "HTML, CSS and JavaScript",
    issuer: "10 Pearl's University",
    year: "",
  },
  {
    title: "MERN Stack Development",
    issuer: "SMIT",
    year: "2023 — 2024",
  },
  {
    title: "Final Project — SMIT Admission Portal",
    issuer: "SMIT",
    year: "",
  },
  {
    title: "Soft Skills Program",
    issuer: "PAFLA",
    year: "2024",
  },
];

export const accomplishments = [
  {
    title: "Mentorship Excellence in TECHWIZ",
    issuer: "Aptech North Karachi Campus",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
