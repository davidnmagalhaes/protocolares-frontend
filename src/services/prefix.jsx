export const Prefix = !localStorage.getItem('@prefix')
  ? ''
  : localStorage.getItem('@prefix').replace(/[\\"]/g, '');
