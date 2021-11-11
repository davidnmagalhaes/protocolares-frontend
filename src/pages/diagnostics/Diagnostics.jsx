import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside } from './DiagnosticsStyle';
import ModalAddDiagnostics from '../../components/modal/add/ModalAddDiagnostics';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusDiagnostics from '../../components/status/statusDiagnostics';

const Diagnostics = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params = Prefix + '/diagnostics?page=' + page + '&per_page=' + perPage;
  const diagnostics = useFetch(params);
  if (!diagnostics.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = diagnostics.data?.models?.data?.map((map) => {
    return {
      cols: [
        { title: map.name, subtitle: 'COD.: ' + map.id },

        {
          title: (
            <StatusDiagnostics
              id={map.id}
              active={map.active}
              params={params}
            />
          ),
          subtitle: null,
        },
      ],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
    };
  });

  const columns = ['PSF', 'Status'];

  return (
    <Content>
      <Navbar />
      <ContentInner>
        <Header
          title="Doenças"
          button={<ModalAddDiagnostics params={params} />}
        />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="diagnostics"
            params={params}
            lastPage={diagnostics.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Diagnostics;
