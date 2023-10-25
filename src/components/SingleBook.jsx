// import { Component } from "react";
// import { Component } from "react";
import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    checked: false,
  };
  render() {
    return (
      <Col className=" col-2 d-flex align-items-between">
        <Card
          className={
            this.state.checked
              ? " mb-5 mt-2 border border-dark selectedElement"
              : " mb-5 mt-2 border border-dark"
          }
          onClick={() => {
            this.setState({ checked: !this.state.checked });
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column bg-success text-dark">
            <Card.Title className="text-center flex-grow-1">
              {this.props.book.title}
            </Card.Title>
            <Card.Text className="text-end">
              {this.props.book.price} $
            </Card.Text>
            <Button variant="dark">Add To Chart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
