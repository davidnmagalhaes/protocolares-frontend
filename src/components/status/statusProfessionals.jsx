import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import api from '../../services/api';
import { Prefix } from '../../services/prefix';

const StatusProfessionals = ({ id, active }) => {
  const [checked, setChecked] = useState(active);

  const handleChange = () => {
    api
      .put(Prefix + '/professionals/' + id, { active: !active ? true : false })
      .then((r) => {
        setChecked(r.data.model);
      });
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      name="checkedA"
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
};
export default StatusProfessionals;
