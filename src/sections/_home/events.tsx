import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./events.css";
import Button, { buttonClasses } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { paths } from 'src/routes/paths';
import { textGradient } from 'src/theme/css';
import { styled } from '@mui/material/styles';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
    ...textGradient(
      `300deg, #00A76F 0%, #FFAB00 25%, #00A76F 50%, #FFAB00 75%, #00A76F 100%`
    ),
    padding: 0,
    marginTop: 8,
    lineHeight: 1,
    fontWeight: 900,
    marginBottom: 24,
    letterSpacing: 8,
    textAlign: 'left',
    backgroundSize: '400%',
    fontSize: `${64 / 16}rem`,
    fontFamily: theme.typography.fontSecondaryFamily,
    [theme.breakpoints.up('md')]: {
      fontSize: `${96 / 16}rem`,
    },
}));

export default function EventHome() {

    const [eventCircleHover, setEventHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid xs={12} md={6} lg={5} className="eventVideoCard" order={{ xs: 2, md: 1 }}>
                    <div className="eventVideoCardPreviev">
                        <img src="public/assets/images/home/eventsBg2.jpeg" />
                    </div>
                    <div
                        className={`eventRingContainer ${eventCircleHover ? "animate-forward" : "animate-backward"}`}
                        onMouseEnter={() => setEventHover(true)}
                        onMouseLeave={() => setEventHover(false)}
                        onTouchStart={() => setEventHover(!eventCircleHover)}
                        style={{
                            backgroundImage: `url(${ringImage})`,
                        }}
                    />
                </Grid>
                <Grid xs={12} md={6} lg={7} order={{ xs: 1, md: 2 }}>
                    {/* <h1 className="EventHeaderFont1">
                        Events
                    </h1> */}
                    <StyledTextGradient
                        className="EventHeaderFont1"
                        animate={{ backgroundPosition: '200% center' }}
                        transition={{
                            repeatType: 'reverse',
                            ease: 'linear',
                            duration: 20,
                            repeat: Infinity,
                        }}
                        >
                        Events
                    </StyledTextGradient>
                    <h6 className="EventHeaderFont3 w-100">
                        with beach feeling
                    </h6>
                    <p style={{ marginBottom: '7vh' }}>
                        <b>ROBERTO BEACH</b> leaves plenty of scope for event visions. We transform wishes into beautiful reality and enable the realization of individual event ideas.
                    </p>
                    <Box sx={{ textAlign: 'left' }} className="mt-10">
                        <Button
                            // component={RouterLink}
                            href={paths.event.root}
                            size="large"
                            variant="contained"
                            color="inherit"
                        >
                            More details
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
