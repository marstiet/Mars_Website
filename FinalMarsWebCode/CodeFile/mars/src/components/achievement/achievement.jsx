
import React from "react";
import {
  IrcHolder,
  BackgroundTop,
  ImageWrapper,
  MainImg,
  GradientOverlay,
  DemoDiv,
  BackgroundTopHeading,
  SecImg,
  SecImgHolder,
  Wrapper,
  TalkTitle,
  Img,
  BottomGradient,
  SecImgHolderHeading,
  SecImgSubHeading,
  SecImgHeading,
  ThirdFourth,
  ThirdFourthImgHolder,
  ThirdFourthImgHeading,
  ThirdFourthImgMainHeading,
  ThirdFourthImgSubHeading,
  Containerr,
  Ino,
  Line1,
  Line2,
  SectionTitle,
  CardGrid,
  Innovations,
  Card as StyledCard,
  CardImage,
  CText,
  CardTitle,
  CardDescription,
  InsightLine,
  Line3,
  Line4,
  Insights,
  InsightsGrid,
  InsightsText,
  // InsightHighlight,
  Orange1,
  Para,
  Mag,
  Publications,
  PubPara,
  Authors,
  PubLine,
  Section,
  // SectionHeader,
  // HeaderLine,
  // HeaderTitleContainer,
  // HeaderTitle,
  // HeaderEndLine,
  // Container,
  Container1,
  Container3,
  Title1,
  Title2,
  Pubdes,
  OrangeText,
  WhiteText,
  Subtitle,
  Container2,
  EventCard,
  EventImage,
  EventDetails,
  EventDate,
  EventHeading,
  EventText,
  EmptyDiv
} from './achievementStyled';
import RoverImg from "../../assest/IRC 25 Day 4 [DoPy]-11 (1).jpg";
import TeamRunner from "../../assest/team/IRC 25 Day 5 [DoPy] (35) (1).jpg";
import TeamEmerging from "../../assest/team/EmergingT.png";
import FirstPlace from "../../assest/team/firsterc.jpg";

// Card Component
const Card = ({ title, year, image }) => (
  <StyledCard>
    <CardImage src={image} alt={title} />
    <CText>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{year}</CardDescription>
    </CText>
  </StyledCard>
);

