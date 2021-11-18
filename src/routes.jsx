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
import Purposes from './pages/purposes/Purposes';
import MedicalSpecialties from './pages/medicalSpecialties/MedicalSpecialties';
import Agents from './pages/agents/Agents';
import MedicalSpecialtyCategories from './pages/medicalSpecialtyCategories/MedicalSpecialtyCategories';
import BeatLoader from 'react-spinners/BeatLoader';
import { override } from './global/loading';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

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
  { path: '/finalidades-de-uso', component: Purposes },
  { path: '/especialidades-medicas', component: MedicalSpecialties },
  { path: '/agentes', component: Agents },
  {
    path: '/categorias-de-especialidades-medicas',
    component: MedicalSpecialtyCategories,
  },
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
