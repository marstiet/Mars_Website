/*import React from "react";
import {
  AchievementHeading,
  BoxHeading,
  BoxSubHeading,
  ContentWrapper,
  ImgWrapper,
  Wrapper,
} from "./scrollerStyled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IrcWrapper,
  Heading,
  SubContent,
  ContentCenter,
  SubWrapper,
  Box,
  SubBoxHeading,
  SubBoxSubHeading,
  TaskHeading,
  ImgContainer,
  Img
} from "./scrollerStyled";
import IrcImg from "./scrollerImg/slide1irc-Dzkh8fU9 (1).png";
import Spros from "./scrollerImg/slide2irc-BHMHClOx.png";
import Rover from "./scrollerImg/slide3irc-8jY2cJsx.png";
import TeamImg from "../../assest/team/IRC 25 Day 5 [DoPy] (35) .jpg";

const Scroller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContentWrapper>
      <Slider {...settings}>
        <ContentCenter>
          <IrcWrapper>
            <div>
              <Heading>ABOUT IRC</Heading>
              <SubContent>
                The International Rover Challenge (IRC) Is A Premier Space
                Robotics Engineering Competition That Invites University
                Students To Design, Develop, And Operate Astronaut-Assistive
                Next-Generation Space Rovers. Participants Engage In Missions
                Simulating Martian Conditions, Providing A Comprehensive
                International-Level Engineering Experience That Combines
                Practical Skills With Essential Soft Skills Like Business
                Planning And Project Management.
              </SubContent>
              <SubContent>
                Scheduled For January 28 To February 2, 2025, At BITS Pilani,
                Goa, India, IRC 2025 Will Feature A Specially Designed 20,000
                Square Meter Simulated Landscape Called Spacescape—The World's
                Largest Arena Of Its Kind. This Edition Introduces The Optional
                Use Of Drones, Allowing Teams To Incorporate Aerial Capabilities
                Into One Of Their Four Mission Choices, Further Enhancing The
                Complexity And Realism Of The Challenges.
              </SubContent>
            </div>
            <div>
              <img src={IrcImg} alt="" />
            </div>
          </IrcWrapper>
        </ContentCenter>
        <ContentCenter>
          <IrcWrapper>
            <div>
              <Heading>ABOUT SPROS</Heading>
              <SubContent>
                The Space Robotics Society (SPROS) is a global non-profit
                organization established in 2021 by Sagar Dhaka to advance
                innovation and collaboration in space technology and robotics.
                It serves as a platform for students, educators, and
                professionals passionate about space exploration, bringing
                together expertise from fields like robotics, AI, planetary
                sciences, and aerospace engineering.
              </SubContent>
              <SubContent>
                Through initiatives like the International Rover Challenge
                (IRC), Research in Space Exploration (RiSE), and Women in Space
                Exploration (WiSE), SPROS empowers individuals to push
                boundaries and develop groundbreaking solutions. With a vision
                of fostering a limitless and equitable future, SPROS promotes
                diversity, creativity, and interdisciplinary knowledge to
                inspire the next generation of leaders in space technology.
              </SubContent>
            </div>
            <div>
              <img src={Spros} alt="" />
            </div>
          </IrcWrapper>
        </ContentCenter>
        <ContentCenter>
          <IrcWrapper>
            <div>
              <Heading>HOW IT BENEFIT US</Heading>
              <SubContent>
                IRC fosters interdisciplinary collaboration, encouraging
                participants to integrate knowledge from fields like
                electronics, mechanics, software development, and planetary
                sciences. Beyond technical expertise, students build essential
                soft skills such as teamwork, problem-solving, and resilience
                under pressure.
              </SubContent>
              <SubContent>
                Moreover, IRC connects students with a global network of peers,
                industry experts, and academics, opening doors to future
                collaborations and career opportunities. The competition
                nurtures innovation, critical thinking, and a growth mindset,
                equipping participants to excel in their academic and
                professional journeys while contributing to the advancement of
                space exploration and robotics.
              </SubContent>
            </div>
            <div>
              <img src={Rover} alt="" />
            </div>
          </IrcWrapper>
        </ContentCenter>
        <ContentCenter>
          <Wrapper>
            <TaskHeading>Tasks</TaskHeading>
            <SubWrapper>
              <Box>
                <BoxHeading>ABEX</BoxHeading>
                <BoxSubHeading>
                  <SubBoxHeading>ASTROBIOLOGY EXPEDITION</SubBoxHeading>
                  <SubBoxSubHeading>
                    The Rover Acts As A Mobile Science Laboratory To Collect
                    Samples And Perform Analysis To Seek Signs Of Life.
                  </SubBoxSubHeading>
                </BoxSubHeading>
              </Box>
              <Box>
                <BoxHeading>R&DO</BoxHeading>
                <BoxSubHeading>
                  <SubBoxHeading>Reconnaissance And Delivery</SubBoxHeading>
                  <SubBoxSubHeading>
                    Operation: The Rover Reconnaissance An Area To Search,
                    Locate, Pick Up, And Deliver Objects To Specific Locations.
                  </SubBoxSubHeading>
                </BoxSubHeading>
              </Box>
              <Box>
                <BoxHeading>AutEx</BoxHeading>
                <BoxSubHeading>
                  <SubBoxHeading>Autonomous Mission</SubBoxHeading>
                  <SubBoxSubHeading>
                    The Rover Must Traverse Between Multiple Targets Across
                    Moderately Rugged Terrain Autonomously, Guided By Arrow
                    Signs. Manual Operation Is Not Allowed.
                  </SubBoxSubHeading>
                </BoxSubHeading>
              </Box>
              <Box>
                <BoxHeading>ID&MO</BoxHeading>
                <BoxSubHeading>
                  <SubBoxHeading>
                    Instrument Deployment And Maintenance
                  </SubBoxHeading>
                  <SubBoxSubHeading>
                    The Rover Traverses A Short Distance To Operate On A Mock
                    Instrument Panel And Perform Precise Tasks.
                  </SubBoxSubHeading>
                </BoxSubHeading>
              </Box>
            </SubWrapper>
          </Wrapper>
        </ContentCenter>

        <ContentCenter>
          <Wrapper>
            <AchievementHeading>OUR ACHIEVEMENT</AchievementHeading>
            <ImgWrapper>
            <ImgContainer>
            <Img src={TeamImg} alt="" />
            </ImgContainer>   
            </ImgWrapper>
          </Wrapper>
        </ContentCenter>
        
      </Slider>
    </ContentWrapper>
  );
};
export default Scroller;*/
import React, { useState, useRef, useEffect } from "react";
import Img1 from '../../assest/team/teamaddverb.jpg';
import Img2 from '../../assest/team/groupprevirc.jpg';
import Img3 from '../../assest/team/group.jpg'; // Replace with actual file
import Img4 from '../../assest/team/groupsir.jpg'; // Replace with actual file
import Img5 from '../../assest/team/IRC 25 Day2 [DoPy] 53.jpg'; // Replace with actual file
import Img6 from '../../assest/team/IRC 25 Day 5 [DoPy] (35) .jpg'; // Replace with actual file
import { ScrollerHeading } from './scrollerStyled'

import {
  CarouselWrapper,
  SlideContainer,
  Slide,
  SlideImage,
  ArrowLeft,
  ArrowRight,
  DotsWrapper,
  Dot,
  DepartmentHrMain,
  DepartmentHrSub,
} from "./scrollerStyled"; // Adjust the path as needed

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6
];

const CustomCarousel = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      buttonRef.current.click();
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      
      <ScrollerHeading>
        <DepartmentHrMain />
        SPOTLIGHT
        <DepartmentHrSub />
      </ScrollerHeading>
      <CarouselWrapper>
        <SlideContainer index={currentIndex}>
          {images.map((img, i) => (
            <Slide key={i}>
              <SlideImage src={img} alt={`Slide ${i + 1}`} />
            </Slide>
          ))}
        </SlideContainer>

        <ArrowLeft ref={buttonRef} onClick={prevSlide}>&#10094;</ArrowLeft>
        <ArrowRight onClick={nextSlide}>&#10095;</ArrowRight>

        <DotsWrapper>
          {images.map((_, i) => (
            <Dot key={i} active={i === currentIndex} onClick={() => goToSlide(i)} />
          ))}
        </DotsWrapper>
      </CarouselWrapper>
    </div>
  );
};

export default CustomCarousel;


