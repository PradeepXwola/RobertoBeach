import Container from '@mui/material/Container';

import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./volleyball.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

export default function VolleyBallHome() {

    const [hover, setHover] = useState(false);

    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <section>
                <h1 className=" headerFont1">
                Sports
                </h1>

                <div className="mx-auto flex flex-row items-center justify-between">
                    <div className="flex flex-col space-y-2 w-1/2 pr-20">
                        {/* <h1 className="headerFont1">
                            Sports
                        </h1> */}
                        <h1 className="headerFont2 mb-5">
                            Sandy & Warm
                        </h1>
                        <h1 className="headerFont3" style={{width: '100%'}}>
                            Beach Volleyball & Beach Soccer
                        </h1>
                        <p style={{marginBottom: '7vh'}}>
                            Beach volleyball in Munich's largest and most modern indoor and outdoor beach facility, on heated sand (8 indoor and 6 outdoor courts) and whatever the weather.
                        </p>
                        {/* <button className="moreDetailsButton" onClick={navigateToRestaurent}>
                            More details
                        </button> */}
                        <Box sx={{ textAlign: 'left' }}>
                            <Button
                                // component={RouterLink}
                                // href={paths.travel.tours}
                                size="large"
                                variant="contained"
                                color="inherit"
                            >
                                More details
                            </Button>
                        </Box>
                    </div>
                    <div className="w-1/2">
                        <div className="video-card js-video-handler">
                            <div className="video-card__previev">
                                <img src="public/assets/images/home/restaurentBg1.jpeg" />
                            </div>
                            <div
                                className={`ring-container ${hover ? "animate-forward" : "animate-backward"
                                    }`}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                style={{
                                    backgroundImage: `url(${ringImage})`,
                                    width: "550px",
                                    height: "575px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
