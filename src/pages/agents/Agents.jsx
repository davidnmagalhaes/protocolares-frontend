import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside } from './AgentsStyle';
import ModalAddAgents from '../../components/modal/add/ModalAddAgents';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusAgents from '../../components/status/statusAgents';
import Loading from '../../components/loading/Loading';

const Agents = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params = Prefix + '/agents?page=' + page + '&per_page=' + perPage;
  const agents = useFetch(params);
  if (!agents.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = agents.data?.models?.data?.map((map) => {
    return {
      cols: [
        { title: map.name, subtitle: 'COD.: ' + map.id },
        { title: map.program?.name, subtitle: null },
      ],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
      status: <StatusAgents id={map.id} active={map.active} params={params} />,
    };
  });

  const columns = ['Nome', 'PSF'];

  return (
    <Content>
      <Loading />
      <Navbar />
      <ContentInner>
        <Header title="Agentes" button={<ModalAddAgents params={params} />} />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="agents"
            params={params}
            lastPage={agents.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Agents;
