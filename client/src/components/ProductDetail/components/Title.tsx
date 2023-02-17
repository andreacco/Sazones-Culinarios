import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import '../../../scss/components/ProductDetail/components/Title.scss'

export default function Title() {
    const product = useSelector((state: any) => state.productDetail)

    return (
        <Box className='title-product-detail-container'
            component="div"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            }}
        >
            <Typography variant="body1" className='title-product-detail'>
                {product.name}
            </Typography>
        </Box>
    )
}
