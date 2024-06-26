// Restaurant.js or Restaurant.tsx
import React from 'react';

const features = [
    { name: 'Popularity', description: 'Beach volleyball, a variation played on sand with teams of two players, has gained massive popularity and is a recognized Olympic sport.' },
    { name: 'Health Benefits', description: 'Enhances cardiovascular and muscular strength, agility, and coordination. Improves mood, reduces stress, and fosters teamwork and communication skills.' },
    { name: 'Amenities', description: 'Locker Rooms, Seating Area, Refreshments, Parking, Dress changing rooms, washrooms.' },
    { name: 'Membership and Pricing', description: 'Flexible Membership Plans, Competitive Rates, Exclusive Offers' },
    { name: 'Training and Events', description: 'Professional Coaching, Tournaments and Leagues, Corporate and Private Events' },
    { name: 'Social Interaction', description: 'Provides opportunities for socializing and building camaraderie' },
  ]
  
export default function VolleyBallDetailsPage() {
    return (
      <div >
        <div aria-hidden="true" className="relative">
          <img
            src="public/assets/images/volleyBall/beachvolleyballBg3.jpeg"
            alt=""
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Our beach volleyball courts!</h2>
            <p className="mt-4">
                Beach volleyball in Munich's largest and most modern indoor and outdoor beach facility, on heated sand (8 indoor and 6 outdoor courts) and in any weather.
            </p>
          </div>
  
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium">{feature.name}</dt>
                <dd className="mt-2 text-sm">{feature.description}</dd>
              </div>
            ))}
          </dl>
          
        </div>
      </div>
      
    )
}
