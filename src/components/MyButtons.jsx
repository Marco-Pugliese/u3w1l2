import { Container, Button, Row, Col } from "react-bootstrap";
function MyButtons() {
  return (
    <Container fluid className="bg-light">
      <Row className="d-flex pt-5 mt-5 ">
        <Col className="col-12 d-flex justify-content-center">
          <Button variant="warning" className="mx-2 " id="history">
            History
          </Button>
          <Button variant="success" className="mx-2 " id="fantasy">
            Fantasy
          </Button>
          <Button variant="dark" className="mx-2 " id="horror">
            Horror
          </Button>
          <Button variant="danger" className="mx-2 " id="romance">
            Romance
          </Button>
          <Button variant="info" className="mx-2 " id="scifi">
            SciFI
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyButtons;
