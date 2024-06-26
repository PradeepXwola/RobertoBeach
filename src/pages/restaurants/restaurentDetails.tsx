// Restaurant.js or Restaurant.tsx
import React from 'react';
import { useResponsive } from 'src/hooks/use-responsive';
import { localStorageGetItem } from 'src/utils/storage-available';

const features = [
    { name: 'Ambiance', description: 'The ROBERTO BEACH Restaurant with its professional and spacious infrastructure is the culinary highlight for corporate and private events as well as daytime gastronomy with a view of Lake Aschheim. ' },
    { name: 'Customisable Menu', description: 'Many guests celebrate birthdays, anniversaries or personal parties at ROBERTO BEACH and put together their own individual selection of antipasti, main courses, pasta, vegetables, salads and exquisite desserts.' },
    { name: 'Experianced Chefs', description: 'Food has been created by international and creative cooking professionals with many years of experience.' },
    { name: 'pizzeria', description: 'The pizzeria is an insider tip for lovers of the Italian food scene. Connoisseurs of Asian cuisine love the fine selection of Indian and Asian dishes.' },
    { name: 'Beach Bar', description: 'The beach bar is the meeting point of the ROBERTO BEACH scene.  The selection of drinks includes traditional summer drinks. The bartenders also conjure up a large selection of cocktails and long drinks' },
    { name: 'Seasonal Special', description: 'Seasonal dishes from the region can be found on the daily or weekly menu.' },
]

export default function RestaurantDetailsPage() {

    const settings = localStorageGetItem('settings') || '{}';

    const settingsJson = JSON.parse(settings)
  
    const darkModeOn = settingsJson?.themeMode == 'dark' ? true : false

    const mdUp = useResponsive('up', 'md');

    console.log("darkModeOn in rest ==> ", darkModeOn)

    return (
        <section>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mediterranean & International</h2>
                    <p className="mt-4 text-gray-500">
                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="public/assets/images/restaurents/menu1.jpeg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="public/assets/images/restaurents/menu2.jpeg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="public/assets/images/restaurents/menu3.jpeg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="public/assets/images/restaurents/menu4.jpeg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 ">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img className="h-12 self-start" src="public/assets/images/restaurents/xwola.png" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8">
                                <p>
                                    “I with my professional family members visited here(Roberto Beach) to have some refreshment.
                                    We had a great welcome from Roberto team. I really liked there customisable menu & Beach Bar.
                                    I fell in love with there Ambiance.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold">Arjun</div>
                                    <div className="mt-1 text-gray-500">CTO of Xwola</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        {darkModeOn && <img className="h-12 self-start" src="public/assets/images/restaurents/ReFormDark.png" alt="" />}
                        {!darkModeOn && <img className="h-12 self-start" src="public/assets/images/restaurents/ReFormLight.png" alt="" />}
                        
                        
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8">
                                <p>
                                    “I have hosted my Daughters birthday in Roberto Beach. It was a great place to celebrate your memorable parties.
                                    I feel like this is a must visit place.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src='https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold">Pradeep Chandra</div>
                                    <div className="mt-1 text-gray-500">CEO ReForm</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}