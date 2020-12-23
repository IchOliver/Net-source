import React from "react";

export const FeaturedCards: React.FC = () => {
    return (
        <div className="mx-auto container relative xl:pt-28 pt-12 Eina01-regular">
            <h1 className="hidden xl:block text-6xl font-bold Eina01-bold heading-line text-center text-white">
                Getting Connected Shouldn’t <br />
                Be Complicated
            </h1>
            <h1 className="xl:hidden block text-2-5xl px-4 font-bold Eina01-bold text-center text-white">Getting Connected Shouldn’t Be Complicated</h1>
            <p className="Eina01-regular xl:text-3xl text-sm text-white mt-5 text-center">No Contracts – No Data-Limits – No Problems</p>
            <div className="xl:flex items-center justify-center pt-24 hidden">
                <div className="cardWidthandHeight bg-white xl:mr-14">
                    <h1 className="text-4xl px-12 pt-6 text-center font-bold Eina01-bold text-custom-black">Seriously, Unlimited Everything</h1>
                    <div className="flex items-center justify-center h-40 my-12">
                        <img src="/images/Forever Icon.png" className="w-44 my-12" />
                    </div>
                    <p className="Eina01-regular text-lg px-16 text-center text-black2">No speed caps, no limits, just simple, world-class internet the way that it should be.</p>
                </div>
                <div className="cardWidthandHeight bg-white xl:mr-14">
                    <h1 className="text-4xl px-12 pt-6 text-center font-bold Eina01-bold text-custom-black">No Connection Fees, Cancel Anytime</h1>
                    <div className="flex items-center justify-center h-40 my-12">
                        <img src="/images/wallet.png" className="w-44 my-12" />
                    </div>
                    <p className="Eina01-regular text-lg px-16 text-center text-black2">We don’t need contracts to keep you with us. Once you connect to the source, you won’t look back.</p>
                </div>
                <div className="cardWidthandHeight bg-white ">
                    <h1 className="text-4xl px-12 pt-6 text-center font-bold Eina01-bold text-custom-black">Your 100% Local Mates With NBN™</h1>
                    <div className="flex items-center justify-center h-40 my-12">
                        <img src="/images/australia.png" className="w-44 my-12" />
                    </div>
                    <p className="Eina01-regular text-lg px-16 text-center text-black2">Just think of our 100% local customer service team as being your NBN™ mates who’re here to keep you connected with a smile.</p>
                </div>
            </div>
            <div className="xl:hidden flex flex-col items-center justify-center pt-12 px-8 sm:px-4">
                <div className="w-full sm:w-1/2 mb-8 py-7 b-r bg-white xl:mr-14">
                    <h1 className="text-2xl px-2 pt-6 text-center font-bold Eina01-bold text-custom-black">Seriously, Unlimited Everything</h1>
                    <div className="flex items-center justify-center">
                        <img src="/images/Forever Icon.png" className="w-24 my-8" />
                    </div>
                    <p className="Eina01-regular text-sm pb-8 px-8 text-center text-black2">No speed caps, no limits, just simple, world-class internet the way that it should be.</p>
                </div>
                <div className="w-full sm:w-1/2 mb-8 b-r bg-white py-7 xl:mr-14">
                    <h1 className="text-2xl px-2 pt-6 text-center font-bold Eina01-bold text-custom-black">No Connection Fees, Cancel Anytime</h1>
                    <div className="flex items-center justify-center">
                        <img src="/images/wallet.png" className="w-24 my-6" />
                    </div>
                    <p className="Eina01-regular text-sm pb-8 px-8 text-center text-black2">We don’t need contracts to keep you with us. Once you connect to the source, you won’t look back.</p>
                </div>
                <div className="w-full sm:w-1/2 mb-8 b-r bg-white py-7 xl:mr-14">
                    <h1 className="text-2xl px-2 pt-6 text-center font-bold Eina01-bold text-custom-black">Your 100% Local Mates With The NBN™</h1>
                    <div className="flex items-center justify-center">
                        <img src="/images/australia.png" className="w-24 my-6" />
                    </div>
                    <p className="Eina01-regular text-sm pb-8 px-8 text-center text-black2">Just think of our 100% local customer service team as being your NBN™ mates who’re here to keep you connected with a smile.</p>
                </div>
            </div>
        </div>
    )
}