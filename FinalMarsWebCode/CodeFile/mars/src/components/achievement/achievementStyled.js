import styled from 'styled-components';

export const Containerr=styled.div`
background-color:#0f0f0f;`

export const IrcHolder = styled.div`
  margin-bottom: 10%;
  background-image: linear-gradient(#110e0f, #110e0f, #110e0f, #110e0f, #1c120e,rgb(14, 13, 13));
  height: 100%;
   
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160%;
  overflow: hidden;
`;

export const MainImg = styled.img`
  width: fit-content;
  height: 65vw;
  display: block;
  object-fit:cover;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: -25%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(6, 6, 6, 0.91) 100%);
   @media(max-width:900px){
  display:none;
  // height:fit-content;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 90px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
 
`;

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 8%;
  height: 70%;
  background: linear-gradient(to top, rgba(15, 14, 14, 0.8), transparent);
  z-index: 1;
  pointer-events: none;
`;

export const DemoDiv = styled.div`
  width: 100%;
  height: 100%;
   @media(max-width:900px){
 display:hidden;
  }
`;

export const BackgroundTop = styled.div`
  width: 100%;
  height: 90vh;
  border-radius: 20px;
   @media(max-width:900px){
  height:fit-content;
  position:relative;
  top:0vw;
  }
`;

export const BackgroundTopHeading = styled.div`
  margin-top: -1300px;
  color: white;
  margin-left: 180px;
  font-size: 110px;
  font-weight: 550;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  letter-spacing: -5px;
  line-height: 8rem;
  text-shadow: 2px 2px 2px #000, 4px 4px #f16837;
  position: absolute;
  z-index: 1;
  width:fit-content;
  @media(max-width:900px){
  font-size:8vw;
  letter-spacing:0px;
  line-height:10vw;
  position:relative;
  top:290vw;
  z-index:2;
  margin-left:5vw;
  }
`;

export const SecImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // position:relative;
  margin-top: 20px;
   @media(max-width:900px){
  
   position:relative;
  top:40vw;
  z-index:1;
  }
`;

export const SecImgHolder = styled.div`
  width: fit-content;
  // height: 600px;
`;

export const SecImgHolderHeading = styled.div`
  color: white;
  position: absolute;
  right: 90px;
  margin-top: -150px;
  z-index: 2;
   @media(max-width:900px){
  
  position:relative;
  left:32vw;
  top:10vw;
  }
`;

export const SecImgSubHeading = styled.p`
  font-size: 35px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  margin-top: 40px;
   @media(max-width:900px){
  font-size:3.8vw;
  line-height:23vw;
 
  }
`;

export const SecImgHeading = styled.p`
  font-size: 120px;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  text-shadow: 2px 2px 2px #000, 4px 4px #f16837;
  font-weight: 700;
  margin-top: -51px;
   @media(max-width:900px){
  font-size:11vw;
  
  }
`;

export const ThirdFourth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ThirdFourthImgHolder = styled.div`
  width: 625px;
  height: 350px;
  margin: 70px 20px;
  position: relative;
   @media(max-width:900px){
  
  // position:relative;
  // top:-100vw;
  // z-index:1;
  width:fit-content;
  }
`;

export const ThirdFourthImgHeading = styled.div`
  margin-top: -135px;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 100px;
   @media(max-width:900px){
  top:192vw;
 
  }
`;

export const ThirdFourthImgMainHeading = styled.h3`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  line-height: 50px;
  font-style: italic;
  text-shadow: 1px 1px 1px white, 2px 2px #f16837;
  font-weight: 700;
  margin-left: -60px;
  margin-top: 60px;
  text-align: left;
   @media(max-width:900px){
  font-size:5vw;
  line-height:5vw;
  margin-left:-18vw;
 
  }
`;

export const ThirdFourthImgSubHeading = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-weight: 500;
  margin-left: -150px;
  margin-top: -14px;
   @media(max-width:900px){
  font-size:3vw;
  line-height:11vw;
  margin-left:-18vw;
 
  }
