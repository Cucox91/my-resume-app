import { useEffect, useState } from "react";
import { ISkill } from "../../models/ISkill";
import { getAllSkills } from "../../apis/skillsApi";
import {
  Divider,
  Header,
  HeaderSubheader,
  Icon,
  List,
  ListItem,
  Segment,
  SegmentGroup,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

const SkillTable: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile threshold

  const [skills, setSkills] = useState<ISkill[] | null>(null);

  useEffect(() => {
    const getAllSkillsAsync = async () => {
      try {
        const skillsFromServer = await getAllSkills();
        if (skillsFromServer) {
          setSkills(skillsFromServer);
        }
      } catch (err: unknown) {
        console.log("Error Retrieving the Skills");
        console.log(err);
      }
    };
    getAllSkillsAsync();
  }, []);

  return (
    <>
      <Header as="h1" textAlign="center" style={{ marginTop: "0.5rem", marginBottom: "3.0rem" }}>
        <Icon name="code" />
        Skills
      </Header>

      {skills ? (
        <>
          {isMobile ? (
            <SegmentGroup>
              {skills!
                .slice()
                .sort((a, b) => {
                  if (b.yearLastUse !== a.yearLastUse) {
                    return b.yearLastUse - a.yearLastUse;
                  }
                  if (b.yearsOfProffesionalExperience !== a.yearsOfProffesionalExperience) {
                    return b.yearsOfProffesionalExperience - a.yearsOfProffesionalExperience;
                  }
                  return b.yearsOfIndividualExperience - a.yearsOfIndividualExperience;
                })
                .map((s) => (
                  <Segment textAlign="center">
                    <Header>
                      <Header.Content style={{ marginBottom: "0.5rem" }}>{s.name}</Header.Content>
                      <HeaderSubheader>{s.description}</HeaderSubheader>
                    </Header>

                    <Divider horizontal>Details</Divider>
                    <p>
                      <b>Last Year Used:</b> {s.yearLastUse} <br />
                      <b>Years Professional Use:</b> {s.yearsOfProffesionalExperience} <br />
                      <b>Years Individual Use:</b> {s.yearsOfIndividualExperience} <br />
                    </p>

                    <p>
                      {s.notes.map((n) => (
                        <>
                          - {n} <br />
                        </>
                      ))}
                    </p>
                  </Segment>
                ))}
            </SegmentGroup>
          ) : (
            <Table celled striped textAlign="center" verticalAlign="middle">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Skill</TableHeaderCell>
                  <TableHeaderCell>Confidence</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                  <TableHeaderCell>Last time used</TableHeaderCell>
                  <TableHeaderCell>Years Professional Use</TableHeaderCell>
                  <TableHeaderCell>Years Individual Use</TableHeaderCell>
                  <TableHeaderCell>Notes</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skills!
                  .slice()
                  .sort((a, b) => {
                    if (b.yearLastUse !== a.yearLastUse) {
                      return b.yearLastUse - a.yearLastUse;
                    }
                    if (b.yearsOfProffesionalExperience !== a.yearsOfProffesionalExperience) {
                      return b.yearsOfProffesionalExperience - a.yearsOfProffesionalExperience;
                    }
                    return b.yearsOfIndividualExperience - a.yearsOfIndividualExperience;
                  })
                  .map((s) => (
                    <TableRow key={s._id}>
                      <TableCell>{s.name}</TableCell>
                      <TableCell>{s.confidence.toUpperCase() || ""}</TableCell>
                      <TableCell width={5}>{s.description || ""}</TableCell>
                      <TableCell>{s.yearLastUse}</TableCell>
                      <TableCell>{s.yearsOfProffesionalExperience}</TableCell>
                      <TableCell>{s.yearsOfIndividualExperience}</TableCell>
                      <TableCell textAlign="left">
                        <List bulleted>
                          {s.notes.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                          ))}
                        </List>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </>
      ) : (
        <>No Skills Found...</>
      )}
    </>
  );
};

export default SkillTable;
