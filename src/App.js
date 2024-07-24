import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/users";
import SocketProvider from "./socketContext/socketContext";
function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/user-1" element={<User />} />
            <Route path="/user-2" element={<User />} />
          </Routes>
        </Router>
      </SocketProvider>
    </div>
  );
}

export default App;
