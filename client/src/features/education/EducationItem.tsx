import React from "react";
import { IEducation } from "../../models/IEducation";
import { Header, List, Segment } from "semantic-ui-react";
import formatDate from "../../utils/DateAndTime";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  item: IEducation;
}

const EducationItem: React.FC<IProps> = (props: IProps) => {
  const { school, title, fromDate, toDate, responsibilities } = props.item;
  return (
    <>
      <Segment id={props.id!} key={props.id!} basic>
        <Header
          as={Link}
          to={`/education/${props.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
            (e.currentTarget.style.color = "blue")
          }
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
            (e.currentTarget.style.color = "inherit")
          }
        >
          {title}
          <Header.Subheader style={{ margin: "0.25rem" }}>
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
