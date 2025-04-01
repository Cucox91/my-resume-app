import React, { useEffect, useState } from "react";
import { getAllEducation } from "../../apis/educationApi";
import EducationItem from "./EducationItem";
import { IEducation } from "../../models/IEducation";

const EducationList: React.FC = () => {
  const [educations, setEducations] = useState<IEducation[] | null>(null);

  useEffect(() => {
    const getAllEducationAsync = async () => {
      try {
        const educationFromServer = await getAllEducation();
        if (educationFromServer) {
          setEducations(educationFromServer);
        }
      } catch (err: unknown) {
        console.log("Error Retrieving the Education");
        console.log(err);
      }
    };
    getAllEducationAsync();
  }, []);

  if (educations) {
    return (
      <>
        {educations.map((e) => (
          <EducationItem id={e._id!} key={e._id!} item={e} />
        ))}
      </>
    );
  } else {
    return <>No Education Available...</>;
  }
};

export default EducationList;
