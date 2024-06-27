import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fCurrency } from 'src/utils/format-number';

import { bgBlur, bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';

import { ITourProps } from 'src/types/tour';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function TravelLandingHero({ tours }: Props) {
  const mdUp = useResponsive('up', 'md');

  const carouselLarge = useCarousel({
    speed: 500,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
        display: { md: 'none' },
      },
    }),
  });

  const carouselThumb = useCarousel({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    verticalSwiping: true,
  });

  useEffect(() => {
    carouselLarge.onSetNav();
    carouselThumb.onSetNav();
  }, [carouselLarge, carouselThumb]);

  return (
    <Box sx={{ minHeight: { md: '100vh' }, position: 'relative' }}>
      {!!tours.length && (
        <Carousel
          {...carouselLarge.carouselSettings}
          asNavFor={carouselThumb.nav}
          ref={carouselLarge.carouselRef}
        >
          {tours.map((tour) => (
            <CarouselItem key={tour.id} tour={tour} />
          ))}
        </Carousel>
      )}

      {/* {mdUp && (
        <Stack
          spacing={2}
          justifyContent="center"
          sx={{
            top: 0,
            height: 1,
            maxWidth: 220,
            position: 'absolute',
            right: { xs: 20, lg: '6%', xl: '10%' },
          }}
        >
          {!!tours.length && (
            <Carousel
              {...carouselThumb.carouselSettings}
              asNavFor={carouselLarge.nav}
              ref={carouselThumb.carouselRef}
            >
              {tours.map((tour, index) => (
                <ThumbnailItem
                  key={tour.id}
                  tour={tour}
                  selected={carouselLarge.currentIndex === index}
                />
              ))}
            </Carousel>
          )}
        </Stack>
      )} */}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  tour: ITourProps;
};

function CarouselItem({ tour }: CarouselItemProps) {
  const theme = useTheme();

  const videoLink = "public/assets/background/header_01.mp4"

  const renderOverlay = (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
        }),
        backgroundColor: alpha(theme.palette.common.black, 0.24),
        top: 0,
        left: 0,
        zIndex: 8,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'left',
      }}
      
    >
      <Stack
        alignItems="left"
        sx={{
          zIndex: 9,
          // py: { xs: 20, md: 0 },
          py: { xs: 10, md: 15 },
          position: { md: 'absolute' },
          width: '100%',
          maxWidth: '100%',
          // px: { xs: 2, md: 5 },
        }}
      >
        {/* <Typography variant="overline" sx={{ color: 'info.main', mb: 5 }}>
          {tour.location}
        </Typography> */}
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
          <Typography variant="h1" sx={{ maxWidth: 480, fontSize: { xs: '2.5rem', md: '3.75rem' } }} >
            Welcome To Roberto Beach
          </Typography>
        </Container>

        {/* <Stack
          alignItems="center"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ my: 5 }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:time" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {tour.duration}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:star" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`${tour.ratingNumber} reviews`}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:currency" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`Starting at ${fCurrency(tour.price)}`}
          </Stack>
        </Stack>

        <Button variant="contained" size="large" color="primary">
          Book Now
        </Button> */}
      </Stack>

      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
        {renderOverlay}

        {/* <Image
          alt="hero"
          src={tour.heroUrl}
          sx={{
            width: 1,
            height: { xs: 1, md: '100vh' },
          }}
        /> */}
        <Box
          sx={{
            width: 1,
            height: { xs: 1, md: '100vh' },
            position: 'relative',
            zIndex: -1,
          }}
          // className="your-class-name"
        >
          <video src={videoLink} playsInline={true} muted={true} loop={true} autoPlay={true} 
            className="video-section__video__mobile" style={{width: "100%", height: '100%', objectFit: 'cover'}}>
            <source src={videoLink} type="mp4"></source>
          </video>
        </Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ThumbnailItemProps = {
  tour: ITourProps;
  selected?: boolean;
};

function ThumbnailItem({ tour, selected }: ThumbnailItemProps) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2.5}
      sx={{
        px: 2,
        py: 1.5,
        cursor: 'pointer',
        color: 'common.white',
        ...(selected && {
          borderRadius: 2,
          ...bgBlur({
            opacity: 0.08,
            color: theme.palette.common.white,
          }),
        }),
      }}
    >
      <Avatar src={tour.heroUrl} sx={{ width: 48, height: 48 }} />

      <Stack spacing={0.5}>
        <TextMaxLine variant="h6" line={1}>
          {tour.location}
        </TextMaxLine>

        <Stack direction="row" alignItems="center">
          <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
          <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
            {tour.continent}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Stack>
  );
}
