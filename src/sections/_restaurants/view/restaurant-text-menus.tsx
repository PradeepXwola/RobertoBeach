import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { IBlogPostProps } from 'src/types/blog';

import MenusCarouselView from '../carousel-view/restaurant-carousel-menus';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function RestaurantTextMenuView() {
 // const featuredPost = posts[0];

  return (
    <Container   
    >
        <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid xs={12} md={6} lg={6}>
                <MenusCarouselView />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
                <MenusCarouselView />
            </Grid>
        </Grid> 
      {/* <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <MenusCarouselView />
        

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          <MenusCarouselView />
        </Box>
      </Box> */}
    </Container>
  );
}
