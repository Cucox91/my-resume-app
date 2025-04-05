import { Link, useParams } from "react-router-dom";
import { ISkill } from "../../models/ISkill";
import { useEffect, useState } from "react";
import { getSkillById } from "../../apis/skillsApi";
import { Container, Divider, Header, Icon, Segment, SegmentGroup } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import formatDate from "../../utils/DateAndTime";

const SkillDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile threshold
  const [skill, setSkill] = useState<ISkill | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const skillData = await getSkillById(id!);
        if (skillData) {
          setSkill(skillData);
        }
      } catch (err: unknown) {
        console.error("Error fetching Skill by ID", err);
      }
    };
    fetchExperience();
  }, [id]);

  return <>
    {skill ? (<Container>
      <Header as="h1" textAlign="center" style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
        <Header.Content>
          <Icon name="code" style={{ margin: "1.5rem" }} />
          {skill.name}
          <Icon name="code" style={{ margin: "1.5rem" }} />
        </Header.Content>
        <Header.Subheader style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
          {skill.description}
        </Header.Subheader>
      </Header>
      <Divider horizontal style={{ margin: "3.0rem" }}>Details</Divider>
      <SegmentGroup vertical={isMobile} horizontal={!isMobile}>
        <Segment textAlign="center" ><b>Confidence:</b> {skill.confidence.toUpperCase()}</Segment>
        <Segment textAlign="center" ><b>Last Year Used:</b> {skill.yearLastUse}</Segment>
        <Segment textAlign="center" ><b>Years of Individual Experience:</b> {skill.yearsOfIndividualExperience}</Segment>
        <Segment textAlign="center" ><b>Years of Professional Experience:</b> {skill.yearsOfProffesionalExperience}</Segment>
      </SegmentGroup>

      <Divider horizontal style={{ margin: "3.0rem" }}>Used In</Divider>
      <SegmentGroup vertical>
        {skill.experiences.map(ex => (
          <Segment textAlign="center">
            <Header as={Link} to={`/experience/${ex._id}`}>
              {ex.title} at {ex.company}
              <Header.Subheader>From {formatDate(ex.fromDate)} to {ex.toDate ? formatDate(ex.toDate) : "Current"}</Header.Subheader>
            </Header>
          </Segment>
        ))}
      </SegmentGroup>

      <Divider horizontal style={{ margin: "3.0rem" }}>Notes</Divider>
      <SegmentGroup vertical>
        {skill.notes.map(note => (
          <Segment textAlign="center">
            {note} <br />
          </Segment>
        ))}
      </SegmentGroup>


    </Container>) : (<Header as="h1" textAlign="center">
      <Icon name="code" /> No Skill Found...
    </Header>)}
  </>;
};

export default SkillDetails;
