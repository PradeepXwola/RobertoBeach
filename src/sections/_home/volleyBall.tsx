import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./volleyball.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function VolleyBallHome() {

    const [hover, setHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >

            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid xs={12} md={6} lg={7}>
                    {/* <h1 className="volleyBallHeaderFont1">
                        Sports
                    </h1> */}
                    <StyledTextGradient
                        className="volleyBallHeaderFont1"
                        animate={{ backgroundPosition: '200% center' }}
                        transition={{
                            repeatType: 'reverse',
                            ease: 'linear',
                            duration: 20,
                            repeat: Infinity,
                        }}
                        >
                        Sports
                    </StyledTextGradient>
                    <h1 className="volleyBallHeaderFont2 mb-5">
                        Sandy & Warm
                    </h1>
                    <h1 className="volleyBallHeaderFont3" >
                        Beach Volleyball & Beach Soccer
                    </h1>
                    <p style={{marginBottom: '7vh'}}>
                        Beach volleyball in Munich's largest and most modern indoor and outdoor beach facility, on heated sand (8 indoor and 6 outdoor courts) and whatever the weather.
                    </p>
                    <Box sx={{  display: 'flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                color: 'common.white',
                                justifyContent: {
                                    xs: 'center',
                                    md: 'left',
                                }
                            }}>
                        <Button
                            href={paths.VolleyBallLanding}
                            size="large"
                            variant="contained"
                            color="inherit"
                        >
                            More details
                        </Button>
                    </Box>

                </Grid>

                <Grid xs={12} md={6} lg={5} className="volleyBallVideoCard">
                    <div className="volleyBallVideoCardPreviev">
                        <img alt='Home volleyball' src="public/assets/images/home/restaurentBg1.jpeg" />
                    </div>
                    <div
                        className={`volleyBallRingContainer ${hover ? "animate-forward" : "animate-backward"}`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onTouchStart={() => setHover(!hover)}
                        style={{
                            backgroundImage: `url(${ringImage})`,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
