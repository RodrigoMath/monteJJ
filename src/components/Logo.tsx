import LogoMonte from '../assets/imgs/image.png';
import {styled} from '@mui/material'


const Logo = () => {
    const LogoContainer = styled('div')({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    });
    
    const LogoImg = styled('img')({
        borderRadius: '50%',
        border: '2px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '60vh',
    });
    return (
        <LogoContainer>
            <LogoImg src={LogoMonte} alt="Logo" />
        </LogoContainer>
    );
}

export default Logo;