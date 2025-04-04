import Experience, { IExperience } from "../models/mongoose/ExperienceModel";
import Education, { IEducation } from "../models/mongoose/EducationModel";
import Subject, { ISubject } from "../models/mongoose/SubjectModel";
import Skill, { ConfidenceLevel, ISkill } from "../models/mongoose/SkillModel";
import { HydratedDocument, Types } from "mongoose";

export const seedExperiences = async () => {
  const experiences = [
    {
      title: "Software Engineer Consultant",
      company: "Florida Department of Transportation (FDOT)",
      fromDate: new Date("04-01-2022"),
      toDate: null,
      teamSize: 20,
      Location: "Miami, FL (Remote)",
      responsibilities: [
        "Developed the modernization of the Maintenance Rating Program (MRP) by transitioning it to a cloud-based solution, MRP2, which significantly reduced hosting and development costs while improving maintainability. This system integrates seamlessly with GIS and mobile platforms, enabling faster and more efficient inspections and reviews of state highway maintenance.",
        "Designed and implemented SunEx, an end-to-end real-time notification system for FDOT executives. This solution includes a web application, API integration with the State Sunguide System, and a mobile app built with the MERN stack and Expo React Native. SunEx provides real-time updates on incidents and car crashes, ensuring executives have up-to-date information.",
        "Developed the Procedural Document Library (PDL) to streamline document creation, review, and approval processes involving multiple stakeholders, including legal offices and high-ranking officials. The PDL replaced a convoluted SharePoint system, improving user permissions management and providing a clear document status history.",
        "Contributed to various maintenance projects, including bug fixes, small enhancements, and routine support tasks, ensuring system reliability and continuous improvement.",
      ],
      projects: [
        {
          name: "MRP2",
          description: "Modernization of an old Mainframe Project that takes care of the public road's inspections in the state of Florida.",
          skillNames: ["C#", ".NET", "Blazor", "HTMX", "ASP.NET Core", "Entity Framework Core", "Tailwind CSS"],
        },
      ],
      achievements: ["Complete multiple projects with a tight deadline. (Example Text)"],
      skillNames: ["C#", "Blazor", "Postman", "Docker", "Azure"],
    },
    {
      title: "Software Architect Consultant",
      company: "US Department of Housing and Urban Development (HUD)",
      fromDate: new Date("11-01-2020"),
      toDate: new Date("04-01-2022"),
      responsibilities: [
        "Built ECP2P, a knowledge-sharing platform designed to reduce bottlenecks in customer service by organizing common inquiries and providing autosuggestions for new queries. This system enabled users to quickly find answers and create well-informed questions, reducing dependency on email and call support.",
        "Published GIS-based visualizations that provided critical insights, including flood zone data, rental affordability, and FHA household affordability metrics, to empower citizens and stakeholders with actionable community information.",
        "Other internal tasks.",
      ],
    },
    {
      title: "Software Engineer",
      company: "SafeBuilt (Calvin Giordano and Associates)",
      fromDate: new Date("09-01-2019"),
      toDate: new Date("10-01-2022"),
      responsibilities: [
        "Developed tools within the Gov-Easy SaaS platform to improve client onboarding and facilitate company-wide communications, supporting a smooth merger with CGA Solutions.",
        "Designed the Security Admin Tool (SAT) to automate user onboarding and credential management. SAT enhanced organizational scalability by streamlining processes and handling increased demand during the pandemic, enabling automated workflows for employee transitions.",
        "Created a custom Point of Sale (POS) system that maintained client data privacy while reducing operational expenses. This system facilitated secure payment processing for licenses, permits, and other transactions while allowing for efficient corrections and refunds.",
      ],
    },
    {
      title: "Software Developer (Integrations)",
      company: "Maestro Student Information System by BocaVox",
      fromDate: new Date("10-01-2017"),
      toDate: new Date("09-01-2019"),
      responsibilities: [
        "Developed the Maestro Integration Manager (MIM), a tool that enabled seamless data exchange between the Maestro Student Information System (SIS) and 14 Learning Management Systems (LMS). This system improved synchronization and processing efficiency.",
        "Delivered robust backend solutions to support the highly transactional Maestro SIS, optimizing performance and ensuring scalability for educational institutions.",
      ],
    },
    {
      title: "Junior .NET Developer",
      company: "eNet IT Group",
      fromDate: new Date("12-01-2016"),
      toDate: new Date("11-01-2017"),
      responsibilities: [
        "Designed and implemented full-stack solutions tailored to the automotive, financial, and marketing industries. Leveraged modern .NET and MEAN stack technologies to build scalable, high-performance applications.",
        "Developed multiple static web pages for small businesses, enabling them to establish an online presence, increase client engagement, and boost revenue growth.",
      ],
    },
    {
      title: "SharePoint Administrator and Developer",
      company: "SYNCWARE",
      fromDate: new Date("04-01-2014"),
      toDate: new Date("12-01-2016"),
      responsibilities: [
        "Created custom tools to manage Active Directory hierarchies and developed SharePoint-based workflows to streamline business processes. These solutions enhanced efficiency and reduced administrative overhead.",
        "Administered and developed modules and plugins for on-premises SharePoint Services for multiple clients, ensuring customized solutions aligned with specific business needs.",
      ],
    },
  ];

  if (experiences.length > 0) {
    await seedExperienceSkillsAndSave(experiences);
  }
};

