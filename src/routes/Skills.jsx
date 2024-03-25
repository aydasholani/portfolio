import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import skillsData from '../data/skillsData.json'

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  const displaySkills = skills.map((skill, index) => {
    return (  
      <Col key={skill.index} bg="dark" className="skill" xs={2}>
        <img 
          variant="top" 
          src={`${skill.img}`} 
          alt={skill.name} 
        />
      </Col>
    )
  })

  return (
    <section className='d-flex justify-content-center 100vh'>
      <Container className="mt-4">
        <h2>Skills</h2>
        <Row className="mt-2 g-4 skills">
          {displaySkills}
        </Row>
      </Container>
    </section>
  )
}
