import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ContactPage} exact />
      </Switch>
    </>
  );
}

export default App;
