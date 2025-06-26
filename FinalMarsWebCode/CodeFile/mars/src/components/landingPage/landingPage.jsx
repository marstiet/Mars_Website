import React from "react";
import Landing2 from "../../assest/landing2.png";
import LandingSide from "../../assest/MarsLogo.png";
import Anys from "../../assest/Anays.png";
import RockPecker from "../../assest/RockPecker.png";
import Factory from "../../assest/Factory.png";
import Equation from "../../assest/equation.png";
import System from "../../assest/systems.png";
import FooterImg from "../../assest/formback-BjIy3UFH.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { DemoData, DepartmentData } from './demoData';
import WebVideo from '../../assest/video/website_video.mp4';
import Linkedin from "../../assest/marslinkedin.png";
import Insta from "../../assest/marsinsta.png";

import {
  ImgHolder,
  LandingSideImg,
  MainImg,
  MainVideo,
  LandingSideImgHolder,
  LandingSecoundSideImgHolder,
  ContentHolder,
  Count,
  Box,
  CountHolder,
  CountContent,
  ContentOne,
  ContentSecond,
  BoxWrapper,
  DriveUs,
  HrFirst,
  DriveUsHolder,
  HrSecound,
  ContentBoxHolder,
  ContentBoxWrapper,
  DriveContentBox,
  BoxContent,
  BoxSubContent,
  DepartmentHeading,
  DepartmentHrMain,
  DepartmentWrapper,
  DepartmentSubHeading,
  DepartmentHrSub,
  ImgBoxHolder,
  BoxImgHolder,
  Img,
  ImgBoxContent,
  ImgBoxHeading,
  // ImgBoxSubHeading,
  OurSponsors,
  // FameImgWrapper,
  OurSponsorsWrapper,
  OurSponsorsImg,
  ImgOurSponsors,
  Footer,
  Contect,
  ContentWrapper,
  Icon,
  IconsHolder,
  Form,
  FormButoon,
  Input,
  InputHolder,
  Lable,
  Textarea,
  // CropOneWrapper,
  // CropTwoWrapper,
  // FameImgHolder,
  // FameContentWrapper,
  // FameContent,
  // FameSubContent,
  // Emargingteam,
  // SuccessSubone,
  // SuccessSubTwo,
  // Arthur,
  // ArthurImg,
  BoxHeading,
  DriveUsContent,
  DisplayDiv,
  DisplayDivHoler,
  // FooterImage,
  // FooterDiv,
  // FooterEnd,
  // FooterBtn,
  RoverImg,
  LinkHolder,
  LinkImg,
  DemoDataImg,
  DemoDataTitle,
  DemoDataDesc,
  Address,
  IconPic,
} from "./landingStyled";
import LandingSide2 from "../../assest/RoverEditImg.png";
import { HiOutlineUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { GiDart } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaFilePen } from "react-icons/fa6";
import Scroller from "../scroller/scroller";

