import Grid from '@mui/material/Grid';
import Logo from './Logo';
import LoginPage from './LoginPage';

const Home = () => {
  return (
   <Grid container spacing={2} sx= {{
    backgroundColor: 'primary.main',
   }}>
        <Grid size={6}>
            <Logo/>
        </Grid>
        <Grid size={6}sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <LoginPage/>
        </Grid>
    </Grid>
  );
}

export default Home;