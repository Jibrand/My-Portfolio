/**
 * Other work — a secondary, compact list.
 *
 * These are shown as a compact list rather than a wall of cards so the four
 * featured case studies stay the focus. Every link here is one that already
 * appeared on the site or in the GitHub repositories; none were invented.
 *
 * Descriptions have been condensed from the previous long-form blurbs.
 * No metrics, customer numbers or growth claims are included.
 */

export const otherProducts = [
  {
    name: "InboxHR",
    description:
      "HR management platform with an AI chatbot trained on company policy, onboarding automation, bulk CSV import, Zoho integration and analytics dashboards. React and TypeScript.",
    image: "/images/work/inboxhr.webp",
    links: [],
    linkNote: "inboxhr.cloud was linked previously but is not resolving; link withheld until it is back up.",
    stack: ["React", "TypeScript", "AI chatbot", "Zoho"],
  },
  {
    name: "ChairBooked",
    description:
      "SaaS platform for local service businesses: 24/7 AI website chatbot for appointment booking, automated email updates, review collection and a CRM dashboard for leads and appointments.",
    image: "/images/work/chairbooked.webp",
    links: [{ label: "Live site", href: "https://chair-booked.vercel.app/" }],
    stack: ["React", "Node.js", "MongoDB", "Vercel"],
  },
  {
    name: "OcorpAI",
    description:
      "AI platform that evaluates automotive exterior design sketches, returning structured design feedback and intent assessment from uploaded images.",
    image: "/images/work/ocorp-ai.webp",
    links: [{ label: "Live site", href: "https://ocorp-ai-chatbot.vercel.app/" }],
    stack: ["LLM APIs", "React"],
  },
  {
    name: "PrivacyGuard (PiiFuse)",
    description:
      "Privacy platform that detects and redacts PII and secrets before they reach logs, databases or AI models, with endpoint-level policies and audit trails. Built for GDPR, HIPAA and SOC 2 contexts.",
    image: "/images/work/piifuse.webp",
    links: [
      { label: "Live site", href: "https://piifuse-landing-page.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Jibrand/PIIFUSE-Landing-Page" },
    ],
    stack: ["Node.js", "REST API"],
  },
  {
    name: "ToolsTalk Admin",
    description:
      "Enterprise admin dashboard with Recharts visualisation, React Hook Form and Zod validation, Radix UI components, JWT auth and virtualised lists for large datasets.",
    image: "/images/work/toolstalk.webp",
    links: [
      { label: "Live site", href: "https://tool-talk-admin-frontend-vv6u.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Jibrand/ToolTalk-Admin-Frontend" },
    ],
    stack: ["React", "Vite", "Radix UI", "Recharts"],
  },
  {
    name: "Zayna",
    description:
      "Healthcare management platform with patient profiles, appointment scheduling, health analytics dashboards and JWT-secured routes.",
    image: "/images/work/zayna.webp",
    links: [{ label: "Live site", href: "https://zayna-web.vercel.app/" }],
    stack: ["React", "Vite", "Recharts"],
  },
  {
    name: "NexusPOS",
    description:
      "Point of sale and inventory system on the MERN stack: transaction processing, stock tracking, role-based access, sales reporting and receipt generation.",
    image: "/images/work/nexuspos.webp",
    links: [],
    linkNote: "Repository is not public — available to walk through on request.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "Live Stock Care",
    description:
      "Livestock management and e-commerce platform with animal inventory, health records, a product marketplace, Stripe payments and role-based admin analytics.",
    image: "/images/work/livestock-care.webp",
    links: [{ label: "GitHub", href: "https://github.com/Jibrand/Live-Stock-Care" }],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    name: "EduJourney",
    description:
      "React Native career-assessment app built around the RIASEC model, with result analysis, career recommendations and local persistence.",
    image: "/images/work/edujourney.webp",
    links: [
      {
        label: "Demo video",
        href: "https://drive.google.com/file/d/173tGe3KUeOmhWjQavya8iikIDcx5Twm_/view?usp=sharing",
      },
    ],
    stack: ["React Native", "Expo"],
  },
  {
    name: "V3CN",
    description:
      "Full-stack SaaS landing platform in Vue 3 and TypeScript with a Node.js and MongoDB backend, JWT auth and Cloudinary image handling.",
    image: "/images/work/v3cn.webp",
    links: [{ label: "Live site", href: "https://v3cn-landing-page.vercel.app/" }],
    stack: ["Vue 3", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    name: "Email Automation",
    description:
      "Backend for bulk email campaigns: Nodemailer delivery, template management, campaign tracking, Excel batch imports and JWT-secured contact management.",
    image: "/images/work/email-automation.webp",
    links: [],
    linkNote: "Repository is not public — available to walk through on request.",
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "PostRight",
    description:
      "Social and contact management platform with messaging, notifications and contact organisation, built on React and Vite against a backend API.",
    image: "/images/work/postright.webp",
    links: [{ label: "Live site", href: "https://post-right-xi.vercel.app" }],
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "SecureCloud Academy",
    description:
      "Cloud security bootcamp platform with curriculum management, hands-on labs, progress tracking, ApexCharts analytics and PDF certificate generation.",
    image: null,
    links: [],
    linkNote:
      "play.cloudsecuritybootcamp.com was linked previously but is not responding; link withheld until it is back up.",
    stack: ["React", "MongoDB", "ApexCharts"],
  },
  {
    name: "GenieEngage",
    description:
      "Landing product for fetching, categorising and summarising video comments in real time.",
    image: "/images/work/genie-engage.webp",
    links: [],
    linkNote: "Repository is not public — available to walk through on request.",
    stack: ["Vite", "React"],
  },
  {
    name: "YouTube Comments Automation",
    description:
      "Comment management system for creators: intelligent filtering, automated response generation, bulk moderation and engagement analytics.",
    image: "/images/work/youtube-automation.webp",
    links: [],
    linkNote: "Repository is not public — available to walk through on request.",
    stack: ["React", "Vite", "Node.js"],
  },
  {
    name: "Contactless Menu",
    description:
      "MERN digital menu and ordering system for restaurants, accessed by QR code.",
    image: "/images/work/contactless-menu.webp",
    links: [
      { label: "Live site", href: "https://theindiankitchen.netlify.app/65cbd73ece5c8ad3601e2573" },
    ],
    stack: ["MERN"],
  },
  {
    name: "Library Management System",
    description:
      "Book inventory, member registration and circulation tracking with issuance/return flows, fine calculation and reporting.",
    image: null,
    links: [{ label: "GitHub", href: "https://github.com/Jibrand/Library-Management-System-LMS" }],
    stack: ["Web application", "SQL"],
  },
  {
    name: "AI Banker (Python)",
    description:
      "Banking chatbot backend in Python Flask with OpenAI integration, conversation history and context-aware responses.",
    image: null,
    links: [{ label: "GitHub", href: "https://github.com/Jibrand/AiBankerPython" }],
    stack: ["Python", "Flask", "OpenAI API"],
  },
  {
    name: "RFQ SaaS Application",
    description:
      "Business application where requests for quotation are generated and issued to vendors, with separate authenticated profiles for vendors and the approval committee.",
    image: null,
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/SAAS-Bussiness-Application-FRONTEND" },
    ],
    stack: ["MERN"],
  },
];

