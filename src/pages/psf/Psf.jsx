import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside } from './PsfStyle';
import ModalAddPsf from '../../components/modal/add/ModalAddPsf';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusPsf from '../../components/status/statusPsf';
import Loading from '../../components/loading/Loading';

const Psf = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params = Prefix + '/programs?page=' + page + '&per_page=' + perPage;
  const programs = useFetch(params);
  if (!programs.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = programs.data?.models?.data?.map((map) => {
    return {
      cols: [{ title: map.name, subtitle: 'COD.: ' + map.id }],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
      status: <StatusPsf id={map.id} active={map.active} params={params} />,
    };
  });

  const columns = ['PSF'];

  return (
    <Content>
      <Loading />
      <Navbar />
      <ContentInner>
        <Header title="PSF" button={<ModalAddPsf params={params} />} />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="programs"
            params={params}
            lastPage={programs.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Psf;
