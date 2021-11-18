import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import {
  Content,
  ContentInner,
  ContentInside,
} from './MedicalSpecialtiesStyle';
import ModalAddMedicalSpecialties from '../../components/modal/add/ModalAddMedicalSpecialties';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusMedicalSpecialties from '../../components/status/statusMedicalSpecialties';
import Loading from '../../components/loading/Loading';

const MedicalSpecialties = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params =
    Prefix + '/medical-specialties?page=' + page + '&per_page=' + perPage;
  const medicalSpecialties = useFetch(params);
  if (!medicalSpecialties.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = medicalSpecialties.data?.models?.data?.map((map) => {
    return {
      cols: [{ title: map.name, subtitle: 'COD.: ' + map.id }],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
      status: (
        <StatusMedicalSpecialties
          id={map.id}
          active={map.active}
          params={params}
        />
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
          title="Especialidades médicas"
          button={<ModalAddMedicalSpecialties params={params} />}
        />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="medical-specialties"
            params={params}
            lastPage={medicalSpecialties.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default MedicalSpecialties;
