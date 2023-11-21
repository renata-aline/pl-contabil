import './index.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { responsiveFontSizes } from '@mui/material';

function Footer() {
    
    return (
        <footer className='footer'>
           
             <div className='footer_social-media'>
                <InstagramIcon fontSize='inherit' />
                <MailOutlineIcon fontSize='inherit' />
            </div> 
            <div className='footer_brand'>
                <img src="/image/logo-pl.jpg" alt="logo da empresa PL-Contabilidade" />
                <p className='footer_brand-text'>Prestação de Serviços e Contabilidade</p>
                </div>
        </footer>
    )
}

export default Footer