import Computer from "../../assest/comp.jpg";
import Mechanical from "../../assest/mech.jpg";
import Electronics from "../../assest/electronics.jpg";
import ABEX from "../../assest/abex.jpg";
import Oa from "../../assest/oa.jpg";
import ComputerImg from "../../assest/control.png";
import MechanicalImg from "../../assest/mechanicalchange.jpg";
import ElectronicsImg from "../../assest/electronicsdepart.jpg";
import AbexImg from "../../assest/abexchange.jpg";
import OAImg from "../../assest/organizationaffairs.jpg";
export const DepartmentData = [
    {
        id: 1,
        img:`${Computer}`,
        title: "Computer",
    },
    {
        id: 2,
        img:`${Mechanical}`,
        title: "Mechanical",
    },
    {
        id: 3,
        img:`${Electronics}`,
        title: "Electronics",
    }, 
    {
        id: 4,
        img:`${ABEX}`,
        title: "ABEX",
    },
    {
        id: 5,
        img:`${Oa}`,
        title: "Organizational Affairs",
    }
]

export const DemoData = [
    {
        id: 1,
        title: "Computer",
        description: "The Control and Automation Department of our society plays a pivotal role in bringing intelligent autonomy and precision to all our robotic systems. We specialize in developing robust control architectures and advanced automation strategies that enable seamless coordination between hardware and software components. Leveraging powerful platforms such as the Robot Operating System (ROS), we implement modular and scalable control stacks that facilitate real-time decision-making, sensor integration, and actuator management.From autonomous navigation and obstacle avoidance to precise manipulator control, our department ensures that each subsystem functions cohesively under dynamic conditions.",
        img:`${ComputerImg}`,
    },
    {
        id: 2,
        title: "Mechanical",
        description: "We design and manufacture a custom-built rover and robot using stainless steel, aluminium, and iron, fabricated with high-precision tools such as lathe machines, CNCs, laser cutters, grinders, and other advanced equipment. Design and modelling are done using SolidWorks and AutoCAD, with finite element analysis (FEA) performed in ANSYS. The project involves logical and modular design with a focus on accessibility for electronics and computer system integration. We also manufacture several components using additive manufacturing, utilizing various 3D printing materials for lightweight and complex parts. Tyres are made for terrain adaptability. The build reflects a multidisciplinary blend of mechanical design, embedded systems, and intelligent automation.",
        img:`${MechanicalImg}`,
    },
    {
        id: 3,
        title: "Electronics",
        description: "The Electronics Department of our society is at the forefront of innovation, dedicated to crafting high-performance electronic systems capable of withstanding the most demanding environments. Our expertise spans the end-to-end development of custom IPC-compliant printed circuit boards (PCBs), efficient power delivery networks, and advanced thermal management solutions to ensure optimal performance and reliability. With a strong focus on precision engineering, our team emphasizes modularity, scalability, and fault tolerance in every design. ",
        img:`${ElectronicsImg}`,
    }, 
    {
        id: 4,
        title: "ABEX",
        description: "The ABEX Department of our society is dedicated to the innovative design and development of soil acquisition and analysis mechanisms, tailored specifically for the challenges posed by the International Rover Challenge (IRC). Our current system focuses on the soil subsystem, engineered to efficiently extract and examine soil samples from varied terrains. At the heart of this system lies a robust vertical extraction mechanism, featuring an auger driven by precision lead screws to ensure smooth and controlled soil retrieval. Once the soil is extracted, it is seamlessly transferred to an onboard analytical laboratory integrated within the rover. This laboratory conducts a series of chemical tests and sensor-based analyses to evaluate the physical and chemical properties of the soil. ",
        img:`${AbexImg}`,
    },
    {
        id: 5,
        title: "Organizational Affairs",
        description: "Our Organization Affairs Department serves as the backbone of our organization, integrating creativity, strategy, and precision to ensure seamless internal and external operations. This multifaceted department is home to five dynamic divisions, each playing a vital role in shaping the identity and impact of our organization. Marketing Drives strategic outreach and engagement through impactful campaigns and collaborations.Documentation & Finance Manages records, reports, and finances to ensure operational clarity and accountability.Design Crafts visually compelling assets that reflect the organization’s identity and vision.Media Captures and curates visual stories to showcase events, milestones, and initiatives.Web Development Builds and maintains digital platforms to enhance online presence and functionality.",
        img:`${OAImg}`,
    }
]