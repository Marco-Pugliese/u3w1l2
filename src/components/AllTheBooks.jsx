// import fantasy from "../books/fantasy.json";
// // import history from "../books/history.json";
// // import horror from "../books/horror.json";
// // import romance from "../books/romance.json";
// // import scifi from "../books/scifi.json";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Row, Col, Container } from "react-bootstrap";

// function AllTheBooks() {
//   return (
//     <Container fluid className="bg-light p-5">
//       <Row className="d-flex gx-3">
//         {fantasy.map((book) => (
//           <Col key={book.asin} className="col-2 d-flex align-items-between">
//             <Card className="shadow-lg mb-5 mt-2 border border-dark">
//               <Card.Img variant="top" src={book.img} />
//               <Card.Body className="d-flex flex-column bg-success text-dark">
//                 <Card.Title className="text-center  flex-grow-1">
//                   {book.title}
//                 </Card.Title>
//                 <Card.Text className="text-end">{book.price} $</Card.Text>
//                 <Button variant="dark">Add To Chart</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default AllTheBooks;
