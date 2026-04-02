import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCards from "./ProjectCardss";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import todo from "../../Assets/Projects/todo.png";
import ecommer from "../../Assets/Projects/ecommer.jpg";
import book from "../../Assets/Projects/book.jpg";
import cont from '../../Assets/cont.jpg'
import saas from '../../Assets/saas.jpg'
import as from '../../Assets/as.png'
import as2 from '../../Assets/2.png'
import as3 from '../../Assets/3.jpg'
import as4 from '../../Assets/shooinn.PNG'
import as5 from '../../Assets/p1.jpg'
import as6 from '../../Assets/p2.PNG'
import as7 from '../../Assets/p3.PNG'
import as8 from '../../Assets/p5.PNG'
import as89 from '../../Assets/po.jpg'
import as9 from '../../Assets/p7.png'
import as10 from '../../Assets/p11.png'
import as11 from '../../Assets/p13.png'
import as12 from '../../Assets/A.PNG'
import IK_Agency from '../../Assets/ikAgency.PNG'
import AVM from '../../Assets/AMN.PNG'
import Reddit from '../../Assets/Reddit.png'
import Argocd from '../../Assets/argocd.png'
import multisyage from '../../Assets/multisyage.png'
import docker from '../../Assets/docker.png'
import dockerGA from '../../Assets/dockerGA.png'
import GA from '../../Assets/GA.png'
import Serverless from '../../Assets/Serverless.png'
import gitlab from '../../Assets/gitlab.png'
import naws from '../../Assets/naws.png'
import KUBE from '../../Assets/KUBE.png'
import GenieEngage from '../../Assets/GenieEngage.png'
import contactless from '../../Assets/contactless.png'
import LibraryMS from '../../Assets/asp.png'
import ChairBookedDashboard from '../../Assets/chairbooked-dashboard.png'
import InboxHRDashboard from '../../Assets/inboxhr.png'
import PlutioDashboard from '../../Assets/plutio.png'
import OcorpAILogo from '../../Assets/OCORP.png'
import YTCommentsAuto from '../../Assets/ytautomate.png'
import PrivacyGuardPG from '../../Assets/PG.png'
import LiveStockLogo from '../../Assets/LSC.png'
import AiBankerLogo from '../../Assets/aiBankerr.png'
import MernPOSLogo from '../../Assets/mernpos.png'
import PostRightLogo from '../../Assets/PR.png'
import CloudSecurityLogo from '../../Assets/CSB.png'
import Story2SleepLogo from '../../Assets/story2sleep.svg'
import ZaynaLogo from '../../Assets/zayna.png'
import EmailAutomationLogo from '../../Assets/EA.png'
import SalesGuardLogo from '../../Assets/SG.png'
import ToolsTalkLogo from '../../Assets/TT.png'
import EduJourneyLogo from '../../Assets/EJ.png'
import V3CNLogo from '../../Assets/v3cn.png'

