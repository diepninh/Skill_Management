import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './Header';

function AccountHr(props) {
  const users = useSelector(state => state.Accounts.users)
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
        </div>
      </div>
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
                    <Form.Control type='text' placeholder='enter skill' style={{ maxWidth: '100%' }} />
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
        <Container style={{ textAlign: 'center', }}>
          <h2>Staffs List</h2>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

      </Container>
    </div>
  )
};


export default AccountHr;