export const Achievement = () => {
  const innovations = [
    { title: "ALAKNANDA", year: "2025", image: "/roboDuelist.jpg" },
    { title: "BHAGIRATHI", year: "2024", image: "/bhagirathi1.jpg" },
    { title: "MANDAKINI", year: "2023", image: "/1-BrZcJz6s.jpg" },
  ];
  const innovations2 = [
    { title: "MARVIN", year: "2024", image: "/4-O3EFzGpI.png" },
    { title: "ROBO DUELIST", year: "2024", image: "/robo1.png" },
    { title: "ROBOMUSE", year: "2023", image: "/robomuse.jpeg" },
  ];
  const events = [
    {
      date: "21-03-2025",
      title: "ANRF Workshop on Practicing Robotics",
      image: "/Picture1.png",
      description:
        "We conducted a workshop on Practicing Robotics and Prototype Development, at IIT Ropar organized by The Robotics Society India and ANRF. We demonstrated our Martian rover prototype, covering every subsystem—from locomotion to control & Automation—providing hands-on insights into prototype development, robotics, and real-world applications."
    },
    {
      date: "12-02-2025",
      title: "Session on Academic Research Work",
      image: "/Picture2.png",
      description:
        "An insightful session was conducted with the members of team MARS by Dr. Ashish Singla (President, MARS), emphasizing the significance of research work in the industry. The session also covered various prestigious conferences held globally each year, providing valuable insights into opportunities for knowledge exchange and professional growth."
    },
    {
      date: "01-03-2024",
      title: "Space Robotics Workshop",
      image: "/Picture3.png",
      description:
        "Team MARS conducted a hands-on workshop on space robotics for the students of DPS Patiala. Inspiring young minds, sparking curiosity and passion for Robotics and Space Exploration, leaving an impact for future Engineers and Scientists."
    }
  ]

  return (
    <Containerr>
      <IrcHolder>
        <BackgroundTop>
          <ImageWrapper>
            <MainImg src={RoverImg} alt="background" />
            <GradientOverlay />
          </ImageWrapper>

          <DemoDiv />
          <BackgroundTopHeading>
            Turning Ideas <br />
            into Reality
          </BackgroundTopHeading>
        </BackgroundTop>

        <SecImg>
          <SecImgHolder>
            <Wrapper>
              <Img src={TeamRunner} alt="Runner Up" />
              <BottomGradient />
            </Wrapper>
            <SecImgHolderHeading>
              <SecImgSubHeading>
                International Rover Challenge' <span style={{ color: "#f16837" }}>25</span>
              </SecImgSubHeading>
              <SecImgHeading>RUNNER UP</SecImgHeading>
            </SecImgHolderHeading>
          </SecImgHolder>
        </SecImg>

        <ThirdFourth>
          <div>
            <ThirdFourthImgHolder>
              <Img src={TeamEmerging} alt="Emerging Team" />
            </ThirdFourthImgHolder>
            <ThirdFourthImgHeading>
              <ThirdFourthImgMainHeading>
                EMERGING TEAM <br /> OF THE YEAR
              </ThirdFourthImgMainHeading>
              <ThirdFourthImgSubHeading>
                International Rover Challenge' <span style={{ color: "#f16837",fontFamily:"poppins" }}>23</span>
              </ThirdFourthImgSubHeading>
            </ThirdFourthImgHeading>
          </div>

          <div>
            <ThirdFourthImgHolder>
              <Img src={FirstPlace} alt="First Place" />
              <BottomGradient />
            </ThirdFourthImgHolder>
            <ThirdFourthImgHeading>
              <ThirdFourthImgMainHeading>FIRST POSITION</ThirdFourthImgMainHeading>
              <ThirdFourthImgSubHeading>
                ERC Hackathon' <span style={{ color: "#f16837",fontFamily:"poppins" }}>24</span>
              </ThirdFourthImgSubHeading>
            </ThirdFourthImgHeading>
          </div>
        </ThirdFourth>
      </IrcHolder>

      {/* Innovations Section */}
      <Ino>
        <Line1 />
        <SectionTitle className="red">INNOVATIONS</SectionTitle>
        <Line2 />
      </Ino>

      <CardGrid>
        <Innovations>
          {innovations.map((item, idx) => (
            <Card key={idx} title={item.title} year={item.year} image={item.image} />
          ))}
        </Innovations>

        <Innovations>
          {innovations2.map((item, idx) => (
            <Card key={idx} title={item.title} year={item.year} image={item.image} />
          ))}
        </Innovations>
      </CardGrid>
<br/>
      {/* Insights Section */}
      <InsightLine>
        <Line3 />
        <SectionTitle className="orange">INSIGHTS</SectionTitle>
        <Line4 />
      </InsightLine>

      <Insights>
        <InsightsGrid>
          <InsightsText>
            <Orange1>OPEN <span style={{ color: "white" }}>MINDS</span></Orange1>
            <Orange1>IGNITE <span style={{ color: "white" }}>SPARKS</span></Orange1>
            <Orange1>CREATE <span style={{ color: "white" }}>CHANGE</span></Orange1>
          </InsightsText><Para>
          <p style={{ marginLeft: "10vw", marginTop: "0vw", width: "31vw", fontFamily: 'Poppins', fontSize: '1vw', textAlign: "justify" }}>
            From tech deep-dives and event recaps to student spotlights and artistic expressions, our magazine captures the spirit, passion, and pulse of our community — one page at a time.
          </p></Para>
        </InsightsGrid>

        <Mag
        style={{
              position: "relative",
              paddingTop: "max(50%, 10px)",
              width: "100%",
            
              height: 0,
              marginTop: "1rem",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                border: "none",

                width: "60%",
                height: "100%",
                right: 0,
                top: 0,
              }}
              src="https://online.fliphtml5.com/kdalk/elof/"
              seamless="seamless"
              scrolling="no"
              frameBorder="0"
              allowTransparency="false"
              allowFullScreen={true}
              title="Insights Magazine"
            ></iframe>
        </Mag>

      </Insights>

      {/* Publications Section */}
      <InsightLine>
        <Line3 />
        <SectionTitle className="orange">PUBLICATIONS</SectionTitle>
        <Line4 />
      </InsightLine>
<br/><br/>
      <Publications>OUR PUBLICATIONS</Publications>
      <PubPara>
        MARS Society is not just limited to participating and winning international competitions but also promotes research-driven initiatives in robotics and automation. Diving deep into core concepts like Mechanical, Electronics, Biochemistry, Biotech, Embedded systems, Control System, and Signal Processing. Here we have showcased some of our publications available in archives.
      </PubPara>
<br/>
      <Authors>
        <PubLine>
          <Title2>Title:</Title2>
          <Pubdes>Design and Analysis of a Mars Rover with Rocker-Bogie Suspension carrying a 5-DOF Robotic Arm</Pubdes>
        </PubLine><br/>
        <PubLine>
         <Title2>Authors:</Title2>
          <Pubdes>Manish Jain, Ekam Singh, Shyam Sundar Mallampalli, Anant Tomar, Dr. Sachin Kansal, Dr. Ashish Singla</Pubdes>
        </PubLine><br/>
        <PubLine>
          <Title2>Conference:</Title2>
          <Pubdes>Advances in Robotics (AIR)'2025, IIT Jodhpur (Accepted)</Pubdes>
        </PubLine>
      </Authors>

      <Authors>
        <PubLine>
          <Title2>Title:</Title2>
          <Pubdes>Designed and Field Tested Electrical Architecture for a Multi-Subsystem Rover</Pubdes>
        </PubLine><br/>
        <PubLine>
          <Title2>Authors:</Title2>
          <Pubdes>Pranjay Dhawan, Pranav Chaudhary, Madhav Katyal, Yachit Guliani, Astik Thukral, Dr. Sachin Kansal, Dr. Ashish Singla</Pubdes>
        </PubLine><br/>
        <PubLine>
          <Title2>Conference:</Title2>
          <Pubdes>Advances in Robotics (AIR)'2025, IIT Jodhpur (Accepted)</Pubdes>
        </PubLine>
      </Authors>
    
        <Section>
          {/* Header */}
          <InsightLine>
            <Line3 />
              <SectionTitle className="orange">TALKS</SectionTitle>
            <Line4 />
          </InsightLine>
    
          {/* Main Content */}
          <Container3>
            <Container1>
              <Title1>
                <OrangeText>LISTEN UP:<WhiteText> OUR</WhiteText></OrangeText><br />
                <WhiteText>LATEST DISCUSSION</WhiteText>
              </Title1>
              <Subtitle>
                From thought-provoking guest lectures to insightful panel discussions, <br />
                our Talks section brings you closer to the voices shaping the future.
              </Subtitle>
            </Container1>
    
            {/* Events Section */}
            <Container2>
              {events.map((event, idx) => (
                <EventCard key={idx}>
                  <EventImage src={event.image} alt={event.title} />
                  <EventDetails>
                    <EventDate>{event.date}</EventDate>
                    <EventHeading>{event.title}</EventHeading>
                    <EventText>{event.description}</EventText>
                  </EventDetails>
                </EventCard>
              ))}
            </Container2>
          </Container3>
        </Section></Containerr>
      );
    };
    
    export default Insights;
    

