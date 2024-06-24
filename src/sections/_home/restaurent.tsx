import Container from '@mui/material/Container';

import { useState } from 'react';
import ringImage from '../../../public/assets/images/home/HexaAnimation1.png'
import "./restaurent.css"
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
            <section>
                <h1 className="headerFont1">
                    Restaurants
                </h1>

                <div className="mx-auto flex flex-row items-center justify-between">
                    <div className="flex flex-col space-y-2 w-1/2 pr-20">
                        <h1 className="headerFont2">
                            Mediterranean & International
                        </h1>
                        <h1 className="headerFont3">
                            The largest open air Restaurent in Germany
                        </h1>
                        <p style={{marginBottom: '7vh'}}>
                            The <b>ROBERTO BEACH</b> Restaurant with its professional and spacious infrastructure is the culinary highlight for corporate and private events as well as daytime gastronomy with a view of Lake Aschheim.
                        </p>
                        {/* <button className="moreDetailsButton" onClick={navigateToRestaurent}>
                            More details
                        </button> */}
                        <Box sx={{ textAlign: 'left' }}>
                            <Button
                                // component={RouterLink}
                                href={paths.restaurentDetails}
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
