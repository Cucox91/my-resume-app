import React, { useEffect, useState } from "react";
import { getAllExperiences } from "../../apis/experienceApi";
import ExperienceItem from "./ExperienceItem";
import { IExperience } from "../../models/IExperience";
import { Divider } from "semantic-ui-react";

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<IExperience[] | null>(null);

  useEffect(() => {
    const getAllExperiencesAsync = async () => {
      try {
        const experiencesFromServer = await getAllExperiences();
        if (experiencesFromServer) {
          setExperiences(experiencesFromServer);
        }
      } catch (err: unknown) {
        console.log("Error Retrieving the Experiences");
        console.log(err);
      }
    };
    getAllExperiencesAsync();
  }, []);

  if (experiences) {
    return (
      <>
        {experiences.map((e, index) => (
          <>
            <ExperienceItem id={e._id!} key={e._id!} item={e} />
            {experiences.length - 1 !== index && <Divider />}
          </>
        ))}
      </>
    );
  } else {
    return <>Not Experience Available.</>;
  }
};

export default ExperienceList;
