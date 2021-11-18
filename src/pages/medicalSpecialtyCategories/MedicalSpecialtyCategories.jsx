import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import {
  Content,
  ContentInner,
  ContentInside,
} from './MedicalSpecialtyCategoriesStyle';
import ModalAddMedicalSpecialtyCategories from '../../components/modal/add/ModalAddMedicalSpecialtyCategories';
import Datatable from '../../components/datatable/Datatable';
import Options from './Options';
import { useFetch } from '../../components/hooks/useFetch';
import { Prefix } from '../../services/prefix';
import StatusMedicalSpecialtyCategories from '../../components/status/statusMedicalSpecialtyCategories';
import Loading from '../../components/loading/Loading';

const MedicalSpecialtyCategories = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;

  const params =
    Prefix +
    '/medical-specialty-categories?page=' +
    page +
    '&per_page=' +
    perPage;
  const medicalSpecialtyCategories = useFetch(params);
  if (!medicalSpecialtyCategories.data) return '';

  const HandlePage = (e) => {
    setPage(e);
  };

  let data = medicalSpecialtyCategories.data?.models?.data?.map((map) => {
    return {
      cols: [
        { title: map.name, subtitle: 'COD.: ' + map.id },
        { title: map.medical_specialty?.name, subtitle: null },
      ],
      id: map.id,
      checked: false,
      options: <Options id={map.id} />,
      status: (
        <StatusMedicalSpecialtyCategories
          id={map.id}
          active={map.active}
          params={params}
        />
      ),
    };
  });

  const columns = ['Nome', 'Especialidade'];

  return (
    <Content>
      <Loading />
      <Navbar />
      <ContentInner>
        <Header
          title="Categorias de Especialidades Médicas"
          button={<ModalAddMedicalSpecialtyCategories params={params} />}
        />
        <ContentInside>
          <Datatable
            columns={columns}
            options={<Options />}
            data={data}
            deleteRequest="medical-specialty-categories"
            params={params}
            lastPage={medicalSpecialtyCategories.data?.models.last_page}
            page={page}
            setPage={HandlePage}
          />
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default MedicalSpecialtyCategories;
