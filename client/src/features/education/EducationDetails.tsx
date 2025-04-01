import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Header, Icon } from "semantic-ui-react";
import { getEducationById } from "../../apis/educationApi";
import { IEducation } from "../../models/IEducation";
import formatDate from "../../utils/DateAndTime";

const EducationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [education, setEducation] = useState<IEducation | null>(null);

  useEffect(() => {
    const getEducationAsync = async () => {
      try {
        const educationByIdFromServer = await getEducationById(id!);
        if (educationByIdFromServer) {
          setEducation(educationByIdFromServer);
        }
      } catch (err: unknown) {
        console.log("Error Retrieving the Education by Id");
        console.log(err);
      }
    };
    getEducationAsync();
  }, [id]);

  return (
    <>
      {education !== null ? (
        <Container>
          <Header
            as="h1"
            textAlign="center"
            style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}
          >
            <Header.Content>
              <Icon name="student" />
              {education?.title} at {education?.school}
            </Header.Content>
            <Header.Subheader>
              From {formatDate(education?.fromDate ?? null)} to{" "}
              {formatDate(education?.toDate ?? null)}
            </Header.Subheader>
          </Header>
        </Container>
      ) : (
        <Header
          as="h1"
          textAlign="center"
          style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}
        >
          <Icon name="student" /> No Education Found...
        </Header>
      )}
    </>
  );
};

export default EducationDetails;
