import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import credit from "../../Assets/Projects/credit.png";
import code from "../../Assets/Projects/code.png";

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
              imgPath={code}
              isBlog={false}
              title="Real-Time Collaborative Coding Platform"
              description="Built a real-time collaborative coding platform using MERN stack and Socket.io, enabling multiple users to code together in shared rooms with live synchronization.Integrated real-time chat, cursor tracking, and secure multi-language code execution using Docker with Redis-based performance optimization."
              ghLink="https://github.com/lokeshgarg16/Real-Time-Collaborative-Coding-Platform"
              demoLink="https://real-time-collaborative-coding-plat-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              isBlog={false}
              title="Credit-Risk-Predictor"
              description="Built an end-to-end credit risk prediction system using Python and scikit-learn, achieving 79% accuracy and 0.82 ROC-AUC on 10K+ financial records. Deployed an interactive Streamlit app with a trained Random Forest model for real-time, low-latency credit risk predictions."
              ghLink="https://github.com/lokeshgarg16/Credit-Risk-Predictor"
              demoLink="https://credit-risk-predictor-lokesh.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