`;

export const SecBottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 8%;
  height: 70%;
  background: linear-gradient(to top, rgba(15, 14, 14, 0.8), transparent);
  z-index: 1;
  pointer-events: none;
`;

export const Container3 = styled.div`
  background-color: #0f0f0f;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  font-family: sans-serif;
  margin-top: 8vw;
  margin-left:3vw;
   @media(max-width:900px){
  flex-direction:column;
 
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-family: 'Nulshock';
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  border: solid #0f0f0f 0.7vw;
  color: white;
  &.orange {
    position: relative;
    top: -3vw;
  }
     @media(max-width:900px){
  font-size:7vw;
 
  }
`;

export const Line1 = styled.div`
  z-index: 1;
  height: 1vw;
  width: 15%;
  position: relative;
  top: 3.5vw;
  left: 0;
  background-color: #fe6e3a;
  display: inline-block;
  gap: 1vw;
`;

export const Line2 = styled.div`
  z-index: 1;
  height: 1vw;
  width: 60%;
  position: relative;
  bottom: -5.2vw;
  background-color: #fe6e3a;
  display: inline-block;
  gap: 1vw;
`;

export const Ino = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 5rem;
  @media (max-width:900px){
  gap:3vw;
  display:flex;
  flex-direction:column;
  padding:2vw;
  }
`;

export const Innovations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color:white;
  text-shadow: 2px solid white;
  gap: 2vw;
  @media (max-width:900px){

  display:flex;
  flex-direction:row;
  gap:1vw;
}
`;



export const Card = styled.div`
  background-color: #1f1f1f;
  border-radius: 0.8rem;
  border: 0.8vw solid #1f1f1f;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width:900px){
  width:150%;
  height:fit-content;
  }
`;

export const CardImage = styled.img`
  width: 22vw;
  height: 13vw;
  object-fit: cover;
  border-radius: 0.8rem;
  background-color: black;

  @media(max-width:900px){
  width:90%;
height:20vw;
object-fit:cover;
  // height:auto;
  }
`;

export const CText = styled.div`
  text-align: left;
  color:white;
  padding: 0.2rem;
  padding-left: 0.9rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  font-family:'Poppins';
  color: white;

  @media (max-width:900px){
  font-size:0.9rem;}
`;

export const CardDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  font-family:'Poppins';
  margin: 0;
   @media(max-width:900px){
  font-size:3vw;
 
  }
`;

export const Mag = styled.div`
  margin-right: 7vw;
  position: relative;
  top: -11vw;
   @media(max-width:900px){
  margin-left:-35vw;
  width:fit-content;
  }
`;

export const EmptyDiv = styled.div`
background-color:rgb(15, 15, 15);
width: 100%;
height: 210px;
margin-right: 0px;
margin-top: 400px;
position: absolute;
`;
export const Para = styled.div`
width:150px;
position: relative;
color:white;
top:-35vw;
   @media(max-width:900px){
  top:0vw;
  }
`;


export const InsightsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: -3rem;
  z-index:1;

 
`;

export const Insights = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 12vw;
   @media(max-width:900px){
  flex-direction:column;
 width:120%;
 align-items:left;
  }
`;

export const InsightLine = styled.div`
  display: flex;
  flex-direction: row;
  position:relative;
  top:5vw;
  gap: 0.8vw;
`;

export const TalkTitle = styled.div`
  font-size: 3.5rem;
  font-family: 'Nulshock';
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  border: solid #0f0f0f 0.7vw;
  color: white;
  &.orange {
    position: relative;
    top: -3vw;
  }
`;

export const Line3 = styled.div`
  z-index: 1;
  height: 1vw;
  width: 15%;
  position: relative;
  top: -2.1vw;
  left: 0;
  background-color: #fe6e3a;
  display: inline-block;
  gap: 1vw;
`;

export const Line4 = styled.div`
  z-index: 1;
  height: 1vw;
  width: 70%;
  position: relative;
  bottom: 0.3vw;
  background-color: #fe6e3a;
  display: inline-block;
  gap: 1vw;
