import {BrowserRouter,Route,Switch} from "react-router-dom";
import Navigation from "./Navigation";
import {Container} from "react-bootstrap";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Management from "./Management";
import Employee from "./Employee";


function App(){
    return(
        <BrowserRouter>
        <Navigation/>
        <Container fluid>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/management" component={Management}/>
        <Route path="/employee" component={Employee}/>
        </Switch>
        </Container>
        </BrowserRouter>
    
    )
};


export default App;