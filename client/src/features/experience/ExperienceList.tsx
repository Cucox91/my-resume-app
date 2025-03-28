import React, { useEffect, useState } from "react";
import { getAllExperiences } from "../../apis/experienceApi";
import ExperienceItem from "./ExperienceItem";
import { IExperience } from "../../models/IExperience";

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<IExperience[] | null>(null);

  useEffect(() => {
    // const token = localStorage.getItem("token"); // Needed later to find the logged user.
    // if (token) {
    //   try {
    //     const decoded = jwtDecode<JwtPayload>(token);
    //     setUser(decoded);
    //   } catch (error) {
    //     console.error("Failed to decode token", error);
    //   }
    // }

    const getAllExperiencesAsync = async () => {
      try {
        const experiencesFromServer = await getAllExperiences();
        if (experiencesFromServer) {
          setExperiences(experiencesFromServer);
        }
      } catch (err: any) {
        console.log("Error Retrieving the Experiences");
        console.log(err);
      }
    };
    getAllExperiencesAsync();
  }, []);

  if (experiences) {
    return (
      <>
        {experiences.map((e) => (
          <ExperienceItem id={e.id!} item={e} />
        ))}
      </>
    );
  } else {
    return <>Not Experience Available.</>;
  }
};

export default ExperienceList;
