import { useEffect, useState, Fragment } from "react";
import { ISkill } from "../../models/ISkill";
import { getAllSkills } from "../../apis/skillsApi";
import { Divider, Header, Icon, List, ListItem, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

const SkillTable: React.FC = () => {
    const [skills, setSkills] = useState<ISkill[] | null>(null);

    useEffect(() => {
        const getAllSkillsAsync = async () => {
            try {
                const skillsFromServer = await getAllSkills();
                if (skillsFromServer) {
                    setSkills(skillsFromServer);
                }
            } catch (err: any) {
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

            {skills ? (<>
                <Table celled>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Skill</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                            <TableHeaderCell>Last time used</TableHeaderCell>
                            <TableHeaderCell>Years Professional Use</TableHeaderCell>
                            <TableHeaderCell>Years Individual Use</TableHeaderCell>
                            <TableHeaderCell>Notes</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {skills!.map((s) => (
                            <TableRow key={s._id}>
                                <TableCell>
                                    {/* <Label ribbon>First</Label> */}
                                    {s.name}
                                </TableCell>
                                <TableCell>{s.description || ""}</TableCell>
                                <TableCell>{s.yearLastUse}</TableCell>
                                <TableCell>{s.yearsOfProffesionalExperience}</TableCell>
                                <TableCell>{s.yearsOfIndividualExperience}</TableCell>
                                {/* <TableCell><p>
                                    {s.notes.map((item, index) => (
                                        <Fragment key={index}>
                                            {item}
                                            {index < s.notes.length - 1 && <br />}
                                        </Fragment>
                                    ))}
                                </p></TableCell> */}
                                <TableCell>
                                    <List bulleted>
                                        {s.notes.map((item, index) => (
                                            <ListItem key={index}>
                                                {item}
                                            </ListItem>
                                        ))}
                                    </List>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>) : (<>No Skills Found...</>)}


        </>
    )
}

export default SkillTable;