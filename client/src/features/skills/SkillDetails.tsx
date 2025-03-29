import { useParams } from "react-router-dom";

const SkillDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <>Skill Details: {id}</>;
};

export default SkillDetails;
