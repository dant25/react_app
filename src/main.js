// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { HashRouter, Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
            </HashRouter>
        </Container>
    </main>
);

function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default Main;