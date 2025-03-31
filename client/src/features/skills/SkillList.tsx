import React, { useEffect, useState } from "react";
import { getAllSkills } from "../../apis/skillsApi";
import { ISkill } from "../../models/ISkill";
import SkillItem from "./SkillItem";
import { Container } from "semantic-ui-react";

const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<ISkill[] | null>(null);

  useEffect(() => {
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
      <Container textAlign="center">
        {skills.map((s) => (
          <SkillItem id={s._id!} key={s._id!} item={s} />
        ))}
      </Container>
    );
  } else {
    return <>No Skills</>;
  }
};

export default SkillList;