export const deploymentWork = [
  {
    name: "3-Tier CI/CD with Docker & Jenkins",
    description: "Build, test and deploy pipeline for a 3-tier application using Jenkins, Docker and Kubernetes.",
    image: "/images/work/devops-jenkins.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/3-Tier-Application-CI-CD-with-Docker-Jenkins" },
    ],
  },
  {
    name: "3-Tier CI/CD with GitHub Actions",
    description: "GitHub Actions pipeline deploying a MERN application to AWS EC2 behind an Application Load Balancer.",
    image: "/images/work/devops-github-actions.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/3-Tier-Application-CICD-with-Github-Actions" },
    ],
  },
  {
    name: "3-Tier Deployment with Kubernetes",
    description: "MERN application deployed to Kubernetes using Docker, ECR and a load balancer.",
    image: "/images/work/devops-kubernetes.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/3-Tier-Application-Deployment-with-Kubernetes" },
    ],
  },
  {
    name: "Kubernetes with ArgoCD (GitOps)",
    description: "GitOps deployment of a MERN application to Kubernetes with automated scaling through ArgoCD.",
    image: "/images/work/devops-argocd.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/Application-Deploy-on-Kubernetes-with-ArgoCD" },
    ],
  },
  {
    name: "Multi-stage infrastructure with Terraform",
    description: "Dev, stage and production AWS environments provisioned with Terraform using S3, EC2 and DynamoDB.",
    image: "/images/work/devops-terraform.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/Multi-Stage-Deployment-with-Terraform" },
    ],
  },
  {
    name: "Serverless CRUD on AWS Lambda",
    description: "Create, read, update and delete API built on AWS Lambda, Node.js and DynamoDB.",
    image: "/images/work/devops-serverless.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/Serverless-Application-Using-AWS-Lambda-DynamoDB" },
    ],
  },
  {
    name: "Node.js on AWS RDS with S3 and Jenkins",
    description: "CI/CD pipeline for a Node.js application using Jenkins, Docker, AWS RDS and EC2.",
    image: "/images/work/devops-aws-rds.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/Nodejs-AWS-CRUD-App-with-RDS-S3-and-Jenkins-Pipelines" },
    ],
  },
  {
    name: "3-Tier CI/CD with GitLab",
    description: "GitLab CI pipeline covering end-to-end deployment of a MERN application to AWS EC2.",
    image: "/images/work/devops-gitlab.webp",
    links: [{ label: "GitHub", href: "https://github.com/Jibrand/3-Tier-CICD-using-Gitlab" }],
  },
  {
    name: "Reddit clone on Kubernetes",
    description: "React Reddit clone deployed with declarative Kubernetes configuration.",
    image: "/images/work/devops-reddit-k8s.webp",
    links: [
      { label: "GitHub", href: "https://github.com/Jibrand/Redit-Clone-Deployment-with-Kubernetes" },
    ],
  },
];
