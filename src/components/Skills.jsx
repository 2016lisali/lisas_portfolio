import { useEffect } from 'react';
import { Animated } from "react-animated-css";
import { Container, Col, Row } from "react-bootstrap";

const skills = [
  { href: '#git_', title: 'GIT' },
  { href: '#json_', title: 'JSON' },
  { href: '#css_', title: 'CSS' },
  { href: '#sass_', title: 'SASS' },
  { href: '#html_', title: 'HTML' },
  { href: '#react_', title: 'REACT' },
  { href: '#python_', title: 'JS' },
  { href: '#node_', title: 'NODE.JS' },
  { href: '#express_', title: 'EXPRESS' },
  { href: '#sql_', title: 'SQL' },
  { href: '#mongodb_', title: 'MONGODB' },
  { href: '#bootstrap_', title: 'BOOTSTRAP' },
  { href: '#npm_', title: 'NPM' },
  { href: '#es6_', title: 'ES6' }
];


const Skills = () => {
  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: '#fff',
      textHeight: 20,
      outlineThickness: 0.8,
      outlineColour: '#FE0853',
      maxSpeed: 0.05,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 1,
      wheelZoom: false,
      noSelect: true,
      textFont: 'Mukta',
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
    <Container fluid id="skills" className="skills-container position-relative py-5">
      <Animated animationIn="bounceInUp" isVisible={true}>
        <h1 className='text-center mb-4'>MY SKILLS</h1>
      </Animated>
      <Container fluid="xl">
        <Row className="align-items-center">
          <Col md className="text-container fs-5 px-4">
            <h4>Front-End</h4>
            <p>React, Redux, Javascript, HTML, CSS, Sass, Bootstrap, Responsive Design ...</p>
            <h4>Back-End</h4>
            <p>Node.js, Express.js, RestAPI, MySQL, MongoDB ...</p>
            <h4>Other Skills</h4>
            <p>Git, Github, GIMP, Devtools ...</p>
          </Col>
          <Col md>
            <canvas
              id='tagcanvas'
              width='820'
              height='600'
              style={{
                maxWidth: '1000px',
                width: '100%',
                zIndex: '99',
                position: 'relative',
                margin: '0 auto',
              }}
              className='to-fade-in fast-anim'
            ></canvas>
            <div id='taglist' style={{ display: 'none' }}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.title}>
                    <a href={skill.href}>{skill.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Skills