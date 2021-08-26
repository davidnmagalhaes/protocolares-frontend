import React, { useContext } from 'react';
import {
  Sidebar,
  Ul,
  Li,
  Icon,
  Logout,
  LogoutIcon,
} from '../../components/sidebar/Sidebar';
import { useLocation } from 'react-router';
import Brand from './Brand';
import { Context } from '../../services/context';

const Navbar = () => {
  const { handleLogout } = useContext(Context);
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Sidebar>
      <Brand />
      <Ul>
        <Li
          to="/inicio"
          activeClassName={pathname === '/inicio' ? 'active' : ''}
        >
          <Icon src="media/sidebar/inicio-icon.svg" /> Início
        </Li>
        <Li to="/processos">
          <Icon src="media/sidebar/processos-icon.svg" /> Processos
        </Li>
        <Li to="/area-critica">
          <Icon src="media/sidebar/area-critica-icon.svg" /> Área crítica
        </Li>
        <Li to="/pacientes">
          <Icon src="media/sidebar/pacientes-icon.svg" /> Pacientes
        </Li>
        <Li to="/relatorios">
          <Icon src="media/sidebar/relatorios-icon.svg" /> Relatórios
        </Li>
        <Li to="/filas">
          <Icon src="media/sidebar/filas-icon.svg" /> Filas
        </Li>
        <Li to="/profissionais">
          <Icon src="media/sidebar/profissionais-icon.svg" /> Profissionais
        </Li>
        <Li to="/unidades">
          <Icon src="media/sidebar/unidades-icon.svg" /> Unidades
        </Li>
        <Li to="/agentes">
          <Icon src="media/sidebar/agentes-icon.svg" /> Agentes
        </Li>
        <Li to="/psf">
          <Icon src="media/sidebar/psf-icon.svg" /> PSF
        </Li>
        <Li to="/finalidades-de-uso">
          <Icon src="media/sidebar/finalidade-de-uso-icon.svg" /> Finalidades de
          uso
        </Li>
        <Li to="/exames">
          <Icon src="media/sidebar/exames-icon.svg" /> Exames
        </Li>
      </Ul>
      <Logout onClick={handleLogout}>
        <LogoutIcon src="media/sidebar/logout.svg" />
        Sair do sistema
      </Logout>
    </Sidebar>
  );
};
export default Navbar;
