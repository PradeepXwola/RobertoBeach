import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png';
import "./restaurent.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function RestaurentHome() {
    const [hover, setHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <h1 className="headerFont1">
                Restaurent
            </h1>
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
                    <Box sx={{ textAlign: 'left' }}>
                        <Button
                            href={paths.restaurentDetails}
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
