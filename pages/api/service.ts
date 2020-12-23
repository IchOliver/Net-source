// Dependencies.
import {NextApiRequest, NextApiResponse} from 'next'
import axios from 'axios'
import {AddressSuggestion, AddressDetail} from '../../types'

// Service.
const service = async (request: NextApiRequest, response: NextApiResponse) => {

  try {

    const {address, loc} = request.query

    if (request.method !== 'GET') throw new Error('Invalid Request Method')

    if (address) {
      const suggestions = await fetchAddressSuggestions(address as string)
      return response.status(200).json(suggestions)
    }

    if (loc) {
      const locationInformation = await fetchLocationInformation(loc as string)
      return response.status(200).json(locationInformation)
    }

  } catch (error) {
    return response.status(400).end()
  }

}

// Fetch Address Suggestions.
const fetchAddressSuggestions = async (URLencodedAddress: string) => {
  const response = await axios.get<{suggestions: AddressSuggestion[]}>(
    `https://places.nbnco.net.au/places/v1/autocomplete?query=${URLencodedAddress}&timestamp=${Date.now()}`, 
    {headers: {referer: 'https://www.nbnco.com.au/'}}
  )
  const {suggestions} = response.data
  return suggestions
}

// Fetch Location Information.
const fetchLocationInformation = async (location: string) => {
  const response = await axios.get<{addressDetail: AddressDetail}>(
    `https://places.nbnco.net.au/places/v2/details/${location}?source=website_rollout_map`,
    {headers: {referer: 'https://www.nbnco.com.au/learn/rollout-map'}}
  )
  return response.data
}

// Export.
export default service