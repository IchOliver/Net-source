import React from "react";
import Link from "next/link";
export const PricingCards: React.FC<{ plans: any }> = ({ plans }) => {

    const showBadge = (name) => {
        switch(name){
            case "NBN250/25":
            case "Insanely Fast":
                return true;
            default:
                return false;
        }
    };

    return (
        <div className="xl:pt-36 pt-14 mx-auto container Eina01 xl:px-32">
            <div>
                <h1 className="font-bold Eina01-bold text-custom-black xl:text-5xl text-2xl text-center">Join Australia’s Easiest NBN™ Provider</h1>
                <h3 className="text-custom-black xl:text-3xl text-sm text-center pt-6">Choose Your Unlimited, No Lock-In Plan</h3>
            </div>
            <div className="xl:pt-20 pt-8">
                <div className="w-full xl:flex justify-center xl:px-0 px-10 sm:px-4 flex-wrap">
                    {
                        plans && plans.map(single => {
                            let { metadata } = single;
                            return(
                                <div key={single.id} className="xl:w-96 mr-10 xl:mb-0 mb-8 border-dark-green bg-white xl:mt-40 relative">
                                    {
                                        showBadge(single.name) &&
                                        <img src="/images/Limited Promo Icon.png" className="absolute xl:w-20 w-14 right-0 xl:-mt-8 -mt-5 xl:-mr-8 -mr-5" />
                                    }
                                    <div className="bg-dark-green w-full">
                                        <h1 className="xl:text-3xl text-xl text-white xl:py-8 py-6 px-12 text-center font-bold Eina01-bold">Unlimited {single.name}</h1>
                                    </div>
                                    <div>
                                        <h3 style={{minHeight: "140px"}} className="xl:text-lg text-sm text-dark-blue xl:px-4 px-4 py-7 text-center">{single.metadata.description}</h3>
                                    </div>
                                    <div className="xl:pl-20 pl-12">
                                        <div className="flex items-center">
                                            <img src="/images/Shape.png" className="w-3.5 h-3.5" />
                                            <span className="text-sm text-dark-blue ml-4">{metadata.averageDownloadSpeed}</span>
                                        </div>
                                    </div>
                                    <div className="xl:pl-20 pl-12 my-4">
                                        <div className="flex items-center">
                                            <img src="/images/Shape.png" className="w-3.5 h-3.5" />
                                            <span className="text-sm text-dark-blue ml-4">{metadata.data}</span>
                                        </div>
                                    </div>
                                    <div className="xl:pl-20 pl-12">
                                        <div className="flex items-center">
                                            <img src="/images/Shape.png" className="w-3.5 h-3.5" />
                                            <span className="text-sm text-dark-blue ml-4">{metadata.usefulFor}</span>
                                        </div>
                                    </div>
                                    <div className="xl:pl-20 pl-12 mt-4">
                                        <div className="flex items-center">
                                            <img src="/images/Shape.png" className="w-3.5 h-3.5" />
                                            <span className="text-sm text-dark-blue ml-4">{metadata.supportedConnectionTypes}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center pt-6">
                                        <div>
                                            <h1 className="xl:text-6xl text-4xl text-dark-blue font-bold Eina01-bold">${Math.floor(single.price/100)}</h1>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="Eina01-regular text-dark-blue xl:text-lg text-sm font-bold Eina01-bold">{(""+single.price).substring((""+single.price).length - 2, (""+single.price).length)}</p>
                                            <p className="Eina01-regular text-dark-blue text-sm">/Mth</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xs xl:block hidden text-center pt-3.5">Total minimum cost ${Math.floor(single.price/100) + "." + (""+single.price).substring((""+single.price).length - 2, (""+single.price).length)}</h3>
                                    <h3 className="text-s xl:hidden block text-center pt-3.5">Total minimum cost ${Math.floor(single.price/100) + "." + (""+single.price).substring((""+single.price).length - 2, (""+single.price).length)}</h3>
                                    <div className="flex items-center justify-center py-8">
                                        <Link href="/plans">
                                            <a>
                                                <button className="text-teal border-teal border-2 font-bold px-6 py-3.5 border-radius-btn">Choose This Plan</button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}