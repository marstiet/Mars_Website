import React,{useState} from "react";
import "./ourteam.css";

const teamMembers1 = [
  {
    name: "Dr. Ashish Singla",
    position: "President",
    image: "Ashish sir.jpg",
    description: "Dr. Ashish Singla, with a PhD in Robotics and Control from IIT Kanpur and Associate Professor at TIET, brings extensive expertise and guidance to the MARS Society as our mentor.",
    instagram:"",
    linkedin:"https://www.linkedin.com/in/dr-ashish-singla-55b0a914a/"
  
  },
  {
    name: "Dr. Sachin Kansal",
    position: "Vice President",
    image: "Sachin sir.jpg",
    description: "Dr. Sachin Kansal, Mentor of MARS Society, is a Postdoctoral Research Fellow at the University of Birmingham and Assistant Professor at TIET, guiding with deep expertise and skillset in this domain."
    ,instagram:"",
    linkedin:"https://www.linkedin.com/in/dr-sachin-kansal-72983473/"
  },];
  const teamMembers2=[
  
  {
    name: "Anant Tomar",
    position: "Overall Student Coordinator",
    image: "Anant.jpg",
    description: "Anant Tomar, our Student Coordinator, is proficient in CAD, FEA and Control Systems. His skills facilitate effective project coordination. Currently interned at Addverb."
    ,instagram:"https://www.instagram.com/ananttomar_14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/ananttomar14/"

 },];
 const teamMembers22=[
  {
    name: "Shyam Sundar",
    position: "Overall Student Coordinator",
    image: "Shyam.jpg",
    description: "Shyam Sundar Mallampalli, Our Student Coordinator, showcases extraordinary skills in Robotic Manipulators, CAD/CAM, FEA and Control Systems. Currently interned at Addverb."
    ,instagram:"https://www.instagram.com/iam_shyamsundar/?utm_source=ig_web_button_share_sheet",
    linkedin:"https://www.linkedin.com/in/shyamsundarmallampalli/"

 },
  {
    name: "Madhav Katyal",
    position: "Overall Student Coordinator",
    image: "Madhav.jpg",
    description: "Madhav Katyal, our Student Coordinator, excels in PCB design and digital and analog circuits. His technical skills and leadership drive effective project coordination and innovation. Currently interned at Intute.ai."
    ,instagram:"https://www.instagram.com/madhav_katyal_/?utm_source=ig_web_button_share_sheet",
    linkedin:"https://www.linkedin.com/in/maadhav-katyal-4a7280226/"

 },];
  const teamMembers3=[
  {
    name: "Manish Jain",
    position: "General Secretary",
    image: "ManishourTeam.png",
    description: "Manish Jain, our General Secretary, adeptly wields Solidworks, ANSYS and 3D Printing, alongside supervising all the directorial and administrative tasks in the society, spearheading innovation and leadership."
    ,instagram:"https://www.instagram.com/manish.jain07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/manish-jain-937808289/"

  },];
  const teamMembers9=[
  {
    name: "Jay Dhamija",
    position: "General Secretary",
    image: "jay.jpg",
    description: "Jay Dhamija, our General Secretary, excels in computers and electronics, including Computer Vision, PCB design, and ROS 2. His expertise drives innovation and supports our focus on advanced technology."
    ,instagram:"https://www.instagram.com/jay_dhamija/?utm_source=ig_web_button_share_sheet",
    linkedin:"https://www.linkedin.com/in/jay-dhamija-739923318/"

 },];
  const teamMembers4=[
    {
      name: "Rhitam Dutta",
      position: "Joint Secretary",
      image: "rhitam.jpg",
      description: "Rhitam Dutta, our Joint Secretary and Automation Lead, specializes in control systems, autonomous robotics, UI design, and system integration, while also managing external affairs and sponsorships."
      ,instagram:"https://www.instagram.com/rhitamdutta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin:"https://www.linkedin.com/in/rhitamdutta/"
  
    },
 
  {
    name: "Astik Thukral",
    position: "Joint secretary",
    image: "Astik.jpg",
    description: "Astik Thukral, our Joint Secretary, excels in PCB design and embedded systems, enhancing innovation and engineering solutions with his technical expertise and leadership."
    ,instagram:"https://www.instagram.com/astikthukral?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/astik-thukral/"

  },
  {
    name: "Sahil Sharma",
    position: "Joint Secretary",
    image: "Sahil.jpg",
    description: "Sahil Sharma, Joint Secretary at MARS, specializes in CAD/CAM, mechanical engineering, advancing innovation and technical excellence."
    ,instagram:"https://www.instagram.com/yp_sahil_65/?utm_source=ig_web_button_share_sheet",
    linkedin:"https://www.linkedin.com/in/sahil-sharma-a79440250/"

 },

];
const teamMembers5=[
  {
    name: "Shaurya Aggarwal",
    position: "Mechanical Lead",
    image: "shaurya.jpg",
    description: "Shaurya Aggarwal, our Mechanical Lead specializes in CAD development, enhancing engineering projects and driving technological innovation."
    ,instagram:"https://www.instagram.com/shaurya.aggarwal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/shaurya-aggarwal-984b81258/"

  },
  {
    name: "Ekam Singh",
    position: "Mecahnical Lead",
    image: "Ekam.jpg",
    description: "Ekam Singh, our Mechanical Lead, excels in Solidworks, NX, HyperMesh, driving engineering innovation and technological excellence."
    ,instagram:"https://www.instagram.com/ekam._.1101/?utm_source=ig_web_button_share_sheet",
    linkedin:"https://www.linkedin.com/in/ekam-singh-6660a228b/"

  },];
  const teamMembers6=[
    {
      name: "Pranjay Dhawan",
      position: "Electronics Lead",
      image: "Pranjay.jpg",
      description: "Pranjay Dhawan, our Electronics Lead, specializes in additive manufacturing, battery design, PCBs, all electronic circuits, and communication systems, driving innovation and reliability in every mission."
      ,instagram:"https://www.instagram.com/guliani.yachit_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin:"https://www.linkedin.com/in/yachit-g-baa953201/"

  },
  
    
    {
      name: "Mrinal Sood",
      position: "Electronics Lead",
      image: "Mrinal.jpg",
      description: "Mrinal Sood, our Electronics Lead, masters PCB design and electronics, his expertise significantly advancing our projects and innovation."
      ,instagram:"https://www.instagram.com/mrinal_0007?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin:"https://www.linkedin.com/in/mrinal-sood-86577425a/"
  
   },
  
  ];
  const teamMembers7=[
    {
      name: "Nishit Mittal",
      position: "Automation Lead",
      image: "Nishit.jpg",
      description: "Nishit Mittal, our Automation Lead, masters sensor integration and image processing, advancing our innovative automation projects."
      ,instagram:"https://www.instagram.com/nishitmittal15?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin:"https://www.linkedin.com/in/nishit-mittal-15nm/"
  
   },];
   
  
   
  

