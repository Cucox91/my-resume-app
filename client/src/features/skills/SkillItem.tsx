import React from "react";
import { ISkill } from "../../models/ISkill";
import { Button, Divider, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  item: ISkill;
}

const SkillItem: React.FC<IProps> = (props: IProps) => {
  const {
    name,
    yearLastUse,
    yearsOfIndividualExperience,
    yearsOfProffesionalExperience,
    description,
  } = props.item;
  return (
    <Popup
      wide
      content={
        <>
          {description} <br />
          <Divider horizontal>Experience</Divider>
          Years of Professional Experience:
          <b> {yearsOfProffesionalExperience}</b> <br />
          Years of Individual Experience: <b>
            {" "}
            {yearsOfIndividualExperience}
          </b>{" "}
          <br />
          Last Time Used: <b> {yearLastUse}</b>
        </>
      }
      key={props.id}
      header={name}
      trigger={
        <Button
          id={props.id}
          key={props.id}
          style={{ margin: "0.25rem" }}
          as={Link}
          to={`/skill/${props.id}`}
        >
          {name}
        </Button>
      }
    ></Popup>

    //   <Label id={props.id} key={props.id} style={{ margin: "0.25rem" }}>
    //   {name}
    // </Label>
  );
};

export default SkillItem;
