import "./App.css";
import { Home, Quiz } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/quiz">
                    <Quiz />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
