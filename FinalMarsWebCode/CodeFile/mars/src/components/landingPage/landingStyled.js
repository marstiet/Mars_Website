import styled from "styled-components";
import NulshockBold from '../../assest/font/nulshock bd.ttf'

export const ImgHolder = styled.div`
width: 100%;
height: 80%;

`

export const MainImg = styled.img`
width: 100%;
height: 100%;
` 

export const LandingSideImg = styled.img`
height: 45%;
width: 60%;
margin-top: 300px;
padding: 0px;
margin-right: -210px;
padding: 0%;
`

export const RoverImg = styled.img`
width: 110%;
height: 100%;
transform: rotate(0deg);
`

export const DemoDataImg = styled.img`
width: 240px;
height: 240px;
`

export const MainVideo = styled.video`
  width: 100%;
  height:auto;
  //object-fit: cover;
  border-radius: 0px; 
  margin-top: 0px;
  margin-left: 0%;
  margin-bottom: 0px;
`;

export const LandingSideImgHolder = styled.div`
width:540px;
height: 730px;
position: absolute;
right: 0px;
margin-top: -315px;
`
export const LandingSecoundSideImgHolder = styled.div`
width: 400px;
height:36.2rem;
position: absolute;
margin-top: -290px;
`

export const ContentHolder = styled.div`
position: absolute;
margin-top:-57%;
padding: 0px;
` 

export const CountHolder = styled.div`
margin-left: 150px;
display: flex;
align-items: center;
padding: 0px;
`
export const CountContent = styled.div`
margin-left: -160px;
font-size: 50px;
font-weight: 900;
color: #111828;
font-family: 'Nulshock';
src: url(${NulshockBold}) format('truetype');
`

export const Count = styled.div`
font-size: 180px;
font-weight: 800;
color: #fc8b63;
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
`

export const ContentOne = styled.div`
text-align: justify;
margin-left:180px ;
margin-top: 20px;
width: 60%;
display: flex;
flex-wrap: wrap;
font-size:x-large;
font-weight: bold;
line-height: 2rem;
color: black;
font-family: "Play", sans-serif;

`
export const ContentSecond = styled.div`
text-align: justify;
margin-left:180px;
margin-top: 40px;
width: 60%;
display: flex;
flex-wrap: wrap;
font-size:x-large;
line-height: 2rem;
font-weight: bold;
color: black;
font-family: "Play", sans-serif;

`

export const BoxWrapper = styled.div`
display: flex;
width: 90%;
justify-content: end;
align-items: center;
margin-top: 80px;
`
export const Box = styled.div`
width: 170px;
height: 170px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
color: white;
margin-right: 40px;
font-weight:800 ;
flex-direction: column;
font-size: 20px;
font-family: 'Nulshock';
src: url(${NulshockBold}) format('truetype');
`

export const DriveUsHolder = styled.div`
margin-top: 5%;
`

export const DriveUs = styled.div`
justify-content: center;
align-items: center;
display: flex;
color: white;

font-weight: 700;
margin-left: 15%;
margin-top: 20px;
font-size: 50px;
font-family: 'Nulshock';
src: url(${NulshockBold}) format('truetype');
`

export const HrFirst = styled.hr`
width: 35%;
margin-left: 5%;
border: none;
height: 15px;
background-color: #fe6e3a;
`


export const HrSecound = styled.hr`
width: 29%;
margin-left: 71%;
border: none;
height: 15px;
background-color: #fe6e3a;
margin-top: 20px;
`

export const ContentBoxWrapper = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ContentBoxHolder = styled.div`
display: flex;
align-items: center;
`

export const DriveUsContent = styled.div`
margin-top:120px ;
`
export const IconPic = styled.div`
text-align: left;
`

export const DriveContentBox = styled.div`
width: 370px;
height: 315px;
background: linear-gradient(173deg, rgba(15,15,15,1) 0%, rgba(31,31,31,1) 95%);
border-radius: 10px;
margin-left: 20px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
color: white;
&:hover{
    background-color: #36353c;
    cursor: pointer;
    transition-duration: 0.2s;
    scale: 1.1;
}
`

export const BoxContent = styled.div`
font-size: 20px;
font-weight: 700;
margin: 5px 0px;
text-align: left;
font-family: "poppins";
`

export const BoxSubContent = styled.div`
font-size: 15px;
font-weight: 200;
color: #7d8589;
font-family:sans-serif;
text-align: left;`

export const DepartmentWrapper = styled.div`
margin: 20px 0px;
`
export const DepartmentHeading = styled.div`
color: white;
font-size: 40px;
font-weight: 700;
display: flex;
align-items: center;
width: 53%;
justify-content: space-between;
font-size: 50px;
font-family: 'Nulshock';
src: url(${NulshockBold}) format('truetype');

`

export const DepartmentHrMain = styled.hr`
width: 40%;
height: 15px;
border: none;
background-color: #fe6e3a;
`  

export const DepartmentSubHeading = styled.div`
color: white;
font-size: 24px;
/* font-weight: 100; */
display: flex;
align-items: center;
width: 100%;
justify-content:end;
margin-top: 20px;

`

