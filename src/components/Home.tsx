import Grid from '@mui/material/Grid';
import Logo from './Logo';
import LoginPage from './LoginPage';

const Home = () => {
  return (
   <Grid container spacing={2}>
        <Grid size={6}>
            <Logo/>
        </Grid>
        <Grid size={6}>
            <LoginPage/>
        </Grid>
    </Grid>
  );
}

export default Home;