import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./events.css";
import Button, { buttonClasses } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function EventHome() {

    const [eventCircleHover, setEventHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid xs={12} md={6} lg={5} className="eventVideoCard">
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
                <Grid xs={12} md={6} lg={7}>
                    <h1 className="EventHeaderFont1">
                        Events
                    </h1>
                    <h6 className="EventHeaderFont3 w-100">
                        with beach feeling
                    </h6>
                    <p style={{ marginBottom: '7vh' }}>
                        <b>ROBERTO BEACH</b> leaves plenty of scope for event visions. We transform wishes into beautiful reality and enable the realization of individual event ideas.
                    </p>
                    <Box sx={{ textAlign: 'left' }} className="mt-10">
                        <Button
                            // component={RouterLink}
                            href={paths.eventDetails}
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