export const DepartmentHrSub = styled.hr`
width: 23%;
height: 15px;
border: none;
background-color: #fe6e3a;
margin-left: 15px;
`  
export const ImgBoxHolder = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
padding:0px 40px ;
object-fit: cover;
`

export const BoxImgHolder = styled.div`
width: 240px;
height: 300px;
color: white;
margin-top: 20px;
object-fit: cover;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 10px;
&:hover{
    transition-duration: 0.2s;
    scale: 1.1;
}
`

export const Img = styled.img`
width: 121%;
height: 100%;
border-radius:5px;
margin-left: -10px;
`

export const ImgBoxContent = styled.div`
margin-top: -150px;
padding: 10px;
`

export const ImgBoxHeading = styled.div`
color: white ;
font-size: 25px;
//font-weight: 300;
margin-top: 100px;
font-family: 'Nulshock';
src: url(${NulshockBold}) format('truetype');
`

export const ImgBoxSubHeading = styled.div`
font-size: 14px;
font-weight: 200;
`

export const OurSponsors = styled.div`
display: flex;
justify-content:center;
align-items: center;
color: white;
font-weight: 700;
margin:10rem 0px 70px 0px;
font-size: 50px;
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
`

export const FameImgWrapper = styled.div`
width: 100%;
height: 100%;
justify-content: space-between;
display: flex;
align-items: center;
padding: 30px;
font-family: "Orbitron", sans-serif;
`

export const CropOneWrapper = styled.div`
width: 15%;
height: 75rem;
`
export const CropTwoWrapper = styled.div`
width: 26%;
height: 96rem;
display: flex;
margin-bottom: -300px;
z-index: 2;
`

export const OurSponsorsImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const OurSponsorsWrapper = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-left:-100px;
margin-top: 10px;
`

export const ImgOurSponsors = styled.div`
width: 250px;
height: 100px;
margin-left: 150px;
margin-bottom: 80px;
`

export const Footer = styled.div`
width: 80%;
height:400px;
margin-top: 20%;
`

export const Contect = styled.div`
margin-top: -300px;
color: white;
margin-left: 100px;
`

export const ContentWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
width: 35%;
font-size: large;
`

export const Icon = styled.div`
margin-right: 20px;
`

export const IconsHolder = styled.div`
margin-top: 50px;
width: 15%;
font-size: 40px;
margin-left: -10px;
`

export const Form = styled.div`
width: 30%;
padding: 20px;
color: white;
background-color:#0d0d0d;
border-radius: 10px;
margin-left: 50%;
position: absolute;
margin-top: -10%;
`

export const FormButoon = styled.button`
width: 100%;
height: 40px;
border-radius:5px;
border: none;
background-color: #fe6e3a;
font-family: 'poppins';
font-weight: 500;
font-size: 20px;
`

export const Input = styled.input`
width: 100%;
border: 1px solid gray;
height: 45px;
border-radius: 5px;
background-color: #202024;
padding: 0px 10px;
font-size: 15px;
font-weight: 500;
color: white;
`

export const InputHolder = styled.div`
margin-bottom: 20px;
`

export const Lable = styled.div`
font-size: 15px;
font-weight: 600;
margin-bottom: 10px;
font-family: 'poppins';
text-align: left;
`

export const Textarea = styled.textarea`
width: 100%;
border: 1px solid gray;
height: 85px;
border-radius: 5px;
background-color: #202024;
padding: 10px 10px;
font-size: 15px;
font-weight: 500;
color: white;
font-family: "poppins";
`
export const Address = styled.div`
text-align: left;
font-family: "poppins";
`
export const FameImgHolder = styled.div`
width: 55rem;
height:40rem;
`

export const FameContentWrapper = styled.div`
color: white;
margin-top: -80px;
`
export const FameContent = styled.div`
font-size: 40px;
font-weight: 700;
justify-content: center;
align-items: center;
display: flex;
`

export const FameSubContent = styled.div`
font-size: 20px;
font-weight: 600;
justify-content: center;
align-items: center;
display: flex;
`

export const TeamContent = styled.div`
font-size: 25px;
font-weight: 700;
justify-content: center;
align-items: center;
display: flex;
margin-top: 25px;
`

export const TeamSubContent = styled.div`
font-size: 15px;
font-weight: 700;
justify-content: center;
align-items: center;
display: flex;
`

export const Emargingteam = styled.div`
width: 100%;
font-size: 28px;
font-weight: 700;
color: white;
margin: 40px 0px 40px 10%;
` 

export const SuccessSubone = styled.div`
font-size: 42px;
font-weight: 700;
color: white;
width: 600px;
`

export const SuccessSubTwo = styled.div`
font-size: 40px;
font-weight: 700;
color: white;
margin-left: 40%;
width: 600px;
`

export const Arthur = styled.div`
margin-left: 80%;
color: white;
width: 200px;
margin-top: 20px;
font-size: 23px;
`


export const ArthurImg = styled.div`
width: 50rem;
height:40rem;
margin-top: -50px;
margin-left: 5%;
`

export const BoxHeading = styled.span`
font-size: 35px;
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
`

export const DisplayDivHoler = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const DisplayDiv = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 260px;
background:linear-gradient(173deg, rgba(15,15,15,1) 0%, rgba(31,31,31,1) 95%) ;
margin: 30px 20px;
padding: 10px;
border-radius: 5px;
color: white;
`

export const DemoDataTitle = styled.h2`
margin-bottom: 20px;
text-align: left;
`

export const DemoDataDesc = styled.p`
line-height: 23px;
text-align: left;
`
export const LinkHolder  = styled.div`
display: flex;
justify-content: space-around;
`

export const LinkImg = styled.div`
width: 40px;
height: 50px;
&:hover{
  transform: scale(1.1);
}
`