`;

export const InsightsText = styled.div`
  flex: 1;
  text-align:left;
  font-family: 'Nulshock';
  color: white;
  font-size: 2.9vw;
  margin-left: 10vw;
  line-height: 3.5vw;

`;

export const InsightHighlight = styled.span`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const Orange1 = styled.div`
  color: #fe6e3a;
  font-family: 'Nulshock';
  font-size: 3vw;
  width: 32vw;
`;

export const Publications = styled.div`
  color: #fe6e3a;
  font-family: 'Nulshock';
  font-size: 3vw;
  width: 38vw;
  margin-top: 8vw;
  margin-left: 11.5vw;
`;

export const PubPara = styled.p`
  font-family: 'Poppins';
  font-size: 1vw;
  font-weight: 200;
  text-align: justify;
  margin-left: 12.5vw;
  width: 50vw;
  margin-top:1vw;
  color: white;
   @media(max-width:900px){
  font-size:2vw;
  width:60vw;
 
  }
`;

export const Authors = styled.div`
  font-family: 'Times New Roman';
  display: flex;
  flex-direction: column;
  gap: 0vw;
  font-size: 1.5vw;
  line-height: 1.3vw;
  color:white;
  background: #1f1f1f;
  border-radius: 1.5vw;
  padding: 1.2vw;
  border: 2px solid #fe6e3a;
  margin-left: 12.5vw;
  margin-right: 12.5vw;
  margin-top: 3vw;
  
  @media(max-width:900px){
  font-size:2vw;
  line-height:2.5vw;
  }
`;

export const PubLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

export const Pubdes = styled.p`
  font-size: 1.2vw;
  font-family:'Times New Roman';
   @media(max-width:900px){
  font-size:2vw;
 line-height:3vw;
  }

`;

export const Title2 = styled.div`
  width: 11.5%;
  font-family:'Times New Roman';
  font-weight:bold;
  text-align:left;
   @media(max-width:900px){
  width:15%;
 
  }

`;

export const InsightDescription = styled.p`
  margin-top: 2rem;
  font-family: 'Poppins';
  font-size: 1vw;
  margin-left: 10vw;
`;

export const Section = styled.section`
  background-color:#0f0f0f;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLine = styled.div`
  width: 60px;
  height: 4px;
  background: #f16837;
  margin-bottom: 0.5rem;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const HeaderEndLine = styled.div`
  width: 30px;
  height: 2px;
  background: #000;
  margin-top: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
`;

export const Container1 = styled.div`
  text-align: justify;
   
`;

export const Title1 = styled.h1`
font-family:'Nulshock';
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
   @media(max-width:900px){
  font-size:4.2vw;
  // line-height:23vw;
 
  }
`;

export const OrangeText = styled.span`
  color: #f16837;
`;

export const WhiteText = styled.span`
  color: white;
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: white;
   @media(max-width:900px){
  font-size:3.5vw;
  text-align:justify;
  width:70vw;
  margin-top:1.5vw;
 
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction:column;
  gap: 2rem;
`;

export const EventCard = styled.div`
display:flex;
flex-direction:row;
width:50vw;
height:fit-content;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   @media(max-width:900px){
  width:100%;
 margin-right:4vw;
 gap:-2vw;
  }
`;

export const EventImage = styled.img`
  width: 25vw;
  height: auto;
  object-fit: cover;
  padding:2vw;
  border-radius:3vw;
   @media(max-width:900px){
  width:35vw;
  }

`;

export const EventDetails = styled.div`
  padding: 1.5rem;
   @media(max-width:900px){
  padding:0.5rem;
 gap:-2vw;
  }
`;

export const EventDate = styled.p`
  color: white;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-family:'Poppins';
  text-align:left;
`;

export const EventHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color:#FE6E3A;
  font-family: "poppins";
  text-align:left;
  line-height:1.8vw;
   @media(max-width:900px){
  font-size:4.6vw;
  line-height:4.8vw;
 
  }
`;

export const EventText = styled.p`
  font-size: 1rem;
  color: white;
  text-align: justify;
  font-family: "poppins";
   @media(max-width:900px){
  font-size:3vw;
 
  }
`;

