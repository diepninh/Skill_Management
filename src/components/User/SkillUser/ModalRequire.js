import React, { useState } from 'react';
import { Container, Form, Modal, Button, Row, Col } from 'react-bootstrap';

function ModalRequire() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <Container>
      <Button onClick={() => setShowModal(true)}>Create Requirement</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Create request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="2" >
                    name:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control as="select"  >
                      <option>full stack</option>
                      <option>front-end</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="2" >
                    level:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type='text' placeholder='enter level' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
              </Button>
        </Modal.Footer>
      </Modal>
    </Container>

  )
}
export default ModalRequire;