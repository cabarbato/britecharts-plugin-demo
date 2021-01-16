import { Row, Col } from 'react-bootstrap';

function AppHeader() {
  return (
    <header>
      <Row>
        <Col xs={12} sm={9} className="header-title mx-auto">
          <h1>Britecharts React Mini Tooltip Demo</h1>
          <p>Move your cursor over the chart to see data for each category</p>
        </Col>
      </Row>
    </header>
  );
}

export default AppHeader;