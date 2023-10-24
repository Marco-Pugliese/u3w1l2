import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import MyButtons from "./components/MyButtons";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyButtons />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
