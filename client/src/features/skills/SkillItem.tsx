import React from "react";
import { ISkill } from "../../models/ISkill";
import { Label } from "semantic-ui-react";

interface IProps {
  item: ISkill;
}

const SkillItem: React.FC<IProps> = (props: IProps) => {
  const { name } = props.item;
  return <Label style={{ margin: "0.25rem" }}>{name}</Label>;
};

export default SkillItem;
