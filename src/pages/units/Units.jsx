import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside, Local } from './UnitsStyle';
import ModalAddUnits from '../../components/modal/add/ModalAddUnits';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusProfessionals from '../../components/status/statusProfessionals';

const Profissionals = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  const params = Prefix + '/units?page=' + page + '&per_page=' + perPage;
  const units = useFetch(params);
  if (!units.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = units.data?.models?.data?.map((map) => {
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

  const columns = ['Unidade', 'Endereço', 'Telefone', 'Status'];

  return (
    <Content>
      <Navbar />
      <ContentInner>
        <Header title="Unidades" button={<ModalAddUnits params={params} />} />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="units"
            params={params}
            lastPage={units.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Profissionals;
