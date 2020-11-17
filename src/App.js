import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/homePage.jsx";
import Track from "./pages/trackPage.jsx";

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
