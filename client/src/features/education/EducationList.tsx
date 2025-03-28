import React, { useEffect, useState } from "react";
import { getAllEducation } from "../../apis/educationApi";
import EducationItem from "./EducationItem";
import { IEducation } from "../../models/IEducation";

const EducationList: React.FC = () => {
  const [educations, setEducations] = useState<IEducation[] | null>(null);

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

    const getAllEducationAsync = async () => {
      try {
        const educationFromServer = await getAllEducation();
        if (educationFromServer) {
          setEducations(educationFromServer);
        }
      } catch (err: any) {
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
          <EducationItem item={e} />
        ))}
      </>
    );
  } else {
    return <>No Education Available...</>;
  }
};

export default EducationList;
