import React, { useRef } from "react";
import { Navigation } from "./Navigation";
import { ResponsiveNavigation } from "./ResponsiveNavigation";
import { HeroSection } from "./HeroSection";
import { FeaturedCards } from "./FeaturedCards";
import { PricingCards } from "./PricingCards";
import { Form } from "./Form";
import Comments from "./Comments";
import { LandingPageStyle } from "./css";
import Link from "next/link";

export const Landingpage: React.FC<{plans: any}> = ({ plans }) => {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop+700);

    const scrollRefForm = useRef(null);
    const executeScroll = () => {
        scrollToRef(scrollRefForm);
    };

    return (
        <div className="landingPage">
            <LandingPageStyle/>
            <div className="mx-auto container">
                {/* Navigation */}
                <Navigation/>
                {/* Mobile Responsive */}
                <ResponsiveNavigation/>
                {/* Mobile Responsvie Ends */}
                {/* Navigation Ends */}
            </div>
            {/* Hero */}
            <HeroSection executeScroll={executeScroll}/>
            {/* hero Ends */}
            <div className="w-full bg-green-body h-full">
                <img src="/images/path-2.png" className="absolute w-full imgsec1 z-0 xl:block hidden" />
                <img src="/images/path-2.png" className="absolute w-full h-96 z-0 xl:hidden block" />
                <FeaturedCards/>
                <PricingCards plans={plans}/>
                {/* Section 3 */}
                <div className="mx-auto container xl:px-0 px-8 Eina01">
                    <div className="xl:mt-44 mt-12">
                        <h1 className="font-bold Eina01-bold text-custom-black text-5xl xl:block hidden text-center">Not Sure Which Plan Is Right For You?</h1>
                        <h1 className="font-bold Eina01-bold text-custom-black xl:hidden block text-2-5xl text-center">Not Sure Which Plan Is Right For You?</h1>
                        <h3 className="text-custom-black xl:text-2xl text-sm text-center pt-3 pb-9 xl:block hidden">Hit the button below to get a call from one of our NBN™ experts who’ll <br />help you get set up with the best plan for your home.</h3>
                        <h3 className="xl:hidden block text-custom-black xl:text-2xl text-sm text-center pt-3 pb-9">Hit the button below to get a call from one of our NBN™ experts who’ll help you get set up with the best plan for your home.</h3>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="/contact">
                            <button className="flex items-center bg-button-1 text-white xl:px-12 px-6 py-4 border-radius-btn xl:text-xl text-lg leading-9 font-bold">Get Free NBN™ Advice &gt;&gt;</button>
                        </a>
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse items-center xl:pt-44 pt-12">
                        <div className="">
                            <h1 className="text-custom-black text-5xl xl:block hidden font-bold Eina01-bold heading-line xl:mt-0 mt-8">Seriously. It’s That Simple.</h1>
                            <h1 className="font-bold Eina01-bold text-custom-black xl:hidden block text-2-5xl xl:mt-0 mt-12">Seriously. It’s That Simple.</h1>
                            <hr className="mt-3 w-14 h-1.5 bg-teal" />
                            <p className="Eina01-regular xl:text-xl text-sm xl:leading-tight leading-relaxed text-custom-black py-6 tracking-wide">Our directors played a key role in rolling out the NBN™ network in Queensland. So they know exactly how complicated getting set up can be. That’s why they decided to take advantage of their expertise and connect you straight to the source by becoming Australia’s simplest NBN™ provider.</p>
                            <div className="xl:flex items-center hidden">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white p-5 border-radius-btn">
                                        <span className="text-lg leading-9 font-bold">Let's Get Connected</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="7 7 12 12 7 17" />
                                            <polyline points="13 7 18 12 13 17" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="ml-5">

                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white p-5 border-radius-btn text-lg leading-9 font-bold">View Our Plans</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center xl:hidden">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white px-4 py-1 border-radius-btn">
                                        <span className="text-xs leading-9 font-bold">Let's Get Connected</span>
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white px-4 py-0 border-radius-btn text-xs leading-9 font-bold">View Our Plans</button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="hero2 ml-40">
                            <div className="xl:block hidden">
                                <div className="xl:flex py-12">
                                    <div className="cardWidthandHeight2 bg-white mr-12">
                                        <div className="pl-12 pt-10">
                                            <img src="/images/click.png" className="w-20 h-24" />
                                        </div>
                                        <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-12">Simple Plans</h1>
                                        <p className="Eina01-regular text-base text-custom-black px-12">All of our plans come with simple monthly pricing and world-class support so you only have to choose the speed you need.</p>
                                    </div>
                                    <div className="cardWidthandHeight2 bg-white">
                                        <div className="pl-12 pt-10">
                                            <img src="/images/file.png" className="w-20 h-24" />
                                        </div>
                                        <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-12">No Hidden Charges</h1>
                                        <p className="Eina01-regular text-base text-custom-black px-12">All of our plans come with simple monthly pricing and world-class support so you only have to choose the speed you need.</p>
                                    </div>
                                </div>
                                <div className="xl:flex">
                                    <div className="cardWidthandHeight2 bg-white mr-12">
                                        <div className="pl-12 pt-10">
                                            <img src="/images/rocket.png" className="w-18 h-24" />
                                        </div>
                                        <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-12">No Limits</h1>
                                        <p className="Eina01-regular text-base text-custom-black px-12">Have the freedom to use your data when you want, the way you want with no speed caps or complicated data limits.</p>
                                    </div>
                                    <div className="cardWidthandHeight2 bg-white">
                                        <div className="pl-12 pt-10">
                                            <img src="/images/open-lock.png" className="w-18 h-24" />
                                        </div>
                                        <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-12">Risk Free, Change Providers Anytime</h1>
                                        <p className="Eina01-regular text-base text-custom-black px-12">With no contracts or cancellation fees, switch providers whenever you like with zero risk or hassle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mobile */}
                        <div className="xl:hidden block">
                            <div className="xl:flex">
                                <div className="w-full bg-white b-r mt-8">
                                    <div className="pl-12 pt-10">
                                        <img src="/images/file.png" className="w-20 h-24" />
                                    </div>
                                    <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-4">No Hidden Charges</h1>
                                    <p className="Eina01-regular pb-10 text-base text-custom-black px-4">With just one low-priced monthly bill, you'll never have to worry about any hidden charges or unexpected fees.</p>
                                </div>
                                <div className="w-full bg-white b-r mt-8">
                                    <div className="pl-12 pt-10">
                                        <img src="/images/open-lock.png" className="w-18 h-24" />
                                    </div>
                                    <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-4">Risk Free, Change Providers Anytime</h1>
                                    <p className="Eina01-regular pb-10 text-base text-custom-black px-4">With no contracts or cancellation fees, switch providers whenever you like with zero risk or hassle.</p>
                                </div>
                            </div>
                            <div className="xl:flex">
                                <div className="w-full bg-white b-r mt-8">
                                    <div className="pl-12 pt-10">
                                        <img src="/images/click.png" className="w-20 h-24" />
                                    </div>
                                    <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-4">Simple Plans</h1>
                                    <p className="Eina01-regular pb-10 text-base text-custom-black px-4">All of our plans come with simple monthly pricing and world-class support so you only have to choose the speed you need.</p>
                                </div>
                                <div className="w-full bg-white b-r mt-8">
                                    <div className="pl-12 pt-10">
                                        <img src="/images/rocket.png" className="w-18 h-24" />
                                    </div>
                                    <h1 className="text-xl text-black2 py-6 font-bold Eina01-bold px-4">No Limits</h1>
                                    <p className="Eina01-regular pb-10 text-base text-custom-black px-4">Have the freedom to use your data when you want, the way you want with no speed caps or complicated data limits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 3 */}
                {/* Section 4 */}
                <div className="mx-auto container xl:mt-52 mt-16 xl:px-0 px-8 Eina01">
                    <div className="xl:flex items-center">
                        <div className="xl:w-1/2 xl:block hidden">
                            <img src="/images/Circle - Export this group as one image (1).png" className="img-cta object-contain" />
                        </div>
                        <div className="xl:w-1/2 w-full xl:hidden block flex items-center justify-center">
                            <img src="/images/Circle - Export this group as one image (1).png" className="xl:hidden block lg:w-72 w-96" />
                        </div>
                        <div className="xl:w-1/2">
                            <h1 className="text-custom-black text-5xl hidden xl:block font-bold Eina01-bold xl:mt-0 mt-12 xl:heading-line leading-relaxed">100% Local Australian Support <br />The Way It Should Be.</h1>
                            <h1 className="text-custom-black xl:hidden block text-2-5xl font-bold Eina01-bold xl:mt-0 mt-14 xl:heading-line">100% Local Australian Support The Way It Should Be.</h1>
                            <hr className="mt-3 xl:mt-6 w-14 h-1.5 bg-teal xl:mb-0 mb-16" />
                            <div className="mt-7">
                                <div className="flex items-center">
                                    <img src="/images/support.png" className="w-10 mr-4" />
                                    <p className="Eina01-regular xl:text-2xl text-lg text-black2 font-bold Eina01-bold">Your Calls Go Straight To Local NBN Specialists</p>
                                </div>
                                <p className="Eina01-regular xl:text-xl text-sm text-black2 leading-loose mt-4">Unlike other internet providers, your calls won’t get routed off-shore to frustrating call centres that leave you wishing for better support. Every call goes straight to a local NBN™ network specialist who’ll take care of your needs every step of the way.</p>
                            </div>
                            <div className="mt-7">
                                <div className="flex items-center">
                                    <img src="/images/globe.png" className="w-10 mr-4" />
                                    <p className="Eina01-regular xl:text-2xl text-lg text-black2 font-bold Eina01-bold">100% Australian Owned &amp; Operated</p>
                                </div>
                                <p className="Eina01-regular xl:text-xl text-sm text-black2 leading-loose mt-4">Locally based in sunny Queensland, our friendly all-aussie team are always available to help you stay connected to the NBN™ with a smile.</p>
                            </div>
                            <div className="mt-7">
                                <div className="flex items-center">
                                    <img src="/images/antenna.png" className="w-10 mr-4" />
                                    <p className="Eina01-regular xl:text-2xl text-lg text-black2 font-bold Eina01-bold">Make Connectivity Troubles A Thing Of The Past</p>
                                </div>
                                <p className="Eina01-regular xl:text-xl text-sm text-black2 leading-loose mt-4">Located in Queensland? Our expert NBN technicians in the area can help you solve just about any connectivity problem. They’ve already helped thousands of customers in the area experience the best of the NBN from fixing up patchy connections to turbocharging their internet speeds.</p>
                            </div>
                            <div className="xl:flex hidden items-center mt-9">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white p-5 border-radius-btn">
                                        <span className="text-lg leading-9 font-bold Eina01-bold">Let's Get Connected</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="7 7 12 12 7 17" />
                                            <polyline points="13 7 18 12 13 17" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white p-5 border-radius-btn text-lg leading-9 font-bold Eina01-bold">View Our Plans</button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                            <div className="flex xl:hidden items-center xl:mt-0 mt-8">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white px-4 py-1 border-radius-btn">
                                        <span className="text-xs leading-9 font-bold">Let's Get Connected</span>
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white px-4 py-0 border-radius-btn text-xs leading-9 font-bold">View Our Plans</button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 4 */}
                {/* Section 5 */}
                <div className="mx-auto container xl:mt-52 mt-12 xl:px-0 px-8 Eina01">
                    <div className="flex xl:flex-row flex-col-reverse items-center justify-between">
                        <div className="xl:w-1/2">
                            <h1 className="text-custom-black xl:block hidden text-5xl font-bold Eina01-bold xl:heading-line leading-relaxed">We’ll Even Send Out An NBN™ Expert To Get You Connected</h1>
                            <h1 className="text-custom-black xl:hidden block text-2-5xl font-bold Eina01-bold xl:heading-line">We’ll Even Send Out An NBN™ Expert To Get You Connected</h1>
                            <hr className="mt-3 xl:mt-6 w-14 h-1.5 bg-teal" />
                            <div className="mt-7">
                                <p className="Eina01-regular xl:text-xl text-sm text-black2 leading-loose mt-4">
                                    We know how difficult it can be to set up a new connection. That’s why for a limited time only on any new connections across South East Queensland, we’ll send out one of our NBN™ specialists on your connection date to ensure that your internet is perfectly set up, absolutely free!<br /><br />
                                    They’ll run tests to ensure that you’re getting exactly what you’re paying for while connecting you straight to copper and fibre specialists to handle any cabling issues such as internal cabling or networking troubles at no extra charge. That means no stress, no worries and no problems.
                                </p>
                            </div>
                            <div className="xl:flex hidden items-center mt-9">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white p-5 border-radius-btn">
                                        <span className="text-lg leading-9 font-bold Eina01-bold">Let's Get Connected</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="7 7 12 12 7 17" />
                                            <polyline points="13 7 18 12 13 17" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white p-5 border-radius-btn text-lg leading-9 font-bold Eina01-bold">View Our Plans</button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                            <div className="flex xl:hidden items-center mt-9">
                                <div>
                                    <button onClick={executeScroll} className="flex items-center bg-button-1 text-white px-4 py-1 border-radius-btn">
                                        <span className="text-xs leading-9 font-bold">Let's Get Connected</span>
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <Link href="/plans">
                                        <a>
                                            <button className="flex bg-transparent border-teal text-teal border-4 text-white px-4 py-0 border-radius-btn text-xs leading-9 font-bold">View Our Plans</button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/2 xl:ml-24 xl:mt-0 mt-12">
                            <img src="/images/Technician - Export This Group As An Image.png" className="img-cta xl:block hidden" />
                            <img src="/images/Technician - Export This Group As An Image.png" className="xl:hidden block lg:w-72 w-96 mb-8" />
                        </div>
                    </div>
                </div>
                {/* Section 5 */}
                {/* Section 6 */}
                <Comments/>
                {/* Section 6 */}
                {/* Section 7 */}
                <div className="mx-auto container xl:mt-52 mt-16 xl:px-0 px-4 Eina01">
                    <div>
                        <h1 className="font-bold Eina01-bold text-custom-black text-5xl xl:block hidden text-center">It’s 2020. Quality Internet Shouldn’t Be A Negotiable</h1>
                        <h1 className="font-bold Eina01-bold text-custom-black xl:hidden block text-2-5xl text-center">It’s 2020. Quality Internet Shouldn’t Be A Negotiable</h1>
                        <h3 className="text-custom-black xl:text-3xl text-xs text-center pt-7">Connecting to the NBN™ network is as easy as…</h3>
                    </div>
                    <div className="flex flex-col-reverse xl:flex-row items-center my-12">
                        <div className="xl:w-1/2 xl:mt-0 mt-8">
                            <img src="/images/Couple Image - Export This Group As An Image.png" className="xl:w-full lg:w-72 w-96" />
                        </div>
                        <div className="xl:w-1/2 xl:ml-24 xl:px-0 px-5 xl:mb-0 mb-8">
                            <div className="flex">
                                <h1 className="text-dark-blue text-6-5xl font-bold Eina01-bold">1</h1>
                                <p className="Eina01-regular xl:text-4xl text-lg text-dark-blue xl:ml-6 ml-4 xl:mt-6 mt-8">Choose the broadband speed that you want</p>
                            </div>
                            <div className="flex mt-4">
                                <h1 className="text-dark-blue text-6-5xl font-bold Eina01-bold">2</h1>
                                <p className="Eina01-regular xl:text-4xl text-lg text-dark-blue xl:ml-6 ml-4 xl:mt-6 mt-8">We’ll set you up with a connection date</p>
                            </div>
                            <div className="flex mt-4">
                                <h1 className="text-dark-blue text-6-5xl font-bold Eina01-bold">3</h1>
                                <p className="Eina01-regular xl:text-4xl text-lg text-dark-blue xl:ml-6 ml-4 xl:mt-6 mt-8">Connect your devices and enjoy unlimited data</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 7 */}
                {/* Section 8 */}
                <Form scrollRef={scrollRefForm}/>
                {/* Section 8 */}
                {/* Footer */}
                <div className="footer">
                    <div className="xl:block hidden f-r-t">
                        <div className="mx-auto container flex xl:flex-row flex-col-reverse justify-between py-10 xl:px-0 px-8">
                            <div className="flex flex-col xl:mt-0 mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width={140} height={50} viewBox="0 0 140 50">
                                    <defs>
                                        <linearGradient id="gm15dlcwea" x1="33.262%" x2="115.101%" y1="0%" y2="207.623%">
                                            <stop offset="0%" stopColor="#6BF8B1" />
                                            <stop offset="100%" stopColor="#0A86A5" />
                                        </linearGradient>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <path fill="#000" fillRule="nonzero" d="M0 29.304C1.184 30.966 3.793 32 6.18 32 9.372 32 12 30.236 12 27.196c0-3.203-2.81-3.79-5.077-4.277-1.846-.406-2.83-.608-2.83-1.622 0-.932.884-1.5 2.148-1.5 1.525 0 2.709.73 3.592 1.865l2.026-2.23C10.796 18.074 8.83 17 6.341 17c-3.07 0-5.518 1.784-5.518 4.642 0 2.919 2.327 3.628 4.455 4.094 2.187.487 3.41.65 3.41 1.805 0 1.094-.982 1.662-2.367 1.662-1.545 0-3.13-.77-4.254-2.23L0 29.304zM23 26.51c0-3.286-2.064-5.51-5-5.51-2.955 0-5 2.224-5 5.51 0 3.286 2.045 5.49 5 5.49 2.936 0 5-2.204 5-5.49zm-6.989 0c0-1.843.777-2.885 1.989-2.885 1.212 0 1.989 1.042 1.989 2.885 0 1.843-.777 2.885-1.989 2.885-1.212 0-1.989-1.042-1.989-2.885zM35 21h-3.326v6.236c0 1.268-.874 1.902-1.788 1.902-1.081 0-1.56-.696-1.56-1.78V21H25v7.136C25 30.487 26.476 32 28.721 32c1.373 0 2.35-.613 2.953-1.288v1.063H35V21zM43 21.041c-.181-.02-.363-.041-.634-.041-1.106 0-2.03.623-2.466 1.494v-1.432H37V32h2.9v-5.375c0-1.578.997-2.47 2.248-2.47.326 0 .544.02.852.083V21.04zM59.225 32c2.055 0 3.934-1.062 4.697-3.086l-2.623-.861c-.293.921-1.056 1.402-2.035 1.402-1.194 0-2.035-.821-2.25-2.264H64v-.841c0-2.986-1.703-5.35-4.834-5.35C56.192 21 54 23.364 54 26.49c0 3.286 2.113 5.51 5.225 5.51zm-.098-8.515c1.155 0 1.761.801 1.781 1.743h-3.796c.313-1.162 1.056-1.743 2.015-1.743zM74 17L70 17 70 32 74 32zM75 32h3.327v-6.154c0-1.268.893-1.902 1.808-1.902 1.08 0 1.538.798 1.538 1.881V32H85v-7.115C85 22.534 83.586 21 81.34 21c-1.392 0-2.41.613-3.013 1.309v-1.084H75V32zM87.204 28.985c0 2.23 1.024 3.015 3.072 3.015.683 0 1.221-.062 1.724-.145V29.15c-.323.042-.485.062-.826.062-.719 0-1.132-.165-1.132-1.073V23.74h1.85v-2.725h-1.85V18h-2.838v3.015H86v2.725h1.204v5.245zM98.225 32c2.055 0 3.933-1.062 4.696-3.086l-2.622-.861c-.293.921-1.056 1.402-2.035 1.402-1.194 0-2.035-.821-2.25-2.264H103v-.841c0-2.986-1.703-5.35-4.833-5.35C95.192 21 93 23.364 93 26.49c0 3.286 2.114 5.51 5.225 5.51zm-.098-8.515c1.155 0 1.761.801 1.78 1.743h-3.795c.313-1.162 1.056-1.743 2.015-1.743zM110 21.041c-.181-.02-.362-.041-.634-.041-1.106 0-2.03.623-2.465 1.494v-1.432H104V32h2.9v-5.375c0-1.578.998-2.47 2.248-2.47.327 0 .544.02.852.083V21.04zM112 32h3.327v-6.154c0-1.268.893-1.902 1.808-1.902 1.082 0 1.538.798 1.538 1.881V32H122v-7.115c0-2.351-1.414-3.885-3.66-3.885-1.392 0-2.41.613-3.013 1.309v-1.084H112V32zM128.225 32c2.055 0 3.933-1.062 4.696-3.086l-2.622-.861c-.294.921-1.057 1.402-2.035 1.402-1.194 0-2.035-.821-2.25-2.264H133v-.841c0-2.986-1.703-5.35-4.833-5.35-2.975 0-5.167 2.364-5.167 5.49 0 3.286 2.113 5.51 5.225 5.51zm-.098-8.515c1.155 0 1.761.801 1.78 1.743h-3.795c.313-1.162 1.056-1.743 2.015-1.743zM135.203 28.985c0 2.23 1.025 3.015 3.073 3.015.682 0 1.221-.062 1.724-.145V29.15c-.323.042-.485.062-.826.062-.719 0-1.132-.165-1.132-1.073V23.74h1.85v-2.725h-1.85V18h-2.839v3.015H134v2.725h1.203v5.245z" transform="translate(-169 -30) translate(150 25) translate(19) translate(0 6)" />
                                                        <path stroke="url(#gm15dlcwea)" strokeWidth={2} d="M72.822 16.423c3.911 6.393 6.28 13.039 6.968 18.595.695 5.618-.352 9.863-2.907 11.81-2.506 1.91-6.342 1.483-10.751-1.267-4.364-2.72-9.04-7.589-12.954-13.984-3.912-6.393-6.281-13.039-6.968-18.595-.695-5.618.352-9.863 2.906-11.81 2.507-1.91 6.343-1.483 10.752 1.266 4.363 2.722 9.04 7.59 12.954 13.985z" transform="translate(-169 -30) translate(150 25) translate(19) translate(0 6)" />
                                                        <path fill="#000" fillRule="nonzero" d="M47.16 26.51c0-1.803.84-2.865 2.18-2.865 1.04 0 1.66.761 1.88 1.743l2.76-1.122C53.52 22.523 51.88 21 49.32 21 46.2 21 44 23.244 44 26.51c0 3.246 2.2 5.49 5.32 5.49 2.58 0 4.24-1.543 4.68-3.306l-2.78-1.082c-.22 1.002-.84 1.743-1.88 1.743-1.34 0-2.18-1.062-2.18-2.845zM74 17L70 17 70 32 74 32zM75 32h3.327v-6.154c0-1.268.893-1.902 1.808-1.902 1.08 0 1.538.798 1.538 1.881V32H85v-7.115C85 22.534 83.586 21 81.34 21c-1.392 0-2.41.613-3.013 1.309v-1.084H75V32zM87.204 28.985c0 2.23 1.024 3.015 3.072 3.015.683 0 1.221-.062 1.724-.145V29.15c-.323.042-.485.062-.826.062-.719 0-1.132-.165-1.132-1.073V23.74h1.85v-2.725h-1.85V18h-2.838v3.015H86v2.725h1.204v5.245zM98.225 32c2.055 0 3.933-1.062 4.696-3.086l-2.622-.861c-.293.921-1.056 1.402-2.035 1.402-1.194 0-2.035-.821-2.25-2.264H103v-.841c0-2.986-1.703-5.35-4.833-5.35C95.192 21 93 23.364 93 26.49c0 3.286 2.114 5.51 5.225 5.51zm-.098-8.515c1.155 0 1.761.801 1.78 1.743h-3.795c.313-1.162 1.056-1.743 2.015-1.743zM110 21.041c-.181-.02-.362-.041-.634-.041-1.106 0-2.03.623-2.465 1.494v-1.432H104V32h2.9v-5.375c0-1.578.998-2.47 2.248-2.47.327 0 .544.02.852.083V21.04zM112 32h3.327v-6.154c0-1.268.893-1.902 1.808-1.902 1.082 0 1.538.798 1.538 1.881V32H122v-7.115c0-2.351-1.414-3.885-3.66-3.885-1.392 0-2.41.613-3.013 1.309v-1.084H112V32zM128.225 32c2.055 0 3.933-1.062 4.696-3.086l-2.622-.861c-.294.921-1.057 1.402-2.035 1.402-1.194 0-2.035-.821-2.25-2.264H133v-.841c0-2.986-1.703-5.35-4.833-5.35-2.975 0-5.167 2.364-5.167 5.49 0 3.286 2.113 5.51 5.225 5.51zm-.098-8.515c1.155 0 1.761.801 1.78 1.743h-3.795c.313-1.162 1.056-1.743 2.015-1.743zM135.203 28.985c0 2.23 1.025 3.015 3.073 3.015.682 0 1.221-.062 1.724-.145V29.15c-.323.042-.485.062-.826.062-.719 0-1.132-.165-1.132-1.073V23.74h1.85v-2.725h-1.85V18h-2.839v3.015H134v2.725h1.203v5.245z" transform="translate(-169 -30) translate(150 25) translate(19) translate(0 6)" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div className="mt-8">
                                    <img src="/images/nbn-logo@2x.png" className="w-24" />
                                </div>
                            </div>
                            <div className="xl:mt-0 mt-8">
                                <h1 className="text-2xl text-dark-blue font-bold Eina01-bold">Source Internet</h1>
                                <ul className="xl:mt-8 mt-4">
                                    <li className="text-base text-dark-blue pb-4 cursor-pointer"><a href="/about">About Us</a></li>
                                    <li className="text-base text-dark-blue pb-4 cursor-pointer"><a href="/plans">Plans</a></li>
                                    <li className="text-base text-dark-blue cursor-pointer"><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-2xl text-dark-blue font-bold Eina01-bold xl:mb-0 mb-4">Get In Touch</h1>
                                <p className="Eina01-regular text-base text-dark-blue">
                                    If you’ve got a question about our plans or<br />
                                    would just like to say hi, drop us an email at:<br />
                                    <b>team@sourceinternet.com.au</b>
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto container">
                            <p className="Eina01-regular text-center text-base text-dark-blue mb-4">Copyright 2020 - Source Internet Pty Ltd ABN: 606 403 374 99 - All rights reserved.</p>
                            <p className="Eina01-regular text-center text-base text-dark-blue pb-24"><u><a href="/privacy">Privacy Policy</a></u> - <u><a  href="/terms">Terms Of Service</a> </u> - <u><a  href="/cis">Critical Information Summary</a></u></p>
                        </div>
                    </div>
                    <div className="xl:hidden block f-r-t">
                        <div className="p-6">
                            <div className="flex flex-col">
                                <h1 className="text-base text-dark-blue font-bold Eina01-bold pb-1">Company</h1>
                                <ul>
                                    <li className="text-s text-dark-blue leading-1 pb-1"><a href="/about">About US</a></li>
                                    <li className="text-s text-dark-blue leading-1 pb-1"><a href="/plans">Plans</a></li>
                                    <li className="text-s text-dark-blue leading-1 pb-1"><a href="/contact">Contact US</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-base text-dark-blue font-bold Eina01-bold py-1">Get In Touch</h1>
                                <p className="Eina01-regular text-dark-blue text-s">
                                    If you’ve got a question about our plans or would just like to say hi, drop us <br />an email at: <br /><br />
                                    <b> team@sourceinternet.com.au</b>
                                </p>
                            </div>
                            <div className="flex items-center mt-2">
                                <div>
                                    {/*?xml version="1.0" encoding="UTF-8"?*/}
                                    <svg width={70} height={50} viewBox="0 0 140 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>Source Internet Logo</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>
                                            <linearGradient x1="33.2618655%" y1="0%" x2="115.101114%" y2="207.622869%" id="linearGradient-1">
                                                <stop stopColor="#6BF8B1" offset="0%" />
                                                <stop stopColor="#0A86A5" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g id="Extended-6-Plan-Showcase---Desktop-Version---Source-Internet" transform="translate(-169.000000, -30.000000)">
                                                <g id="Section-1---Header" transform="translate(150.000000, 25.000000)">
                                                    <g id="Top-Header" transform="translate(19.000000, 0.000000)">
                                                        <g id="Source-Internet-Logo" transform="translate(0.000000, 6.000000)">
                                                            <path d="M0,29.30405 C1.18394119,30.9662 3.79263029,32 6.18058241,32 C9.37118085,32 12,30.23645 12,27.19595 C12,23.993225 9.19061351,23.405375 6.9230572,22.918925 C5.0769051,22.513475 4.09363114,22.310825 4.09363114,21.297275 C4.09363114,20.364875 4.97657148,19.797275 6.24078409,19.797275 C7.76582791,19.797275 8.9498068,20.527025 9.83273961,21.66215 L11.8594666,19.4324 C10.7959664,18.0743 8.82940345,17 6.34111771,17 C3.27089247,17 0.822738667,18.7838 0.822738667,21.6419 C0.822738667,24.560825 3.15048912,25.27025 5.27757987,25.73645 C7.46486476,26.222975 8.68894543,26.385125 8.68894543,27.5405 C8.68894543,28.635125 7.70566393,29.20265 6.32105551,29.20265 C4.77590425,29.20265 3.19062859,28.4324 2.06688154,26.972975 L0,29.30405 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M23,26.5100452 C23,23.2240344 20.9355739,21 17.9999644,21 C15.0454271,21 13,23.2240344 13,26.5100452 C13,29.7959819 15.0454271,32 17.9999644,32 C20.9355739,32 23,29.7959819 23,26.5100452 Z M16.0113212,26.5100452 C16.0113212,24.6666914 16.7878648,23.6248054 17.9999644,23.6248054 C19.2121352,23.6248054 19.9886077,24.6666914 19.9886077,26.5100452 C19.9886077,28.3533991 19.2121352,29.395285 17.9999644,29.395285 C16.7878648,29.395285 16.0113212,28.3533991 16.0113212,26.5100452 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <path d="M35,21 L31.6735925,21 L31.6735925,27.2360769 C31.6735925,28.5037481 30.8003968,29.1375459 29.8856464,29.1375459 C28.804521,29.1375459 28.3264075,28.4423958 28.3264075,27.358706 L28.3264075,21 L25,21 L25,28.1357097 C25,30.486995 26.4760514,32 28.7214116,32 C30.0935762,32 31.0706586,31.3866278 31.6735925,30.7119032 L31.6735925,31.7750918 L35,31.7750918 L35,21 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M43,21.041468 C42.818706,21.020734 42.6374801,21 42.3655392,21 C41.2597957,21 40.3353462,21.6226343 39.9002951,22.4943069 L39.9002951,21.062202 L37,21.062202 L37,32 L39.9002951,32 L39.9002951,26.6245192 C39.9002951,25.0471227 40.8972758,24.1547161 42.1480136,24.1547161 C42.4743019,24.1547161 42.6918275,24.1754501 43,24.2377289 L43,21.041468 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M59.2250219,32 C61.2798124,32 63.1585116,30.9380236 63.9216964,28.9143747 L61.2993699,28.0528579 C61.0058599,28.9744977 60.2426751,29.455334 59.2641369,29.455334 C58.0704659,29.455334 57.2289775,28.6338498 57.0136976,27.191267 L64,27.191267 L64,26.3497665 C64,23.3642968 62.2974656,21 59.1663493,21 C56.1917667,21 54,23.3642968 54,26.4899548 C54,29.7759656 56.1134631,32 59.2250219,32 Z M59.1271607,23.484543 C60.2817902,23.484543 60.8884412,24.2860108 60.9079987,25.227667 L57.1115588,25.227667 C57.4246263,24.065609 58.1682536,23.484543 59.1271607,23.484543 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <polygon id="Path" fill="#000000" fillRule="nonzero" points="74 17 70 17 70 32 74 32" />
                                                            <path d="M75,32 L78.3265641,32 L78.3265641,25.845701 C78.3265641,24.5781054 79.2201047,23.944232 80.134734,23.944232 C81.2157307,23.944232 81.6734359,24.7416613 81.6734359,25.8252754 L81.6734359,32 L85,32 L85,24.8847915 C85,22.5335062 83.5862688,21 81.3407014,21 C79.948059,21 78.9295478,21.6134479 78.3265641,22.308598 L78.3265641,21.2249082 L75,21.2249082 L75,32 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M87.2040495,28.9852818 C87.2040495,31.2153588 88.2278965,32 90.2755906,32 C90.9586052,32 91.4971879,31.9380386 92,31.8554488 L92,29.1504614 C91.6767154,29.1917181 91.5154106,29.2124228 91.1739033,29.2124228 C90.4551181,29.2124228 90.0420697,29.0472433 90.0420697,28.1386792 L90.0420697,23.7404103 L91.8926884,23.7404103 L91.8926884,21.0147182 L90.0420697,21.0147182 L90.0420697,18 L87.2040495,18 L87.2040495,21.0147182 L86,21.0147182 L86,23.7404103 L87.2040495,23.7404103 L87.2040495,28.9852818 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M98.2246158,32 C100.279612,32 102.15815,30.9380236 102.921329,28.9143747 L100.299463,28.0528579 C100.006102,28.9744977 99.2429233,29.455334 98.2643188,29.455334 C97.0702889,29.455334 96.2291743,28.6338498 96.013749,27.191267 L103,27.191267 L103,26.3497665 C103,23.3642968 101.297184,21 98.1665319,21 C95.1917506,21 93,23.3642968 93,26.4899548 C93,29.7759656 95.1138152,32 98.2246158,32 Z M98.1268289,23.484543 C99.281891,23.484543 99.8884641,24.2860108 99.9075803,25.227667 L96.1115359,25.227667 C96.4247482,24.065609 97.1680759,23.484543 98.1268289,23.484543 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <path d="M110,21.041468 C109.818842,21.020734 109.637684,21 109.365948,21 C108.259932,21 107.335755,21.6226343 106.900568,22.4943069 L106.900568,21.062202 L104,21.062202 L104,32 L106.900568,32 L106.900568,26.6245192 C106.900568,25.0471227 107.897616,24.1547161 109.148014,24.1547161 C109.474915,24.1547161 109.692168,24.1754501 110,24.2377289 L110,21.041468 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M112,32 L115.326564,32 L115.326564,25.845701 C115.326564,24.5781054 116.220105,23.944232 117.134734,23.944232 C118.216512,23.944232 118.673436,24.7416613 118.673436,25.8252754 L118.673436,32 L122,32 L122,24.8847915 C122,22.5335062 120.586269,21 118.340701,21 C116.948059,21 115.929548,21.6134479 115.326564,22.308598 L115.326564,21.2249082 L112,21.2249082 L112,32 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M128.224616,32 C130.279612,32 132.15815,30.9380236 132.921329,28.9143747 L130.299463,28.0528579 C130.005367,28.9744977 129.242188,29.455334 128.264319,29.455334 C127.070289,29.455334 126.229174,28.6338498 126.013749,27.191267 L133,27.191267 L133,26.3497665 C133,23.3642968 131.297184,21 128.166532,21 C125.191751,21 123,23.3642968 123,26.4899548 C123,29.7759656 125.11308,32 128.224616,32 Z M128.126829,23.484543 C129.281891,23.484543 129.888464,24.2860108 129.90758,25.227667 L126.111536,25.227667 C126.424748,24.065609 127.168076,23.484543 128.126829,23.484543 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <path d="M135.203375,28.9852818 C135.203375,31.2153588 136.227897,32 138.275591,32 C138.95793,32 139.497188,31.9380386 140,31.8554488 L140,29.1504614 C139.676715,29.1917181 139.514736,29.2124228 139.173903,29.2124228 C138.455118,29.2124228 138.04207,29.0472433 138.04207,28.1386792 L138.04207,23.7404103 L139.892013,23.7404103 L139.892013,21.0147182 L138.04207,21.0147182 L138.04207,18 L135.203375,18 L135.203375,21.0147182 L134,21.0147182 L134,23.7404103 L135.203375,23.7404103 L135.203375,28.9852818 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M72.8216187,16.4230582 C76.7333696,22.8157763 79.1029236,29.4615062 79.7902414,35.0177201 C80.4849181,40.6358946 79.4384877,44.8811149 76.8834904,46.8281087 C74.3770616,48.7383988 70.540739,48.3111738 66.1318233,45.5614993 C61.7683854,42.8401834 57.0913127,37.9719604 53.17809,31.5769529 C49.2662655,25.1842347 46.8967115,18.538431 46.2097617,12.982291 C45.515085,7.3641165 46.5615153,3.11888136 49.1161447,1.17190974 C51.6227207,-0.738422935 55.4590432,-0.31115095 59.867959,2.43849699 C64.2313233,5.159776 68.908396,10.0280506 72.8216187,16.4230582 Z" id="Path" stroke="url(#linearGradient-1)" strokeWidth={2} />
                                                            <path d="M47.1599552,26.5100452 C47.1599552,24.706724 47.9999699,23.6448217 49.3399809,23.6448217 C50.3799491,23.6448217 50.9999474,24.4061828 51.2199638,25.3880199 L53.979937,24.2659204 C53.5199916,22.5227964 51.8799378,21 49.3199931,21 C46.1999384,21 44,23.2441248 44,26.5100452 C44,29.7559493 46.1999384,32 49.3199931,32 C51.8999256,32 53.5599672,30.4571873 54,28.6939729 L51.2199638,27.6120543 C50.9999474,28.6138335 50.3799491,29.3551783 49.3399809,29.3551783 C47.9999699,29.3551783 47.1599552,28.293276 47.1599552,26.5100452 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <polygon id="Path" fill="#000000" fillRule="nonzero" points="74 17 70 17 70 32 74 32" />
                                                            <path d="M75,32 L78.3265641,32 L78.3265641,25.8457767 C78.3265641,24.5781054 79.2201047,23.944232 80.134734,23.944232 C81.2157307,23.944232 81.6734359,24.7416613 81.6734359,25.8252754 L81.6734359,32 L85,32 L85,24.8847915 C85,22.5335062 83.5862688,21 81.3407014,21 C79.948059,21 78.9295478,21.6134479 78.3265641,22.308598 L78.3265641,21.2249082 L75,21.2249082 L75,32 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M87.2040495,28.9852818 C87.2040495,31.2153588 88.2278965,32 90.2755906,32 C90.9586052,32 91.4971879,31.9380386 92,31.8554488 L92,29.1504614 C91.6767154,29.1917181 91.5154106,29.2124228 91.1739033,29.2124228 C90.4551181,29.2124228 90.0420697,29.0472433 90.0420697,28.1386792 L90.0420697,23.7404103 L91.8926884,23.7404103 L91.8926884,21.0147182 L90.0420697,21.0147182 L90.0420697,18 L87.2040495,18 L87.2040495,21.0147182 L86,21.0147182 L86,23.7404103 L87.2040495,23.7404103 L87.2040495,28.9852818 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M98.2246158,32 C100.279612,32 102.15815,30.9380977 102.921329,28.9143747 L100.299463,28.0528579 C100.006102,28.9744977 99.2429233,29.4554081 98.2643188,29.4554081 C97.0702889,29.4554081 96.2291743,28.6338498 96.013749,27.191267 L103,27.191267 L103,26.3497665 C103,23.3642968 101.297184,21 98.1665319,21 C95.1917506,21 93,23.3642968 93,26.4900289 C93,29.7759656 95.1138152,32 98.2246158,32 Z M98.1268289,23.484543 C99.281891,23.484543 99.8884641,24.2860108 99.9075803,25.227667 L96.1115359,25.227667 C96.4247482,24.065609 97.1680759,23.484543 98.1268289,23.484543 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <path d="M110,21.041468 C109.818842,21.020734 109.637684,21 109.365948,21 C108.259932,21 107.335755,21.6226343 106.900568,22.4943069 L106.900568,21.062202 L104,21.062202 L104,32 L106.900568,32 L106.900568,26.6245192 C106.900568,25.0471227 107.897616,24.1547161 109.148014,24.1547161 C109.474915,24.1547161 109.692168,24.1754501 110,24.2377289 L110,21.041468 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M112,32 L115.326564,32 L115.326564,25.8457767 C115.326564,24.5781054 116.220105,23.944232 117.134734,23.944232 C118.216512,23.944232 118.673436,24.7416613 118.673436,25.8252754 L118.673436,32 L122,32 L122,24.8847915 C122,22.5335062 120.586269,21 118.340701,21 C116.948059,21 115.929548,21.6134479 115.326564,22.308598 L115.326564,21.2249082 L112,21.2249082 L112,32 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                            <path d="M128.224616,32 C130.279612,32 132.15815,30.9380977 132.921329,28.9143747 L130.299463,28.0528579 C130.005367,28.9744977 129.242188,29.4554081 128.264319,29.4554081 C127.070289,29.4554081 126.229174,28.6338498 126.013749,27.191267 L133,27.191267 L133,26.3497665 C133,23.3642968 131.297184,21 128.166532,21 C125.191751,21 123,23.3642968 123,26.4900289 C123,29.7759656 125.11308,32 128.224616,32 Z M128.126829,23.484543 C129.281891,23.484543 129.888464,24.2860108 129.90758,25.227667 L126.111536,25.227667 C126.424748,24.065609 127.168076,23.484543 128.126829,23.484543 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                                                            <path d="M135.203375,28.9852818 C135.203375,31.2153588 136.227897,32 138.275591,32 C138.95793,32 139.497188,31.9380386 140,31.8554488 L140,29.1504614 C139.676715,29.1917181 139.514736,29.2124228 139.173903,29.2124228 C138.455118,29.2124228 138.04207,29.0472433 138.04207,28.1386792 L138.04207,23.7404103 L139.892013,23.7404103 L139.892013,21.0147182 L138.04207,21.0147182 L138.04207,18 L135.203375,18 L135.203375,21.0147182 L134,21.0147182 L134,23.7404103 L135.203375,23.7404103 L135.203375,28.9852818 Z" id="Path" fill="#000000" fillRule="nonzero" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-10 h-10 ml-8"><img src="/images/nbn-logo@2x.png" /></div>
                            </div>
                            <div className="mt-1">
                                <p className="Eina01-regular text-dark-blue text-ss">Copyright 2020 - Source Internet Pty Ltd ABN: 606 403 374 99 - All rights reserved.</p>
                            </div>
                            <div className="mt-1">
                                <p className="Eina01-regular text-dark-blue text-ss"><u><a href="/privacy">Privacy Policy</a></u> - <u><a  href="/terms">Terms Of Service</a> </u> - <u><a  href="/cis">Critical Information Summary</a></u></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
            </div>
        </div>
    )
};
