import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />  
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} /> 
                <Route path="/incidents/new" component={NewIncident} /> 
            </Switch>
        </BrowserRouter>
    )
}

// O exact esta comunicando ao componente Route, q para acessar o componente Logon, é necessario seguir exatamente aquele caminho
// assim não interferindo em outras rotas q começam com "/"
