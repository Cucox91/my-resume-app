import React, { useEffect, useState } from "react";
import { getAllSkills } from "../../apis/skillsApi";
import { ISkill } from "../../models/ISkill";
import SkillItem from "./SkillItem";

const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<ISkill[] | null>(null);

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

    const getAllSkillsAsync = async () => {
      try {
        const skillsFromServer = await getAllSkills();
        if (skillsFromServer) {
          setSkills(skillsFromServer);
        }
      } catch (err: any) {
        console.log("Error Retrieving the Skills");
        console.log(err);
      }
    };
    getAllSkillsAsync();
  }, []);

  if (skills) {
    return (
      <>
        {skills.map((s) => (
          <SkillItem item={s} />
        ))}
      </>
    );
  } else {
    return <>No Skills</>;
  }
};

export default SkillList;
