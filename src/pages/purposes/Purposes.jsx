import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside } from './PurposesStyle';
import ModalAddPurposes from '../../components/modal/add/ModalAddPurposes';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusPurposes from '../../components/status/statusPurposes';
import Loading from '../../components/loading/Loading';

const Purposes = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params = Prefix + '/purposes?page=' + page + '&per_page=' + perPage;
  const purposes = useFetch(params);
  if (!purposes.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = purposes.data?.models?.data?.map((map) => {
    return {
      cols: [{ title: map.name, subtitle: 'COD.: ' + map.id }],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
      status: (
        <StatusPurposes id={map.id} active={map.active} params={params} />
      ),
    };
  });

  const columns = ['Nome'];

  return (
    <Content>
      <Loading />
      <Navbar />
      <ContentInner>
        <Header
          title="Finalidades de Uso"
          button={<ModalAddPurposes params={params} />}
        />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="purposes"
            params={params}
            lastPage={purposes.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Purposes;
