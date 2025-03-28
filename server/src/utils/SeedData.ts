import Experience, { IExperience } from "../models/mongoose/ExperienceModel";
import Education, { IEducation } from "../models/mongoose/EducationModel";
import Skill, { ISkill } from "../models/mongoose/SkillModel";

export const seedExperiences = async () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Florida Department of Transportation",
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
    },
    {
      title: "Software Engineer",
      company: "Calvin Giordano and Associates",
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
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
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
    },
    {
      title: "Computer Programming Technical High School",
      school: "I.P.I Gervacio Cabreras",
      where: "Havana, Cuba",
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
    },
  ];

  await Education.insertMany(educations);
};

export const seedSkills = async () => {
  const skills = [
    {
      name: "C#",
      description: "The C# Programming Language and the .NET Library",
      yearsOfProffesionalExperience: 11,
      yearsOfIndividualExperience: 16, //2009
      yearLastUse: 2025,
      notes: ["My Main Professional Development Language."],
    },
    {
      name: "TypeScript",
      description: "Used with the MERN Stack Mainly.",
      yearsOfProffesionalExperience: 7,
      yearsOfIndividualExperience: 7, //2009
      yearLastUse: 2025,
      notes: ["This is the Language I using the most recently."],
    },
  ];

  await Skill.insertMany(skills);
};
