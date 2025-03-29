import { useParams } from "react-router-dom";
import { ISkill } from "../../models/ISkill";

const SkillDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <>Skill Details: {id}</>;
};

export default SkillDetails;
