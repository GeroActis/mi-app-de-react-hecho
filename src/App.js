import Header from "./components/Header/Header"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Personaje from "./pages/Personaje"

function App() {
  return (
    <>
      <Header />
        <Switch>       
          <Route exact path="/" component= {Home} />
          <Route path="/about" component= {About} />
          <Route path="/contact" component= {Contact} />
          <Route path="/personaje/id/:id" component= {Personaje} />
        </Switch> 
    </>
  );
}

export default App;