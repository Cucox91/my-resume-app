import React from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Divider,
  Icon,
} from "semantic-ui-react";
import ExperienceList from "../experience/ExperienceList";
import formatDate from "../../utils/DateAndTime";
import EducationList from "../education/EducationList";
import SkillList from "../skills/SkillList";

const Home: React.FC = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      {/* Top Section: Name on the left, Title on the right */}
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>
              Miami, FL, 33125 <br />
              +1 786-879-6101 <br />
              raziel.arias1991@gmail.com
            </p>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header
              as="h4"
              style={{ marginTop: "0.5rem", marginBottom: "0.1rem" }}
            >
              Latest Update: <br />
            </Header>
            <p>{formatDate(new Date())}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* Profile & Short Bio */}
      <Segment
        basic
        style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
      >
        <Image
          src="/raziel.jpg"
          alt="Profile"
          circular
          size="small"
          style={{ marginRight: "2rem" }}
        />
        <Segment vertical style={{ verticalAlign: "top" }}>
          <Header as="h1" style={{ marginTop: "0.1rem", marginBottom: "0" }}>
            Raziel Arias
          </Header>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>
            I Like to solve Problems.
          </p>
        </Segment>
      </Segment>

      {/* Experience */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="briefcase" />
          Experience
        </Header>
      </Divider>
      <ExperienceList />

      {/* Education */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="student" />
          Education
        </Header>
      </Divider>
      <EducationList />

      {/* Skills */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="code" />
          Skills
        </Header>
      </Divider>
      <SkillList />
    </Container>
  );
};

export default Home;
