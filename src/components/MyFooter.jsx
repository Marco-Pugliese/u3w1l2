import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Facebook, Instagram, Mailbox2 } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Row className="w-100 text-center py-2">
          <Col sm={6}>EpiBook - © 2023 EPIBOOK</Col>
          <Col sm={6}>
            <i className="mx-2">
              <Instagram />
            </i>
            <i className="mx-2">
              <Facebook />
            </i>
            <i className="mx-2">
              <Mailbox2 />
            </i>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MyFooter;
