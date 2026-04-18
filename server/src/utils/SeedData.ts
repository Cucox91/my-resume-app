import Experience, { IExperience } from "../models/mongoose/ExperienceModel";
import Education, { IEducation } from "../models/mongoose/EducationModel";
import Subject, { ISubject } from "../models/mongoose/SubjectModel";
import Skill, { ConfidenceLevel, ISkill } from "../models/mongoose/SkillModel";
import Hobby from "../models/mongoose/HobbyModel";
import Learning, { LearningStatus } from "../models/mongoose/LearningModel";
import { HydratedDocument, Types } from "mongoose";

export const seedAllData = async () => {
  console.log("Seed Process Started");

  console.log("Removing Existing Data");

  await Skill.deleteMany();
  await Experience.deleteMany();
  await Education.deleteMany();
  await Subject.deleteMany();
  await Hobby.deleteMany();
  await Learning.deleteMany();

  console.log("Seeding Skills");
  const skillsCount = await Skill.countDocuments();
  if (skillsCount === 0) {
    await seedSkills();
  }

  console.log("Seeding Experiences");
  const experiencesCount = await Experience.countDocuments();
  if (experiencesCount === 0) {
    await seedExperiences();
  }

  console.log("Seeding Educations");
  const educationCount = await Education.countDocuments();
  if (educationCount === 0) {
    await seedEducation();
  }

  console.log("Seeding Hobbies");
  const hobbiesCount = await Hobby.countDocuments();
  if (hobbiesCount === 0) {
    await seedHobbies();
  }

  console.log("Seeding Learning");
  const learningCount = await Learning.countDocuments();
  if (learningCount === 0) {
    await seedLearning();
  }

  console.log("Seed Process Completed");
};

const seedExperiences = async () => {
  const experiences = [
    // FDOT
    {
      title: "Software Engineer",
      company: "Florida Department of Transportation (FDOT)",
      fromDate: new Date("04-01-2022"),
      toDate: null,
      teamSize: 20,
      location: "Miami, FL (Remote)",
      responsibilities: [
        "Led modernization of MRP2, replacing a legacy mainframe-driven roadway inspection process with a modern .NET + SQL Server + ArcGIS platform that keeps inspectors, reviewers, and GIS data in near real-time sync.",
        "Designed and delivered SunEx, a real-time incident notification system spanning a Node.js API, MERN web application, Firebase push pipeline, and React Native / Expo mobile app; supports roughly 400 subscribed users.",
        "Built PDL, a workflow-heavy system used to create, route, revise, approve, and publish policy and procedural documents across requestors, legal review, directors, and executive leadership; supports about 1,000 concurrent users.",
        "Contributed to modernization of the Bridge Management System, moving a Visual Basic application to .NET 12 + Blazor SSR while aligning implementation details with AASHTO / USDOT compliance requirements.",
        "Worked across REST APIs, Azure-hosted services, email notification flows, GIS integrations, and mobile experiences; frequently assigned to ambiguous, high-responsibility projects because of prior delivery track record.",
      ],
      projects: [
        {
          name: "MRP2",
          description:
            "Modernization of a legacy COBOL/JCL mainframe roadway inspection system from 1987 into a .NET + SQL Server + ArcGIS platform. Keeps inspectors, reviewers, and GIS data in near real-time sync. Inspectors now complete inspections on-site via tablet instead of by hand.",
          skillNames: ["C#", ".NET", "Blazor", "HTMX", "ASP.NET Core", "Entity Framework Core", "Tailwind CSS", "MSSQL", "T-SQL", "GIS Integration", "COBOL"],
        },
        {
          name: "SunEx",
          description:
            "Real-time incident notification system spanning a Node.js API, MERN web application, Firebase push pipeline, and React Native / Expo mobile app. Connects to Sunguide for live highway event data and supports roughly 400 subscribed FDOT users.",
          skillNames: [
            "Expo",
            "React Native",
            "Microsoft App Center",
            "TypeScript",
            "Mongo DB",
            "Express",
            "React",
            "Node",
            "Mongoose",
            "Microsoft Entra",
            "Axios",
            "Bootstrap",
            "Kendo UI",
            "Firebase",
            "Docker",
          ],
        },
        {
          name: "PDL",
          description:
            "Workflow system for creating, routing, revising, approving, and publishing policy and procedural documents across the organization. Supports about 1,000 concurrent users across requestors, legal review, directors, and executive leadership.",
          skillNames: ["TypeScript", "Mongo DB", "Express", "React", "Node", "Mongoose", "Microsoft Entra", "Axios", "Bootstrap", "Kendo UI", "Firebase", "Docker"],
        },
        {
          name: "Bridge Management System (BMS)",
          description:
            "Modernization of a Visual Basic application to .NET 12 + Blazor SSR, aligning with AASHTO / USDOT compliance requirements. Coordinating directly with the AASHTO team to guarantee ongoing regulatory compliance.",
          skillNames: ["C#", ".NET", "Blazor", "ASP.NET Core", "MSSQL", "T-SQL"],
        },
      ],
      skillNames: ["Postman", "Azure", "Azure DevOps", "YAML", "Agile"],
    },
    // HUD
    {
      title: "Software Architect (Consultant)",
      company: "U.S. Department of Housing and Urban Development (HUD)",
      fromDate: new Date("11-01-2020"),
      toDate: new Date("04-01-2022"),
      responsibilities: [
        "Architected and delivered a public-facing knowledge and Q&A platform from scratch using .NET, React, Azure Blob Storage, and supporting Azure services to centralize fragmented program information related to renting, buying, loans, and documentation.",
        "Scaled the platform from an expected few hundred monthly users to roughly 6,000 monthly users during the first year of operation without requiring a redesign of the core architecture.",
        "Owned system design, backend implementation, frontend direction, and overall delivery while coordinating a small team that included an additional developer and QA support.",
        "Focused on cache-friendly access patterns and low-friction document retrieval so public users could find answers quickly rather than relying on slower call and email channels.",
      ],
      projects: [
        {
          name: "ECP2P",
          description: "Public-facing Q&A and knowledge platform centralizing HUD program information on renting, buying, loans, and documentation. Scaled to ~6,000 monthly users in its first year. Built with .NET, React, and Azure Blob Storage.",
          skillNames: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "MSSQL", "T-SQL", "SQLite", "Semantic UI", "Kendo UI", "Adobe XD", "draw.io"],
        },
      ],
      location: "Washington D.C (Remote)",
      teamSize: 3,
    },
    // SafeBuilt
    {
      title: "Software Engineer Consultant",
      company: "SafeBuilt (Calvin Giordano and Associates)",
      fromDate: new Date("09-01-2019"),
      toDate: new Date("10-01-2022"),
      responsibilities: [
        "Built a multi-tenant administrative platform during a merger and COVID-era operational transition, enabling faster onboarding, permission assignment, and client access management across a growing organization.",
        "Integrated the system with Azure Active Directory and designed it to support both enterprise identity requirements and changing business rules during the consolidation period.",
        "Developed additional internal systems including payment-processing middleware for permits and transaction workflows, plus SSRS reporting and maintenance/support work for legacy city portals.",
      ],
      projects: [
        {
          name: "Gov-Easy Admin Tool (GAT)",
          description: "Multi-tenant admin dashboard built during a company merger and COVID transition. Enabled fast employee onboarding, permission assignment, and client access management. Integrated with Azure Active Directory.",
          skillNames: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "MSSQL", "T-SQL", "Microsoft Entra", "Kendo UI"],
        },
        {
          name: "Gov-Easy POS",
          description: "Payment-processing middleware for permits and transaction workflows. Maintained client data privacy while enabling secure processing of licenses, permits, and related transactions.",
          skillNames: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "MSSQL", "T-SQL", "XML"],
        },
        {
          name: "Gov-Easy Reporting Services",
          description: "Reporting engine using SSRS and T-SQL to generate dynamic, on-demand municipal reports for city portal clients.",
          skillNames: ["MSSQL", "T-SQL", "SSRS", "SSMS", "RDL"],
        },
      ],
      location: "Fort Lauderdale, FL",
      teamSize: 5,
    },
    // BocaVox / Maestro SIS
    {
      title: "Software Engineer",
      company: "BocaVox / Maestro SIS",
      fromDate: new Date("10-01-2017"),
      toDate: new Date("09-01-2019"),
      responsibilities: [
        "Designed and implemented Maestro Integration Manager (MIM), a generalized ingestion and synchronization system connecting the Maestro Student Information System to 14 LMS platforms spanning REST, SOAP, XML/JSON APIs, FTP/CSV workflows, and other integration styles.",
        "Re-architected a nightly process that handled billions of records; by combining multithreaded C# ingestion, SQL staging, and SQL-heavy merge/cleanup phases, reduced runtime from roughly 9 hours to 30 minutes.",
        "Avoided unnecessary serialization and ORM overhead in the hottest paths; shifted substantial processing from Entity Framework driven application logic to optimized SQL operations once data had been normalized into temporary tables.",
        "Reduced infrastructure requirements from four collocated servers to one primary server with one secondary kept for resilience, cutting hosting costs by hundreds of thousands of dollars annually while materially improving reliability and supportability.",
      ],
      projects: [
        {
          name: "Maestro Integration Manager (MIM)",
          description: "Generalized ingestion and sync engine connecting Maestro SIS to 14 LMS platforms via REST, SOAP, XML/JSON, FTP/CSV, and other styles. Reduced nightly runtime from ~9 hours to ~30 minutes and infrastructure from 4 servers to 1, saving hundreds of thousands annually.",
          skillNames: [
            "C#",
            "T-SQL",
            "XML",
            "JSON",
            "MSSQL",
            "CSV",
            "Multi-Threading",
            "Parallelism",
            "Concurrency",
            "Rest API",
            "FTP",
            "SOAP API",
            "Serialization",
            "WCF",
            "ASP.NET MVC",
          ],
        },
      ],
      location: "Weston, FL",
      teamSize: 10,
    },
    // eNet IT Group
    {
      title: ".NET Developer",
      company: "eNet IT Group",
      fromDate: new Date("12-01-2016"),
      toDate: new Date("11-01-2017"),
      responsibilities: [
        "Delivered full-stack web solutions for clients in food delivery, regulated payments, and automotive inventory using .NET Core, AngularJS, and SQL Server.",
        "Helped a food delivery client move from roughly 20 concurrent customers to about 300 concurrent customers on the web experience.",
        "Worked on an automotive dealership platform that the client later credited with helping grow from around 1,000 monthly customers to about 6,000 monthly customers.",
      ],
      skillNames: ["ASP.NET Core", "C#", "Angular", "MSSQL", "T-SQL", "Azure"],
      teamSize: 4,
      location: "Miami, FL",
    },
    // SYNCWARE
    {
      title: "SharePoint Administrator & Developer",
      company: "Syncware",
      fromDate: new Date("04-01-2014"),
      toDate: new Date("05-01-2016"),
      responsibilities: [
        "Implemented on-premises SharePoint, SQL Server, and Exchange-backed workflow systems serving roughly 3,000–5,000 users; reduced approval and resolution timelines from multi-month delays to about 3–7 days for many cases.",
        "Created a custom C# / WPF / PowerShell utility for reading, editing, transporting, and syncing Active Directory hierarchy data in low-connectivity environments, reducing costly travel and making directory management more efficient.",
        "Handled hands-on administration across VMware, networking, Active Directory, and Microsoft server technologies — an early role that built the systems mindset behind later backend and modernization work.",
      ],
      skillNames: ["C#", "ASP.NET MVC", "SharePoint", "Active Directory", "WPF", "WCF", "PowerShell", "MSSQL", "T-SQL"],
      teamSize: 6,
      location: "Havana, Cuba",
    },
  ];

  if (experiences.length > 0) {
    await seedExperienceSkillsAndSave(experiences);
  }
};

