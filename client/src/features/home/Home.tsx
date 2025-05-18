import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Segment, Image, Divider, Icon, Checkbox } from "semantic-ui-react";
import ExperienceList from "../experience/ExperienceList";
import formatDate from "../../utils/DateAndTime";
import EducationList from "../education/EducationList";
import SkillList from "../skills/SkillList";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { getUserDetails } from "../../apis/adminApi";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile threshold
  const [beingHonest, setBeingHonest] = React.useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUserDetails("cucox91");
        setUser(userData);

        if (userData!.avatar) {
          const uint8Array = new Uint8Array(userData!.avatar.data.data);
          const blob = new Blob([uint8Array], { type: userData!.avatar.data.type });
          const imageUrl = URL.createObjectURL(blob);
          setPreviewImage(imageUrl);
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      {/* Top Section: Name on the left, Title on the right */}
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>
              {user?.address} <br />
              {user?.phone} <br />
              {user?.email}
            </p>
          </Grid.Column>
          {user?.latestUpdate && (
            <Grid.Column textAlign="right">
              <Header as="h4" style={{ marginTop: "0.5rem", marginBottom: "0.1rem" }}>
                Latest Update: <br />
              </Header>
              <p>{formatDate(user!.latestUpdate)}</p>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>

      {isMobile && (
        <Segment basic style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
          <Image src={previewImage ? previewImage : "/profile.png"} alt="Profile" circular size="massive" style={{ marginRight: "2rem", maxWidth: "20rem", maxHeight: "20rem" }} />
        </Segment>
      )}

      {/* Profile & Short Bio */}
      <Segment basic style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
        {!isMobile && (
          <Image
            src={previewImage ? previewImage : "/profile.png"}
            alt="Profile"
            circular
            size={beingHonest ? "huge" : "massive"}
            style={{ marginRight: "2rem", maxWidth: "20rem",maxHeight: "20rem" }}
          />
        )}
        <Segment vertical style={{ verticalAlign: "top" }}>
          <Header as="h1" style={{ marginTop: "0.1rem", marginBottom: "0.9rem" }}>
            {user?.firstName} {user?.lastName}
          </Header>
          {beingHonest ? (
            // <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>
            //   All I want is to keep learning, to build cool things that matter, and to provide for the people I love. <br />
            //   <br /> When I was a toddler (around 3 to 4yo), my dad gave me a bucket of LEGO bricks. He sat beside me and helped me build the figures from the instruction manual.
            //   That was fun—but then something amazing happened. He started creating things that weren’t in the manual. Suddenly, the possibilities were endless. That moment sparked
            //   something in me. It was the day I fell in love with building. In many ways, it was also my first experience with programming.
            //   <br />
            //   <br /> Thanks, Dad. You’ll probably never read this, but thank you for giving me my life’s mission.
            // </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: user?.bioHonest ?? "" }} />
          ) : (
            // <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>
            //   Dynamic Full Stack Developer with over a decade of experience in designing, developing, and deploying scalable solutions for government, private sector, and SaaS
            //   applications. Proficient in leveraging modern technologies such as Blazor, MERN Stack, .NET, and cloud platforms like Azure to deliver robust systems that enhance
            //   operational efficiency and client satisfaction. Known for innovative problem-solving, driving digital transformation, and a commitment to continuous learning to stay
            //   ahead in a fast-evolving tech landscape.
            // </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: user?.bioCliche ?? "" }} />

            // <p dangerouslySetInnerHTML={{ __html: beingHonest ? honestBio : clicheBio }} />
            // <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: dynamicBioText }} />
          )}

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1rem" }}>
            <Checkbox
              toggle
              label={beingHonest ? "Honest" : "Cliché"}
              onChange={(e, data) => {
                console.log(e);
                setBeingHonest(!!data.checked);
              }}
            />
          </div>
        </Segment>
      </Segment>

      {/* Experience */}

      <Divider />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="briefcase" />
          Experience
        </Header>
      </Divider>
      <Divider />
      <ExperienceList />

      {/* Education */}
      <Divider />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="student" />
          Education
        </Header>
      </Divider>
      <Divider />
      <EducationList />

      {/* Skills */}
      <Divider />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="code" />
          Skills
        </Header>
      </Divider>
      <Divider />
      <SkillList />
      <Divider horizontal>
        <Header
          as={Link}
          to="/skill"
          style={{ color: "inherit", textDecoration: "none" }}
          onMouseEnter={(e: any) => (e.currentTarget.style.color = "blue")}
          onMouseLeave={(e: any) => (e.currentTarget.style.color = "inherit")}
        >
          See More...
        </Header>
      </Divider>
    </Container>
  );
};

export default Home;
