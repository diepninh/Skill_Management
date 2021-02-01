
import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../Header';
import { BsFillCaretRightFill } from 'react-icons/bs';

function ProjectUser(props) {
  const ProjectOfUser = useSelector(state => state.User.ProjectOfUser);
  return (
    <div>
      <Header colorLinkSkill='black' colorLinkProject='blue' />
      <div style={{ height: 150, background: '#7FA9EA' }}></div>
      <Container className='mt-2  ml-2 mr-2' style={{ maxWidth: '100%' }}>
        <Row>
          <Col sm={1.5}>
            <Button variant='success'>Preview CSV</Button>
          </Col>
          <Col sm={8}></Col>
          <Form >
            <Form.Row>
              <Form.Group as={Row}  >
                <Col sm='10'>
                  <Form.Control type='text' placeholder='enter project' style={{ maxWidth: '100%' }} />
                </Col>
                <Col sm='2'>
                  <Button variant='primary'>Search</Button>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </Row>
      </Container>
      <Container>
        <Container style={{ textAlign: 'center', marginTop: 20 }}>
          <h2>List of participating projects</h2>
        </Container>
        <Container style={{ marginTop: 20 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Participants</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                ProjectOfUser.map((e, index) => {
                  return (
                    <tr key={e.name}>
                      <td>{index + 1}</td>
                      <td>{e.name}</td>
                      <td>
                        <div style={{ display: 'flex' }}>
                          {e.participants.length}
                          <DetailMember member={e.participants} />
                        </div>
                      </td>
                      <td>{e.deadline}</td>
                      <td>
                        <Status status={e.status} />
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Container>
      </Container>

    </div>
  );
}
function Status(props) {
  return (
    <Button variant={props.status === 'done' ? 'primary' : 'outline-primary'}>
      {props.status}
    </Button>
  );
}
function DetailMember(props) {
  const [showModalMember, setShowModalMember] = useState(false);
  const handleCloseMember = () => {
    setShowModalMember(false);
  }
  return (
    <Container>
      <BsFillCaretRightFill color={'gray'} style={{ marginLeft: 30 }} onClick={() => setShowModalMember(true)} />

      <Modal show={showModalMember} onHide={handleCloseMember} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Member of project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.member.map((er, index) => {
            return (
              <p key={index}>{er}</p>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Container>

  )
}

export default ProjectUser;