import React, { useState } from 'react';
import { Container, Form, Modal, Button, Row, Col,Table } from 'react-bootstrap';

function ModalCheckRe() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Check Requirement</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Check Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Row >
            <Col sm={7} className="my-1">
              <Form.Control type='text' placeholder='input request' style={{ marginRight: 10 }} />
            </Col>
            <Col sm={5} className="my-1">
              <Button type="submit"> Search</Button>
            </Col>
          </Form.Row>
        </Form>
        <Table striped bordered hover> 
        <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Now level</th>
              <th>level update</th>
            </tr>
          </thead>

        </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleClose} style={{ color : 'white'}}>
            Preview CSV
              </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}
export default ModalCheckRe;