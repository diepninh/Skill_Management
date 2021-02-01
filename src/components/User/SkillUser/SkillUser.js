import React from 'react';
import { Container, Row, Table, Button, Col} from 'react-bootstrap';
import Header from '../Header.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import ModalRequire from './ModalRequire.js';
import ModalCheckRe from './ModalCheckRe.js';
function SkillUser(props) {
  const skillList = useSelector(state => state.User.skillList);
  const LevelOfUser = useSelector(state => state.User.LevelOfUser)
  return (
    <div>
      <Header colorLinkSkill='blue' colorLinkProject='black' />
      <div style={{ height: 100, background: 'none' }}></div>
      <div style={{ display: 'flex'}}>
      <Button className='mr-2 ml-2' variant='warning' style={{ color: 'white'}}>Preview CSV</Button>
      <ModalCheckRe/>
      </div>
      <Container>
        <Bar
          data={{         
            datasets: [
              {
                label: "Mức độ kĩ năng",
                backgroundColor: [
                  "#3e95cd",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850"
                ],
                data: LevelOfUser
              }
            ],
            labels: skillList,
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: "Biểu đồ mức độ kĩ năng của nhân viên"
            }
          }}
        />
      </Container>
      <div style={{ height: 20 }}></div>
      <Container>
        <h5>Ghi chú :</h5>
        <Row>
          <Col sm={10}>
          <p>
            Hàng ngang là các kĩ năng  , hàng dọc là  mức độ tương ứng thấp nhất là 0 và cao nhất là 3
          </p>
          <p>Nếu bạn có yêu cầu chỉnh sửa kĩ năng của bản thân thì hãy gửi yêu cầu đến bộ phận HR</p>
          </Col>
         <Col sm={2}>
         <ModalRequire/>
        
         </Col>
         </Row>
      </Container>
    </div>
  );
}
 
export default SkillUser;