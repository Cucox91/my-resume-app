import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const ResumeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: Fetch resume details using the id.
  return (
    <Container>
      <Header as="h2">Resume Detail: {id}</Header>
      <p>More details about the selected resume item will be shown here.</p>
    </Container>
  );
};

export default ResumeDetail;