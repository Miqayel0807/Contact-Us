import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {useState} from 'react'
import WorksHeader from "./Components/Works/Works";

function App() {
  const [display, setDisplay]=useState(true)

  const changeDisplay=()=>{
      setDisplay(!display)
  }

  

  return (
    <>
    <Header  display={changeDisplay}/>
      <Switch>
        <Route path="/" component={display && ContactPage} exact />
        <Route path="/works" component={WorksHeader} exact />

      </Switch>

      {display &&       <Footer display={changeDisplay}/>
}
    </>
  );
}

export default App;