const seedSkills = async () => {
  const skills = [
    // Languages:
    {
      name: "C#",
      description: "Core language used throughout my career to build scalable backends, APIs, desktop tools, and internal enterprise solutions.",
      yearsOfProffesionalExperience: 11, //2014
      yearsOfIndividualExperience: 16, //2009
      yearLastUse: 2025,
      notes: [
        "My primary professional language — most of my architectural decisions and core systems are built in C#.",
        "Deep experience with .NET, async patterns, LINQ, and performance tuning.",
      ],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "TypeScript",
      description: "Strongly typed superset of JavaScript used across all modern frontend and full-stack projects.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["My preferred language for frontend work.", "Most of my current personal and client-facing projects are written in TypeScript."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "JavaScript",
      description: "The foundational scripting language used in both frontend and backend contexts.",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 11,
      yearLastUse: 2025,
      notes: ["Used in scenarios where TypeScript is not feasible or for rapid prototyping.", "Often involved when maintaining or integrating with legacy codebases."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Python",
      description: "Used for data manipulation, automation scripts, and early experimentation in AI and ML workflows.",
      yearsOfProffesionalExperience: 0,
      yearsOfIndividualExperience: 3,
      yearLastUse: 2025,
      notes: ["ot used professionally yet — focused on self-learning through side projects.", "Planning to integrate it more for DevOps tasks and AI workloads."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "C",
      description: "Low-level systems programming language I'm currently re-learning as part of my transition into embedded and high-performance computing.",
      yearsOfProffesionalExperience: 0,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2025,
      notes: ["Previously used during academic and personal exploration.", "Actively building muscle memory again for performance-oriented system work."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "C++",
      description: "Object-oriented systems language used in the past for algorithmic problem-solving, now being revisited for HPC and low-latency applications.",
      yearsOfProffesionalExperience: 0,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2008,
      notes: ["Had prior exposure in my early programming days.", "Currently brushing up to support HPC and Quant-related goals."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "YAML",
      description: "Configuration language used extensively in CI/CD pipelines, containerization workflows, and cloud resource definitions.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["Used in Azure Pipelines, GitHub Actions, Docker Compose, and Kubernetes manifests.", "Often edited alongside build scripts and deployment configs."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "XML",
      description: "Structured data format used primarily in enterprise integrations, especially with legacy systems or SOAP APIs.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2022,
      notes: ["Frequently handled in government-related projects and reporting services.", "Often used in tandem with XSLT, WCF, and document schemas."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "PowerShell",
      description: "Scripting tool of choice for Windows system automation, user management, and development environment setup.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: ["Developed internal tools and admin scripts to manage user accounts and automate repetitive tasks.", "Still my default choice for scripting on Windows."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "JSON",
      description: "Primary serialization format used across APIs and data transport layers.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 10,
      yearLastUse: 2025,
      notes: ["Used daily in MERN stack projects.", "All my REST APIs default to JSON as the interchange format."],
      confidence: ConfidenceLevel.High,
    },

    // Frameworks and Libraries:
    {
      name: "Blazor",
      description: "Utilized for building server-rendered UI with .NET; currently used in enterprise systems.",
      yearsOfProffesionalExperience: 1,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: ["Working with Blazor SSR + HTMX in a production project.", "Considering replacing with Next.js for better SSR control and dev experience."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "React",
      description: "Core frontend framework used across personal and professional projects, known for speed and reusability.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["Used extensively in web dashboards, internal tools, and mobile frontends (React Native).", "Familiar with hooks, context, Redux patterns, and testing tools."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Angular",
      description: "Primary frontend stack until 2023; experienced with versions from Angular 2 onward.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2023,
      notes: ["Strong architectural understanding (services, modules, RxJS).", "Can jump into any Angular project with minimal ramp-up."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Node",
      description: "Backend runtime used extensively for APIs, CLI tools, middleware, and microservices.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["Used in both monolith and microservice architectures.", "Familiar with ecosystem tools (ESLint, ts-node, PM2, etc.)"],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Entity Framework Core",
      description: "Primary ORM for .NET applications; used to manage complex data models and abstract SQL queries.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: ["Heavy use in Blazor, ASP.NET Core, and microservices.", "Balancing use with raw T-SQL to avoid over-abstraction."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "ASP.NET Core",
      description: "Professional bread-and-butter framework for backend development, APIs, authentication, and middleware.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: ["Deep knowledge of pipeline, routing, filters, DI, and modularity.", "Backbone of most enterprise-grade systems delivered to date."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "HTMX",
      description: "Lightweight frontend framework that extends HTML with AJAX capabilities; used in current .NET + Blazor SSR architecture.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Misused architecturally in current project, leading to friction — still see promise in it for lightweight interactivity.",
        "Appreciated for its no-JavaScript philosophy in simple apps.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Semantic UI",
      description: "Lightweight, flexible UI framework favored for quick design work and intuitive component styling.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["Used in this resume project and many personal dashboards.", "Preferred over Bootstrap for clarity and aesthetics."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Bootstrap",
      description: "Default CSS/UI framework used in enterprise projects for consistency and ease of use.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2024,
      notes: ["Often used in legacy or highly regulated environments.", "Custom themes used frequently to adapt design systems."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework used in a professional Blazor + HTMX project.",
      yearsOfProffesionalExperience: 1,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2024,
      notes: ["Found useful but verbose for component-based apps.", "Currently exploring ways to streamline Tailwind with reusable components."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Express",
      description: "Minimal Node.js framework used for REST APIs and backend services.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["Preferred in MERN stack apps and integration layers.", "Frequently used in tandem with Mongoose and Axios."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Mongoose",
      description: "Default ODM for working with MongoDB in Node.js ecosystems.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["Frequently used in MERN stack.", "Familiar with schema design, virtuals, and population features."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Axios",
      description: "TTP client library used for clean and maintainable API interaction.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["Follows a strict separation of API logic per feature.", "Uses base Axios config per app for consistency."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Kendo UI",
      description: "Feature-rich UI component library used in multiple frameworks (jQuery, Angular, React) to accelerate development.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["Strongest experience with React and JQuery versions.", "Workarounds needed in some advanced component customizations."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "React Native",
      description: "Used to build cross-platform mobile applications for iOS and Android.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 2,
      yearLastUse: 2024,
      notes: ["Delivered real-time mapping and notification-based apps.", "Familiar with navigation stacks, Expo integration, and push services."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "WPF",
      description: "Desktop UI framework used to build rich client tools and admin utilities in early .NET projects.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2016,
      notes: ["Used alongside PowerShell and C# for internal IT tools.", "Legacy knowledge, not actively used recently."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "WCF",
      description: "Service framework used in legacy systems for SOAP and binary transport.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2019,
      notes: ["Built and maintained secure SOAP services with authentication and encryption.", "Experience includes service contracts, bindings, and diagnostics."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "ASP.NET MVC",
      description: "Used in early professional years to build structured web applications with strong separation of concerns.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2019,
      notes: ["Legacy experience — transitioned into ASP.NET Core but still capable of maintaining older codebases."],
      confidence: ConfidenceLevel.Medium,
    },

    // Tools
    {
      name: "Postman",
      description: "Industry-standard tool for testing, documenting, and automating APIs.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["Used daily to verify endpoints and prototype integrations.", "Exploring its automation and test scripting capabilities for broader QA workflows."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Docker",
      description: "Essential containerization tool used to manage isolated development environments, databases, and production-grade services.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2025,
      notes: [
        "Run entire dev stacks locally, including MSSQL, MongoDB, Redis, and more.",
        "Favorite pattern: spinning up disposable DBs without background memory cost using play/pause lifecycle.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Expo",
      description: "Framework for building and deploying React Native apps rapidly across iOS and Android.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 2,
      yearLastUse: 2024,
      notes: ["Enjoy the ecosystem's speed and flexibility.", "Had challenges managing background tasks and notifications but delivered production-ready mobile apps regardless."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Adobe XD",
      description: "Visual design and prototyping tool for crafting interactive UI mockups and validating application flows before development.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2022,
      notes: [
        "Personally spend 1–4 weeks mocking large projects before coding — helps solve 80–90% of UI problems in advance.",
        "Preferred tool when I own end-to-end delivery of a solution.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "draw.io",
      description: "Diagramming tool for creating architectural diagrams, system flows, and technical illustrations.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2022,
      notes: ["Regularly used to design infrastructure layouts and logic flows.", "Fastest way to communicate technical ideas during meetings or documentation."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "CSV",
      description: "Universal format for tabular data exchange, import/export modules, and legacy system integrations.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 15,
      yearLastUse: 2025,
      notes: ["Extensively used in educational and government systems.", "Built ETL modules and mapping engines to work with various CSV schemas."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "FTP",
      description: "Classic file transfer protocol used to move data between legacy systems or remote servers.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 15,
      yearLastUse: 2025,
      notes: ["Implemented FTP clients inside .NET and integration engines.", "Used for nightly sync jobs and vendor-based data exchanges."],
      confidence: ConfidenceLevel.High,
    },

    // Database
    {
      name: "T-SQL",
      description: "My go-to query language for manipulating and analyzing data within Microsoft SQL Server environments.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 10,
      yearLastUse: 2025,
      notes: [
        "Built complex stored procedures, CTEs, and performance-tuned queries for real-time systems.",
        "ORM usage (especially EF Core) has reduced day-to-day SQL writing, but I still prefer raw SQL for intricate data tasks.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "MSSQL",
      description: "Primary relational database engine used across nearly all enterprise and government projects I've worked on.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 10,
      yearLastUse: 2025,
      notes: [
        "Designed relational schemas, enforced integrity, and fine-tuned indexes for high-performance transactional workloads.",
        "Currently run MSSQL inside Docker containers — makes local development portable and low-overhead.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Mongo DB",
      description: "Document-based NoSQL database used in full-stack JavaScript/TypeScript and mobile applications.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2025,
      notes: [
        "Initially found query syntax unintuitive, but over time built fluency with complex aggregation pipelines.",
        "Preferred for loosely structured data and agile development with Mongoose ODM.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "SQLite",
      description: " Lightweight embedded DBMS used in local desktop, mobile, and IoT applications.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2023,
      notes: [
        "Utilized in proof-of-concept builds, offline-first mobile apps, and quick prototyping environments.",
        "Appreciated for its zero-config footprint and fast read/write performance.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "RDL",
      description: " XML-based language used for defining SQL Server Reporting Services (SSRS) reports.",
      yearsOfProffesionalExperience: 3,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2021,
      notes: [
        "Authored and customized complex report templates to meet dynamic client requirements.",
        "Integrated into custom reporting engines for government dashboards and compliance.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "SSRS",
      description: "Microsoft's enterprise reporting tool used to build, deploy, and manage visual reports from SQL Server.",
      yearsOfProffesionalExperience: 3,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2021,
      notes: [
        "Created dozens of production-grade reports for municipal and financial systems.",
        "Used alongside RDL and T-SQL to build parameterized reports and exportable datasets.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "SSMS",
      description: "SQL Server Management Studio — essential GUI tool for working with SQL Server environments.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2021,
      notes: [
        "Managed database objects, executed scripts, and analyzed execution plans.",
        "Still my default environment when inspecting query performance or debugging production issues.",
      ],
      confidence: ConfidenceLevel.Medium,
    },

    // Services
    {
      name: "Microsoft Entra",
      description:
        "Formrly Azure AD. Central identity and access management solution used for authenticating users and enforcing role-based access control across distributed systems.",
      yearsOfProffesionalExperience: 3,
      yearsOfIndividualExperience: 3,
      yearLastUse: 2025,
      notes: [
        "Integrated Entra into enterprise applications to simplify secure logins and permissions via OAuth2 and OpenID Connect.",
        "Developed reusable auth middleware with dynamic permission scoping.",
        "Wrapped the integration in a custom library to standardize setup across multiple projects.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Azure",
      description: "Main cloud provider throughout my career — used for app hosting, databases, pipelines, virtual machines, and storage.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Managed deployments through Azure App Services, Azure SQL, and resource groups.",
        "Provisioned VMs and blob storage for hybrid architectures.",
        "Actively seeking exposure to AWS to diversify cloud experience and improve versatility.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Azure DevOps",
      description: "Full-stack DevOps platform used for source control, CI/CD automation, backlog management, and release pipelines.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [
        "Created YAML-based pipelines with multi-stage workflows and deployment gates.",
        "Used Boards to manage agile sprints and track development velocity.",
        "Ran test suites, linting, and versioning as part of pre-release validation.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Microsoft App Center",
      description: "CI/CD service tailored for mobile development — used to automate build, testing, and deployment of React Native apps.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 2,
      yearLastUse: 2024,
      notes: [
        "Leveraged it to ship Android/iOS builds to stakeholders with ease.",
        "Hit major limitations with background tasks and native module support.",
        "Happy it's being phased out — looking forward to more modern alternatives.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Firebase",
      description: "Google's backend platform used primarily for push notifications and real-time data syncing in mobile applications.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 2,
      yearLastUse: 2024,
      notes: [
        "Integrated Firebase Cloud Messaging (FCM) for sending platform-specific alerts.",
        "Also used Firestore and Realtime Database for small-scale user data storage in mobile apps.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "SharePoint",
      description: "Microsoft's collaboration and content management platform — used to build document workflows and intranet tools for enterprises.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2016,
      notes: [
        "Extended native functionality using custom web parts, InfoPath forms, and PowerShell automation.",
        "Replaced paper-based approval chains with automated SharePoint-based solutions.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Active Directory",
      description: "Enterprise directory service used for user and group management, authentication, and policy enforcement.",
      yearsOfProffesionalExperience: 5,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2016,
      notes: [
        "Automated user provisioning and hierarchy mapping using custom PowerShell + WPF tools.",
        "Integrated AD roles into .NET application access controls and system logging.",
      ],
      confidence: ConfidenceLevel.Medium,
    },

    // Paradigms, Methodologies, Abstract and Global Skills
    {
      name: "Agile",
      description: "Team-based development methodology emphasizing iterative progress, continuous feedback, and adaptive planning.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Practiced Agile (primarily Scrum) in most professional environments since 2016.",
        "Familiar with sprint planning, retrospectives, and backlog grooming.",
        "Often acted as a bridge between business and technical teams to clarify sprint goals.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Multi-Threading",
      description: "Parallel execution of independent code paths within a single process to maximize performance and resource utilization.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Applied multi-threading to reduce integration wait times and enable concurrent processing in back-end engines.",
        "Handled thread synchronization using locks, semaphores, and producer-consumer queues.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Parallelism",
      description: "Distribution of tasks across multiple CPU cores or compute units to improve throughput and speed in data-intensive workloads.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Built parallel data import/export pipelines for large-scale LMS integrations.",
        "Optimized processing with Parallel.ForEach, background workers, and thread pools.",
        "Currently studying GPU-based parallelism (CUDA) for HPC use cases.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Concurrency",
      description: "Managing multiple simultaneous operations while preserving consistency and system stability.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Implemented retry mechanisms, circuit breakers, and state machines in event-driven services.",
        "Designed systems to safely handle async API calls, user sessions, and race condition avoidance.",
        "Deep understanding of deadlocks, locks, and atomic operations in .NET environments.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Rest API",
      description: "Architectural style for building web APIs that are stateless, scalable, and easily consumed by clients.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Designed and consumed RESTful APIs across dozens of client/server applications.",
        "Established internal standards for endpoint naming, versioning, and consistent HTTP verbs.",
        "All personal and client-facing backend services follow REST-first principles.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "SOAP API",
      description: "XML-based protocol used for enterprise-grade integrations, especially with legacy systems.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2019,
      notes: [
        "Created and consumed WCF and ASP.NET-based SOAP services.",
        "Used SOAP extensively during government and education projects to connect with third-party vendors.",
        "Familiar with WSDL, service contracts, and message formatting.",
      ],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Serialization",
      description: "Converting complex objects to a transmittable format (e.g. JSON, XML, binary) and restoring them on the receiving side.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2019,
      notes: [
        "Implemented custom serialization layers for data export/import, cache storage, and API interoperability.",
        "Used XML serialization in SOAP-based .NET services and JSON in modern REST APIs.",
        "Optimized binary serialization for speed in integration engines.",
      ],
      confidence: ConfidenceLevel.Medium,
    },

    // Added from PDF — missing from original seed
    {
      name: "Git",
      description: "Version control system used across all professional projects for source management, branching, and collaboration.",
      yearsOfProffesionalExperience: 10,
      yearsOfIndividualExperience: 10,
      yearLastUse: 2025,
      notes: ["Default VCS throughout my career.", "Familiar with branching strategies, rebasing, and PR-based workflows."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "IIS",
      description: "Microsoft Internet Information Services — used for hosting .NET web applications on Windows servers.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2024,
      notes: ["Configured and managed IIS for .NET deployments in enterprise environments.", "Used alongside Azure App Services as on-premises hosting option."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "GIS Integration",
      description: "Integration with Geographic Information Systems, primarily ArcGIS, for spatial data visualization and field operations.",
      yearsOfProffesionalExperience: 3,
      yearsOfIndividualExperience: 3,
      yearLastUse: 2025,
      notes: ["Used at FDOT to keep roadway inspection data and maps in near real-time sync.", "Collaborated with GIS team to implement ArcGIS integration in MRP2."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "COBOL",
      description: "Legacy mainframe language encountered during the MRP2 modernization project at FDOT.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: ["Read and interpreted COBOL/JCL source from a 1987 mainframe system to reverse-engineer business rules.", "No new development — used as a reference for modernization."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "JCL",
      description: "Job Control Language used alongside COBOL on the FDOT mainframe system that was modernized.",
      yearsOfProffesionalExperience: 2,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: ["Interpreted JCL scripts as part of MRP2 mainframe reverse-engineering effort."],
      confidence: ConfidenceLevel.Beginner,
    },
  ];

  await Skill.insertMany(skills);
};

const seedEducation = async () => {
  const educations = [
    {
      title: "B.Sc. Computer Sciences",
      school: "Havana University",
      where: "Havana, Cuba",
      fromDate: new Date("09-01-2011"),
      toDate: new Date("05-01-2016"),
      responsibilities: ["Mathematics", "Programming", "CS Fundamentals", "Others"],
      generalNotes: [
        "Coursework completed; degree not conferred — relocated to the United States before finishing the final year.",
        "Completed a rigorous CS curriculum covering algorithms, data structures, compilers, programming languages, operating systems, networking, databases, software engineering, AI, statistics, calculus, hardware architecture, assembly, distributed systems, and concurrent/parallel programming.",
        "Built substantial academic projects including a database engine using B-trees and a compiler. Strongest academic language was C#, with additional experience in C and C++.",
        "The content in this section was translated, summarized, and structured using AI based on my official university curriculum.",
        "Courses labeled with 'I' and 'II' indicate multi-semester subjects. The only exception is Programming, which spans a full academic year.",
        "If you'd like to review the original documents in Spanish, feel free to reach out — I'm happy to share them.",
      ],
    },
    {
      title: "Computer Programming Technical High School",
      school: "I.P.I Gervacio Cabreras",
      where: "Havana, Cuba",
      fromDate: new Date("09-01-2006"),
      toDate: new Date("09-01-2009"),
      responsibilities: ["Programming", "Computer Networks", "IT"],
      generalNotes: ["Documents for the Career Plan are pending..."],
    },
  ];

  const insertedEducations = await Education.insertMany(educations);
  const myUniversity = insertedEducations.find((e) => e.school === "Havana University");

  await seedUniversitySubjects(myUniversity);
};

const seedUniversitySubjects = async (myUniversity: HydratedDocument<IEducation> | undefined) => {
  if (myUniversity) {
    const subjects = await Subject.insertMany([
      // Semester 1
      // Logic
      {
        name: "Logic",
        description:
          "This course provides a foundational understanding of logic, focusing on the theory and application of sets, relations, and functions. It introduces students to formal logic systems, including propositional and predicate logic, and explores algorithms like DPLL and satisfiability. Emphasis is placed on mathematical reasoning, formal proofs, and logical operations, with applications in computer science and mathematics.",
        semester: 1,
        notes: ["I strugled the first year of my career with this topic. But it worth it."],
        concepts: [
          {
            title: "Set Theory",
            summary: "Understanding sets, subsets, operations and their properties.",
            keyPoints: ["Union", "Intersection", "Complement", "Power sets"],
            tags: ["math", "discrete"],
          },
          {
            title: "Propositional Logic",
            summary: "Working with truth tables and Boolean logic.",
            keyPoints: ["Logical connectives", "Truth tables", "Inference rules"],
            tags: ["logic", "boolean"],
          },
          {
            title: "Predicate Logic",
            summary: "Exploring quantifiers and formal deduction.",
            keyPoints: ["Universal & Existential quantifiers", "Formulas", "Proofs"],
            tags: ["logic", "formal systems"],
          },
        ],
        biography: ["Introduccion a la Logica. Luciano Garcia Garrido."],
        Education: myUniversity.id,
      },
      // Algebra
      {
        name: "Algebra I and II",
        description: "Covers linear systems, matrix operations, vector spaces, linear transformations, and algebraic structures relevant to computation and algorithm design.",
        semester: 1,
        notes: [
          "Emphasis on abstract reasoning and transformation of mathematical problems into algebraic representations.",
          "Fundamental for later topics in numerical methods, discrete math, and optimization.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Linear Algebra and Its Applications – Gilbert Strang", "Abstract Algebra – Dummit and Foote"],
        concepts: [
          {
            title: "Linear Systems and Matrices",
            summary: "Solving systems using matrices and analyzing matrix properties.",
            keyPoints: ["Matrix representation", "Determinants", "Matrix inverses"],
          },
          {
            title: "Vector Spaces and Linear Maps",
            summary: "Understanding abstract vector space concepts and transformations.",
            keyPoints: ["Bases and dimension", "Isomorphisms", "Kernel and image"],
          },
          {
            title: "Algebraic Structures",
            summary: "Intro to groups, rings, and fields as tools for abstract modeling.",
            keyPoints: ["Group axioms", "Field structure", "Applications in computation"],
          },
        ],
        Education: myUniversity.id,
      },
      // Geometry
      {
        name: "Geometry",
        description: "Geometric reasoning, coordinate systems, vector operations, polygon algorithms, and transformations with application in computation and graphics.",
        semester: 1,
        notes: ["Applied geometry in computer graphics and algorithmic design.", "Hands-on with tools like MATLAB and implemented geometry algorithms."],
        biography: ["Geometry for Computer Graphics – Vince", "Computational Geometry – de Berg et al."],
        concepts: [
          {
            title: "Coordinate and Vector Geometry",
            summary: "Working with coordinate systems and vector math in space.",
            keyPoints: ["Cartesian/polar/cylindrical", "Dot and cross product", "Affine transformations"],
          },
          {
            title: "Polygons and Curves",
            summary: "Algorithmic treatment of geometric structures.",
            keyPoints: ["Point-in-polygon", "Convex hull", "Bezier curves"],
          },
          {
            title: "3D and Projective Geometry",
            summary: "3D modeling and projections for computer graphics.",
            keyPoints: ["Planes and lines in space", "Quadric surfaces", "Transformations"],
          },
        ],
        Education: myUniversity.id,
      },
      // Programming
      {
        name: "Programming",
        description: "Fundamentals of software development, from basic programming principles to object-oriented design, recursion, data structures, and GUIs.",
        semester: 1,
        notes: [
          "Developed strong algorithmic thinking skills.",
          "Learned object-oriented programming, recursion, and event handling using a modern language like C#.",
          "Built graphical user interfaces and used tools for debugging and I/O.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Head First C#", "Big Java – Cay Horstmann"],
        concepts: [
          {
            title: "Fundamentals",
            summary: "Basic structures, types, variables, control flow, and arrays.",
            keyPoints: ["Data types", "Variables and expressions", "Loops and conditionals"],
          },
          {
            title: "Object-Oriented Programming",
            summary: "OOP concepts like encapsulation, inheritance, and polymorphism.",
            keyPoints: ["Objects and classes", "Encapsulation", "Method overloading"],
          },
          {
            title: "Advanced Topics",
            summary: "GUI development, recursion, file I/O, and event-driven programming.",
            keyPoints: ["Divide and conquer", "Event handlers", "Serialization"],
          },
        ],
        Education: myUniversity.id,
      },

      // Semester 2
      // Mathematical Analysis I and II
      {
        name: "Mathematical Analysis I and II",
        description: "Foundation in calculus, limits, continuity, differentiation, integration, and functions of multiple variables with topological notions.",
        semester: 2,
        notes: [
          "Includes one and multivariable calculus with strong theoretical grounding.",
          "Used for modeling and approximation in computational problems.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Calculus – Spivak", "Principles of Mathematical Analysis – Rudin"],
        concepts: [
          {
            title: "Limits and Continuity",
            summary: "Fundamentals of convergence, topological notions, and function behavior.",
            keyPoints: ["ε-δ definition", "Compactness", "Continuity properties"],
          },
          {
            title: "Differentiation and Optimization",
            summary: "Rules and applications of derivatives including Taylor expansions.",
            keyPoints: ["L'Hôpital's Rule", "Multivariable derivatives", "Gradient and extrema"],
          },
          {
            title: "Integration and Series",
            summary: "Riemann integrals and convergence of series.",
            keyPoints: ["Multiple integrals", "Improper integrals", "Convergence tests"],
          },
        ],
        Education: myUniversity.id,
      },

      //Semester 3
      // Discrete Math I
      {
        name: "Discrete Math I",
        description:
          "Foundational number theory, algebraic structures, and combinatorics with rigorous theorem exploration and proof analysis, especially geared toward algorithmic applications.",
        semester: 3,
        notes: [
          "Explored number theory's role in cryptography and prime testing algorithms.",
          "Analyzed algebraic structures for abstract reasoning in computing.",
          "Emphasized creative problem solving in combinatorics beyond formula memorization.",
        ],
        biography: ["Niven, Zuckerman & Montgomery - An Introduction to the Theory of Numbers", "Rosen - Discrete Mathematics and Its Applications"],
        concepts: [
          {
            title: "Number Theory",
            summary: "Core concepts like divisibility, primes, GCD, modular arithmetic, and related theorems.",
            keyPoints: ["Divisibility rules", "Linear Diophantine equations", "Chinese Remainder Theorem"],
            tags: ["number theory", "modular arithmetic"],
          },
          {
            title: "Algebraic Structures",
            summary: "Study of abstract systems with one or two operations, such as groups, rings, and fields.",
            keyPoints: ["Groups and subgroups", "Rings and integral domains", "Homomorphisms"],
            tags: ["algebra", "structure theory"],
          },
          {
            title: "Combinatorics",
            summary: "The art of counting and arranging with permutations, combinations, and pigeonhole principle.",
            keyPoints: ["Binomial coefficients", "Inclusion-exclusion", "Recurrence relations"],
            tags: ["combinatorics", "counting"],
          },
        ],
        Education: myUniversity.id,
      },
      // Computer Architecture
      {
        name: "Computer Architecture",
        description:
          "Covers Von Neumann architecture, CPU internals, types of memory, storage devices, buses, and peripherals. Focus on practical understanding of modern PC hardware.",
        semester: 3,
        notes: [
          "Analyzed how CPUs, buses, memory, and I/O components interact.",
          "Built understanding of low-level system behavior and performance tuning.",
          "Developed skill in evaluating and selecting hardware components.",
        ],
        biography: ["Computer Organization and Design – Patterson & Hennessy", "Structured Computer Organization – Tanenbaum"],
        concepts: [
          {
            title: "Von Neumann Model",
            summary: "Core CPU and memory organization principles.",
            keyPoints: ["Fetch-decode-execute", "Control units", "Registers and ALUs"],
          },
          {
            title: "Memory and Storage",
            summary: "Types, hierarchy, and interface of memory systems.",
            keyPoints: ["RAM/ROM/Cache", "SSD/HDD architecture", "Bus systems"],
          },
          {
            title: "Peripherals and Interfacing",
            summary: "Interacting with I/O devices and drivers.",
            keyPoints: ["Monitor, mouse, keyboard", "Assembly-level drivers", "Interrupt handling"],
          },
        ],
        Education: myUniversity.id,
      },
      // Data Structures and Algorithms I and II
      {
        name: "Data Structures and Algorithms I and II",
        description: "In-depth study of fundamental and advanced data structures and their algorithmic properties including performance analysis.",
        semester: 3,
        notes: [
          "Worked with binary trees, AVL trees, heaps, and Tries.",
          "Studied time and space complexity formally.",
          "Introduced to graph traversal and topological sort.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Algorithms, 4th Edition – Sedgewick & Wayne", "Data Structures and Algorithms in Java – Lafore"],
        concepts: [
          {
            title: "Classical Structures",
            summary: "Stacks, queues, linked lists, and trees.",
            keyPoints: ["Array vs linked implementation", "Generic containers", "Huffman encoding"],
          },
          {
            title: "Advanced Trees and Sets",
            summary: "Balanced trees and advanced set representations.",
            keyPoints: ["AVL, Red-Black, 2-3 Trees", "Tries, QuadTrees", "Set operations"],
          },
          {
            title: "Graphs",
            summary: "Directed/undirected graphs and related algorithms.",
            keyPoints: ["DFS/BFS", "Connected components", "Topological sort", "Spanning trees"],
          },
        ],
        Education: myUniversity.id,
      },

      //Semester 4
      // Discrete Math II
      {
        name: "Discrete Math II",
        description: "Introduction to graph theory and computability theory, including trees, coloring, Turing machines, and the Church-Turing thesis.",
        semester: 4,
        notes: [
          "Used graph theory to model data structures and algorithms.",
          "Applied computability theory to explore algorithmic solvability.",
          "Crossed concepts with data structures for real-world applicability.",
        ],
        biography: ["West - Introduction to Graph Theory", "Sipser - Introduction to the Theory of Computation"],
        concepts: [
          {
            title: "Graph Theory",
            summary: "Study of vertices, edges, paths, colorings, and trees with theoretical theorems.",
            keyPoints: ["Eulerian & Hamiltonian paths", "Graph coloring", "Planarity and Kuratowski's theorem"],
            tags: ["graphs", "theory"],
          },
          {
            title: "Computability",
            summary: "Understanding limits of computation using formal models.",
            keyPoints: ["Turing machines", "Primitive recursive functions", "Church-Turing thesis"],
            tags: ["computability", "theoretical cs"],
          },
        ],
        Education: myUniversity.id,
      },
      // Machine Programming
      {
        name: "Machine Programming I and II",
        description:
          "Low-level programming with a focus on microprocessor architecture, memory organization, addressing modes, and instruction sets. Emphasis on assembly language and system integration.",
        semester: 4,
        notes: [
          "Developed a strong foundation in microprocessor internals and memory structures.",
          "Practiced low-level programming and linking with high-level languages.",
          "Applied assembly programming to medium-complexity real scenarios.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Programming from the Ground Up – Jonathan Bartlett", "PC Assembly Language – Paul Carter"],
        concepts: [
          {
            title: "Microprocessor Architecture",
            summary: "Study of functional components and instruction sets.",
            keyPoints: ["Memory addressing", "Register architecture", "Instruction cycles"],
          },
          {
            title: "Information Representation",
            summary: "Formats for encoding and manipulating data.",
            keyPoints: ["Binary, BCD, hexadecimal", "Bitwise manipulation", "Data alignment"],
          },
          {
            title: "Assembly Language Programming",
            summary: "Hands-on use of instruction sets and interfacing routines.",
            keyPoints: ["Subroutine calls", "Calling conventions", "Linking with high-level code"],
          },
        ],
        Education: myUniversity.id,
      },
      // Database Systems I
      {
        name: "Database Systems I",
        description:
          "Core principles of database architecture, relational models, data modeling, normalization, and query languages. Emphasis on mathematical foundations and reliable data design.",
        semester: 4,
        notes: [
          "Covered relational models, data abstraction layers, and SQL fundamentals.",
          "Introduced integrity constraints, concurrency, and data protection.",
          "Practiced normalization and relational algebra.",
        ],
        biography: ["Database System Concepts – Silberschatz, Korth, Sudarshan", "An Introduction to Database Systems – C.J. Date"],
        concepts: [
          {
            title: "Relational Data Modeling",
            summary: "Formal structures to represent and model data.",
            keyPoints: ["Entity-Relationship modeling", "Functional dependencies", "Normalization"],
          },
          {
            title: "Query Languages and SQL",
            summary: "Query formulation and execution with emphasis on expressive power.",
            keyPoints: ["SELECT queries", "Joins and subqueries", "Relational algebra"],
          },
          {
            title: "Database Architecture",
            summary: "Abstraction levels and internal architecture.",
            keyPoints: ["Three-schema model", "Data independence", "Storage structures"],
          },
        ],
        Education: myUniversity.id,
      },
      // Ordinary Differential Equations
      {
        name: "Ordinary Differential Equations",
        description: "Techniques for solving ODEs and systems, existence and uniqueness theorems, and stability analysis of solutions.",
        semester: 4,
        notes: ["Learned analytical and numerical methods (Euler) and stability concepts.", "Crucial for modeling dynamics in science and engineering."],
        biography: ["Differential Equations with Applications – Zill", "Ordinary Differential Equations – Arnold"],
        concepts: [
          {
            title: "First and Second Order ODEs",
            summary: "Solving basic ODEs with classic methods.",
            keyPoints: ["Separation of variables", "Exact equations", "Euler method"],
          },
          {
            title: "Linear Systems and Matrix Methods",
            summary: "Transforming ODEs into systems and solving with matrices.",
            keyPoints: ["Homogeneous/non-homogeneous systems", "Matrix exponentials", "Cauchy problem"],
          },
          {
            title: "Stability and Dynamics",
            summary: "Qualitative behavior and equilibrium analysis.",
            keyPoints: ["Stability of trivial solution", "Phase plane analysis", "Hurwitz criterion"],
          },
        ],
        Education: myUniversity.id,
      },

      //Semester 5
      // Operating Systems I
      {
        name: "Operating Systems I",
        description: "Core topics in operating system design including process management, memory allocation, file systems, and concurrency with synchronization techniques.",
        semester: 5,
        notes: [
          "Learned about abstraction of hardware and resource management.",
          "Wrote code with concurrency and shared memory handling.",
          "Examined file system design and memory segmentation/virtual memory.",
        ],
        biography: ["Operating Systems – Silberschatz", "Modern Operating Systems – Tanenbaum"],
        concepts: [
          {
            title: "Process and Memory Management",
            summary: "Managing execution and resource use.",
            keyPoints: ["Threads, processes", "Scheduling algorithms", "Deadlock prevention"],
          },
          {
            title: "File Systems and Storage",
            summary: "Design and implementation of file management.",
            keyPoints: ["File descriptors", "Directory trees", "Storage abstraction"],
          },
          {
            title: "Synchronization and Concurrency",
            summary: "Coordination among multiple executing units.",
            keyPoints: ["Semaphores, mutexes", "Race conditions", "Inter-process communication"],
          },
        ],
        Education: myUniversity.id,
      },
      // Algorithms Design and Analisys
      {
        name: "Desing and Analisys of Computer Algorithms",
        description: "Formal study of algorithm design techniques and complexity analysis, including NP-completeness and amortized analysis.",
        semester: 5,
        notes: [
          "Learned to measure time/space complexity for various algorithmic paradigms.",
          "Compared greedy, dynamic programming, and divide & conquer techniques.",
          "Introduced NP-completeness and computational hardness.",
        ],
        biography: ["Cormen et al. - Introduction to Algorithms", "Kleinberg & Tardos - Algorithm Design"],
        concepts: [
          {
            title: "Algorithmic Complexity",
            summary: "Analyzing worst, average, and amortized costs of algorithm performance.",
            keyPoints: ["Big-O notation", "Lower bounds", "Expected vs worst-case"],
            tags: ["complexity", "analysis"],
          },
          {
            title: "Design Techniques",
            summary: "Frameworks for creating algorithms: recursive, greedy, dynamic, exhaustive.",
            keyPoints: ["Divide and conquer", "Dynamic programming", "Greedy strategy"],
            tags: ["design", "algorithms"],
          },
          {
            title: "NP-Completeness",
            summary: "Intractability, decision problems, and reductions to SAT.",
            keyPoints: ["P vs NP", "Polynomial-time reductions", "SAT problem"],
            tags: ["complexity", "NP"],
          },
        ],
        Education: myUniversity.id,
      },
      // Database Systems II
      {
        name: "Database Systems II",
        description: "Advanced database engineering with focus on system implementation, reengineering, DBMS evaluation, and automation.",
        semester: 5,
        notes: [
          "Reinforced DB design skills with real-world implementation challenges.",
          "Used multiple DBMS tools for evaluation and optimization.",
          "Worked in teams on documentation and project defense.",
        ],
        biography: ["Fundamentals of Database Systems – Elmasri & Navathe", "The Data Warehouse Toolkit – Kimball & Ross"],
        concepts: [
          {
            title: "System Implementation",
            summary: "Architectures and techniques to build robust database systems.",
            keyPoints: ["System integration", "Storage and indexing", "Concurrency control"],
          },
          {
            title: "Platforms and DBMS Tools",
            summary: "Evaluation and application of database management platforms.",
            keyPoints: ["Tool comparison", "Criteria-based selection", "Tool customization"],
          },
          {
            title: "Automation and Optimization",
            summary: "Efficient algorithms and performance enhancements.",
            keyPoints: ["Query optimization", "Stored procedures", "Batch processing"],
          },
        ],
        Education: myUniversity.id,
      },
      // Software Engineering
      {
        name: "Software Engineering",
        description: "Comprehensive software engineering course covering the full lifecycle, methodologies, tools, modeling languages, and project planning.",
        semester: 5,
        notes: [
          "Used UML, Z, Petri nets, and CASE tools for modeling and design.",
          "Applied object-oriented analysis and quality assurance practices.",
          "Introduced to estimation techniques like COCOMO.",
        ],
        biography: ["Software Engineering – Ian Sommerville", "The Unified Modeling Language User Guide – Booch et al."],
        concepts: [
          {
            title: "Software Lifecycle",
            summary: "From requirements to deployment and maintenance.",
            keyPoints: ["Problem specification", "Testing strategies", "Process planning"],
          },
          {
            title: "Modeling and Design",
            summary: "Formal and semi-formal methods for modeling systems.",
            keyPoints: ["UML diagrams", "Z notation", "Use cases"],
          },
          {
            title: "Tools and Metrics",
            summary: "Use of CASE tools and estimation models.",
            keyPoints: ["COCOMO", "Project tracking", "Quality metrics"],
          },
        ],
        Education: myUniversity.id,
      },

      // Semester 6
      // Operating Systems II
      {
        name: "Operating Systems II",
        description: "Advanced topics in distributed and multi-core systems, memory and process control, with focus on kernel-level services and distributed synchronization.",
        semester: 6,
        notes: [
          "Explored system design at the distributed level.",
          "Worked on advanced scheduling, memory management, and kernel extensions.",
          "Focused on fault tolerance, process migration, and distributed file systems.",
        ],
        biography: ["Distributed Systems – Tanenbaum & van Steen", "Operating System Concepts – Silberschatz"],
        concepts: [
          {
            title: "Distributed Systems",
            summary: "Processes and communication across networked nodes.",
            keyPoints: ["Transparency", "Remote Procedure Call", "Distributed coordination"],
          },
          {
            title: "Advanced Kernel Topics",
            summary: "OS-level services for scaling and performance.",
            keyPoints: ["Kernel modules", "Multicore scheduling", "Distributed filesystems"],
          },
          {
            title: "Concurrency and Fault Tolerance",
            summary: "Robustness in large systems.",
            keyPoints: ["Failover", "Checkpointing", "Message passing"],
          },
        ],
        Education: myUniversity.id,
      },
      // Compilers
      {
        name: "Compilers I and II",
        description: "Covers syntax, semantics, parsing techniques, lexical analysis, and language implementation theory.",
        semester: 6,
        notes: [
          "Built parsers and lexical analyzers manually and automatically.",
          "Learned Chomsky hierarchy and formal grammar design.",
          "Connected theory with real-world language tooling.",
          "This Subject takes two semesters to be completed.",
        ],
        biography: ["Compilers – Aho, Lam, Sethi, Ullman", "Programming Language Pragmatics – Scott"],
        concepts: [
          {
            title: "Language Theory",
            summary: "Formal definitions and grammar classification.",
            keyPoints: ["Alphabets and languages", "Chomsky hierarchy", "Context-free grammars"],
          },
          {
            title: "Parsing and Analysis",
            summary: "Techniques for syntactic analysis: LL(1), LR, etc.",
            keyPoints: ["FIRST/FOLLOW sets", "Recursive descent", "Shift-reduce parsing"],
          },
          {
            title: "Semantics and Translation",
            summary: "Semantic analysis and symbol tables.",
            keyPoints: ["Lexical tokens", "Symbol management", "Interpretation vs compilation"],
          },
        ],
        Education: myUniversity.id,
      },
      // Programming Languages
      {
        name: "Programming Languages",
        description: "Study of programming language features, design decisions, semantics, paradigms, and type systems.",
        semester: 6,
        notes: [
          "Compared static and dynamic typing, memory models, and binding.",
          "Studied functional, imperative, and event-driven paradigms.",
          "Explored language implementation techniques and metaprogramming.",
        ],
        biography: ["Concepts of Programming Languages – Robert Sebesta", "Types and Programming Languages – Benjamin Pierce"],
        concepts: [
          {
            title: "Language Features",
            summary: "Syntax, semantics, memory, and types.",
            keyPoints: ["Scope and lifetime", "Heap vs stack", "Garbage collection"],
          },
          {
            title: "Paradigms and Abstractions",
            summary: "OOP, functional, declarative, event-based models.",
            keyPoints: ["Inheritance", "Interfaces", "MVC architecture"],
          },
          {
            title: "Metaprogramming and Reflection",
            summary: "Introspection and dynamic behavior in languages.",
            keyPoints: ["Delegates", "Reflection APIs", "Generic types"],
          },
        ],
        Education: myUniversity.id,
      },
      // Numeric Math
      {
        name: "Numeric Math",
        description: "Study of numerical algorithms for solving mathematical models computationally, emphasizing precision, efficiency, and stability.",
        semester: 6,
        notes: [
          "Focused on error analysis and algorithmic stability.",
          "Applied methods for interpolation, integration, and solving linear/non-linear systems.",
          "Used libraries and developed efficient implementations of numerical methods.",
        ],
        biography: ["Numerical Methods for Engineers – Chapra & Canale", "An Introduction to Numerical Analysis – Atkinson"],
        concepts: [
          {
            title: "Error and Stability",
            summary: "Understanding error propagation and algorithmic stability.",
            keyPoints: ["Absolute/relative error", "Numerical stability", "Error estimation"],
          },
          {
            title: "Equations and Systems",
            summary: "Solving algebraic and non-linear systems.",
            keyPoints: ["Iterative/direct methods", "Matrix factorization", "Convergence criteria"],
          },
          {
            title: "Function Approximation & Fourier",
            summary: "Interpolations and transforms for complex function approximation.",
            keyPoints: ["Polynomial interpolation", "Splines", "Fast Fourier Transform"],
          },
        ],
        Education: myUniversity.id,
      },
      // Probability and Statistics
      {
        name: "Probability and Statistics I and II",
        description: "Tools and theory for analyzing uncertainty, modeling randomness, and extracting conclusions from data.",
        semester: 6,
        notes: [
          "Covered continuous/discrete distributions, hypothesis testing, and regression.",
          "Linked probabilistic concepts with algorithm analysis and Monte Carlo methods.",
          "Applied statistical thinking to real-world computing problems.",
        ],
        biography: ["Probability and Statistics for Engineers – Walpole", "Introduction to Probability – Bertsekas & Tsitsiklis"],
        concepts: [
          {
            title: "Probability Theory",
            summary: "Core principles of random variables, events, and distributions.",
            keyPoints: ["Discrete/continuous variables", "Expectation & variance", "Limit theorems"],
          },
          {
            title: "Descriptive & Inferential Statistics",
            summary: "Summarizing data and drawing conclusions from samples.",
            keyPoints: ["Frequency tables", "Confidence intervals", "Hypothesis testing"],
          },
          {
            title: "Regression & Correlation",
            summary: "Analyzing relationships between variables.",
            keyPoints: ["Covariance & correlation", "Linear regression", "Model fit"],
          },
        ],
        Education: myUniversity.id,
      },

      // Semester 7
      // Optimization Models
      {
        name: "Optimization Models",
        description: "Mathematical modeling and algorithmic strategies for solving constrained optimization problems in real-world applications.",
        semester: 7,
        notes: [
          "Modeled and solved LP, integer, and nonlinear optimization problems.",
          "Studied and implemented Simplex, Dual-Simplex, and cutting plane methods.",
          "Explored metaheuristics and discussed computational complexity.",
        ],
        biography: ["Operations Research – Winston", "Introduction to Operations Research – Hillier & Lieberman"],
        concepts: [
          {
            title: "Linear Programming",
            summary: "Modeling and solving LP problems with constraints.",
            keyPoints: ["Simplex method", "Duality", "Geometric interpretation"],
          },
          {
            title: "Integer and Nonlinear Optimization",
            summary: "Mixed-integer models and constraint handling.",
            keyPoints: ["Branch and bound", "Penalty methods", "Dual-simplex"],
          },
          {
            title: "Algorithms and Metaheuristics",
            summary: "Computational strategies and algorithm design.",
            keyPoints: ["Model-based heuristics", "Metaheuristics overview", "Complexity analysis"],
          },
        ],
        Education: myUniversity.id,
      },
      // Computer Networks
      {
        name: "Computer Networks",
        description: "Study of modern networking with an emphasis on TCP/IP, ISO/OSI model, transmission media, and distributed systems application support.",
        semester: 7,
        notes: [
          "Designed and analyzed LAN/WAN architectures and IP-based networks.",
          "Built understanding of TCP/IP protocol stack and real-world routing.",
          "Worked with distributed app protocols and socket-level communication.",
        ],
        biography: ["Computer Networking: A Top-Down Approach – Kurose & Ross", "Data and Computer Communications – Stallings"],
        concepts: [
          {
            title: "Network Architecture and Protocols",
            summary: "Understanding TCP/IP stack and ISO/OSI layers.",
            keyPoints: ["IP addressing", "Layered models", "Encapsulation"],
          },
          {
            title: "Transmission and Routing",
            summary: "Mediums and algorithms for data transfer.",
            keyPoints: ["Media types", "Routing protocols", "Error detection"],
          },
          {
            title: "Application Layer and Distributed Systems",
            summary: "Client-server models and distributed app design.",
            keyPoints: ["Sockets", "DNS & HTTP", "Port mapping"],
          },
        ],
        Education: myUniversity.id,
      },

      //Semester 8
      // Information Systems
      {
        name: "Information Systems",
        description: "Covers the design and analysis of information systems, from textual retrieval models to modern search engines, metadata, and data warehousing.",
        semester: 8,
        notes: [
          "Applied information retrieval techniques to structured and unstructured data.",
          "Worked with metadata, standards, and evaluation metrics.",
          "Explored Web search engines, knowledge maps, and business data modeling.",
        ],
        biography: ["Modern Information Retrieval – Baeza-Yates & Ribeiro-Neto", "Information Systems: Foundation of E-Business – Alter"],
        concepts: [
          {
            title: "Information Retrieval Models",
            summary: "Theoretical and practical approaches to retrieving structured and unstructured data.",
            keyPoints: ["Vector space model", "Boolean model", "Probabilistic retrieval"],
          },
          {
            title: "Search Engines and Metadata",
            summary: "Building and evaluating indexing and search systems.",
            keyPoints: ["Inverted indexes", "Crawler architecture", "Metadata standards"],
          },
          {
            title: "Data Warehousing and Knowledge Representation",
            summary: "Building business intelligence and knowledge systems.",
            keyPoints: ["Dimensional modeling", "Star/snowflake schemas", "Knowledge maps"],
          },
        ],
        Education: myUniversity.id,
      },
      // Declarative Programming
      {
        name: "Declarative Programming",
        description: "Foundations of logic and functional programming, emphasizing formal problem specification, declarative modeling, and multiparadigm integration.",
        semester: 8,
        notes: [
          "Learned to express problem constraints formally using logical and functional paradigms.",
          "Practiced multiparadigm programming combining declarative and object-oriented techniques.",
          "Explored foundational topics in proof theory and model theory to understand language semantics.",
        ],
        biography: ["Programming in Prolog – Clocksin & Mellish", "Structure and Interpretation of Computer Programs – Abelson & Sussman"],
        concepts: [
          {
            title: "Logic and Functional Programming",
            summary: "Declarative problem solving using logical and functional expressions.",
            keyPoints: ["First-order logic", "Pure functions", "Pattern matching"],
          },
          {
            title: "Semantic Foundations",
            summary: "Model theory and proof theory supporting declarative computation.",
            keyPoints: ["Formal semantics", "Inference rules", "Theorem proving"],
          },
          {
            title: "Multiparadigm Integration",
            summary: "Blending declarative models with object-oriented design.",
            keyPoints: ["Hybrid languages", "Declarative-object abstractions", "Metaprogramming"],
          },
        ],
        Education: myUniversity.id,
      },
      // Simulation
      {
        name: "Simulation",
        description: "Modeling and computational experimentation of dynamic systems using simulation techniques including event-driven and agent-based approaches.",
        semester: 8,
        notes: [
          "Built simulation models of dynamic and discrete-event systems.",
          "Used AI-based agent systems for modeling distributed decision making.",
          "Integrated mathematical and logical foundations into simulation platforms.",
        ],
        biography: ["Simulation Modeling and Analysis – Averill Law", "Agent-Based and Individual-Based Modeling – Railsback & Grimm"],
        concepts: [
          {
            title: "Dynamic System Modeling",
            summary: "Formal representation of continuous and discrete event systems.",
            keyPoints: ["System state representation", "Event-condition logic", "Temporal behavior"],
          },
          {
            title: "Simulation Techniques",
            summary: "Classic and AI-enhanced simulation methodologies.",
            keyPoints: ["Event-driven simulation", "Agent-based models", "Simulation environments"],
          },
          {
            title: "AI in Simulation",
            summary: "Use of intelligent agents and distributed architectures.",
            keyPoints: ["Multi-agent systems", "Inter-agent communication", "Distributed control"],
          },
        ],
        Education: myUniversity.id,
      },
    ]);

    myUniversity.subjects.push(...subjects.map((subject) => subject._id as Types.ObjectId));
    await myUniversity.save();
  }
};

const seedHobbies = async () => {
  await Hobby.insertMany([
    { name: "Building PCs", description: "Assembling and upgrading custom desktop computers for performance and aesthetics." },
    { name: "Chess", description: "Playing chess online and studying openings and endgame theory." },
    { name: "Reading", description: "Mostly non-fiction — computer science, mathematics, history, and personal development." },
    { name: "Video Games", description: "Strategy and RPG games. Currently into Civilization and Dark Souls." },
    { name: "Cooking", description: "Experimenting with Cuban and Latin American recipes. Big fan of slow cooking." },
  ]);
};

const seedLearning = async () => {
  await Learning.insertMany([
    {
      name: "CUDA Programming",
      description: "Learning GPU-based parallel computing using NVIDIA CUDA for high-performance applications.",
      status: LearningStatus.InProgress,
      url: "https://developer.nvidia.com/cuda-toolkit",
    },
    {
      name: "AWS Cloud Practitioner",
      description: "Building foundational knowledge of AWS to complement existing Azure experience.",
      status: LearningStatus.InProgress,
    },
    {
      name: "Rust",
      description: "Exploring Rust for systems programming with a focus on memory safety and performance.",
      status: LearningStatus.Planned,
    },
    {
      name: "Next.js",
      description: "Learning Next.js for server-side rendering and full-stack React applications.",
      status: LearningStatus.Planned,
    },
    {
      name: "Quantitative Finance Fundamentals",
      description: "Self-study of mathematical finance, derivatives, and algorithmic trading concepts.",
      status: LearningStatus.InProgress,
    },
    {
      name: "Machine Learning with Python",
      description: "Completed Andrew Ng's ML course. Covered regression, classification, neural networks.",
      status: LearningStatus.Completed,
      url: "https://www.coursera.org/learn/machine-learning",
    },
  ]);
};

const seedExperienceSkillsAndSave = async (myExperiences: any) => {
  // Get all Skills.
  const allSkills = await Skill.find();

  // Create a Dictionary of skills name and id.
  const skillMap = new Map<string, Types.ObjectId>();
  allSkills.forEach((skill) => skillMap.set(skill.name.toLowerCase(), skill.id));

  // Add Skills Model to correct property.
  for (const exp of myExperiences!) {
    const anyExp = exp as any;
    if (anyExp.skillNames) {
      exp.skills = anyExp.skillNames.map((name: string) => skillMap.get(name.toLowerCase())).filter((id: any): id is Types.ObjectId => !!id);
      delete anyExp.skillNames;
    }

    exp.projects?.forEach((proj: any) => {
      if (proj.skillNames) {
        proj.skills = proj.skillNames.map((name: string) => skillMap.get(name.toLowerCase())).filter((id: any): id is Types.ObjectId => !!id);
        delete proj.skillNames;
      }
    });
  }

  // Save Experiences
  const savedExperiences = await Experience.insertMany(myExperiences);

  // Add experiences to skills now.
  for (const exp of savedExperiences) {
    const skillIds = new Set<string>();

    // Add direct experience skills
    exp.skills?.forEach((id: any) => skillIds.add(id.toString()));

    // Add skills from projects
    exp.projects?.forEach((project: any) => {
      project.skills?.forEach((id: any) => skillIds.add(id.toString()));
    });

    for (const skillId of skillIds) {
      const skill = await Skill.findById(skillId);
      if (skill) {
        const alreadyLinked = skill.experiences.some((eId) => eId.toString() === exp._id.toString());
        if (!alreadyLinked) {
          skill.experiences.push(exp._id);
          await skill.save();
        }
      }
    }
  }
};