export const LandingPage = () => {
  const [DisplayData, setDemoData] = React.useState([]);

  const OpenDiv = (title) => {
    const NewData = DemoData.filter((item) => item.title === title);
    setDemoData(NewData);
  }
  return (
    <div>
      <ImgHolder>
        <MainVideo autoPlay muted loop playsInline>
          <source src={WebVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </MainVideo>
     
      </ImgHolder>
      <LandingSideImgHolder>
        <LandingSideImg src={LandingSide} alt="" />
      </LandingSideImgHolder>
      <ImgHolder style={{ backgroundColor: "#0b0a09" }}>
        <MainImg src={Landing2} alt="" />
        <ContentHolder>
          <CountHolder>
            <Count>O1</Count>
            <CountContent>OUR STORY</CountContent>
          </CountHolder>
          <ContentOne>
            MARS (Mechatronics and Robotics Society) is one of the leading
            technical societies at Thapar University, which is dedicated to
            advancing in the fields of robotics and mechatronics. We provide a
            platform for robotics enthusiasts to improve and showcase their
            skills by working on actual projects.
          </ContentOne>
          <ContentSecond>
            As a technical society, our primary work is on mobile and
            research-based projects associated with robotics and mechatronics,
            providing hands-on workshops, lectures, and seminars for school
            students. Our society is building an autonomous rover to present at
            the International Rover Challenge, which will work in conditions
            similar to the surface of the planet Mars, collect soil samples, and
            perform chemical tests to detect life.
          </ContentSecond>
          <BoxWrapper>
            <Box>
              <BoxHeading>1000+</BoxHeading>
              <div>FOLLOWERS</div>
            </Box>
            <Box>
              <BoxHeading>100+</BoxHeading>
              <div>MEMBERS</div>
            </Box>
            <Box>
              <BoxHeading>10+</BoxHeading>
              <div>PROJECTS</div>
            </Box>
          </BoxWrapper>
        </ContentHolder>
      </ImgHolder>
      <LandingSecoundSideImgHolder>
        <RoverImg src={LandingSide2} alt="" />
      </LandingSecoundSideImgHolder>

      <div>
        <DriveUsHolder>
          <HrFirst />
          <DriveUs>WHAT DRIVES US</DriveUs>
          <HrSecound />
        </DriveUsHolder>
        <ContentBoxWrapper>
          <ContentBoxHolder>
            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <HiOutlineUsers
                    style={{ fontSize: "50px", color: "#fd8b61" }}
                  />
                </IconPic>
                <BoxContent>Networking Nexus</BoxContent>
                <BoxSubContent>
                  Connect with professionals and broaden horizons through engaging
                  networking events.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>

            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <SlCalender style={{ fontSize: "50px", color: "#fd8b61" }} />
                </IconPic>
                <BoxContent>Engaging Events</BoxContent>
                <BoxSubContent>
                  Join interactive events that inspire and ignite creativity.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>

            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <FaFilePen  style={{ fontSize: "50px", color: "#fd8b61" }} />
                </IconPic>
                <BoxContent>Publications</BoxContent>
                <BoxSubContent>
                  Dive into captivating publications that ignite your imagination and awaken your creative spirit.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>
          </ContentBoxHolder>
          <ContentBoxHolder>
            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <PiLightbulbFilamentBold
                    style={{ fontSize: "50px", color: "#fd8b61" }}
                  />
                </IconPic>
                <BoxContent>Innovative Projects</BoxContent>
                <BoxSubContent>
                  Discover projects that redefine technology and creativity.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>
            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <GiDart style={{ fontSize: "50px", color: "#fd8b61" }} />
                </IconPic>
                <BoxContent>Competitive Edge</BoxContent>
                <BoxSubContent>
                  Showcasing skills and earning accolades on the competitive
                  stages.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>

            <DriveContentBox>
              <DriveUsContent>
                <IconPic>
                  <RiGraduationCapLine
                    style={{ fontSize: "50px", color: "#fd8b61" }}
                  />
                </IconPic>
                <BoxContent>Dynamic Workshops</BoxContent>
                <BoxSubContent>
                  Hands-on workshops to master emerging technologies.
                </BoxSubContent>
              </DriveUsContent>
            </DriveContentBox>
          </ContentBoxHolder>
        </ContentBoxWrapper>

        <div>
          <DepartmentWrapper>
            <DepartmentHeading>
              <DepartmentHrMain />
              DEPARTMENTS
            </DepartmentHeading>
            <DepartmentSubHeading>
              Exploring Excellence Across Our Departments 
              <DepartmentHrSub />
            </DepartmentSubHeading>
          </DepartmentWrapper>
        </div>
        <ImgBoxHolder>
          {
            DepartmentData.map((item) => (
              <BoxImgHolder onMouseEnter={() => OpenDiv(item.title)} onMouseLeave={() => OpenDiv()} key={item.id}>
                <Img src={item.img} alt="" />
                <ImgBoxContent>
                  <ImgBoxHeading>{item.title}</ImgBoxHeading>
                </ImgBoxContent>
              </BoxImgHolder>
            ))
          }
        </ImgBoxHolder>
      </div>



      {
        DisplayData.map((item) => (
          <DisplayDivHoler>
            <DisplayDiv>
              <div key={item.id}>
                <DemoDataTitle>{item.title}</DemoDataTitle>
                <DemoDataDesc>{item.description}</DemoDataDesc>
              </div>
              <DemoDataImg src={item.img}/>
            </DisplayDiv>
          </DisplayDivHoler>
        ))
      }



      <Scroller />
      <OurSponsors>OUR SPONSORS</OurSponsors>
      <OurSponsorsImg>
        <OurSponsorsWrapper>
          <ImgOurSponsors>
            <Img src={Anys} alt="" />
          </ImgOurSponsors>
          <ImgOurSponsors>
            <Img src={RockPecker} alt="" />
          </ImgOurSponsors>
          <ImgOurSponsors>
            <Img src={Factory} alt="" />
          </ImgOurSponsors>
          <ImgOurSponsors>
            <Img src={Equation} alt="" />
          </ImgOurSponsors>
          <ImgOurSponsors>
            <Img src={System} alt="" />
          </ImgOurSponsors>
        </OurSponsorsWrapper>
      </OurSponsorsImg>
      <div>
        <Form>
          <InputHolder>
            <Lable>Full Name</Lable>
            <Input type="text" placeholder="Enter your name" />
          </InputHolder>
          <InputHolder>
            <Lable>Email address</Lable>
            <Input type="text" placeholder="Enter your email" />
          </InputHolder>
          <InputHolder>
            <Lable>Phone Number</Lable>
            <Input type="text" placeholder="Enter your Phone Number" />
          </InputHolder>
          <InputHolder>
            <Lable>Your Query</Lable>
            <Textarea
              id="w3review"
              name="w3review"
              rows="7"
              cols="50"
              placeholder="Enter your Query"
            ></Textarea>
          </InputHolder>
          <div>
            <FormButoon>Submit</FormButoon>
          </div>
        </Form>
        <Footer>
          <Img src={FooterImg} alt="" />
          <Contect>
            <ContentWrapper>
              <Icon>
                <FaLocationDot />
              </Icon>
              <Address>
                Bhadson Rd, Adarsh Nagar, Prem Nagar, Patiala, Punjab 147004
              </Address>
            </ContentWrapper>
            <ContentWrapper>
              <Icon>
                <SlEnvolopeLetter />
              </Icon>
              <Address>mars@thapar.edu</Address>
            </ContentWrapper>
            <IconsHolder>
              <LinkHolder>
           <LinkImg>
            <Img src={Linkedin} alt="" />
           </LinkImg>
           <LinkImg>
            <Img src={Insta} alt="" />
           </LinkImg>
              </LinkHolder>
            </IconsHolder>
          </Contect>
        </Footer>
      </div>
   
    </div>
  );
};
