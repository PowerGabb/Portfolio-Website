export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Javascript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "TypeScript",
    icon: "   https://cdn-icons-png.flaticon.com/512/5968/5968381.png ",
  },
  {
    title: "Php",
    icon: "   https://cdn-icons-png.flaticon.com/512/5968/5968332.png ",
  },
  {
    title: "Python",
    icon: "   https://cdn-icons-png.flaticon.com/512/5968/5968350.png ",
  },
];

export const technologies = [
  // { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  // { name: "Tailwind CSS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/TailwindCSS.png" },

  {
    name: "JavaScript",
    icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Javascript.png",
  },
  {
    name: "TypeScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    name: "Php",
    icon: "   https://cdn-icons-png.flaticon.com/512/919/919830.png ",
  },
  {
    name: "Pthon",
    icon: "   https://cdn-icons-png.flaticon.com/512/5968/5968350.png ",
  },

  {
    name: "React JS",
    icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ReactJS.png",
  },
  {
    name: "Next JS",
    icon: "   https://cdn-icons-png.flaticon.com/512/318/318476.png ",
  },
  {
    name: "Angular",
    icon: "   https://cdn-icons-png.flaticon.com/512/15484/15484402.png ",
  },
  {
    name: "Three JS",
    icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ThreeJS.png",
  },

  // Backend Technologies
  {
    name: "Node JS",
    icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/NodeJS.png",
  },

  // Tools
  {
    name: "git",
    icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Git.png",
  },
  {
    name: "figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    name: "docker",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
  },
];

export const experiences = [
  {
    title: "Wordpress / Laravel Developer",
    company_name: "PT. INFIMEDIA SOLUSI PRATAMA",
    icon: "https://www.infimedia.co.id/Assets/images/heading_icon.png",
    iconBg: "#161329",
    date: "November 2023 - February 2024",
    points: [
      "During my internship as a Wordpress Developer at PT INFIMEDIA SOLUSI PRATAMA, I successfully developed a responsive and user-friendly company profile website. This project involved customizing WordPress themes and plugins to meet the specific needs of the company, while also ensuring SEO optimization to enhance online visibility.",
      "As a Laravel Developer, I contributed to building an ERP website for a mining company. This project required a deep understanding of the MVC architecture and complex database integration, as well as the implementation of features that support efficient mining operations.",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company_name: "PT. PELITA TEKNOLOGI GLOBAL",
    icon: "https://www.pelitateknologi.com/assets/img/logo.png",
    iconBg: "#161329",
    date: "February 2024 - Present",
    points: [
      "Developed and maintained Building Management System (BMS) and Audit Management System (AMS) websites to enhance operational efficiency.",
      "Collaborated with cross-functional teams, including UI/UX designers, to ensure user-centered design in all web applications.",
      "Created responsive and intuitive user interfaces that improve user interaction and experience.",
      "Conducted user research and feedback sessions to gather insights, resulting in UI/UX refinements tailored to user needs.",
      "Implemented frontend and backend features to optimize performance, security, and data handling.",
      "Leveraged modern web technologies and frameworks to build robust, scalable, and visually appealing applications.",
      "Tested, debugged, and optimized code for seamless performance across platforms and devices.",
    ],
  },

  {
    title: "Owner of Persona Global Software",
    company_name: "Persona Global Software",
    icon: "persona-without-text.jpg",
    iconBg: "#161329",
    date: "October 2024 - Present",
    points: [
      "Founded and manage Persona Global Software, providing cutting-edge software development and consulting services.",
      "Led a team in developing custom software solutions, focusing on innovative web and mobile applications for diverse business needs.",
      "Implemented high-quality project management practices to ensure timely and efficient delivery of client projects.",
      "Established and nurtured client relationships by delivering impactful solutions aligned with business objectives.",
      "Utilized modern development frameworks and methodologies to maintain high code standards and scalable architecture.",
      "Continuously explore emerging technologies and trends to keep Persona Global Software competitive in the tech industry.",
    ],
  },
];

export const projects = [
  {
    name: "Audit Management System",
    source_code_link: "#",
    description:
      "Web application that allows users to manage audit tasks, track progress, and assign tasks to team members for efficient audit management in bank environments.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: "audit.png",
  },
  {
    name: "Batch Repo AMS",
    source_code_link: "#",
    description:
      "Developed a batch program using Java Spring Batch to handle data storage operations in the database repository",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Batch", color: "green-text-gradient" },
      { name: "Database", color: "pink-text-gradient" },
    ],
    image: "ams-batch.png",
  },
  {
    name: "Building Management System",
    source_code_link: "#",
    description:
      "A web application designed for comprehensive building monitoring and management. This system allows users to track building conditions, report damages, and submit funding requests for necessary repairs. Tailored for banks and real estate institutions, the application enables users to manage tasks, monitor progress, and coordinate teams effectively to maintain efficient building management.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "bms.png",
  },
  {
    name: "New Trade System",
    source_code_link: "#",
    description:
      "Responsible for updating the frontend of the existing trading system, including bug fixes and functionality improvements as well as integration with the new backend.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "nts.png",
  },
  {
    name: "NTS Components Library",
    source_code_link: "#",
    description:
      "Responsible for creating reusable Angular components for use in the NTS project, including buttons, dropdowns, datepickers, and more",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "nts-lib.png",
  },
  {
    name: "Konectgo Apps - Team Lead & Full Stack Developer",
    source_code_link: "#",
    description:
      "Led a development team in creating mobile and web applications for eSIM purchases, integrating multiple services including Xendit and Firebase. Managed team coordination and technical implementation.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "konectgo.png",
  },
  {
    name: "Bookly AI - Assistant Book",
    source_code_link: "https://bookly-ai.com",
    description:
      "An application integrated with OpenAI API that enables users to listen to AI-narrated books, get summaries, or read page by page",
    tags: [
      { name: "Nodejs", color: "blue-text-gradient" },
      { name: "ReactJs", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: "bookly-ai.png",
  },
  {
    name: "eLibrary For Schools",
    source_code_link: "https://bookly-ai.biz.id/",
    description:
      "A web application that allows users to manage books, track progress, and assign tasks to team members for efficient audit management in bank environments.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: "library.png",
  },
  {
    name: "Lost And Found Indonesia",
    source_code_link: "https://github.com/PowerGabb/lost-and-found-frontend",
    description:
      "A web application that enables users to report lost or found items, as well as search for items that have been reported by others.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Adonis JS", color: "green-text-gradient" },
      { name: "Mysql", color: "pink-text-gradient" },
    ],
    image: "lost-and-found.jpg",
  },
  {
    name: "Joblink Disability",
    source_code_link: "https://github.com/naufalyuu1234/Joblink_projek",
    description:
      "A web application that enables users with disabilities to search for jobs and companies to post job listings. Features an AI assistant that can recommend jobs based on the abilities and needs of users with disabilities. Won second place in Universitas Gunadarma at GDOC competition.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: "joblink.png",
  },
];
