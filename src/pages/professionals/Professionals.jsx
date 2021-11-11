import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import {
  Content,
  ContentInner,
  ContentInside,
  Local,
} from './ProfessionalsStyle';
import ModalAddProfessional from '../../components/modal/add/ModalAddProfessional';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusProfessionals from '../../components/status/statusProfessionals';

const Profissionals = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params =
    Prefix + '/professionals?page=' + page + '&per_page=' + perPage;
  const professionals = useFetch(params);
  if (!professionals.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = professionals.data?.models?.data?.map((map) => {
    return {
      cols: [
        { title: map.name, subtitle: 'COD.: ' + map.id },
        { title: map.specialties, subtitle: map.created_at },
        {
          title: !map.local ? (
            <Local src="../../../media/remove.png" />
          ) : (
            <Local src="../../../media/check.png" />
          ),
          subtitle: '',
        },
        {
          title: (
            <StatusProfessionals
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

  const columns = ['Nome', 'Especialidade', 'Regional', 'Status'];

  return (
    <Content>
      <Navbar />
      <ContentInner>
        <Header
          title="Profissionais"
          button={<ModalAddProfessional params={params} />}
        />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="professionals"
            params={params}
            lastPage={professionals.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Profissionals;
