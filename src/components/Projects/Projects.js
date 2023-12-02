import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import todo from "../../Assets/Projects/todo.png";
import ecommer from "../../Assets/Projects/ecommer.jpg";
import book from "../../Assets/Projects/book.jpg";
import cont from '../../Assets/cont.jpg'
import saas from '../../Assets/saas.jpg'
import as from '../../Assets/as.png'
import as2 from '../../Assets/2.png'
import as3 from '../../Assets/3.jpg'
import as4 from '../../Assets/shooinn.PNG'
import as5 from '../../Assets/p1.jpg'
import as6 from '../../Assets/p2.PNG'
import as7 from '../../Assets/p3.PNG'
import as8 from '../../Assets/p5.PNG'
import as89 from '../../Assets/po.jpg'
import as9 from '../../Assets/p7.png'
import as10 from '../../Assets/p11.png'
import as11 from '../../Assets/p13.png'
import as12 from '../../Assets/A.PNG'
import IK_Agency from '../../Assets/ikAgency.PNG'
import AVM from '../../Assets/AMN.PNG'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IK_Agency}
              isBlog={false}
              title="Digital Marketing Website with Interior Design Niche"
              description="Explore the cutting-edge digital marketing solutions tailored for the interior design niche. Elevate your brand, captivate audiences, and drive success in the competitive world of interior design with our specialized strategies and expertise."
              ghLink="https://github.com/Jibrand"
             demoLink="https://theikagency.com/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as10}
              isBlog={false}
              title="Crypto Wallet |  MERN Stack, Web3.js --[[Under development Process]]"
              description="I've developed a Web 3.0 blockchain application using the MERN stack and integrated web3.js for blockchain transactions"
              ghLink="https://github.com/Jibrand/Crypto-Wallet"
              demoLink="https://magical-twilight-b5e924.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saas}
              isBlog={false}
              title=" Project Management, SAAS Application | Full Stack (MERN)"
              description="Designed both frontend and backend using cloud database (mongodb), RFQ will generate whichwill be invited to vendors to get their Quotes, different profile section for them and for the higher-Committee, the Data is Authenticated and Safe."
              ghLink="https://github.com/Jibrand/SAAS-Bussiness-Application-FRONTEND"
            //  demoLink="http://54.37.6.229:3000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AVM}
              isBlog={false}
              title="Digital Maketing Project for AVM Marketing"
              description="Wrapped up the  digital marketing  website development for AVM, highlighting THE expertise and services with finesse."
              ghLink="https://github.com/Jibrand"
              demoLink="https://avmmarketing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as11}
              isBlog={false}
              title="Digital Marketing Agency | Next.js"
              description="Recently, Completed the development of a sophisticated website for our digital marketing agency, showcasing our expertise and services"
              ghLink="https://github.com/Jibrand/My-Agency"
              demoLink="https://webtose.netlify.com/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as12}
              isBlog={false}
              title="Bee Hive Investment Project | MERN Stack | Sanity"
              description="Developed the Bee Hive Investment Project, allowing investors to purchase hive trees and other assets. After 2-3 months, investors receive revenue generated from honey, pollen, and other products obtained from their hive. Integrated Stripe for secure transactions and utilized Sanity for efficient content management and organization."
              demoLink="https://beequeencoin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as2}
              isBlog={false}
              title="Blockchain Cryptocurrency App | Web 3.0"
              description="Made the Blockchain (Web 3.0) application through which we can send Ethereum to any Blockchain Address and charge the Gas Price, against each transaction, also record all of the transactions with a unique gif."
              ghLink="https://github.com/Jibrand/Web-3.0"
              demoLink="https://mykryptc.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as4}
              isBlog={false}
              title="Shooinndmv |  Best Sneaker Seller [WordPress]"
              description=" It is an Ecommerce website of Sneaker, Which offer high-quality sneakers and shoes, including the latest trends and timeless classics, to meet your footwear needs."
              ghLink="https://github.com/Jibrand/"
              demoLink="https://shooinndmv.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as89}
              isBlog={false}
              title="Bookeeping Accounting Website | Manage the Accounts [WordPress]"
              description="Successfully created a comprehensive bookkeeping and accounting website, simplifying financial management for businesses and individuals alike."
              ghLink="https://github.com/Jibrand"
              demoLink="https://superiorsums.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as5}
              isBlog={false}
              title="Ecommerce Website |  Asp.Net MVC"
              description="Developed an ASP.NET and MS SQL Server e-commerce website for furniture, featuring comprehensive CRUD operations for seamless management."
              ghLink="https://github.com/Jibrand/Online-Shop-Asp.Net"
              demoLink="https://www.youtube.com/watch?v=Ucc3mgK4mFc&t=7s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as6}
              isBlog={false}
              title="Pavilion Mart | Desktop Application [C#]"
              description="Created a C# desktop application for a supermarket, functioning as a shopping cart and billing software, utilizing MS SQL Server for data management."
              ghLink="https://github.com/Jibrand/Pavilion-Mart-CSharp"
              demoLink="https://www.youtube.com/watch?v=69lIBl2GBmE&t=26s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as7}
              isBlog={false}
              title="Point Of Sale | Desktop Application [C#]"
              description="Created a C# desktop application for The Business to Store their Ledger and Stock, functioning as a Point Of Sale Software, utilizing MS SQL Server for data management."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=Ki4zuaZgKWY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as8}
              isBlog={false}
              title="Hotel Management Software | Desktop Application [C#]"
              description="Created a C# desktop application for The Business to Store their Hotal Data and The Customer Data, functioning as a Management Software."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=OdeCsFZ0Q8k"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as9}
              isBlog={false}
              title="Education Management Software | Web Application [HTML, CSS, JQuery]"
              description="Created a Web application for The Education for admission and tracking all the data of students, functioning as a Education Management Software."
              ghLink="https://github.com/Jibrand"
              demoLink="https://www.youtube.com/watch?v=PZAE9wPbGYQ&t=218s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as}
              isBlog={false}
              title="Job Finding | Mobile App (Cross Platform) | React Native"
              description="Made the Job Finding app in React Native. Jobs are listed from Rapid API, Users can selectand apply for jobs by joining their respective websites from the app."
              ghLink="https://github.com/Jibrand/React-Native-Jobs-Application"
              demoLink="https://dribbble.com/shots/22528015-Job-Finding-Mobile-App-Cross-Platform-React-Native"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cont}
              isBlog={false}
              title="Open AI Application (Copymatic) | Frontend (MERN)"
              description="Designed the frontend of Open AI application to generate the Automatic blog and content, such as Copymatic and Chat Gpt, use Tailwind Css with glass morphism effects, Mobile Responsive, and eye-catchy."
              ghLink="https://github.com/Jibrand"
              demoLink="https://dribbble.com/shots/22527970-Open-AI-Application-Copymatic-Frontend-MERN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as3}
              isBlog={false}
              title="Tons of Web & desktop Applications"
              description="Built tons of websites with the passage of time, with Different Programming Languages and With other Platforms such as using MERN Stack, WordPress, Wix, and Shopify, interacting with many databases such as Mongo Db, Firebase, Ms. SQL Server, My SQL, etc."
              ghLink="https://github.com/jibrand"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
