import React from 'react'
import { Helmet } from 'react-helmet-async'

import VolleyBallLandingView from 'src/sections/_volleyball/view/volleyball-landing-view'


export default function VolleyBallLandingPage() {
  return (
    <>
    <Helmet>
      <title> vollyBall: Home</title>
      
    </Helmet>
<VolleyBallLandingView/>
  </>
  )
}
