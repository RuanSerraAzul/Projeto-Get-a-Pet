import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

//CSS
import "./index.css";

/* Pages*/
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/pages/Home";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
