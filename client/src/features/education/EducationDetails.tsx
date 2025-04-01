import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Divider, Header, Icon, Image, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemImage, ItemMeta } from "semantic-ui-react";
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
          <ItemGroup divided style={{
            border: "1px solid silver", // ✅ this is what you need
            borderRadius: "4px",     // optional, for rounded corners
            padding: "1em"           // optional, for spacing inside the box
          }}>
            {[...new Set(education.subjects.map(s => s.semester))]  // Get unique semesters
              .sort((a, b) => a - b)                                // Optional: sort semesters
              .map(semester => (
                <div key={semester}>
                  <Header as="h1" dividing textAlign="center" style={{ backgroundColor: "silver" }}>
                    Semester {semester}
                  </Header>

                  {education.subjects
                    .filter(s => s.semester === semester)
                    .map((subject) => (
                      <Item key={subject.id?.toString()} style={{ marginTop: "1.5rem", marginBottom: "0rem", paddingBootom: "0rem" }}>
                        <ItemContent>
                          <ItemHeader as='h3'>{subject.name}</ItemHeader>
                          <Divider />
                          {/* <ItemMeta>Semester {subject.semester}</ItemMeta> */}
                          <ItemDescription>{subject.description}</ItemDescription>
                          <ItemExtra style={{ marginTop: "0.5rem" }}>
                            <b>Notes:</b><br />
                            {subject.notes.map((note, i) => (
                              <span key={i}>{note}<br /></span>
                            ))}
                            <b>Bibliography:</b><br />
                            {subject.biography.map((note, i) => (
                              <span key={i}>{note}<br /></span>
                            ))}
                          </ItemExtra>
                        </ItemContent>
                      </Item>
                    ))}
                </div>
              ))}
          </ItemGroup>
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
