import React, { useState } from 'react';
import { IconOptions } from '../../components/datatable/DataTableStyle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ModalEditPsf from '../../components/modal/edit/ModalEditPsf';

const Options = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState({ edit: false });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    setMenu({ ...menu, edit: !menu.edit ? true : false });
  };

  return (
    <>
      <IconOptions
        src="../../../media/menu.svg"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleMenu}>Editar</MenuItem>
      </Menu>

      <ModalEditPsf open={menu.edit} setOpen={handleMenu} id={id} />
    </>
  );
};
export default Options;
