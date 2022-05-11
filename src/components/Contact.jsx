import { useState } from "react";
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap";

export default function Contact() {
  // const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

  }
  return (
    <Container fluid="xl" className="py-5" id="contact">
      <Row >
        <Col md className="d-flex justify-content-center align-items-center mb-5 mb-md-0">
          <img src="./assets/keep_calm.jpg" className="" alt="keep calm" />
        </Col>
        <Col md className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">CONTACT ME</h1>
          <p className="text-secondary text-center">Leave your message here. I will get back to you as soon as possible.</p>
          <Form action="" className="w-100 px-4">
            <FloatingLabel className="mb-3" label="Name">
              <Form.Control type="text" id="floatingNameGrid" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" label="Email">
              <Form.Control type="email" id="floatingEmailGrid" placeholder="Email" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" label="Subject">
              <Form.Control type="text" id="floatingEmailGrid" placeholder="Subject" />
            </FloatingLabel>
            <FloatingLabel className="mb-3" label="Message">
              <Form.Control type="textarea" id="floatingEmailGrid" placeholder="Message" />
            </FloatingLabel>
            <div className="d-flex justify-content-center justify-content-md-end">
              <button onClick={() => handleSubmit}><span>Submit</span></button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
