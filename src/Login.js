import React from 'react';
import {
  PTContent,
  PTLogin,
  PTImageLogin,
  PTBrand,
  PTTitle,
  PTParagraph,
  PTFields,
} from './components/login/Login';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function App() {
  const useStyles = makeStyles((theme) => ({
    MuiFormControl: {
      background: '#fff',
      width: '50%',
      '& .MuiFilledInput-underline:after': {
        'border-bottom': '2px solid #fcec5c',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#003d93',
      },
    },
  }));
  const classes = useStyles();

  return (
    <PTContent>
      <PTLogin>
        <PTBrand />
        <PTTitle>Seja bem vindo(a)!</PTTitle>
        <PTParagraph>Faça o login para acessar o sistema.</PTParagraph>
        <PTFields>
          <TextField
            className={classes.MuiFormControl}
            label="E-mail"
            variant="filled"
          />
          <TextField
            type="password"
            className={classes.MuiFormControl}
            label="Senha"
            variant="filled"
          />
        </PTFields>
      </PTLogin>
      <PTImageLogin />
    </PTContent>
  );
}

export default App;
