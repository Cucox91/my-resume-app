import React from "react";
import { IEducation } from "../../models/IEducation";
import { Header, List, Segment } from "semantic-ui-react";
import formatDate from "../../utils/DateAndTime";

interface IProps {
  id: string;
  item: IEducation;
}

const EducationItem: React.FC<IProps> = (props: IProps) => {
  const { school, title, fromDate, toDate, responsibilities } = props.item;
  return (
    <>
      <Segment id={props.id!} key={props.id!} basic>
        <Header as="h3">
          {title}
          <Header.Subheader>
            {school} ({formatDate(fromDate)} to {formatDate(toDate!)})
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

export default EducationItem;
