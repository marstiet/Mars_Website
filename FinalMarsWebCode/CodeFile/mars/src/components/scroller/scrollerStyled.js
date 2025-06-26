/*import styled from "styled-components";

export const ContentWrapper = styled.div`
color: white;
width: 94%;
margin-left:3%;
`
export const ArrowRight = styled.div`
  width: 50px;
  background-color: black;
  height: 23.5px;
  padding: 3.5px 0px 3px 2px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: white;
    width: 52px;
    padding: 3.5px 0px 3px 2px;
  }
`;

export const ArrowLeft = styled.div`
  width: 50px;
  background-color: black;
  height: 23.5px;
  padding: 3.5px 0px 3px 27px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: white;
    width: 52px;
    padding: 3.5px 0px 3px 30px;
  }
`;

export const IrcWrapper = styled.div`
display: flex;
background-color: #fe6e3a;
width: 80%;
height: 450px;
border-radius: 10px;
justify-content: center;
align-items: center;
color: black;
padding: 15px;
margin-left: 10%;
`

export const Heading = styled.div`
font-size: 50px;
font-weight: 700;
margin-bottom: 10px;
`

export const SubContent = styled.div`
font-size: 16px;
font-weight: 600;
margin-bottom: 15px;

` 

export const ContentCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Wrapper = styled.div`
background-color: #fe6e3a;
width: 80%;
height: 480px;
border-radius: 10px;
color: black;
padding: 20px;
margin-left: 10%;
color: white;
font-family: "Orbitron", sans-serif;

`

export const SubWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 10px;
`
export const Box = styled.div`
width: 45%;
height: 200px;
margin-right: 50px;
`
export const BoxHeading = styled.div`
background-color: black;
color: orangered;
width: 100%;
padding: 10px;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
`

export const BoxSubHeading = styled.div`
background-color:white;
width: 100%;
height: 150px;
padding: 10px;

color: black;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
`

export const SubBoxHeading = styled.div`
font-size: 20px;
font-weight: 600;
`
export const SubBoxSubHeading = styled.div`
font-size: 14px;
text-transform: uppercase;
margin-top: 10px;
font-weight: 700;
`

export const TaskHeading = styled.div`
font-size: 30px;
font-weight: 700;
width: 100%;
color: black;
`

export const ContentBoxCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const AchievementHeading = styled.div`
font-size: 30px;
font-weight: 700;
width: 100%;
color: black;
`

export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ImgContainer = styled.div`
background-color: black;
width: 40rem;
height: 350px;
margin-top: 20px;
border-radius: 10px;
`

export const Img  = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
`*/
import styled from "styled-components";
import NulshockBold from '../../assest/font/nulshock bd.ttf'


export const DepartmentHrMain = styled.hr`
width: 60%;
height: 15px;
border: none;
padding: 0px;
margin-right:1vw;
background-color: #fe6e3a;
` 
export const DepartmentHrSub = styled.hr`
width: 23%;
height: 15px;
border: none;
background-color: #fe6e3a;
margin-left: 15px;
` 

export const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 600px;
  margin: 40px auto;
  overflow: hidden;
  border-radius: 15px;
  background-color: #000;
`;

export const SlideContainer = styled.div`
  display: flex;
  transform: translateX(${(props) => `-${props.index * 100}%`});
  transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlideImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 15px;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fe6e3a;
  }
`;

export const ArrowLeft = styled(Arrow)`
  left: 15px;
`;

export const ArrowRight = styled(Arrow)`
  right: 15px;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fe6e3a" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ScrollerHeading = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
margin-top: 50px;
`