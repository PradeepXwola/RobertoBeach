// import { useEffect } from 'react';

// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { alpha, useTheme } from '@mui/material/styles';

// import { useResponsive } from 'src/hooks/use-responsive';

// import { fCurrency } from 'src/utils/format-number';

// import { bgBlur, bgGradient } from 'src/theme/css';

// import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
// import TextMaxLine from 'src/components/text-max-line';
// import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';

// import { ITourProps } from 'src/types/tour';
// import { IvolleyBallProps } from 'src/types/volleyball'
// // ----------------------------------------------------------------------
// //  const _volleyBallNames = [
// //   '"Enjoy a game of beach volleyball with our standard booking. Perfect for casual play and spontaneous fun!"',
// //   '"Gather your friends or colleagues for an exciting group session. Ideal for team building and social gatherings!"',
// //   '"Take your skills to the next level with our professional training sessions. Tailored for both beginners and pros!"',
// //   '"Commit to regular play and enjoy exclusive benefits with our subscription plans. Stay active and save more!"',
  
// // ];


// // type Props = {
// //   volleyball: IvolleyBallProps[];
// // };


// type Props = {
//   tours: ITourProps[];
// };

// export default function VolleyBallLandingHero({ tours }: Props) {
//   const mdUp = useResponsive('up', 'md');

//   const carouselLarge = useCarousel({
//     speed: 500,
//     slidesToShow: 1,
//     draggable: false,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     ...CarouselDots({
//       rounded: true,
//       sx: {
//         left: 0,
//         right: 0,
//         zIndex: 9,
//         bottom: 64,
//         position: 'absolute',
//         display: { md: 'none' },
//       },
//     }),
//   });

//   const carouselThumb = useCarousel({
//     vertical: true,
//     slidesToShow: 3,
//     centerMode: true,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     centerPadding: '0px',
//     verticalSwiping: true,
//   });

//   useEffect(() => {
//     carouselLarge.onSetNav();
//     carouselThumb.onSetNav();
//   }, [carouselLarge, carouselThumb]);

//   return (
//     <Box sx={{ minHeight: { md: '100vh' }, position: 'relative' }}>
//       {!!tours.length && (
//         <Carousel
//           {...carouselLarge.carouselSettings}
//           asNavFor={carouselThumb.nav}
//           ref={carouselLarge.carouselRef}
//         >
//           {tours.map((tour) => (
//             <CarouselItem key={tour.id} tour={tour} />
//           ))}
//         </Carousel>
//       )}

//       {mdUp && (
//         <Stack
//           spacing={2}
//           justifyContent="center"
//           sx={{
//             top: 0,
//             height: 1,
//             maxWidth: 220,
//             position: 'absolute',
//             right: { xs: 20, lg: '6%', xl: '10%' },
//           }}
//         >
//           {!!tours.length && (
//             <Carousel
//               {...carouselThumb.carouselSettings}
//               asNavFor={carouselLarge.nav}
//               ref={carouselThumb.carouselRef}
//             >
//               {tours.map((tour, index) => (
//                 <ThumbnailItem
//                   key={tour.id}
//                   tour={tour}
//                   selected={carouselLarge.currentIndex === index}
//                 />
//               ))}
//             </Carousel>
//           )}
//         </Stack>
//       )}
//     </Box>
//   );
// }

// // ----------------------------------------------------------------------

// type CarouselItemProps = {
//   tour: ITourProps;
// };

// function CarouselItem({ tour }: CarouselItemProps) {
//   const theme = useTheme();

//   const renderOverlay = (
//     <Box
//       sx={{
//         ...bgGradient({
//           startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
//           endColor: `${theme.palette.common.black} 75%`,
//         }),
//         backgroundColor: alpha(theme.palette.common.black, 0.24),
//         top: 0,
//         left: 0,
//         zIndex: 8,
//         width: 1,
//         height: 1,
//         position: 'absolute',
//       }}
//     />
//   );

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         position: 'relative',
//         color: 'common.white',
//         justifyContent: 'center',
//       }}
//     >
//       <Stack
//         alignItems="center"
//         sx={{
//           zIndex: 9,
//           py: { xs: 20, md: 0 },
//           position: { md: 'absolute' },
//         }}
//       >
//         {/* <Typography variant="overline" sx={{ color: 'info.main', mb: 5 }}>
//           {tour.location}
//         </Typography> */}

//         <Typography variant="h3" sx={{ maxWidth: 480 }}>
//           {tour.slug}
//         </Typography>

//         <Stack
//           alignItems="center"
//           spacing={{ xs: 2.5, md: 5 }}
//           direction={{ xs: 'column', md: 'row' }}
//           sx={{ my: 5 }}
//         >
//           <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
//             <Iconify icon="carbon:time" width={24} sx={{ mr: 1, color: 'primary.main' }} />
//             {tour.duration}
//           </Stack>

//           <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
//             <Iconify icon="carbon:star" width={24} sx={{ mr: 1, color: 'primary.main' }} />
//             {`${tour.ratingNumber} reviews`}
//           </Stack>

