import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './Login';
import { Context } from './services/context';
import { AuthProvider } from './services/context';
import history from './services/history';
import Overview from './pages/overview/Overview';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return 'Carregando';
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

const rotas = [{ path: '/inicio', component: Overview }];

export default function Routes() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <CustomRoute exact path="/" component={Login} />
          {rotas.map(({ path, component }, key) => (
            <CustomRoute
              isPrivate
              exact
              path={path}
              component={component}
              key={key}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}
