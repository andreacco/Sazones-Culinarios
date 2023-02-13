import logo from '../../assets/logo.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MdEmail } from 'react-icons/md';
import '../../scss/components/Footer.scss'




export default function StickyFooter() {
  return (
      <Box
        className='Footer-container'
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm" className='container-info'>
          <Box
            className='img-logo'
            component="img"
            sx={{ height: 120 }}
            alt="logo-sazones-culinarios"
            src={logo}
          />
          <Container maxWidth="sm" className='container-correo'>
            <MdEmail className='email-logo' size={25}/>
            <Typography variant="body1" className='correo'>
              sazonesculinarios9@gmail.com
            </Typography>
          </Container>
        </Container>
        <Container maxWidth="sm" className='copyright'>
          <Typography variant="body1" className='texto-copyright'>
            © 2022 Sazones Culinarios. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
  );
}



// const Footer = () => {
//     return (
//         <div className='Footer-container'>
//             Footer
//         </div>
//     )
// }

// export default Footer