// Dependencies.

import { NextApiRequest, NextApiResponse } from 'next'
import { generateAdminInstance } from '../../utils/admin'
import { slackNotification } from '../../types'
import { WebClient } from '@slack/web-api'

// Globals.
export const admin = generateAdminInstance();
const slackToken = process.env.SLACK_OAUTH_TOKEN;
const web = new WebClient(slackToken);

// Plans.
const plans = async (request: NextApiRequest, response: NextApiResponse) => {

    try {
        if (request.method === 'POST') {

            // Address + Plan + Source.
            const {name, email, phone}: slackNotification = request.body;
            // console.log("request", request.body);
            // Post Notification To Slack.
            const orderChannelId = 'C0155HL692N';
            const postNotificationToSlack = async () => await web.chat.postMessage({channel: orderChannelId, text: `
              ${process.env.NODE_ENV !== 'production' && '*TEST —* ' || ''}*New Connect Received*
              _Name_ - ${name}
              _Email_ — ${email}
              _Phone Number_ — ${phone}
            `});

            await Promise.all([postNotificationToSlack()]);
            return response.status(200).json(null)

        }

    } catch (error) {

        // Stripe Error.
        if (error === 'STRIPE ERROR') return response.status(400).json('BILLING ERROR');
        console.log("err", error);

        // ..
        return response.status(400).json(error)

    }

};

// Export.
export default plans