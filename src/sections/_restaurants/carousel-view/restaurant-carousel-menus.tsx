import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';

import { _mock, _products } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

 
import RestaurantCarouselMenu from './restaurant-carousel-menu-list';
 

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));
const _mockProduct = _products[0];
// ----------------------------------------------------------------------

export default function MenusCarouselView() {
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
         
      </Box>

      <Container sx={{ my: 0 }}>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{
            mb: 3,
            alignItems: 'flex-start',
          }}
        >
       

          <Card>
            {/* <CardHeader title="Carousel Basic 3" /> */}
            <CardContent>
              {/* <RestaurantCarouselMenu data={_carouselsExample.slice(8, 12)} /> */}
            </CardContent>
          </Card> 

          <Card>
            {/* <CardHeader title="Carousel Basic 3" /> */}
            <CardContent>
              <RestaurantCarouselMenu images={_mockProduct.images} />
              {/* <RestaurantCarouselMenu data={_carouselsExample.slice(8, 12)} /> */}
            </CardContent>
          </Card> 
          
        </Box>

        
      </Container>
    </>
  );
}