export const seedSkills = async () => {
  const skills = [
    // Languages:
    {
      name: "C#",
      description: "The C# Programming Language and the .NET Library",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 16, //2009
      yearLastUse: 2025,
      notes: ["My Main Professional Development Language."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "TypeScript",
      description: "Used with the MERN Stack Mainly.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["This is the Language I using the most recently."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "JavScript",
      description: "Used with the MERN Stack Mainly.",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 11,
      yearLastUse: 2025,
      notes: ["I use it for some projects that are not using React or Angular. Otherwise I will go with TS."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Python",
      description: "Learning it. Have done some several small projects",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 11,
      yearLastUse: 2025,
      notes: ["Haven't used professionally yet mostly on personal projects. I'm still learning it."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "C",
      description: "Re-Learning it",
      yearsOfProffesionalExperience: 0,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2025,
      notes: [
        "I spent a few years working with C and C++ when I was youger. Never used it professionally.",
        "Now I'm transitioning to Low Level Programming and I'm currently learning it.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "C++",
      description: "Re-Learning it",
      yearsOfProffesionalExperience: 0,
      yearsOfIndividualExperience: 5,
      yearLastUse: 2008,
      notes: [
        "I spent a few years working with C and C++ when I was youger. Never used it professionally.",
        "Now I'm transitioning to Low Level Programming and I'm currently learning it.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    // Frameworks and Tools:
    {
      name: "Blazor",
      description: "Currently using it on a Work Project. Honestly. I don't Like it. Will learn Next.JS for SSR better.",
      yearsOfProffesionalExperience: 1,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "React",
      description: "Currently using it for Personal Projects. But have used it professionally several times in the past years. ",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "React",
      description: "Currently using it for Personal Projects. But have used it professionally several times in the past years. ",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Angular",
      description: "It was mostly my development front end Framework up to 2023.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2023,
      notes: ["I'm a little bit rusty. But in a few days I can pick up on an Angular Project without any issues."],
      confidence: ConfidenceLevel.Medium,
    },
    {
      name: "Node",
      description: "Using it in Personal and Professional Projects.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Entity Framework Core",
      description: "Currently using it on a Professional Project. This my to go ORM.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: ["This is a SQL Skill killer. I still do some queries on SQL to keep the skill relatively fresh."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "ASP.NET Core",
      description: "Where do I start. And where do I end. This have been my bread and butter.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: ["This is a SQL Skill killer. I still do some queries on SQL to keep the skill relatively fresh."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "HTMX",
      description: "Currently using it on a Professional Project. Using it together with Blazor SSR and Minimal APIs.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: ["Currently I'm hating it, but is because of a bad architectural choise. HTMX is promising by itself."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Semantic UI",
      description: "My favorite components and design framework. What I love the most is that is easy and fast.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: ["This project is made in Semantic UI.", "Used in most of my personal projects"],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Bootstrap",
      description: "If I can't use Semantic UI then I go with Bootstrap.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2024,
      notes: ["I use it mostly on Professional Projects."],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Tailwind CSS",
      description: "Currently using it on a Professional Project.",
      yearsOfProffesionalExperience: 1,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2024,
      notes: ["Not liking it. I know is very powerfull. But I mostly build apps with simple visual components."],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Express",
      description: "It goes by default with Node.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Mongoose",
      description: "Is my default ODM when using MongoDB",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Postman",
      description: "The default tool to test APIs either manually or automated.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["I want to learn more from this amazing tool."],
      confidence: ConfidenceLevel.Beginner,
    },
  ];

  await Skill.insertMany(skills);
};

export const seedEducation = async () => {
  const educations = [
    {
      title: "B.Sc. Computer Sciences",
      school: "Havana University",
      where: "Havana, Cuba",
      fromDate: new Date("09-01-2011"),
      toDate: new Date("05-01-2016"),
      responsibilities: ["Mathematics", "Programming", "CS Fundamentals", "Others"],
      generalNotes: [
        "The content in this section was translated, summarized, and structured using AI based on my official university curriculum.",
        "Courses labeled with “I” and “II” indicate multi-semester subjects. The only exception is Programming, which spans a full academic year.",
        "If you'd like to review the original documents in Spanish, feel free to reach out — I'm happy to share them.",
        "Some subjects were intentionally excluded as they aren't directly related to Computer Science.",
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
