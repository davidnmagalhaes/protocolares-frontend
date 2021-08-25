import { useState, useEffect } from 'react';

import api from './api';
import history from './history';
import Swal from 'sweetalert2';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function refreshPage() {
    window.location.reload();
  }

  function redirect(path) {
    history.push(path);
    refreshPage();
  }

  useEffect(() => {
    const token = localStorage.getItem('@token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    api
      .post('login', { email: email, password: password })
      .then((r) => {
        localStorage.setItem('@token', JSON.stringify(r.data.token));
        localStorage.setItem('@prefix', JSON.stringify(r.data.group));
        history.push('/inicio');
        refreshPage();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:
            err.response.status === 401
              ? 'Usuário ou senha incorretos.'
              : err.response.status === 500
              ? 'Estamos em manutenção, tente novamente mais tarde!'
              : 'Houve um problema, tente novamente mais tarde!',
          confirmButtonText: 'Fechar',
        });
      });
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@token');
    localStorage.removeItem('@user_group');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return {
    setEmail,
    setPassword,
    authenticated,
    setAuthenticated,
    loading,
    handleLogin,
    handleLogout,
    redirect,
  };
}
