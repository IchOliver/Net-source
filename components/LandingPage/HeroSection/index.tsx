import React from "react";
import Link from "next/link";


export const HeroSection: React.FC<{ executeScroll: any }> = ({ executeScroll }) => {
    return (
        <>
            <div className="relative">
                <img src="/images/oval-copy.png" className="absolute top-0 right-0 hidden lg:block" alt="" />
                <div className="xl:pt-24 mx-auto container hidden xl:flex overflow-x-hidden relative">
                    <img src="/images/oval-gray-b-h.png" className="absolute top-0 left-0 hidden lg:block w-12 ml-16" alt="" />
                    <div className="w-full xl:flex items-center xl:px-0 px-8">
                        <div className="hero1">
                            <div>
                                <h1 className="xl:text-6xl text-2xl font-bold Eina01-bold xl:heading-line text-custom-black z-10">
                                    Finally! Get Unlimited NBN™ With No Complications, No Contracts &amp;
                                    <span className="relative z-10">
                                            <span className="relative z-20"> No Limits </span>
                                            <hr className="xl:h-6 h-2 bg-green w-full bottom-0 left-0 right-0 z-0 absolute" />
                                        </span>
                                </h1>
                                <p className="Eina01-regular text-lg leading-tight text-custom-black xl:pr-64 py-9 tracking-wide">Get world-class speeds on a no-contract plan with Australia’s simplest NBN™ provider. Claim your FREE, no-obligation NBN™ check-up chat with our in-house tech expert to get advice on your connectivity troubles and learn what the NBN™ can really do for you.</p>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <button onClick={executeScroll} className="focus:outline-none flex items-center bg-button-1 text-white p-5 border-radius-btn">
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
                                            <button className="focus:outline-none flex bg-transparent border-teal text-teal border-4 text-white p-5 border-radius-btn text-lg leading-9 font-bold Eina01-bold">View Our Plans</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="pt-7">
                                <img src="/images/NBN Logo.png" className="w-72 h-52" />
                            </div>
                        </div>
                        <div className="hero2 relative heroImg ">
                            <img src="/images/Header Hero Image.png" className="h-full w-full absolute z-10 object-cover" />
                            <img src="/images/Oval Copy 2.png" className="absolute w-40 right-0 -mr-20 z-10" />
                            <img src="/images/Oval.png" className="w-72 absolute bottom-0 left-0 mb-12 -ml-32 z-0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto container flex xl:hidden Eina01">
                <div className="w-full xl:px-0 px-8">
                    <div>
                        <div>
                            <h1 className="md:text-4xl text-2xl font-bold Eina01-bold text-custom-black z-10">
                                Finally! Get Unlimited NBN™ With No Complications, No Contracts &amp;
                                <span className="relative z-10">
                                      <span className="relative z-20"> No Limits </span>
                                      <hr className="xl:h-6 h-2 bg-green w-full bottom-0 left-0 right-0 z-0 absolute" />
                                    </span>
                            </h1>
                            <p className="Eina01-regular md:text-lg text-sm leading-tight text-custom-black py-9 tracking-wide">Get world-class speeds on a no-contract plan with Australia’s simplest NBN™ provider. Claim your FREE, no-obligation NBN™ check-up chat with our in-house tech expert to get advice on your connectivity troubles and learn what the NBN™ can really do for you.</p>
                        </div>
                        <div className="flex items-center">
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
                    <div className="w-full flex items-center justify-center">
                        <div className="md:w-1/2 w-72 md:h-96 h-80 relative mt-8">
                            <img src="/images/Header Hero Image.png" className="w-full object-cover h-full absolute z-10" />
                            <div className="w-full">
                                <img src="/images/Oval Copy 2.png" className="absolute w-20 right-0 md:-mr-12 -mr-10 z-10" />
                                <img src="/images/Oval.png" className="w-24 absolute bottom-0 -ml-12 z-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};