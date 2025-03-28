import React from 'react';
import {
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Label,
  List
} from 'semantic-ui-react';

const Home: React.FC = () => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      {/* Top Section: Name on the left, Title on the right */}
      <Grid>
        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column>
            <Header as="h1" style={{ marginBottom: 0 }}>
              Your Name
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as="h4" style={{ marginTop: '0.5rem' }}>
              Software Architect | AI Enthusiast
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* Profile & Short Bio */}
      <Segment basic style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
        <Image
          src="/path/to/profile.jpg"
          alt="Profile"
          circular
          size="small"
          style={{ marginRight: '2rem' }}
        />
        <p style={{ fontSize: '1.2rem', lineHeight: 1.5 }}>
          Passionate about solving real-world problems with tech...
        </p>
      </Segment>

      {/* Skills */}
      <Header as="h2">Skills</Header>
      <Segment basic>
        {/* You can replace these Labels with however many skills you have */}
        <Label style={{ margin: '0.25rem' }}>C#</Label>
        <Label style={{ margin: '0.25rem' }}>TypeScript</Label>
        <Label style={{ margin: '0.25rem' }}>React</Label>
        <Label style={{ margin: '0.25rem' }}>Azure</Label>
        <Label style={{ margin: '0.25rem' }}>AI/ML</Label>
      </Segment>

      {/* Experience */}
      <Header as="h2">Experience</Header>
      <Segment basic>
        <Header as="h3">
          Founder &amp; Software Engineer @ Raziel Software
          <Header.Subheader>2018 – Present</Header.Subheader>
        </Header>
        <List bulleted>
          <List.Item>Built X</List.Item>
          <List.Item>Led Y</List.Item>
          <List.Item>Scaled Z</List.Item>
        </List>
      </Segment>

      {/* Education */}
      <Header as="h2">Education</Header>
      <Segment basic>
        <Header as="h3">
          B.Sc. Computer Science
          <Header.Subheader>Your University (2015)</Header.Subheader>
        </Header>
      </Segment>
    </Container>
  );
};

export default Home;