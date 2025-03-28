import Experience, { IExperience } from "../models/mongoose/ExperienceModel";
import Education, { IEducation } from "../models/mongoose/EducationModel";

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
