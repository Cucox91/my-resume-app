import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Header, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader } from "semantic-ui-react";
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
          <Header as="h1" textAlign="center" style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
            <Header.Content>
              <Icon name="student" />
              {education?.title} at {education?.school}
            </Header.Content>
            <Header.Subheader style={{ marginTop: "0.5rem", marginBottom: "1.0rem" }}>
              From {formatDate(education?.fromDate ?? null)} to {formatDate(education?.toDate ?? null)}
            </Header.Subheader>
          </Header>

          {education.generalNotes.length > 0 && (
            <>
              <Header
                as="h3"
                textAlign="center"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  paddingBottom: "1.0rem",
                }}
              >
                <Header.Content style={{ marginTop: "0.5rem", marginBottom: "1.0rem" }}>Notes:</Header.Content>
                <div style={{ padding: "1rem", backgroundColor: "#f4f4f4", borderRadius: "6px", fontSize: "1rem", lineHeight: "1.6" }}>
                  {education.generalNotes.map((n) => (
                    <p>{n}</p>
                  ))}
                </div>
              </Header>
            </>
          )}

          <ItemGroup
            divided
            style={{
              border: "1px solid silver",
              borderRadius: "4px",
              padding: "1em",
            }}
          >
            {[...new Set(education.subjects.map((s) => s.semester))]
              .sort((a, b) => a - b)
              .map((semester) => (
                <div key={semester}>
                  <Header as="h1" dividing textAlign="center" style={{ backgroundColor: "silver" }}>
                    Semester {semester}
                  </Header>

                  {education.subjects
                    .filter((s) => s.semester === semester)
                    .map((subject) => (
                      <Item
                        key={subject.id?.toString()}
                        style={{
                          marginTop: "1.5rem",
                          marginBottom: "2rem",
                          padding: "1rem",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <ItemContent>
                          <ItemHeader as="h2" style={{ marginBottom: "0.5rem" }}>
                            {subject.name}
                          </ItemHeader>
                          <ItemDescription style={{ marginBottom: "1rem" }}>{subject.description}</ItemDescription>
                          {subject.concepts?.length > 0 && (
                            <>
                              <Header as="h4" style={{ marginTop: "1rem" }}>
                                Concepts
                              </Header>
                              {subject.concepts.map((concept, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    marginBottom: "1rem",
                                    paddingLeft: "1rem",
                                    borderLeft: "3px solid #ccc",
                                  }}
                                >
                                  <Header as="h5" style={{ marginBottom: "0.3rem" }}>
                                    {concept.title}
                                  </Header>
                                  <p
                                    style={{
                                      fontStyle: "italic",
                                      marginBottom: "0.5rem",
                                    }}
                                  >
                                    {concept.summary}
                                  </p>
                                  {concept.keyPoints?.length > 0 && (
                                    <ul style={{ paddingLeft: "1.2rem" }}>
                                      {concept.keyPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                      ))}
                                    </ul>
                                  )}
                                  {concept.tags!.length > 0 && (
                                    <div
                                      style={{
                                        marginTop: "0.5rem",
                                        fontSize: "0.85rem",
                                        color: "#888",
                                      }}
                                    >
                                      Tags: {concept.tags!.join(", ")}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </>
                          )}

                          {subject.biography.length > 0 && (
                            <>
                              <Header as="h4" style={{ marginTop: "1rem" }}>
                                Bibliography
                              </Header>
                              <ul style={{ paddingLeft: "1.2rem" }}>
                                {subject.biography.map((note, i) => (
                                  <li key={i} style={{ marginBottom: "0.3rem" }}>
                                    {note}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </ItemContent>
                      </Item>
                    ))}
                </div>
              ))}
          </ItemGroup>
        </Container>
      ) : (
        <Header as="h1" textAlign="center" style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
          <Icon name="student" /> No Education Found...
        </Header>
      )}
    </>
  );
};

export default EducationDetails;
