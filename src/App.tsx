import { Box } from '@mui/material';
import  Home  from './components/Home';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Garante altura total da viewport
        width: '100vw',
        p: 2
      }}
    >
      <Home />
    </Box>
  );
};

export default App;
