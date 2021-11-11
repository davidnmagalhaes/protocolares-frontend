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
import Professionals from './pages/professionals/Professionals';
import Units from './pages/units/Units';
import Psf from './pages/psf/Psf';
import Diagnostics from './pages/diagnostics/Diagnostics';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #0000004f;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  if (loading) {
    return (
      <BeatLoader
        loading={loading}
        css={override}
        size={30}
        color={'#4a5185'}
      />
    );
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

const rotas = [
  { path: '/inicio', component: Overview },
  { path: '/profissionais', component: Professionals },
  { path: '/unidades', component: Units },
  { path: '/psf', component: Psf },
  { path: '/doencas', component: Diagnostics },
];

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
