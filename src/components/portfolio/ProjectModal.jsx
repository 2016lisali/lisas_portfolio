import { Button, Container, Col, Image, Row, Modal } from 'react-bootstrap';
import { CodeSlash, EyeFill } from 'react-bootstrap-icons';

const ProjectModal = ({ project, show, onHide }) => {
  return (
    <Modal
      className="project-modal"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
    >
      <Modal.Body className="show-grid p-0 ">
        <Container className="border border-white rounded-3 border-5 py-3">
          <Button variant="link" className="position-absolute top-0 end-0 text-decoration-none text-dark" id="close-btn" onClick={onHide}>
            X
          </Button>
          <Row className='d-flex'>
            <Col lg={7} className="p-0">
              <Image fluid src={project?.responsive_img} />
            </Col>
            <Col lg={5} className="d-flex flex-column justify-content-between ps-3 mt-3 mt-md-0">
              <div>
                <p className='mb-1'>PROJECT</p>
                <h3 className="fw-bold mb-3">{project?.title}</h3>
                <ul className="list-inline small ps-0">
                  {project?.technologies.map(item => (
                    <li className="list-inline-item p-1 me-1 my-1 border" key={item.id}>{item}</li>
                  ))}
                </ul>
                <h6>ABOUT</h6>
                <div>{project?.description.split("linebreak").map(line => <p>{line}</p>)}</div>
              </div>
              <div className="text-end mt-auto">
                <Button variant='secondary' className="me-2" href={project?.demo} target="_blank"><EyeFill /> Demo</Button>
                <Button variant='outline-secondary' href={project?.code} target="_blank"><CodeSlash /> Code</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default ProjectModal