const Card = ({ name, position, image, description,instagram,linkedin }) => (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={image} alt={name} className="card-img" />
        <div className="text">
          {name}
          <br />
          <span className="grey-text" >{position}</span>
        </div>
      </div>
      <div className="card-overlay">
        <p className="des">{description}</p>
        <div className="social-icons"> {instagram && ( <a href={instagram} target="_blank" rel="noopener noreferer">
          <img src="inslogo.svg" alt="instagram" className="social-icon"/></a> )}
          {linkedin && (<a href={linkedin} target="_blank" rel="noopener noreferer">
            <img src="linkin.svg" alt="linkedin" className="social-icon-link"/></a>) } </div>
      </div>
    </div>
  </div>
);



export const Ourteam = () => {

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
    phone: "",
    department: "",
    graduation: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbz_3Sv1HS7GgpWoVIvJt_FpXaW8nmNkJ3cFMAp-4xE1iJDHXMIMoZH7xAVSjF3HG2Y6Aw/exec", {
        method: "POST",
        mode: "no-cors", // disables CORS blocking
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      alert("Form submitted!");
      setFormData({ name: "", roll: "", email: "", phone: "", department: "", graduation: "" });
    }
     catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form.");
    }
  };
  

  return (
    <div className="body">
        
          
       
      <div className="container"><div className="godd">
      <div className="tint"><svg
      xmlns="http://www.w3.org/2000/svg"
      // width="543"
      // height="648"
      viewBox="0 0 563 848"
      fill="none"
    >
      <g filter="url(#filter0_f_5_622)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-59.5397 -20.4233C-9.04678 -26.9146 40.9531 -12.6011 87.2611 8.5526C139.207 32.2818 192.207 59.7433 222.272 108.309C254.082 159.696 273.602 224.474 256.879 282.554C240.579 339.164 174.673 362.103 136.323 406.812C97.7101 451.829 88.5144 531.001 31.0887 545.789C-26.6874 560.667 -73.6619 496.367 -129.463 475.254C-179.649 456.265 -250.035 472.647 -279.96 428.098C-310.549 382.561 -279.032 321.18 -269.219 267.203C-262.221 228.701 -244.927 195.29 -230.993 158.723C-215.905 119.13 -213.233 74.0252 -183.94 43.418C-151.045 9.04635 -106.721 -14.3578 -59.5397 -20.4233Z"
          fill="#B4440F"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_5_622"
          x="-200"
          y="-200"
          width="800"
          height="1000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_5_622" />
        </filter>
      </defs>
    </svg></div>
  
     {/* <div className="orange-tint"> */}
        <div className="team">
        <div className="lines1">
        <div className="line1"></div>
        <div className="line2"></div></div>
          
          <div className="im">
          <div className="rocket">
          <img src="ion_rocket-outline.svg" alt="Rocket" />
        </div>
          <img src="/TEAM.jpg" alt="Team" />
        </div>       
        <div className="lines2">
        <div className="line3"></div>
        <div className="line4"></div></div></div></div>
        <div className="header"><h2>Discover the passionate <br/>minds behind our success.</h2>
          <h1>
            MEET THE<br />
            <span>VISIONARIES</span>
          </h1></div>
        </div>
<br/><br/>
<div className="section2">
        <section className="mission-vision">
          <div className="vision">
           <h3>OUR VISION</h3>
            <p className="pp"><font family="poppins"><ul className="pp"><li>Foster innovation and inclusivity</li>

<li>Empower transformative robotics</li>

<li>Address industry needs and challenges</li></ul></font>
            </p>
          </div>
          <div className="mission">
          <h3>OUR MISSION</h3>
            <p className="pp">
           <ul className="pp"><li>Practical skills via workshops and projects</li>
<li>
Inclusive collaboration across disciplines</li>
<li>
Mentorship for innovation and growth   </li>    </ul>     </p>
          </div>
        </section>

        <a href="#container2" className="join-btn">JOIN THE CREW</a>
      </div><br/><br/><br/><br/>

      <div className="team-container"><h1>MINDS BEHIND THE MAGIC</h1>
        <div className="row">
          {teamMembers1.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="row"><div className="row2">
          {teamMembers2.map((member, index) => (
            <Card key={index} {...member} />
          ))}</div><div className="row2">
          {teamMembers22.map((member, index) => (
            <Card key={index} {...member} />
          ))}</div>
        </div>
        <div className="row">
          {teamMembers3.map((member, index) => (
            <Card key={index} {...member} />
          ))}
           <div className="card"><img src="MarsLogo.png" className="logo" /></div>
          {teamMembers9.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="row">
          {teamMembers4.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="row">
          {teamMembers6.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="row">
          {teamMembers5.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="row">
          {teamMembers7.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
       
      </div><br/><br/><br/>

      <div className="container2" id="container2"><div className="joinn">JOIN</div>
      
      <div className="formm"><form  onSubmit={handleSubmit} classname="form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}  placeholder="Enter your name" required />

          <label htmlFor="roll">Roll Number</label>
          <input type="text" id="roll" name="roll" value={formData.roll} onChange={handleChange}  placeholder="Enter your roll number"  required />

          <label htmlFor="email">Email address (@thapar.edu)</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  placeholder="Enter your email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}  placeholder="Enter your phone number" required />

          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={formData.department} onChange={handleChange}  required>
            <option value="" disabled>Select the department</option>
            <option value="CSE">Computer Science & Engineering</option>
            <option value="ECE">Electronics & Communication Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="EE">Electrical Engineering</option>
          </select>

          <label htmlFor="graduation">Year of Graduation</label>
          <select id="graduation" name="graduation" value={formData.graduation} onChange={handleChange}  required>
            <option value="" disabled>Select your graduation year</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>

          
          <center><button className="sub" type="submit">Submit</button></center>
        </form></div><div className="crew">CREW</div>
        
      </div><br/><br/><br/>

      
    </div>
  );
};
