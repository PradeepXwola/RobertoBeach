import Container from '@mui/material/Container';

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
            <section>
                {/* <h1 className=" headerFont1">
                    Restaurants
                </h1> */}

                <div className="flex flex-row items-start justify-between space-x-8">
                    <div className="w-2/5">
                        {/* <img
                            src={E2}
                            alt="e2"
                            className="image-border rounded-full"
                        /> */}
                        <div className="event-video-card js-video-handler">
                            <div className="event-video-card__previev">
                                <img src="public/assets/images/home/eventsBg2.jpeg" />
                            </div>
                            <div
                                className={`event-ring-container ${eventCircleHover ? "animate-forward" : "animate-backward"
                                    }`}
                                onMouseEnter={() => setEventHover(true)}
                                onMouseLeave={() => setEventHover(false)}
                                style={{
                                    backgroundImage: `url(${ringImage})`,
                                    width: "550px",
                                    height: "575px",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 w-3/5 pl-20">
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
                    </div>

                </div>
            </section>
        </Container>
    );
}
