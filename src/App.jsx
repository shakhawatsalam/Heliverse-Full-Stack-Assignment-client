import { Button } from "antd";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
