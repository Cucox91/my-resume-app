import React from "react";
import { IExperience } from "../../models/IExperience";
import { Header, List, Segment } from "semantic-ui-react";
import formatDate from "../../utils/DateAndTime";

interface IProps {
  id: string;
  item: IExperience;
}

const ExperienceItem: React.FC<IProps> = (props: IProps) => {
  const { company, title, fromDate, toDate, responsibilities } = props.item;
  return (
    <>
      <Segment id={props.id!} key={props.id!} basic>
        <Header as="h3">
          {title} &amp; {company}
          <Header.Subheader>
            {formatDate(fromDate)} – {toDate ? formatDate(toDate!) : "Current"}
          </Header.Subheader>
        </Header>
        <List bulleted>
          {responsibilities.map((r, index) => (
            <List.Item id={index} key={index}>
              {r}
            </List.Item>
          ))}
        </List>
      </Segment>
    </>
  );
};

export default ExperienceItem;