const projectsData = [
  {
    id: "library-management",
    title: "Library Management System | Web Application",
    description: "A comprehensive Library Management System designed to streamline book inventory, member registration, and circulation. Features include book catalog management, member profiles, issuance/return tracking, fine calculation, and reporting. Built with efficient database architecture for optimal performance in managing large-scale library operations.",
    ghLink: "https://github.com/Jibrand/Library-Management-System-LMS",
    imgPath: LibraryMS,
    imagePrompt: "A modern library management system interface displaying book inventory, member profiles, and circulation dashboard with clean UI, book shelves, database icons, and organized catalog management screens in blue and purple theme"
  },
  {
    id: "chair-booked",
    title: "ChairBooked | AI Chatbot & CRM Platform for Local Service Businesses",
    description: "A comprehensive SaaS platform that leverages AI chatbots to automate appointment booking, customer management, and business growth for plumbers, heating engineers, and technicians. Features 24/7 AI website chatbot, automated email status updates, review collection automation, win-back campaigns, and a powerful CRM dashboard for managing leads, appointments, and customer interactions. Built with React, MongoDB, and Node.js on Vercel.",
    ghLink: "https://github.com/Jibrand/chairbooked",
    demoLink: "https://chair-booked.vercel.app/",
    dashboardLink: "https://dashboardchair-booked.vercel.app/",
    imgPath: ChairBookedDashboard,
    imagePrompt: "A sleek SaaS dashboard for ChairBooked platform showing AI chatbot interface, CRM dashboard with appointment calendar, lead management panel, automated email templates, review tracking, analytics charts with KPIs, and win-back campaign automation interface in modern blue-purple gradient theme with professional UI elements"
  },
  {
    id: "inboxhr",
    title: "InboxHR | AI-Powered HR Management Platform",
    description: "An enterprise-grade SaaS platform powered by AI that automates HR operations and employee management. Features an intelligent 24/7 HR chatbot trained on company policies to answer employee queries, automated policy management, employee onboarding automation, Zoho integration, bulk employee import via CSV, real-time analytics on HR metrics, and enterprise-grade security. Designed to streamline HR workflows, reduce manual tasks, and improve employee support. Built with React, TypeScript, and modern cloud infrastructure.",
    demoLink: "https://inboxhr.cloud/",
    dashboardLink: "https://dashboar.inboxhr.cloud/",
    imgPath: InboxHRDashboard,
    imagePrompt: "A modern AI-powered HR management dashboard showing employee directory, AI chatbot interface, policy management panel, analytics charts with HR metrics, onboarding workflows, Zoho integration interface, attendance tracking, and leave management in a professional corporate blue and white theme"
  },
  {
    id: "plutio",
    title: "Plutio Voice Action Assistant | Desktop App Voice Control",
    description: "A hands-free voice command system integrated into Plutio's desktop application, enabling instant voice-powered productivity. Features a fixed on-screen voice widget activated via keyboard shortcut that records speech and processes it in the background to trigger automated actions. Real-time status updates display through notification bubbles, providing immediate feedback to users. Designed to streamline workflow automation and enhance user productivity with natural voice interactions.",
    demoLink: "https://drive.google.com/file/d/1swit7bEHdtBxDbvxnCgyRXbso_L2X2ts/view?usp=sharing",
    imgPath: PlutioDashboard,
    imagePrompt: "A modern Plutio desktop application interface showing a voice action widget with microphone icon, voice waveform visualization, status notification bubbles with real-time updates, hands-free control interface, and voice command processing indicators in dark theme with purple accents"
  },
  {
    id: "ocorpai",
    title: "OcorpAI | AI-Powered Automotive Design Sketch Evaluator",
    description: "An intelligent AI platform specialized in evaluating automotive exterior design sketches with professional design perspective. Features advanced sketch analysis, design intent assessment, experience level calibration, and real-time AI evaluation of design submissions. Users can upload scans, photos, or digital sketches to receive detailed professional feedback on their automotive design work. Built with cutting-edge AI technology to provide automotive designers with instant, actionable design insights.",
    demoLink: "https://ocorp-ai-chatbot.vercel.app/",
    adminLink: "https://ocorp-ai-admin.vercel.app/login",
    imgPath: OcorpAILogo,
    imagePrompt: "A sleek automotive design evaluation dashboard showing sketch upload interface, design intent analysis, AI evaluation results with professional feedback, design sketches gallery, experience level indicators, and analytics on design quality in modern dark theme with automotive blue and silver accents"
  },
  {
    id: "yt-comments-automation",
    title: "YouTube Comments Automation | Content Management System",
    description: "A powerful automation platform for YouTube content creators to efficiently manage and automate video comments. Features intelligent comment filtering, automated response generation, bulk comment management, analytics and insights on viewer engagement, and streamlined workflow for content moderation. Built with React, Vite, and Node.js backend to provide creators with comprehensive tools for managing their YouTube community at scale.",
    ghLink: "https://github.com/Jibrand/Pasha-Project",
    imgPath: YTCommentsAuto,
    imagePrompt: "A modern YouTube comments automation dashboard showing video feed with comments list, automated response templates, engagement analytics, comment filters and sorting options, bulk management tools, viewer insights charts, and moderation interface in a clean dark theme with YouTube red and white accents"
  },
  {
    id: "privacyguard",
    title: "PrivacyGuard (PiiFuse) | Privacy Data Protection & Compliance Platform",
    description: "An enterprise-grade privacy protection platform that detects and sanitizes sensitive PII (Personally Identifiable Information) and secrets before they reach logs, databases, or AI models. Features endpoint-level privacy policies, real-time PII detection and redaction, context-aware data masking, compliance audit trails, and analytics dashboards. Designed for SaaS platforms, AI/chatbots, healthcare, and enterprise tools requiring GDPR, HIPAA, and SOC 2 compliance. RESTful API with zero lock-in, built to protect user data in modern applications.",
    ghLink: "https://github.com/Jibrand/PIIFUSE-Landing-Page",
    demoLink: "https://piifuse-landing-page.vercel.app/",
    imgPath: PrivacyGuardPG,
    imagePrompt: "A sleek privacy data protection dashboard showing PII detection flow, red/green indicators for sensitive data detection, endpoint configuration panels, policy management interface, real-time analytics with charts showing detected PII entities, audit logs, and compliance metrics in dark theme with security blue and red accent colors"
  },
  {
    id: "livestock-care",
    title: "Live Stock Care | Livestock Management & E-Commerce Platform",
    description: "A comprehensive livestock management and e-commerce platform designed for farmers and agricultural businesses. Features include animal inventory tracking, health records management, breeding cycles monitoring, product marketplace for livestock-related items, shopping cart and checkout system, real-time transaction management, and admin dashboard for sales analytics. Includes user and admin authentication, role-based access control, Stripe payment integration, and complete CRUD operations for livestock data. Built with React, Node.js, MongoDB, and modern web technologies for optimal performance in agricultural operations.",
    ghLink: "https://github.com/Jibrand/Live-Stock-Care-Project",
    demoLink: "https://github.com/Jibrand/Live-Stock-Care",
    imgPath: LiveStockLogo,
    imagePrompt: "A modern livestock management dashboard showing animal inventory tracking, farm animals (cows, sheep, goats), health records interface, breeding cycle timeline, e-commerce product marketplace for livestock supplies, transaction history, and admin analytics with charts displaying sales metrics and livestock statistics in green and brown agricultural theme"
  },
  {
    id: "aibanker-python",
    title: "AI Banker | Intelligent Banking Chatbot Backend (Python)",
    description: "A sophisticated AI-powered banking chatbot backend built with Python Flask and OpenAI integration. Features intelligent conversation processing, natural language understanding for financial queries, banking context-aware responses, and comprehensive chatbot API endpoints. Utilizes OpenAI's GPT-3.5 for advanced conversational capabilities, CORS-enabled for cross-platform integration, and deployment-ready with Procfile configuration for cloud platforms. Perfect for financial institutions seeking to automate customer support with AI-driven banking assistance. Includes conversation history tracking and context-aware financial guidance.",
    ghLink: "https://github.com/Jibrand/AiBankerPython",
    imgPath: AiBankerLogo,
    imagePrompt: "A modern banking dashboard interface showing an AI chatbot widget with financial conversation interface, banking icons (credit cards, transactions, accounts), conversation bubbles, financial charts showing market data, account balance displays, and transaction history in a professional dark theme with blue and gold banking accents"
  },
  {
    id: "nexuspos-enterprise",
    title: "NexusPOS | Enterprise Point of Sale & Inventory Management System",
    description: "A comprehensive full-stack Point of Sale system built with MERN (MongoDB, Express, React, Node.js) stack designed for retail enterprises. Features include real-time transaction processing, advanced inventory management with stock tracking and alerts, multi-user authentication with role-based access control, detailed sales analytics and reporting dashboards, customer management and loyalty program integration, product catalog management, and receipt generation. Includes barcode scanning capabilities, payment integration, return/refund management, daily sales reports, and admin dashboard for monitoring business metrics in real-time.",
    ghLink: "https://github.com/Jibrand/MernPOS",
    imgPath: MernPOSLogo,
    imagePrompt: "A professional retail POS system interface showing product display with prices, shopping cart section, payment processing screen, inventory dashboard with stock levels, sales analytics charts with revenue metrics, customer profiles, and admin control panel in a modern dark theme with retail blue and accent colors"
  },
  {
    id: "postright-social",
    title: "PostRight | Social Network & Contact Management Platform",
    description: "A modern social networking and contact management platform built with React and Vite frontend connected to a robust backend API. Features include user contact management, social connection features, real-time messaging and notifications, contact list organization, and intuitive interface for managing social interactions. Built with React for fast, responsive UI, utilizing Tailwind CSS for modern styling, Axios for API communication, and react-toast for user notifications. Deployed on Vercel for seamless performance and scalability. Perfect for professionals seeking to maintain and organize their social and business networks efficiently.",
    ghLink: "https://github.com/Jibrand/postRight",
    demoLink: "https://post-right-xi.vercel.app",
    imgPath: PostRightLogo,
    imagePrompt: "A modern social network dashboard showing contact profiles, connection network visualization, messaging interface with chat bubbles, user profiles with avatars, social feed with posts, notification center, and connection management panel in a clean light/dark theme with social-inspired blue and purple accent colors"
  },
  {
    id: "securecloud-academy",
    title: "SecureCloud Academy | Comprehensive Cloud Security Learning Platform",
    description: "A comprehensive full-stack cloud security bootcamp and online learning platform with enterprise-grade dashboard. Features include advanced curriculum management, interactive lessons, hands-on labs, real-time progress tracking, role-based access control, user authentication, and detailed analytics dashboards. Built with React and Vite frontend connected to a robust backend API with MongoDB database. Includes document generation (jsPDF), advanced charting with ApexCharts, rich text editing with React Quill, form management with Formik, and React Router navigation. Dashboard displays student progress, course completion rates, lab scores, and certification tracking. Perfect for cybersecurity professionals and organizations offering cloud security education and certifications.",
    ghLink: "https://github.com/Jibrand/CloudSecurityBootcampCDashboard",
    imgPath: CloudSecurityLogo,
    imagePrompt: "A professional cloud security academy dashboard showing course catalog, student progress tracking with percentage bars, interactive lessons interface, hands-on lab assignments, certifications earned, security threat simulations, analytics charts with completion metrics, user profiles, and admin control panel in a dark theme with security blues, greens, and warning red accents"
  },
  {
    id: "story2sleep-ai",
    title: "Story2Sleep | AI-Powered Story Generation & Personalization Platform",
    description: "A sophisticated Next.js application that leverages AI to generate personalized bedtime stories for sleep and relaxation. Features include intelligent story generation with AI models, user authentication with JWT and bcrypt security, email notifications via Nodemailer, Google API integration for rich content delivery, MongoDB database for story persistence and user preferences, real-time story customization, and advanced image processing with Sharp. Built with Next.js 14 for optimal server-side rendering and performance, Tailwind CSS for beautiful responsive UI, DaisyUI components for polished design, and React Icons for intuitive controls. Perfect for users seeking a digital companion for better sleep and relaxation.",
    ghLink: "https://github.com/Jibrand/Story2Sleep",
    demoLink: "https://story2-sleep.vercel.app/",
    imgPath: Story2SleepLogo,
    imagePrompt: "A serene, calming story generation interface showing AI-powered bedtime stories, cozy bedroom illustrations, sleeping characters, dreamy landscapes with stars and moon, personalization options, story library with custom collections, user profile with save preferences, and audio player controls in a soft warm color palette with blues and purples for relaxation vibes"
  },
  {
    id: "zayna-ai-health",
    title: "Zayna | AI-Powered Healthcare Management Platform",
    description: "A comprehensive healthcare management platform designed to streamline patient care, health tracking, and medical data management. Features include patient registration and profiles, health status monitoring, appointment scheduling, medical history tracking, health analytics dashboards with interactive charts, user authentication with JWT security, and coming soon features including an app builder and gaming platform. Built with React and Vite for optimal performance, Framer Motion for smooth animations, Recharts for advanced health data visualization, Axios for API integration, and react-router-dom for seamless navigation. Includes comprehensive patient management system, protected routes, real-time notifications with hot-toast, and responsive design for mobile and desktop access.",
    ghLink: "https://github.com/Jibrand/Zayna",
    demoLink: "https://zayna-web.vercel.app/",
    imgPath: ZaynaLogo,
    imagePrompt: "A modern healthcare management dashboard showing patient directory with profiles, health analytics charts with vital signs and metrics, appointment calendar, medical history records, user authentication interface, sidebar navigation with healthcare icons (stethoscope, heart rate, medical symbols), and responsive layout in professional medical blues, greens, and whites with clean, trustworthy design elements"
  },
  {
    id: "email-automation",
    title: "Email Automation | Advanced Email Campaign Management Platform",
    description: "A robust backend system for automating email campaigns and bulk email management with enterprise-grade features. Built with Node.js and Express, featuring Nodemailer integration for reliable email delivery, MongoDB database for campaign and contact management, user authentication with JWT and bcrypt security, Excel file handling with xlsx for batch imports, Web3 integration for blockchain connectivity, and efficient email processing workflows. Features include bulk email sending, template management, campaign tracking, user authentication, role-based access control, and comprehensive contact database management. Designed as a scalable SMMA (Social Media Marketing Agency) tool for managing large-scale email campaigns with detailed analytics and delivery tracking.",
    ghLink: "https://github.com/Jibrand/Email-automation",
    imgPath: EmailAutomationLogo,
    imagePrompt: "A professional email automation dashboard showing email templates, bulk email campaign interface, contact list management, campaign analytics with delivery rates and open metrics, scheduling controls, recipient database, automation workflow builder, performance charts showing email metrics, and admin controls in a modern business blue and white theme with professional email marketing elements"
  },
  {
    id: "salesguard-b2b",
    title: "SalesGuard | AI-Powered B2B Marketplace & Seller Intelligence Platform",
    description: "A comprehensive B2B marketplace platform with advanced AI-powered seller intelligence, document analysis, and buyer-seller matching. Features include intelligent seller profile cards with AI-generated insights, advanced document parsing with PDF analysis, vector database integration with Pinecone for semantic search, OpenAI-powered recommendations, sophisticated buyer dashboard with filtering and search capabilities, role-based access control with JWT authentication, and enterprise-grade user management. Built with React and TypeScript on the frontend using Vite, Radix UI for professional components, React Hook Form for advanced form handling, Framer Motion for smooth animations, and Tailwind CSS for responsive design. Backend powered by Node.js/Express, MongoDB for data persistence, and ML-powered semantic search for intelligent matching.",
    demoLink: "https://salesguards.com/",
    imgPath: SalesGuardLogo,
    imagePrompt: "A sophisticated B2B marketplace dashboard featuring seller profile cards with AI-powered insights, advanced search and filtering interface, buyer dashboard with product listings, document upload and analysis interface, vector search visualization, analytics panels showing seller metrics, radix UI components with beautiful gradients, professional dark theme with blue and purple accents, and modern B2B design patterns"
  },
  {
    id: "toolstalk-admin",
    title: "ToolsTalk | Comprehensive Admin Dashboard & Management Platform",
    description: "A sophisticated admin dashboard and management platform designed for enterprise-level data visualization, form management, and user administration. Features include advanced data visualization with interactive Recharts, powerful form handling with React Hook Form and Zod validation, comprehensive Radix UI component library for professional UI/UX, JWT authentication with secure token management, role-based access control, and high-performance virtualized lists using React Window and React Virtuoso for handling large datasets efficiently. Built with React and Vite for optimal performance, Framer Motion for smooth animations, Recharts for advanced charting and analytics, Lucide React for comprehensive iconography, React Router DOM for seamless navigation, and Tailwind CSS for responsive design. Includes async data fetching with Axios, real-time notifications with React Hot Toast, and comprehensive date handling with date-fns. Perfect for SaaS platforms and enterprise applications requiring advanced data management and visualization.",
    demoLink: "https://tool-talk-admin-frontend-vv6u.vercel.app/",
    imgPath: ToolsTalkLogo,
    imagePrompt: "A professional admin dashboard interface featuring data visualization charts with Recharts, advanced form inputs using Radix UI components, virtualized data tables with large datasets, user management panels, role-based access controls, real-time notification toasts, navigation menus, analytics dashboards with KPIs, beautiful gradients and modern design, dark theme with professional blue and purple accents, and comprehensive admin controls"
  },
  {
    id: "edujourney-mobile",
    title: "EduJourney | AI-Powered Career Assessment & Educational Guidance Mobile App",
    description: "A comprehensive React Native mobile application designed to guide students through personalized educational and career pathways using AI-powered assessment tools. Features include the RIASEC career assessment test (Realistic, Investigative, Artistic, Social, Enterprising, Conventional), intelligent result analysis with career recommendations, user profile management, comprehensive test history tracking, and beautiful animated UI transitions. Built with React Native and Expo for cross-platform iOS and Android deployment, React Navigation for seamless app navigation, Reanimated for smooth animations, and Linear Gradient for modern visual design. Includes local data persistence with Async Storage, comprehensive test modules with multiple assessment methodologies, detailed result screens with career insights, and an intuitive user information collection system. Perfect for educational institutions and career guidance centers providing students with data-driven insights into their aptitudes and ideal career paths.",
    ghLink: "https://github.com/Jibrand/EduJourney",
    imgPath: EduJourneyLogo,
    imagePrompt: "A modern mobile app interface showing career assessment screens, RIASEC test questions with animated transitions, result dashboards with career recommendations, user profiles, animated loading screens, colorful gradient backgrounds, intuitive navigation, educational content, test progress indicators, career pathway visualizations, and beautiful mobile-first design with smooth animations and modern typography"
  },
  {
    id: "v3cn-saas",
    title: "V3CN | Comprehensive SaaS Landing Page & Platform",
    description: "A sophisticated full-stack SaaS platform built with modern web technologies featuring comprehensive landing page components and robust backend infrastructure. Frontend built with Vue.js 3, TypeScript, Shadcn/Vue components, Tailwind CSS for responsive design, and Vite for optimal build performance. Features fully responsive design with dark mode support, complete landing page sections including navbar, hero section, sponsors showcase, benefits, features, services, how-it-works, testimonials, pricing tables, comprehensive FAQ, team showcase, community section, and contact forms. Backend powered by Node.js/Express with MongoDB for data persistence, JWT authentication for secure access, bcrypt for password security, Cloudinary integration for image management, and CORS configuration for cross-origin access. Includes mobile-optimized sidebar navigation, smooth animations with embla-carousel and vue3-marquee, form validation with Vee-Validate and Zod, and comprehensive meta tags for SEO optimization. Perfect for SaaS companies needing a professional landing page with full backend support.",
    demoLink: "https://v3cn-landing-page.vercel.app/",
    ghLink: "https://github.com/Jibrand/-v3cn4",
    imgPath: V3CNLogo,
    imagePrompt: "A modern SaaS landing page interface featuring comprehensive sections: hero with call-to-action buttons, sponsor logos carousel, feature cards with icons, pricing tables with comparison, team members grid, testimonials carousel with avatars, FAQ accordion section, contact form, responsive navigation with dark mode toggle, beautiful gradients and animations, professional branding, and polished typography"
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ChairBookedDashboard}
              isBlog={false}
              title="ChairBooked | AI Chatbot & CRM Platform"
              description="A comprehensive SaaS platform for local service businesses (plumbers, heating engineers) featuring 24/7 AI website chatbot for appointment booking, automated email status updates, review collection automation, win-back campaigns, and a powerful CRM dashboard. Increases client bookings by 10-15/month. Built with React, MongoDB, Node.js deployed on Vercel."
              ghLink="https://github.com/Jibrand/chairbooked"
              demoLink="https://chair-booked.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={InboxHRDashboard}
              isBlog={false}
              title="InboxHR | AI-Powered HR Management Platform"
              description="An enterprise SaaS platform automating HR operations with AI-powered 24/7 employee chatbot, policy management automation, employee onboarding, Zoho integration, bulk CSV import, real-time analytics, and enterprise security. Streamlines HR workflows and reduces manual tasks while improving employee support."
              demoLink="https://inboxhr.cloud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={PlutioDashboard}
              isBlog={false}
              title="Plutio Voice Action Assistant | Desktop App Voice Control"
              description="A hands-free voice command system for Plutio's desktop app featuring on-screen voice widget, speech processing, and real-time status notifications. Records voice commands and automatically triggers actions in the background for seamless voice-powered productivity."
              demoLink="https://drive.google.com/file/d/1swit7bEHdtBxDbvxnCgyRXbso_L2X2ts/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Reddit}
              isBlog={false}
              title="Redit-Clone-Deployment-with-Kubernetes"
              description="Frontend-only Reddit clone deployed on Kubernetes. Features React-based responsive UI and scalable, declarative configurations using Kubernetes."
              ghLink="https://github.com/Jibrand/Redit-Clone-Deployment-with-Kubernetes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Argocd}
              isBlog={false}
              title="Application-Deploy-on-Kubernetes-with-ArgoCD"
              description="A MERN app deployment project using Kubernetes and GitOps with ArgoCD. Automates scaling and management while adhering to modern CI/CD practices."
              ghLink="https://github.com/Jibrand/Application-Deploy-on-Kubernetes-with-ArgoCD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={multisyage}
              isBlog={false}
              title="Multi-Stage-Deployment-with-Terraform"
              description="Multi-stage deployment using Terraform for AWS infrastructure. Automates Dev, Stage, and Prod environments with S3, EC2, and DynamoDB. Scalable, efficient, and modular."
              ghLink="https://github.com/Jibrand/Multi-Stage-Deployment-with-Terraform"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCards
              imgPath={OcorpAILogo}
              isBlog={false}
              title="OcorpAI | AI-Powered Automotive Design Sketch Evaluator"
              description="An intelligent AI platform for evaluating automotive exterior design sketches with professional design perspective. Features advanced sketch analysis, design intent assessment, and real-time AI feedback. Users upload sketches to receive detailed design insights for automotive design work."
              demoLink="https://ocorp-ai-chatbot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={YTCommentsAuto}
              isBlog={false}
              title="YouTube Comments Automation | Content Management System"
              description="A powerful automation platform for YouTube creators to manage and automate video comments efficiently. Features intelligent comment filtering, automated response generation, bulk comment management, engagement analytics, and streamlined moderation workflows."
              ghLink="https://github.com/Jibrand/Pasha-Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={docker}
              isBlog={false}
              title="3-Tier-Application-CI-CD-with-Docker-Jenkins"
              description="Efficient CI/CD pipeline for 3-tier applications using Jenkins, Docker, and Kubernetes. Automates building, testing, and deploying applications with monitoring and feedback mechanisms."
              ghLink="https://github.com/Jibrand/3-Tier-Application-CI-CD-with-Docker-Jenkins"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Serverless}
              isBlog={false}
              title="Serverless-Application-Using-AWS-Lambda-DynamoDB"
              description="A professional CRUD API built with AWS Lambda, Node.js, and DynamoDB. It supports Create, Read, Update, and Delete operations."
              ghLink="https://github.com/Jibrand/Serverless-Application-Using-AWS-Lambda-DynamoDB"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={gitlab}
              isBlog={false}
              title="3-Tier-CICD-using-Gitlab"
              description="This project demonstrates the end-to-end deployment pipeline of a MERN stack application with CI/CD automation using GitLab CI, and deployment on AWS EC2"
              ghLink="https://github.com/Jibrand/3-Tier-CICD-using-Gitlab"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCards
              imgPath={SalesGuardLogo}
              isBlog={false}
              title="SalesGuard | AI-Powered B2B Marketplace"
              description="A comprehensive B2B marketplace with AI-powered seller intelligence, document analysis, and intelligent matching. Features include AI-generated seller insights, advanced PDF analysis, Pinecone vector database for semantic search, OpenAI recommendations, sophisticated filtering, and enterprise authentication. Built with React, TypeScript, Vite, Radix UI, Node.js backend, MongoDB, and ML-powered semantic search."
              demoLink="https://salesguards.com/"
              ghLink="https://github.com/Jibrand/salesguard-LandingPage-V2-Next.js"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ToolsTalkLogo}
              isBlog={false}
              title="ToolsTalk | Admin Dashboard & Management"
              description="A sophisticated admin dashboard for enterprise data visualization and management. Features advanced Recharts visualization, React Hook Form with Zod validation, comprehensive Radix UI components, JWT authentication, role-based access, virtualized lists for large datasets. Built with React, Vite, Framer Motion, React Router DOM, Tailwind CSS, and high-performance data handling."
              demoLink="https://tool-talk-admin-frontend-vv6u.vercel.app/"
              ghLink="https://github.com/Jibrand/ToolTalk-Admin-Frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={naws}
              isBlog={false}
              title="Nodejs-AWS-CRUD-App-with-RDS-S3-and-Jenkins-Pipelines"
              description="This repository contains a complete DevOps project with a CI/CD pipeline built using Jenkins, Docker, AWS RDS, and EC2, featuring automated deployments and continuous integration for a Node.js application."
              ghLink="https://github.com/Jibrand/Nodejs-AWS-CRUD-App-with-RDS-S3-and-Jenkins-Pipelines"
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCards
              imgPath={EduJourneyLogo}
              isBlog={false}
              title="EduJourney | Career Assessment Mobile App"
              description="A comprehensive React Native mobile app providing AI-powered career assessment and educational guidance. Features RIASEC career testing, intelligent result analysis with career recommendations, user profiles, test history tracking, and smooth animations. Built with React Native, Expo, React Navigation, Reanimated, and modern mobile-first design for iOS and Android."
              ghLink="https://github.com/Jibrand/EduJourney"
              demoLink="https://drive.google.com/file/d/173tGe3KUeOmhWjQavya8iikIDcx5Twm_/view?usp=sharing"
            />
          </Col>
              <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ZaynaLogo}
              isBlog={false}
              title="Zayna | AI-Powered Healthcare Management"
              description="A comprehensive healthcare platform for patient care, health tracking, and medical data management. Features patient profiles, appointment scheduling, health analytics dashboards, JWT authentication, and coming soon app builder and gaming features. Built with React, Vite, Framer Motion, Recharts, and responsive design."
              demoLink="https://zayna-web.vercel.app/"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCards
              imgPath={MernPOSLogo}
              isBlog={false}
              title="NexusPOS | Enterprise Point of Sale & Inventory System"
              description="A comprehensive full-stack POS system built with MERN stack for retail enterprises. Features real-time transaction processing, advanced inventory management, multi-user authentication with role-based access, sales analytics dashboards, customer management, product catalog, barcode scanning, payment integration, and daily sales reporting."
              ghLink="https://github.com/Jibrand/MernPOS"
            />
          </Col>

              <Col md={4} className="project-card">
            <ProjectCards
              imgPath={PrivacyGuardPG}
              isBlog={false}
              title="PrivacyGuard (PiiFuse) | Privacy Data Protection Platform"
              description="An enterprise-grade platform that detects and sanitizes sensitive PII and secrets in real-time. Features endpoint-level privacy policies, PII detection/redaction, compliance audit trails, and analytics dashboards for GDPR, HIPAA, and SOC 2 compliance."
              ghLink="https://github.com/Jibrand/PIIFUSE-Landing-Page"
              demoLink="https://piifuse-landing-page.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={dockerGA}
              isBlog={false}
              title="3-Tier-Application-CI-CD-Pipeline-with-Docker-and-GitHub-Actions"
              description="Efficient CI/CD pipeline for deploying 3-tier applications with GitHub Actions and Docker. Automates the lifecycle from code changes to production deployment on EC2."
              ghLink="https://github.com/Jibrand/3-Tier-Application-CI-CD-Pipeline-with-Docker-and-GitHub-Actions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={AiBankerLogo}
              isBlog={false}
              title="AI Banker | Intelligent Banking Chatbot Backend"
              description="An AI-powered banking chatbot backend built with Python Flask and OpenAI integration. Features intelligent conversation processing, natural language understanding for financial queries, context-aware banking responses, and comprehensive chatbot API endpoints. Includes conversation history tracking and deployment-ready configuration."
             />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={GA}
              isBlog={false}
              title="3-Tier-Application-CICD-with-Github-Actions"
              description="Automate CI/CD for MERN applications with GitHub Actions and deploy on AWS EC2 using an Application Load Balancer. A complete guide to scalable full-stack deployment."
              ghLink="https://github.com/Jibrand/3-Tier-Application-CICD-with-Github-Actions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={KUBE}
              isBlog={false}
              title="3-Tier-Application-Deployment-with-Kubernetes"
              description="A full-stack MERN application deployed using Kubernetes, Docker, ECR, and Load Balancer for a scalable 3-tier architecture."
              ghLink="https://github.com/Jibrand/3-Tier-Application-Deployment-with-Kubernetes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={GenieEngage}
              isBlog={false}
              title="GenieEngage"
              description="GenieEngage allows you to easily fetch, categorize, and summarize all your video comments in real-time, helping you make data-driven decisions."
              ghLink="https://github.com/Jibrand/ViteLandingPageGenieEngage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={contactless}
              isBlog={false}
              title="ContactLess Menu System Project"
              description="A MERN stack Contactless Menu System enabling seamless digital menu browsing and ordering. Designed for efficiency, security, and user convenience, revolutionizing dining experiences with modern, touch-free technology."
              demoLink="https://theindiankitchen.netlify.app/65cbd73ece5c8ad3601e2573"
            />
          </Col>

        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>






















          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IK_Agency}
              isBlog={false}
              title="Digital Marketing Website with Interior Design Niche"
              description="Explore the cutting-edge digital marketing solutions tailored for the interior design niche. Elevate your brand, captivate audiences, and drive success in the competitive world of interior design with our specialized strategies and expertise."
              ghLink="https://github.com/Jibrand"
              demoLink="https://theikagency.com/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as10}
              isBlog={false}
              title="Crypto Wallet |  MERN Stack, Web3.js --[[Under development Process]]"
              description="I've developed a Web 3.0 blockchain application using the MERN stack and integrated web3.js for blockchain transactions"
              ghLink="https://github.com/Jibrand/Crypto-Wallet"
              demoLink="https://magical-twilight-b5e924.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saas}
              isBlog={false}
              title=" Project Management, SAAS Application | Full Stack (MERN)"
              description="Designed both frontend and backend using cloud database (mongodb), RFQ will generate whichwill be invited to vendors to get their Quotes, different profile section for them and for the higher-Committee, the Data is Authenticated and Safe."
              ghLink="https://github.com/Jibrand/SAAS-Bussiness-Application-FRONTEND"
            //  demoLink="http://54.37.6.229:3000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AVM}
              isBlog={false}
              title="Digital Maketing Project for AVM Marketing"
              description="Wrapped up the  digital marketing  website development for AVM, highlighting THE expertise and services with finesse."
              ghLink="https://github.com/Jibrand"
              demoLink="https://avmmarketing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as11}
              isBlog={false}
              title="Digital Marketing Agency | Next.js"
              description="Recently, Completed the development of a sophisticated website for our digital marketing agency, showcasing our expertise and services"
              ghLink="https://github.com/Jibrand/My-Agency"
              demoLink="https://webtose.netlify.com/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as12}
              isBlog={false}
              title="Bee Hive Investment Project | MERN Stack | Sanity"
              description="Developed the Bee Hive Investment Project, allowing investors to purchase hive trees and other assets. After 2-3 months, investors receive revenue generated from honey, pollen, and other products obtained from their hive. Integrated Stripe for secure transactions and utilized Sanity for efficient content management and organization."
              demoLink="https://beequeencoin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as2}
              isBlog={false}
              title="Blockchain Cryptocurrency App | Web 3.0"
              description="Made the Blockchain (Web 3.0) application through which we can send Ethereum to any Blockchain Address and charge the Gas Price, against each transaction, also record all of the transactions with a unique gif."
              ghLink="https://github.com/Jibrand/Web-3.0"
              demoLink="https://mykryptc.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as4}
              isBlog={false}
              title="Shooinndmv |  Best Sneaker Seller [WordPress]"
              description=" It is an Ecommerce website of Sneaker, Which offer high-quality sneakers and shoes, including the latest trends and timeless classics, to meet your footwear needs."
              ghLink="https://github.com/Jibrand/"
              demoLink="https://shooinndmv.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as89}
              isBlog={false}
              title="Bookeeping Accounting Website | Manage the Accounts [WordPress]"
              description="Successfully created a comprehensive bookkeeping and accounting website, simplifying financial management for businesses and individuals alike."
              ghLink="https://github.com/Jibrand"
              demoLink="https://superiorsums.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as5}
              isBlog={false}
              title="Ecommerce Website |  Asp.Net MVC"
              description="Developed an ASP.NET and MS SQL Server e-commerce website for furniture, featuring comprehensive CRUD operations for seamless management."
              ghLink="https://github.com/Jibrand/Online-Shop-Asp.Net"
              demoLink="https://www.youtube.com/watch?v=Ucc3mgK4mFc&t=7s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as6}
              isBlog={false}
              title="Pavilion Mart | Desktop Application [C#]"
              description="Created a C# desktop application for a supermarket, functioning as a shopping cart and billing software, utilizing MS SQL Server for data management."
              ghLink="https://github.com/Jibrand/Pavilion-Mart-CSharp"
              demoLink="https://www.youtube.com/watch?v=69lIBl2GBmE&t=26s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as7}
              isBlog={false}
              title="Point Of Sale | Desktop Application [C#]"
              description="Created a C# desktop application for The Business to Store their Ledger and Stock, functioning as a Point Of Sale Software, utilizing MS SQL Server for data management."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=Ki4zuaZgKWY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as8}
              isBlog={false}
              title="Hotel Management Software | Desktop Application [C#]"
              description="Created a C# desktop application for The Business to Store their Hotal Data and The Customer Data, functioning as a Management Software."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=OdeCsFZ0Q8k"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as9}
              isBlog={false}
              title="Education Management Software | Web Application [HTML, CSS, JQuery]"
              description="Created a Web application for The Education for admission and tracking all the data of students, functioning as a Education Management Software."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=PZAE9wPbGYQ&t=218s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as}
              isBlog={false}
              title="Job Finding | Mobile App (Cross Platform) | React Native"
              description="Made the Job Finding app in React Native. Jobs are listed from Rapid API, Users can selectand apply for jobs by joining their respective websites from the app."
              ghLink="https://github.com/Jibrand/React-Native-Jobs-Application"
              demoLink="https://dribbble.com/shots/22528015-Job-Finding-Mobile-App-Cross-Platform-React-Native"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cont}
              isBlog={false}
              title="Open AI Application (Copymatic) | Frontend (MERN)"
              description="Designed the frontend of Open AI application to generate the Automatic blog and content, such as Copymatic and Chat Gpt, use Tailwind Css with glass morphism effects, Mobile Responsive, and eye-catchy."
              ghLink="https://github.com/Jibrand"
              demoLink="https://dribbble.com/shots/22527970-Open-AI-Application-Copymatic-Frontend-MERN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as3}
              isBlog={false}
              title="Tons of Web & desktop Applications"
              description="Built tons of websites with the passage of time, with Different Programming Languages and With other Platforms such as using MERN Stack, WordPress, Wix, and Shopify, interacting with many databases such as Mongo Db, Firebase, Ms. SQL Server, My SQL, etc."
              ghLink="https://github.com/jibrand"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LibraryMS}
              isBlog={false}
              title="Library Management System | Web Application"
              description="A comprehensive Library Management System designed to streamline book inventory, member registration, and circulation. Features include book catalog management, member profiles, issuance/return tracking, fine calculation, and reporting. Built with efficient database architecture for optimal performance in managing large-scale library operations."
              ghLink="https://github.com/Jibrand/Library-Management-System-LMS"
            />
          </Col>

      

     

      

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={LiveStockLogo}
              isBlog={false}
              title="Live Stock Care | Livestock Management & E-Commerce Platform"
              description="A comprehensive livestock management and e-commerce platform with animal tracking, health records, breeding cycles monitoring, product marketplace, Stripe payments, and admin analytics. Features user authentication, role-based access control, and complete CRUD operations for agricultural operations."
              ghLink="https://github.com/Jibrand/Live-Stock-Care"
            />
          </Col>


         
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={PostRightLogo}
              isBlog={false}
              title="PostRight | Social Network & Contact Management Platform"
              description="A modern social networking and contact management platform built with React and Vite. Features user contact management, social connection features, real-time messaging and notifications, contact organization, Tailwind CSS styling, Axios API communication, and react-toast notifications. Deployed on Vercel for seamless performance."
              ghLink="https://github.com/Jibrand/postRight"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={CloudSecurityLogo}
              isBlog={false}
              title="SecureCloud Academy | Cloud Security Learning Platform"
              description="A comprehensive full-stack cloud security bootcamp with enterprise dashboard. Features curriculum management, interactive lessons, hands-on labs, real-time progress tracking, role-based access, ApexCharts analytics, PDF generation, Formik forms, React Quill rich text, and MongoDB backend. Displays student progress, course completion, lab scores, and certification tracking."
              ghLink="https://github.com/Jibrand/CloudSecurityBootcampCDashboard"
              demoLink='https://play.cloudsecuritybootcamp.com'
            />
          </Col>

      
 

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={EmailAutomationLogo}
              isBlog={false}
              title="Email Automation | Email Campaign Management"
              description="A robust backend system for automating email campaigns and bulk email management with enterprise features. Built with Node.js, Express, Nodemailer integration, MongoDB, JWT authentication, bcrypt security, Excel file handling, and Web3 integration. Features bulk sending, template management, campaign tracking, contact database, and comprehensive analytics for SMMA operations."
              ghLink="https://github.com/Jibrand/Email-automation"
            />
          </Col>

         

       
  <Col md={4} className="project-card">
            <ProjectCards
              imgPath={V3CNLogo}
              isBlog={false}
              title="V3CN | Comprehensive SaaS Landing Page"
              description="A sophisticated full-stack SaaS platform with modern landing page. Features Vue.js 3, TypeScript, Shadcn/Vue, responsive design with dark mode, hero sections, pricing tables, testimonials, FAQ, team showcase. Backend with Node.js, Express, MongoDB, JWT auth, bcrypt security, Cloudinary integration, and SEO optimization."
              ghLink="https://github.com/Jibrand/-v3cn4"
              demoLink="https://v3cn-landing-page.vercel.app/"
            />
          </Col>
        
        </Row>



      </Container>
    </Container>
  );
}

export default Projects;
