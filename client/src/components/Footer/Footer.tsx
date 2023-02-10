import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
        //   backgroundColor: 080808,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Footer
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