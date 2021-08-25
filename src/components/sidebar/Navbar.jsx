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
        <Li href="/inicio">
          <Icon src="media/sidebar/inicio-icon.svg" /> Início
        </Li>
        <Li href="/processos">
          <Icon src="media/sidebar/processos-icon.svg" /> Processos
        </Li>
        <Li href="/area-critica">
          <Icon src="media/sidebar/area-critica-icon.svg" /> Área crítica
        </Li>
        <Li href="/pacientes">
          <Icon src="media/sidebar/pacientes-icon.svg" /> Pacientes
        </Li>
        <Li href="/relatorios">
          <Icon src="media/sidebar/relatorios-icon.svg" /> Relatórios
        </Li>
        <Li href="/filas">
          <Icon src="media/sidebar/filas-icon.svg" /> Filas
        </Li>
        <Li href="/profissionais">
          <Icon src="media/sidebar/profissionais-icon.svg" /> Profissionais
        </Li>
        <Li href="/unidades">
          <Icon src="media/sidebar/unidades-icon.svg" /> Unidades
        </Li>
        <Li href="/agentes">
          <Icon src="media/sidebar/agentes-icon.svg" /> Agentes
        </Li>
        <Li href="/psf">
          <Icon src="media/sidebar/psf-icon.svg" /> PSF
        </Li>
        <Li href="/finalidades-de-uso">
          <Icon src="media/sidebar/finalidade-de-uso-icon.svg" /> Finalidades de
          uso
        </Li>
        <Li href="/exames">
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
