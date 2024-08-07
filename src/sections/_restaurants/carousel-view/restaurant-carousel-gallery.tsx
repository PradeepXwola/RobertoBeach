import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

/* import CarouselBasic2 from './carousel-basic-2';
import CarouselBasic3 from './carousel-basic-3';
import CarouselBasic1 from './carousel-basic-1';
import CarouselBasic4 from './carousel-basic-4';
import CarouselAnimation from './carousel-animation';
import CarouselThumbnail from './carousel-thumbnail'; */
import CarouselCenterMode from './carousel-center-mode';

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));

// ----------------------------------------------------------------------

export default function GalleryCarouselView() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        {/* <Box
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
        </Box> */}

        <Stack spacing={3}>
          <Card>            
            <CardContent>
              <CarouselCenterMode data={_carouselsExample.slice(8, 16)} />
            </CardContent>
          </Card>

        </Stack>
      </Container>
    </>
  );
}

