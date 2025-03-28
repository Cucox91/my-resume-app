import React from "react";
import { IExperience } from "../../models/IExperience";
import { Header, List, Segment } from "semantic-ui-react";

interface IProps {
  item: IExperience;
}

const ExperienceItem: React.FC<IProps> = (props: IProps) => {
  const { company, title, fromDate, toDate, responsibilities } = props.item;
  return (
    <>
      <Segment basic>
        <Header as="h3">
          {title} &amp; {company}
          <Header.Subheader>
            {formatDate(fromDate)} – {formatDate(toDate!)}
          </Header.Subheader>
        </Header>
        <List bulleted>
          {responsibilities.map((r) => (
            <List.Item>{r}</List.Item>
          ))}
        </List>
      </Segment>
    </>
  );
};

export default ExperienceItem;

function formatDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
}
