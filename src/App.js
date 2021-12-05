import './App.scss';
import MainPageComponent from "./MainPageComponent";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container className="App1">
            <MainPageComponent />
        </Container>
    </div>
  );
}

export default App;
