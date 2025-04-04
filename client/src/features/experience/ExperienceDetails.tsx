import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Divider, Header, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, Label, Segment, SegmentGroup } from "semantic-ui-react";
import { getExperienceById } from "../../apis/experienceApi";
import { IExperience } from "../../models/IExperience";
import formatDate from "../../utils/DateAndTime";

const ExperienceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<IExperience | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const experienceData = await getExperienceById(id!);
        if (experienceData) {
          setExperience(experienceData);
        }
      } catch (err: unknown) {
        console.error("Error fetching experience by ID", err);
      }
    };
    fetchExperience();
  }, [id]);

  return (
    <>
      {experience ? (
        <Container>
          <Header as="h1" textAlign="center" style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
            <Header.Content>
              <Icon name="briefcase" />
              {experience.title} at {experience.company}
            </Header.Content>
            <Header.Subheader>
              From {formatDate(experience.fromDate)} to {experience.toDate ? formatDate(experience.toDate) : "Present"}
            </Header.Subheader>
          </Header>

          {experience.achievements!.length > 0 && (
            <ItemGroup divided>
              <Header as="h3" dividing>
                Achievements
              </Header>
              {experience.achievements!.map((ach, idx) => (
                <Item key={idx}>
                  <ItemContent>
                    <ItemDescription>{ach}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          )}

          {experience.responsibilities.length > 0 && (
            <ItemGroup divided>
              <Header as="h3" dividing>
                Responsibilities
              </Header>
              {experience.responsibilities.map((resp, idx) => (
                <Item key={idx}>
                  <ItemContent>
                    <ItemDescription>{resp}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          )}

          {experience.skills!.length > 0 && (
            <ItemGroup divided>
              <Header as="h3" dividing>
                General Skills
              </Header>
              <Item>
                <ItemContent>
                  <ItemDescription>
                    {experience.skills!.map((s) => (
                      <Label as={Link} to={`/skill/${s._id}`}>
                        {s.name}
                      </Label>
                    ))}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ItemGroup>
          )}

          {experience.projects!.length > 0 && (
            <ItemGroup divided>
              <Header as="h3" dividing>
                Projects
              </Header>
              {experience.projects!.map((project, idx) => (
                <Item key={idx}>
                  <ItemContent>
                    <ItemHeader>{project.name}</ItemHeader>
                    {project.description && <ItemDescription>{project.description}</ItemDescription>}
                    {project.skills?.length > 0 && (
                      <ItemDescription>
                        {/* Raziel: Make this look better later.*/}
                        <strong style={{ textAlign: "center" }}>Skills:</strong>
                        {project.skills.map((s) => (
                          <Label as={Link} to={`/skill/${s._id}`} style={{ margin: "0.3rem" }}>
                            {s.name}
                          </Label>
                        ))}
                      </ItemDescription>
                    )}
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          )}

          <Divider horizontal>Other Details</Divider>
          <SegmentGroup horizontal>
            {experience.teamSize && (
              <Segment textAlign="center">
                <Header as="h4">Team Size: {experience.teamSize}</Header>
              </Segment>
            )}
            {experience.location && (
              <Segment textAlign="center">
                <Header as="h4">Location: {experience.location}</Header>
              </Segment>
            )}
          </SegmentGroup>
        </Container>
      ) : (
        <Header as="h1" textAlign="center">
          <Icon name="briefcase" /> No Experience Found...
        </Header>
      )}
    </>
  );
};

export default ExperienceDetails;
