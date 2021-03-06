import { Home, Quiz } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </Router>
    );
}

export default App;
