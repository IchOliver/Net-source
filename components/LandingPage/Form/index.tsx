import React, { useState } from "react";
import axios from "axios";
import STRIPE from 'stripe'

export interface Customer extends STRIPE.Customer {
    payment_methods: any
}

export const Form: React.FC<{ scrollRef: any }> = ({ scrollRef }) => {

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const submit = (event) => {
        event.preventDefault();
        setLoader(true);
        console.log("event", event);
        setError(null);
        let elements = event.target.elements;
        let payload = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            switch (item.type) {
                case "checkbox":
                    payload[item.name] = item.checked;
                    break;
                case "file":
                case "submit":
                    break;
                default:
                    payload[item.name] = item.value;
                    break;
            }
        }
        axios.post<Customer>('/api/slackNotificaton', payload).then(res => {
            for (let i = 0; i < elements.length; i++) {
                let item = elements.item(i);
                switch (item.type) {
                    case "checkbox":
                        item.checked = false;
                        break;
                    case "file":
                    case "submit":
                        break;
                    default:
                        item.value = "";
                        break;
                }
            }
            setLoader(false);
        }).catch(err => {
            setLoader(false);
            setError("Something went wrong. Please try again or contact support");
        });
    };

    return (
        <div  ref={scrollRef} className="xl:mt-52 mt-16 pb-0 md:pb-16 relative h-full Eina01">
            <img src="/images/Background1.png" className="w-full absolute bottom-0 imgsec3 xl:block hidden" />
            <img src="/images/background-oval-export-as-group-if-required.png" className="bg-oval absolute bottom-0 xl:block hidden" />
            <div className="flex justify-center h-full relative md:px-8 lg:px-24 xl:px-0 px-0 sm:px-0">
                <div className="text-white form-card flex flex-col  xl:mb-24 relative lg:w-9/12 xl:w-form py-24 md:px-32 xl:px-0 sm:px-0 px-0" style={{backgroundImage: 'url(/images/background-blue-depth@2x.png)'}}>
                    <h1 className="xl:text-4xl text-3xl font-bold Eina01-bold text-center xl:px-8 px-2 leading-normal">Get FREE, no-obligation advice and if you’re located anywhere in Queensland, we’ll even send an NBN™ expert to your place to get you connected, absolutely FREE! (worth $250)</h1>
                    <p className="Eina01-regular xl:text-xl text-sm xl:px-16 px-4 xl:pt-16 pt-16 xl:pb-16 pb-4 text-center heading-line2">
                        As NBN™ specialists, we know how hard it can be to find the perfect plan for you needs. That’s why we’re here to help you get connected. Just fill in your details below and one of our network specialists will be in touch right away to help you get set up with a world-class NBN™ connection as quickly and easily as possible.<br /><br />
                        They’ll have a look at your address, the type of connection you have to your home and your data requirements to help you choose the best plan for your needs and the fastest method for you to get connected. To make it even better, if you decided to connect directly with us, we’ll use our network connections to get your NBN™ service up and running as fast as possible by ensuring that one of our network experts are there to get you set up on your connection date!
                    </p>
                    <form onSubmit={event => submit(event)} className="flex-col items-center justify-center xl:flex hidden">
                        <div className="my-8">
                            <input required className="bg-white input-width outline-none text-black2 text-lg pl-4" placeholder="Name*" name="name" />
                        </div>
                        <div className="mb-8">
                            <input required className="bg-white input-width outline-none text-black2 text-lg pl-4" placeholder="Email Address*" name="email" />
                        </div>
                        <div className="mb-8">
                            <input required className="bg-white input-width outline-none text-black2 text-lg pl-4" placeholder="Phone Number*" name="phone"/>
                        </div>
                        <div>
                            <div className="pb-8">
                                <button type="submit" className="bg-button-1 text-white input-width-btn text-center border-radius-btn text-3xl leading-9 font-bold Eina01-bold">{loader ? "Loading...":"Let's Get Connected >>"}</button>
                            </div>
                            {
                                error &&
                                <div className="text-red-500 text-center">
                                    <p>{error}</p>
                                </div>
                            }
                        </div>
                    </form>
                    <form onSubmit={event => submit(event)} className="flex flex-col w-full items-center justify-center xl:hidden block">
                        <div className="my-4 w-full px-4">
                            <input required className="bg-white w-full h-10 outline-none text-black2 text-sm pl-4" placeholder="Name*" name="name" />
                        </div>
                        <div className="mb-4 w-full px-4">
                            <input required className="bg-white w-full h-10 outline-none text-black2 text-sm pl-4" placeholder="Email Address*" name="email" />
                        </div>
                        <div className="mb-8 w-full px-4">
                            <input required className="bg-white w-full h-10 outline-none text-black2 text-sm pl-4" placeholder="Phone Number*" name="phone" />
                        </div>
                        <div className="pb-8 w-full px-4">
                            <button type="submit" disabled={loader} className="bg-button-1 text-white text-center w-full h-12 leading-form xl:text-3xl text-sm leading-9 font-bold Eina01-bold">{loader ? "Loading...":"Let's Get Connected >>"}</button>
                        </div>
                        {
                            error &&
                            <div className="text-red-500 text-center">
                                <p>{error}</p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}