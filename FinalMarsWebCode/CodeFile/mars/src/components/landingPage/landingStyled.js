import styled from "styled-components";
import NulshockBold from '../../assest/font/nulshock bd.ttf';

// Image Holders
export const ImgHolder = styled.div`
  width: 100%;
  height: 80%;

  @media (max-width: 768px) {
    height: auto;
    min-height: 300px;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    object-fit: cover;
    height: auto;
  }
`;

export const LandingSideImg = styled.img`
  height: 45%;
  width: 60%;
  margin-top: 19.5vw;
  margin-right: -14vw;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    margin-top: 2rem;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin-top: 1rem;
  }
`;

export const RoverImg = styled.img`
  width: 110%;
  height: 100%;
  transform: rotate(0deg);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const DemoDataImg = styled.img`
  width: 240px;
  height: 240px;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

// Video
export const MainVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 0vw;
  margin: 0;

  @media (max-width: 768px) {
    border-radius: 8px;
    margin: 1rem 0;
  }
`;

// Side Image Holders
export const LandingSideImgHolder = styled.div`
  width: 540px;
  height: 730px;
  position: absolute;
  right: 0;
  margin-top: -315px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    margin-top: 0;
    padding: 0;
    z-index: 1;
  }
`;

export const LandingSecoundSideImgHolder = styled.div`
  width: 400px;
  height: 36.2rem;
  position: absolute;
  margin-top: -290px;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    height: auto;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }
`;

// Content
export const ContentHolder = styled.div`
  position: absolute;
  margin-top: -57%;
  padding: 0;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 0;
    width: 100%;
    padding: 1rem;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
  }
`;

export const CountHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  width: 100%;
  margin: 2rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem auto;
  }
`;

export const CountContent = styled.div`
  margin-left: -160px;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  color: #111828;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
`;

export const Count = styled.div`
  font-size: clamp(3rem, 15vw, 11rem);
  font-weight: 800;
  color: #fc8b63;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 12vw, 8rem);
  }
`;

export const ContentOne = styled.div`
  text-align: justify;
  margin-left: 180px;
  margin-top: 20px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  font-size: x-large;
  font-weight: bold;
  line-height: 2rem;
  color: black;
  font-family: "Play", sans-serif;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    font-size: 1.1rem;
    text-align: left;
    line-height: 1.6rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
    margin: 0.5rem 0;
    padding: 0.8rem;
  }
`;

export const ContentSecond = styled(ContentOne)`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Boxes
export const BoxWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

export const Box = styled.div`
  width: clamp(130px, 20vw, 170px);
  height: clamp(130px, 20vw, 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-weight: 800;
  flex-direction: column;
  font-size: clamp(16px, 3vw, 20px);
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');
  border-radius: 8px;
  text-align: center;
`;

// Drive Section
export const DriveUsHolder = styled.div`
  margin-top: 5%;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const DriveUs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  margin-left: 15%;
  margin-top: 20px;
  font-size: 50px;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 2rem;
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HrFirst = styled.hr`
  width: 35%;
  margin-left: 5%;
  border: none;
  height: 15px;
  background-color: #fe6e3a;

  @media (max-width: 768px) {
    width: 60%;
    margin-left: 20%;
    height: 8px;
  }
`;

export const HrSecound = styled.hr`
  width: 29%;
  margin-left: 71%;
  border: none;
  height: 15px;
  background-color: #fe6e3a;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 60%;
    margin-left: 20%;
    height: 8px;
    margin-top: 10px;
  }
`;

// Drive Content
export const ContentBoxWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 0 1rem;
  }
`;

export const ContentBoxHolder = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DriveUsContent = styled.div`
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const IconPic = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

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

  &:hover {
    background-color: #36353c;
    cursor: pointer;
    transition-duration: 0.2s;
    scale: 1.1;
  }

  @media (max-width: 768px) {
    width: 85%;
    height: auto;
    margin-left: 0;
    padding: 1.5rem;
    min-height: 250px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const BoxContent = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0;
  text-align: left;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const BoxSubContent = styled.div`
  font-size: 15px;
  font-weight: 200;
  color: #7d8589;
  font-family: sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.4;
  }
`;

// Department Section
export const DepartmentWrapper = styled.div`
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

export const DepartmentHeading = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 53%;
  justify-content: space-between;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    text-align: center;
    gap: 1rem;
  }
`;

export const DepartmentHrMain = styled.hr`
  width: 40%;
  height: 15px;
  border: none;
  background-color: #fe6e3a;

  @media (max-width: 768px) {
    width: 80%;
    height: 8px;
  }
`;

export const DepartmentSubHeading = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: end;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

export const DepartmentHrSub = styled.hr`
  width: 23%;
  height: 15px;
  border: none;
  background-color: #fe6e3a;
  margin-left: 15px;

  @media (max-width: 768px) {
    width: 60%;
    height: 8px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const ImgBoxHolder = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  object-fit: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

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
  
  &:hover {
    transition-duration: 0.2s;
    scale: 1.1;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Img = styled.img`
  width: 121%;
  height: 100%;
  border-radius: 5px;
  margin-left: -10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

export const ImgBoxContent = styled.div`
  margin-top: -150px;
  padding: 10px;

  @media (max-width: 768px) {
    margin-top: -100px;
    padding: 1rem;
  }
`;

export const ImgBoxHeading = styled.div`
  color: white;
  font-size: 25px;
  margin-top: 100px;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 50px;
    text-align: center;
  }
`;

export const ImgBoxSubHeading = styled.div`
  font-size: 14px;
  font-weight: 200;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 13px;
  }
`;

export const OurSponsors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  margin: 10rem 0px 70px 0px;
  font-size: 50px;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    margin: 3rem 1rem 2rem 1rem;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    text-align: center;
  }
