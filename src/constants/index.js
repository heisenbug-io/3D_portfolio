import { tms, dribbble, dit, algoma, fanshawe, university } from "../assets/images";
import {
    car,
    contact,
    estate,
    express,
    git,
    github,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    laravel,
    django,
    docker,
    aws,
    firebase,
    mysql,
    postgresql,
    threejs,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
     {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Infrastructure",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Infrastructure",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
{
        imageUrl: threejs,
        name: "Three.js",
        type: "3D Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Backend Software Engineer",
        company_name: "Creative Market (Dribbble Inc.)",
        company_url: "https://creativemarket.com/",
        icon: dribbble,
        iconBg: "#e1b6ef",
        date: "Sept 2022 - June 2024",
        points: [
            "Developed and maintained backend services and RESTful APIs using PHP and Laravel, improving system performance and scalability.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features.",
            "Engineered the integration of over 250 million digital assets into the marketplace from platforms like Shutterstock and Fontspring, significantly enhancing the platform's offerings.",
            "Led code reviews, ensuring code quality and adherence to best practices, which reduced bugs in production by 30%.",
            "Technologies: Linear, Notion, AWS, EC2, S3, RDS, SQS, SNS, DynamoDB, MySQL, Kubernetes, Docker, Vuejs, TypeScript, React, Laravel, CodeIgniter, Elastic Search, Pointguard, Node.js, e-commerce, marketplace management."
        ],
    },
    {
        title: "Software / DevOps Engineer",
        company_name: "Timeless Medical Systems",
        company_url: "https://timelessmedical.com/",
        icon: tms,
        iconBg: "#b3ebfc",
        date: "Dec 2019 - Sept 2022",
        points: [
            "Designed, developed, and maintained PHP and Laravel-based web applications in the healthcare sector, focusing on pediatric healthcare solutions.",
            "Automated the CI/CD process for client on-premise infrastructure using Bash, PowerShell, Docker, Kubernetes, and Jenkins, improving deployment efficiency by 50%.",
            "Managed and optimized AWS Elastic Beanstalk/EC2, Nginx, and Apache servers, ensuring high availability and performance.",
            "Authored and maintained comprehensive technical documentation using JIRA and Confluence, improving team knowledge sharing and onboarding processes.",
            "Collaborated with cross-functional teams using Agile methodologies, contributing to the successful delivery of multiple project updates.",
            "Technologies: JIRA, Confluence, Laravel, PHP, Symphony, Python, Bash, AWS, EC2, S3, RDS, Node.js, React, Apache, Nginx, Cloud Infrastructure and on-premise server management."
        ],
    },
    {
        title: "Support Engineer",
        company_name: "DependableIT",
        company_url: "https://www.dependableit.com/",
        icon: dit,
        iconBg: "#fcca3f",
        date: "July 2018 - Oct 2019",
        points: [
            "Provided technical support and troubleshooting for various clients, including Cogeco, Facedrive, and Windstream, resolving over 95% of issues on the first contact.",
            "Diagnosed and solved hardware and software faults, minimizing downtime and maintaining high levels of client satisfaction.",
            "Led backend operations and PTC licensing processes for Toronto drivers, managing AWS infrastructure and ensuring compliance with city regulations.",
            "Developed and maintained procedural documentation and relevant reports, improving team efficiency and client transparency.",
            "Technologies: AWS, S3, EC2, Powershell, Bash, Confluence, Chatbot, Python, Selenium, Intercom, zendesk, freshdesk."
        ],
    },
];

export const education = [
    {
        title: "Bachelor of Computer Science (Part-Time)",
        company_name: "Algoma University",
        company_url: "https://algomau.ca/",
        icon: algoma,
        iconBg: "#d49a32",
        date: "2024 - 2025 (Ongoing)",
        points: [
            "Relevant Coursework: Object Oriented Programming, Databases, Discrete Maths, Data Structures and Algorithms, Operating Systems, Computer Networks, Machine Learning, Data Mining, Advance Data Structures and Algorithms, Information Retrieval, Image Processing, Unix and Systems Programming, Interaction Design and Testing.",
        ], 
    },
    {
        title: "Ontario College Diploma in Internet Applications and Web Development Fundamentals",
        company_name: "Fanshawe College",
        company_url: "https://www.fanshawec.ca/programs/iwd2-web-development-and-internet-applications/next",
        icon: fanshawe,
        iconBg: "brown",
        date: "2016 - 2018",
        points: [
            "Dean’s Honour Roll for achieving over 4.0 GPA in one semester.",
            "Relevant Coursework: Object Oriented Programming, Databases, Graphic Design for Web Developers, Data Structures and Algorithms, Front End Web Development, Computer Networks, CMS Web Development, Mobile App Development, Cloud Computing and Servers.",
        ],
    },
    {
        title: "Computer Science Certificate",
        company_name: "Willingdon College",
        icon: university,
        iconBg: "#90EE90",
        date: "2013 - 2015",
        points: [
            "Relevant Coursework: Object Oriented Programming, Databases, Data Structures and Algorithms, Computer Networking, Algebra, Applied Science, Basics of C and C++ programming."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+12265041559',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/heisenbug-io',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pujan-bhuva-8b4ab5111/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Dashboard for multi-vendor e-commerce platform',
        description: 'Developed a dashboard for a multi-vendor e-commerce platform, allowing vendors/admins/customers to manage their products and orders. Built with Laravel and FilamentPHP.',
        link: 'https://ecomm.heisenbug.pro/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Jewellery Shop ERP System',
        description: 'Developed an ERP system for a jewellery shop, enabling the management of products, orders, and customers. Built with Laravel and Vue.js.',
        link: 'https://jewellery.heisenbug.pro/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Spline 3D Landing Page',
        description: 'Developed a 3D landing page for Discord-like application, a design tool for 3D web experiences, using Spline and React.',
        link: 'https://heisenbug-io.github.io/spline-app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Travel App Landing Page',
        description: 'Designed and built a landing page for a travel app, showcasing the app’s features and functionality in a visually appealing way using Next.js and Tailwind CSS.',
        link: 'https://heisenbug-io.github.io/nextjs-travel-app-landing-page/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Spotify Clone',
        description: 'Developed a clone of Spotify, allowing users to listen to music, create playlists, and follow artists. Built with PHP and bootstrap.',
        link: 'https://github.com/heisenbug-io/XMusic',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'Instagram Clone',
        description: 'Developed a clone of Instagram, allowing users to post images, follow other users, and like/comment on posts. Built with Laravel and Vue.js.',
        link: 'https://github.com/heisenbug-io/Instagram-Clone-Laravel',
    }
];