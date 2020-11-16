import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
