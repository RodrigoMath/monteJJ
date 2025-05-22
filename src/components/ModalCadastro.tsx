import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, type ReactNode } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

interface ModalCadastroProps {
  handleClose: () => void;
  open: boolean;
  children?: ReactNode; 
}

interface UserProfile {
    name: string;
    email: string;
}

const ModalCadastro = ({ handleClose, open, children } : ModalCadastroProps) => {
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20vw',
    maxWidth: '50vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    };
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.trim();
        setUserEmail(value);
    }

    const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.trim();
        setUserName(value);
    }
   

    const handleSingup = () => {
        const userProfile: UserProfile = {
            name: userName,
            email: userEmail
        };

        if (!userEmail || !userName) return;
        console.log(userProfile);
        axios.post('/api/usuario', userProfile)
            .then(response => {
                console.log("Sucesso:", response.data);
                handleClose();
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer', position: 'absolute', top: 10, right: 10, '&:hover': {
            bgcolor: 'primary.dark', 
            color: 'text.primary'   
            }}} />
            <Box display="flex" flexDirection={"row"} gap={2} justifyContent="space-between" alignItems="center">
                <ManageAccountsIcon fontSize="large" />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Área de Cadastro
                </Typography>
            </Box>
            <Grid container spacing={2} display="flex" flexDirection={"row"}  alignItems="center">
                <TextField id="filled-basic" label="e-mail" variant="filled" fullWidth required autoFocus onChange={onEmailChange}/>
                <TextField id="filled-basic" label="nome" variant="filled" fullWidth required  onChange={onUserNameChange}/> 
            </Grid>
           <Button variant="contained" startIcon={<SendIcon />} onClick={handleSingup}>Criar conta</Button>
        </Box>
        </Modal>
    );
}

export default ModalCadastro;
