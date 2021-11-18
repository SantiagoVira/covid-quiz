import "./App.css";
import { Home, Quiz } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/quiz">
                    <Quiz />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