//           <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
//             <Iconify icon="carbon:currency" width={24} sx={{ mr: 1, color: 'primary.main' }} />
//             {`Starting at ${fCurrency(tour.price)}`}
//           </Stack>
//         </Stack>

//         <Button variant="contained" size="large" color="primary">
//           Book Now
//         </Button>
//       </Stack>

//       <Box
//         sx={{
//           width: 1,
//           height: 1,
//           position: {
//             xs: 'absolute',
//             md: 'relative',
//           },
//         }}
//       >
//         {renderOverlay}

//         <Image
//           alt="hero"
//           src={tour.heroUrl}
//           sx={{
//             width: 1,
//             height: { xs: 1, md: '100vh' },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }

// // ----------------------------------------------------------------------

// type ThumbnailItemProps = {
//   tour: ITourProps;
//   selected?: boolean;
// };

// function ThumbnailItem({ tour, selected }: ThumbnailItemProps) {
//   const theme = useTheme();

//   return (
//     <Stack
//       direction="row"
//       alignItems="center"
//       spacing={2.5}
//       sx={{
//         px: 2,
//         py: 1.5,
//         cursor: 'pointer',
//         color: 'common.white',
//         ...(selected && {
//           borderRadius: 5,
//           ...bgBlur({
//             opacity: 0.08,
//             color: theme.palette.common.white,
//           }),
//         }),
//       }}
//     >
//       <Avatar src={tour.heroUrl} sx={{ width: 48, height: 48 }} />

//       <Stack spacing={0.5}>
//         <TextMaxLine variant="h6" line={2}>
//           {tour.location1}
//         </TextMaxLine>

//         {/* <Stack direction="row" alignItems="center">
//           <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
//           <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
//             {tour.continent}
//           </TextMaxLine>
//         </Stack> */}
//       </Stack>
//     </Stack>
//   );
// }
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
import { IvolleyBallProps } from 'src/types/volleyball'
// ----------------------------------------------------------------------
//  const _volleyBallNames = [
//   '"Enjoy a game of beach volleyball with our standard booking. Perfect for casual play and spontaneous fun!"',
//   '"Gather your friends or colleagues for an exciting group session. Ideal for team building and social gatherings!"',
//   '"Take your skills to the next level with our professional training sessions. Tailored for both beginners and pros!"',
//   '"Commit to regular play and enjoy exclusive benefits with our subscription plans. Stay active and save more!"',
  
// ];


type Props = {
  volleyballs: IvolleyBallProps[];
};


// type Props = {
//   tours: ITourProps[];
// };

export default function VolleyBallLandingHero({ volleyballs }: Props) {
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
      {!!volleyballs.length && (
        <Carousel
          {...carouselLarge.carouselSettings}
          asNavFor={carouselThumb.nav}
          ref={carouselLarge.carouselRef}
        >
          {volleyballs.map((volleyball) => (
            <CarouselItem key={volleyball.id} volleyball={volleyball} />
          ))}
        </Carousel>
      )}

      {mdUp && (
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
          {!!volleyballs.length && (
            <Carousel
              {...carouselThumb.carouselSettings}
              asNavFor={carouselLarge.nav}
              ref={carouselThumb.carouselRef}
            >
              {volleyballs.map((volleyball, index) => (
                <ThumbnailItem
                  key={volleyball.id}
                  volleyball={volleyball}
                  selected={carouselLarge.currentIndex === index}
                />
              ))}
            </Carousel>
          )}
        </Stack>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  volleyball: IvolleyBallProps[];
  
};

function CarouselItem({ volleyball }: CarouselItemProps) {
  const theme = useTheme();

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
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'center',
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          zIndex: 9,
          py: { xs: 20, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        {/* <Typography variant="overline" sx={{ color: 'info.main', mb: 5 }}>
          {tour.location}
        </Typography> */}

        <Typography variant="h3" sx={{ maxWidth: 480 }}>
          {volleyball.volleyslug}
        </Typography>

        <Stack
          alignItems="center"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ my: 5 }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:time" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {volleyball.duration}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:star" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`${volleyball.ratingNumber} reviews`}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:currency" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`Starting at ${fCurrency(volleyball.price)}`}
          </Stack>
        </Stack>

        <Button variant="contained" size="large" color="primary">
          Book Now
        </Button>
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

        <Image
          alt="hero"
          src={volleyball.heroUrl}
          sx={{
            width: 1,
            height: { xs: 1, md: '100vh' },
          }}
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ThumbnailItemProps = {
  volleyball:IvolleyBallProps;
  
  selected?: boolean;
};

function ThumbnailItem({ volleyball, selected }: ThumbnailItemProps) {
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
          borderRadius: 5,
          ...bgBlur({
            opacity: 0.08,
            color: theme.palette.common.white,
          }),
        }),
      }}
    >
      <Avatar src={volleyball.heroUrl} sx={{ width: 48, height: 48 }} />

      <Stack spacing={0.5}>
        <TextMaxLine variant="h6" line={2}>
          {volleyball.location1}
        </TextMaxLine>

        {/* <Stack direction="row" alignItems="center">
          <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
          <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
            {tour.continent}
          </TextMaxLine>
        </Stack> */}
      </Stack>
    </Stack>
  );
}
