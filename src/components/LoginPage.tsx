import { Button, Grid, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import ModalCadastro from "./ModalCadastro";
import axios from "axios";

const LoginPage= () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };

     const handleModalClose = () => {
        setOpenModal(false);
    };

    const [idUsuario, setIdUsuario] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;


   const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        const value = event.target.value.replace(/\D/g, '');
        setIdUsuario(value);
    };

   const handleCheckin = async () => {
    if (!idUsuario) return;

    try {
        await axios.post(`${API_URL}/checkin`, { idUsuario: idUsuario });
        setIdUsuario(""); 
        alert("Check-in realizado! Próximo usuário...");
    } catch (error) {
        alert("Erro ao realizar check-in. Verifique o número de cadastro.");
        setIdUsuario(""); 

        console.error("Erro no check-in:", error);
    }
    };

    return (
       <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            p: 2 
          }}
       >
            <Paper  elevation={10}
              sx={{
                width: '100%',
                maxWidth: { xs: '90vw', sm: '400px', md: '450px' }, 
                p: 4, 
                display: 'flex',
                backgroundColor: 'secondary.main',
                flexDirection: 'column',
                gap: 3 }}>
                <Typography variant="h4" align="center" style={{ margin: '20px' }}>
                    Portal Monte Jiu-Jitsu Pomerode
                </Typography>
                <Grid container spacing={2} display="flex" flexDirection={"column"}  alignItems="center" justifyContent={"center"}>
                    <Grid size={12}  sx={{ display: 'flex', justifyContent: 'center' }} >
                        <TextField id="filled-basic" label="Número de cadastro" variant="filled" required  value={idUsuario} onChange={handleIdChange}/>
                    </Grid>
                    <Box  display="flex" flexDirection={"row"} gap={2} justifyContent="space-between" alignItems="center">
                        <Grid size={6} >
                            <Button variant="outlined"  sx={{
                                width: {
                                xs: 35, 
                                sm: 60, 
                                md: 95, 
                                },
                            }} startIcon={<AccountCircleIcon />} onClick={() => handleModalOpen()}>
                                Criar Conta
                            </Button>
                        </Grid>    
                        <Grid size={6}>
                            <Button variant="contained" 
                            sx={{
                                width: {
                                xs: 60, 
                                sm: 80, 
                                md: 110, 
                                },
                            }}
                             endIcon={<ArrowForwardIcon />} onClick={() => handleCheckin()}>
                                Marcar presença
                            </Button>
                        </Grid>    
                    </Box>
                </Grid>
            </Paper>
            <ModalCadastro handleClose={handleModalClose} open={openModal} />
       </Box>
    );
};

export default LoginPage;