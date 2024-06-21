import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #00A6FB, #006494)',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    padding: '20px',
    width: '400px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
  },
  button: {
    marginTop: '20px',
  },
});

const CreateAccountForm: React.FC = () => {
  const classes = useStyles();
  const [fullName, setFullName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accountData = { name: fullName, occupation, email, telephone };

    try {
      const response = await fetch('http://localhost:4000/api/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Conta criada com sucesso!');
      } else {
        const errorData = await response.json();
        setMessage(`Erro ao criar conta: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Nome completo"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Ocupação"
          variant="outlined"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Telefone"
          variant="outlined"
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Criar conta
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message?.includes('Erro') ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreateAccountForm;
