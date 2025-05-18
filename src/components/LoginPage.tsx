import { Button, Grid, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import ModalCadastro from "./ModalCadastro";

const LoginPage= () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };

     const handleModalClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        console.log("Modal Opened: ", openModal);
    }, [openModal]);

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
                maxWidth: "50vh", 
                maxHeight: "50vh",
                p: 4, 
                display: 'flex',
                flexDirection: 'column',
                gap: 3 }}>
                <Typography variant="h4" align="center" style={{ margin: '20px' }}>
                    Portal Monte Jiu-Jitsu Pomerode
                </Typography>
                <Grid container spacing={2} display="flex" flexDirection={"column"}  alignItems="center" justifyContent={"center"}>
                    <Grid size={12}  sx={{ display: 'flex', justifyContent: 'center' }} >
                        <TextField id="filled-basic" label="Número de cadastro" variant="filled" required />
                    </Grid>
                    <Box  display="flex" flexDirection={"row"} gap={2} justifyContent="space-between" alignItems="center">
                        <Grid size={6}>
                            <Button variant="outlined" sx={{ width: '14vh', height: '4vh' }} startIcon={<AccountCircleIcon />} onClick={() => handleModalOpen()}>
                                Criar Conta
                            </Button>
                        </Grid>    
                        <Grid size={6}>
                            <Button variant="contained" sx={{ width: '14vh' , height: '4vh'}} endIcon={<ArrowForwardIcon />}>
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