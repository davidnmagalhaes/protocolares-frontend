import { useContext } from 'react';
import useSWR from 'swr';
import api from '../../services/api';
import Swal from 'sweetalert2';
import { Context } from '../../services/context';

export function useFetch(url, refresh) {
  const { redirect } = useContext(Context);
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
    {
      refreshInterval: refresh,
      onError: (err, key) => {
        if (!err.response) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O servidor não está respondendo, tente novamente mais tarde!',
            confirmButtonText: 'Fechar',
          });
        } else {
          if (err.response.status === 403) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Você não tem as permissões adequadas!',
              confirmButtonText: 'Fechar',
            }).then((result) => {
              if (result.isConfirmed || result.isDismissed || result.isDenied)
                return redirect('/dashboard');
            });
          }
          if (err.response.status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Houve um problema em seu acesso! Tente novamente ou entre em contato conosco.',
              confirmButtonText: 'Fechar',
            }).then((result) => {
              if (result.isConfirmed || result.isDismissed || result.isDenied)
                return redirect('/');
            });
          }
        }
      },
      onErrorRetry: (error) => {
        // Never retry on 404.
        if (error.status === 404) return;
      },
    },
    { suspense: true },
  );

  return { data, error, mutate };
}
