// Dependencies.
import { AddressDetail } from '../types'
import { formattedAddressFrom } from '.'

// Use Address Detail.
export const useAddressDetail = (addressDetail: AddressDetail) => {

  const {serviceStatus} = addressDetail

  // Service Available.
  const serviceAvailable = serviceStatus === 'available'

  // Formatted Address.
  const formattedAddress = formattedAddressFrom(addressDetail)

  // ..
  return {...addressDetail, formattedAddress, serviceAvailable}

}