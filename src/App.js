import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
// import AllTheBooks from "./components/AllTheBooks";
import MyButtons from "./components/MyButtons";
import { Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";
import history from "./books/history.json";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyButtons />
      <Container fluid>
        <Row className="gx-3 pt-3 bg-light">
          <BookList books={history} />
        </Row>
      </Container>

      <MyFooter />
    </div>
  );
}

export default App;
