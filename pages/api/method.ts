// Dependencies.
import { NextApiResponse, NextApiRequest } from 'next'

// Method.
export default async (request: NextApiRequest, response: NextApiResponse) => {

  // Post.
  if (request.method === 'POST') return await addPaymentMethodToCustomerWithSource(request)

}

// Add Payment Method To Customer With Source.
const addPaymentMethodToCustomerWithSource = async (request: NextApiRequest) => {

  // Identify Customer.

  // Check Existing Methods — Delete If Present.

  // Extract Method.

  // Bind Customer With Method.

}