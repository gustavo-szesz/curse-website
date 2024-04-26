import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        borderColor: 'white', // Change the color of the border
      },
      '&:hover fieldset': {
        borderColor: 'white', // Add when hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Add when focused
      },
    },
    '& .MuiInputBase-input': {
      color: 'white', // change the color of the text to white
    },
    '& .MuiInputLabel-root': {
      color: 'white', // change the color of the label to white
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to the server
    console.log('Form submitted:', { fullName, occupation, email, telephone });
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
    </div>
  );
};

export default CreateAccountForm;
