import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Message from "./components/layout/Message";

//CSS
import "./index.css";

/* Pages*/
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/User/Profile";

/* Context*/
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <Router>
            <UserProvider>
                <Navbar />
                <Message />
                <Container>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route
                            path="/user/profile"
                            element={<Profile />}
                        ></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Container>
                <Footer />
            </UserProvider>
        </Router>
    );
}

export default App;
