import React from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Label,
  List,
  Divider,
  Icon,
} from "semantic-ui-react";
import Experience from "../experience/experience";

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
            <Header as="h4" style={{ marginTop: "0.5rem" }}>
              Software Architect | AI Enthusiast
            </Header>
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
            I Like to solve Problems
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
      <Experience/>
      

      {/* Education */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="student" />
          Education
        </Header>
      </Divider>
      <Segment basic>
        <Header as="h3">
          B.Sc. Computer Science
          <Header.Subheader>Your University (2015)</Header.Subheader>
        </Header>
      </Segment>

      {/* Skills */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="code" />
          Skills
        </Header>
      </Divider>
      <Segment basic>
        {/* You can replace these Labels with however many skills you have */}
        <Label style={{ margin: "0.25rem" }}>C#</Label>
        <Label style={{ margin: "0.25rem" }}>TypeScript</Label>
        <Label style={{ margin: "0.25rem" }}>React</Label>
        <Label style={{ margin: "0.25rem" }}>Azure</Label>
        <Label style={{ margin: "0.25rem" }}>AI/ML</Label>
      </Segment>
    </Container>
  );
};

export default Home;
