import React, { useEffect } from "react";
import { Landingpage } from "../components/LandingPage";
import { NBNPlan } from '../types';
import axios from 'axios';
import { NextPage } from 'next';

const Landing: NextPage<{setShow: any, plans: NBNPlan[]}> = props => {
    let { setShow, plans } = props;
    useEffect(() => {
        setShow(false);
    });

    return (
        <Landingpage plans={plans} />
    )
};

Landing.getInitialProps = async context => {
    const request = context.req;
    const host = typeof window !== 'undefined' ? window.location.host || '' : request.headers.host;
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const plans = (await axios.get<NBNPlan[]>(`${protocol}://${host}/api/plans`)).data.filter(plan => plan.metadata.isNBNPlan);
    return {
        plans,
        setShow: null
    }
};

export default Landing;