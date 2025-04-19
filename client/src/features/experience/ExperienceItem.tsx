import React from "react";
import { IExperience } from "../../models/IExperience";
import { Header, List, Segment } from "semantic-ui-react";
import formatDate from "../../utils/DateAndTime";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  item: IExperience;
}

const ExperienceItem: React.FC<IProps> = (props: IProps) => {
  const { company, title, fromDate, toDate, achievements } = props.item;
  return (
      <Segment id={props.id!} key={props.id!} basic>
        <Header
          as={Link}
          to={`/experience/${props.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "blue")}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "inherit")}
        >
          {title} at {company}
          <Header.Subheader style={{ marginTop: "0.25rem" }}>
            {formatDate(fromDate)} – {toDate ? formatDate(toDate!) : "Current"}
          </Header.Subheader>
        </Header>
        <List bulleted>
          {achievements!.map((r, index) => (
            <List.Item id={index} key={index}>
              {r}
            </List.Item>
          ))}
        </List>
      </Segment>
  );
};

export default ExperienceItem;
