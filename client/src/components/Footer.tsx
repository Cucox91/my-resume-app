import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Footer: React.FC = () => {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container textAlign="center">
        © {new Date().getFullYear()} My Resume App. All rights reserved.
      </Container>
    </Segment>
  );
};

export default Footer;