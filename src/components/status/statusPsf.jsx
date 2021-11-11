import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import api from '../../services/api';
import { Prefix } from '../../services/prefix';
import { mutate as mutateGlobal } from 'swr';

const StatusPsf = ({ id, active, params }) => {
  const [checked, setChecked] = useState(active);

  const handleChange = () => {
    api
      .put(Prefix + '/programs/' + id, { active: !active ? true : false })
      .then((r) => {
        mutateGlobal(params);
        setChecked(r.data.model.active);
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
export default StatusPsf;
