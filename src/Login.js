import React, { useContext } from 'react';
import {
  PTContent,
  PTLogin,
  PTImageLogin,
  PTBrand,
  PTTitle,
  PTParagraph,
  PTFields,
  PTBetween,
  PTLink,
  PTButton,
  PTAuthor,
} from './components/login/Login';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { Context } from './services/context';

function App() {
  const { setEmail, setPassword, handleLogin } = useContext(Context);
  const useStyles = makeStyles((theme) => ({
    MuiFormControl: {
      width: '50%',
      '& .MuiFilledInput-underline:after': {
        'border-bottom': '2px solid #fcec5c',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#003d93',
      },
      '& .MuiFilledInput-input': {
        color: '#003D93',
        background: '#fff',
      },
    },
    Checkbox: {
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#fcec5c',
      },
      '& .MuiIconButton-label': {
        color: '#fcec5c',
      },
      '& .MuiTypography-body1': {
        'font-family': 'Poppins',
        'font-size': '14px',
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
            type="text"
            className={classes.MuiFormControl}
            label="E-mail"
            variant="filled"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            className={classes.MuiFormControl}
            label="Senha"
            variant="filled"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
          />

          <PTBetween>
            <FormControlLabel
              className={classes.Checkbox}
              control={
                <Checkbox
                  className={classes.Checkbox}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  label="Lembrar acesso"
                />
              }
              label="Lembrar senha"
            />
            <PTLink to="">Esqueceu sua senha?</PTLink>
          </PTBetween>
          <PTButton onClick={handleLogin}>Acessar</PTButton>
          <PTAuthor>Esta aplicação foi desenvolvida por Morgan CS</PTAuthor>
        </PTFields>
      </PTLogin>
      <PTImageLogin />
    </PTContent>
  );
}

export default App;
