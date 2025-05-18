import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import type { ReactNode } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

interface ModalCadastroProps {
  handleClose: () => void;
  open: boolean;
  children?: ReactNode; 
}

const ModalCadastro = ({ handleClose, children } : ModalCadastroProps) => {
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    };
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Box display="flex" flexDirection={"row"} gap={2} justifyContent="space-between" alignItems="center">
                <ManageAccountsIcon fontSize="large" />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Área de Cadastro
                </Typography>
            </Box>
            <Grid container spacing={2} display="flex" flexDirection={"row"}  alignItems="center">
                <TextField id="filled-basic" label="e-mail" variant="filled" />
                <TextField id="filled-basic" label="nome" variant="filled" /> 
            </Grid>
           <Button variant="contained" startIcon={<SendIcon />}>Criar conta</Button>
        </Box>
        </Modal>
    );
}

export default ModalCadastro;
