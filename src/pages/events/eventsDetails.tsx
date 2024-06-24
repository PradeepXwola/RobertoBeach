// Restaurant.js or Restaurant.tsx
import Container from '@mui/material/Container';
import React from 'react';

const people = [
    {
        name: 'Firmenevents',
        role: 'Senior Designer',
        imageUrl:
            'public/assets/images/events/event2.jpeg',
        bio: 'Developing new ideas with your feet in the sand and giving your employees plenty of room for creativity? At Robertobeach this is possible in any weather and at any time of the year! We offer a pleasant holiday atmosphere so that employees can let their creativity run wild and create effective goals.',
    },

    {
        name: 'Privatevents',
        role: 'Senior Developer',
        imageUrl:
            'public/assets/images/events/event1.jpeg',
        bio: 'Are you dreaming of a wedding right on the beach? Feel the sand under your bare feet, without having to fly for hours and with all the guests you want to have with you on your most beautiful day? You make a promise to each other for a life together and we make you a promise for a unique dream wedding!',
    },
    {
        name: 'Sonstiges',
        role: 'Senior Designer',
        imageUrl:
            'public/assets/images/events/event3.png',
        bio: 'Our venue is also equipped to host a variety of other events that don’t fit into the conventional categories. Whether it’s a cultural event, a charity fundraiser, or a community gathering, we provide a flexible and accommodating space for your unique needs.',
    },

    // {
    //     name: 'Leslie Alexander',
    //     role: 'Senior Developer',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //     bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    // },
    // More people...
]

export default function EventsDetailsPage() {
    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Variety Events at Roboto Beach</h2>
                        <p className="mt-6 text-lg leading-8">
                            Our creative and experienced event team will be happy to put together an individual concept based on a given theme or make suggestions for unforgettable, extraordinary theme parties.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                    >
                        {people.map((person) => (
                            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                                <div className="flex-auto">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight">{person.name}</h3>
                                    {/* <p className="text-base leading-7">{person.role}</p> */}
                                    <p className="mt-6 text-base leading-7">{person.bio}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}