`;

export const FameImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 30px;
  font-family: "Orbitron", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

export const CropOneWrapper = styled.div`
  width: 15%;
  height: 75rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const CropTwoWrapper = styled.div`
  width: 26%;
  height: 96rem;
  display: flex;
  margin-bottom: -300px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-bottom: 0;
    z-index: 1;
  }
`;

export const OurSponsorsImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const OurSponsorsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -100px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    gap: 1rem;
  }
`;

export const ImgOurSponsors = styled.div`
  width: 250px;
  height: 100px;
  margin-left: 150px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    width: 150px;
    height: 80px;
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 60px;
  }
`;

export const Footer = styled.div`
  width: 80%;
  height: 400px;
  margin-top: 20%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 3rem;
    padding: 1rem;
  }
`;

export const Contect = styled.div`
  margin-top: -300px;
  color: white;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-left: 0;
    padding: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 35%;
  font-size: large;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const Icon = styled.div`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;

export const IconsHolder = styled.div`
  margin-top: 50px;
  width: 15%;
  font-size: 40px;
  margin-left: -10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    font-size: 30px;
    text-align: center;
    margin-top: 2rem;
  }
`;

export const Form = styled.div`
  width: 30%;
  padding: 20px;
  color: white;
  background-color: #0d0d0d;
  border-radius: 10px;
  margin-left: 50%;
  position: absolute;
  margin-top: -10%;

  @media (max-width: 768px) {
    width: 90%;
    position: static;
    margin: 2rem auto;
    padding: 1.5rem;
  }
`;

export const FormButoon = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #fe6e3a;
  font-family: 'poppins';
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 768px) {
    height: 45px;
    font-size: 18px;
  }
`;

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

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const InputHolder = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Lable = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'poppins';
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

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

  @media (max-width: 768px) {
    height: 100px;
    font-size: 16px;
  }
`;

export const Address = styled.div`
  text-align: left;
  font-family: "poppins";

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

export const FameImgHolder = styled.div`
  width: 55rem;
  height: 40rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const FameContentWrapper = styled.div`
  color: white;
  margin-top: -80px;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

export const FameContent = styled.div`
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    text-align: center;
  }
`;

export const FameSubContent = styled.div`
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

export const TeamContent = styled.div`
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    text-align: center;
  }
`;

export const TeamSubContent = styled.div`
  font-size: 15px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: center;
    padding: 0 1rem;
  }
`;

export const Emargingteam = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin: 40px 0px 40px 10%;

  @media (max-width: 768px) {
    margin: 2rem 1rem;
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const SuccessSubone = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: white;
  width: 600px;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    width: 100%;
    text-align: center;
    padding: 0 1rem;
  }
`;

export const SuccessSubTwo = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-left: 40%;
  width: 600px;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin-left: 0;
    width: 100%;
    text-align: center;
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

export const Arthur = styled.div`
  margin-left: 80%;
  color: white;
  width: 200px;
  margin-top: 20px;
  font-size: 23px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

export const ArthurImg = styled.div`
  width: 50rem;
  height: 40rem;
  margin-top: -50px;
  margin-left: 5%;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 2rem auto;
  }
`;

export const BoxHeading = styled.span`
  font-size: 35px;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');

  @media (max-width: 768px) {
    font-size: clamp(1.3rem, 4vw, 2rem);
  }
`;

export const DisplayDivHoler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const DisplayDiv = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 260px;
  background: linear-gradient(173deg, rgba(15,15,15,1) 0%, rgba(31,31,31,1) 95%);
  margin: 30px 20px;
  padding: 10px;
  border-radius: 5px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 95%;
    margin: 1rem auto;
    padding: 1.5rem;
    text-align: center;
  }
`;

export const DemoDataTitle = styled.h2`
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
`;

export const DemoDataDesc = styled.p`
  line-height: 23px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.5;
    font-size: 14px;
  }
`;

export const LinkHolder = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;

export const LinkImg = styled.div`
  width: 40px;
  height: 50px;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 35px;
  }
`;
