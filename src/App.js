import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Track from "./pages/TrackPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:track" component={Track} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
