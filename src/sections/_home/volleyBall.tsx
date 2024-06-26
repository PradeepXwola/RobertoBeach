import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./volleyball.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

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
                    <h1 className="volleyBallHeaderFont1">
                        Sports
                    </h1>
                    <h1 className="volleyBallHeaderFont2 mb-5">
                        Sandy & Warm
                    </h1>
                    <h1 className="volleyBallHeaderFont3" >
                        Beach Volleyball & Beach Soccer
                    </h1>
                    <p style={{marginBottom: '7vh'}}>
                        Beach volleyball in Munich's largest and most modern indoor and outdoor beach facility, on heated sand (8 indoor and 6 outdoor courts) and whatever the weather.
                    </p>
                    <Box sx={{ textAlign: 'left' }}>
                        <Button
                            href={paths.volleyBallDetails}
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
