import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png';
import "./restaurent.css";
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


export default function RestaurentHome() {
    const [hover, setHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            {/* <h1 className="headerFont1">
                Restaurent
            </h1> */}
            <StyledTextGradient
                className="headerFont1"
                animate={{ backgroundPosition: '200% center' }}
                transition={{
                    repeatType: 'reverse',
                    ease: 'linear',
                    duration: 20,
                    repeat: Infinity,
                }}
                >
                Restaurent
            </StyledTextGradient>
            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid xs={12} md={6} lg={7}>
                    <h1 className="headerFont2">
                        Mediterranean & International
                    </h1>
                    <h1 className="headerFont3">
                        The largest open air Restaurant in Germany
                    </h1>
                    <p style={{ marginBottom: '7vh' }}>
                        The <b>ROBERTO BEACH</b> Restaurant with its professional and spacious infrastructure is the culinary highlight for corporate and private events as well as daytime gastronomy with a view of Lake Aschheim.
                    </p>
                    <Box sx={{ display: 'flex',
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
                            href={paths.restaurant.root}
                            size="large"
                            variant="contained"
                            color="inherit"
                        >
                            More details
                        </Button>
                    </Box>
                </Grid>

                <Grid xs={12} md={6} lg={5} className="video-card">
                    <div className="video-card__previev">
                        <img alt='Home restaurant' src="public/assets/images/home/restaurentBg1.jpeg" />
                    </div>
                    <div
                        className={`ring-container ${hover ? "animate-forward" : "animate-backward"}`}
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
