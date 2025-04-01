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
      responsibilities: [
        "Developed the modernization of the Maintenance Rating Program (MRP) by transitioning it to a cloud-based solution, MRP2, which significantly reduced hosting and development costs while improving maintainability. This system integrates seamlessly with GIS and mobile platforms, enabling faster and more efficient inspections and reviews of state highway maintenance.",
        "Designed and implemented SunEx, an end-to-end real-time notification system for FDOT executives. This solution includes a web application, API integration with the State Sunguide System, and a mobile app built with the MERN stack and Expo React Native. SunEx provides real-time updates on incidents and car crashes, ensuring executives have up-to-date information.",
        "Developed the Procedural Document Library (PDL) to streamline document creation, review, and approval processes involving multiple stakeholders, including legal offices and high-ranking officials. The PDL replaced a convoluted SharePoint system, improving user permissions management and providing a clear document status history.",
        "Contributed to various maintenance projects, including bug fixes, small enhancements, and routine support tasks, ensuring system reliability and continuous improvement.",
      ],
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

  await Experience.insertMany(experiences);
};

export const seedEducation = async () => {
  const educations = [
    {
      title: "B.Sc. Computer Sciences",
      school: "Havana University",
      where: "Havana, Cuba",
      fromDate: new Date("09-01-2011"),
      toDate: new Date("05-01-2016"),
      responsibilities: [
        "Mathematics",
        "Programming",
        "CS Fundamentals",
        "Others",
      ],
    },
    {
      title: "Computer Programming Technical High School",
      school: "I.P.I Gervacio Cabreras",
      where: "Havana, Cuba",
      fromDate: new Date("09-01-2006"),
      toDate: new Date("09-01-2009"),
      responsibilities: ["Programming", "Computer Networks", "IT"],
    },
  ];

  const insertedEducations = await Education.insertMany(educations);
  const myUniversity = insertedEducations.find(e => e.school === "Havana University");

  await seedUniversitySubjects(myUniversity);
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
      notes: [
        "I use it for some projects that are not using React or Angular. Otherwise I will go with TS.",
      ],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Python",
      description: "Learning it. Have done some several small projects",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 11,
      yearLastUse: 2025,
      notes: [
        "Haven't used professionally yet mostly on personal projects. I'm still learning it.",
      ],
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
      description:
        "Currently using it on a Work Project. Honestly. I don't Like it. Will learn Next.JS for SSR better.",
      yearsOfProffesionalExperience: 1,
      yearsOfIndividualExperience: 0,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "React",
      description:
        "Currently using it for Personal Projects. But have used it professionally several times in the past years. ",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "React",
      description:
        "Currently using it for Personal Projects. But have used it professionally several times in the past years. ",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "Angular",
      description:
        "It was mostly my development front end Framework up to 2023.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2023,
      notes: [
        "I'm a little bit rusty. But in a few days I can pick up on an Angular Project without any issues.",
      ],
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
      description:
        "Currently using it on a Professional Project. This my to go ORM.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "This is a SQL Skill killer. I still do some queries on SQL to keep the skill relatively fresh.",
      ],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "ASP.NET Core",
      description:
        "Where do I start. And where do I end. This have been my bread and butter.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "This is a SQL Skill killer. I still do some queries on SQL to keep the skill relatively fresh.",
      ],
      confidence: ConfidenceLevel.High,
    },
    {
      name: "HTMX",
      description:
        "Currently using it on a Professional Project. Using it together with Blazor SSR and Minimal APIs.",
      yearsOfProffesionalExperience: 8,
      yearsOfIndividualExperience: 8,
      yearLastUse: 2025,
      notes: [
        "Currently I'm hating it, but is because of a bad architectural choise. HTMX is promising by itself.",
      ],
      confidence: ConfidenceLevel.Beginner,
    },
    {
      name: "Semantic UI",
      description:
        "My favorite components and design framework. What I love the most is that is easy and fast.",
      yearsOfProffesionalExperience: 6,
      yearsOfIndividualExperience: 6,
      yearLastUse: 2025,
      notes: [
        "This project is made in Semantic UI.",
        "Used in most of my personal projects",
      ],
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
      notes: [
        "Not liking it. I know is very powerfull. But I mostly build apps with simple visual components.",
      ],
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
      description:
        "The default tool to test APIs either manually or automated.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7,
      yearLastUse: 2025,
      notes: ["I want to learn more from this amazing tool."],
      confidence: ConfidenceLevel.Beginner,
    },
  ];

  await Skill.insertMany(skills);
};


const seedUniversitySubjects = async (myUniversity: HydratedDocument<IEducation> | undefined) => {
  if (myUniversity) {
    const subjects = await Subject.insertMany([
      {
        name: "Programming",
        description: "Computer Programming Fundamentals.",
        semester: 1,
        notes: ["We used C# as learning language."],
        biography: ["Aprenda a Programar. Miguel Katrib Mora."],
        Education: myUniversity.id
      },
      {
        name: "Logics",
        description: "From Set Theory to Predicate Logic.",
        semester: 1,
        notes: ["I strugled the first year of my career with this topic. But it worth it."],
        biography: ["Introduccion a la Logica. Luciano Garcia Garrido."],
        Education: myUniversity.id
      }
    ]);

    myUniversity.subjects.push(...subjects.map(subject => subject._id as Types.ObjectId));
    await myUniversity.save();
  }
}
