// Dependencies.
import axios from 'axios'
import styled from 'styled-components'
import AsyncSelect from 'react-select/async'
import { FormField } from './FormField'
import { AddressSuggestion, AddressDetail } from '../types'
import { useEffect, useState } from 'react'
import { colors, language } from '../utils'
import { CTA } from './CTA'
import { ValidationWrapper } from './ValidationWrapper'
import { P } from './P'
import { H3 } from './H3'
import { ServiceAvailability } from './ServiceAvailability'

// Div.
const Div = styled.div`
  margin-bottom: 10px;
`

// Props.
interface Props {
  onConfirm: (addressDetail: AddressDetail) => void
}

// Address Input.
export const AddressInput: React.FC<Props> = props => {

  // State.
  const [addressDetail, setAddressDetail] = useState<AddressDetail>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<{label: string, value: string}>(null)
  const [value, setValue] = useState('')

  // Fetch Location Info.
  const fetchLocationInfo = async () => {
    
    try {

      // Flag Loading.
      setLoading(true)

      // !Address.
      if (!selectedAddress) throw new Error('!Address')

      // Fetch Location Info.
      const locationId = selectedAddress.value
      const response = await axios.get<{addressDetail: AddressDetail}>(`/api/service?loc=${locationId}`)

      // Derive Address Detail.
      const addressDetail = response.data.addressDetail
      setAddressDetail(addressDetail)

    } catch (error) {
      switch (error.message) {
        case '!Address': setError('Please enter an address.')
          break
      }
    }

    setLoading(false)

  }

  // Load Options.
  const loadOptions = async (address: string) => {
    if (!address) return []
    const options = (await axios.get<AddressSuggestion[]>(`/api/service?address=${encodeURI(address)}`)).data || []
    return options.map(({formattedAddress, id}) => ({label: formattedAddress, value: id}))
  }

  // On Input Change.
  const onInputChange = (query: string, {action}: {action: string}) => {
    if (error) setError('')
    if (action === 'input-change' || action === 'set-value') setValue(query)
    return value
  }

  // ..
  return <Div className="locationField">

    <ValidationWrapper error={error}>

      {/*  */}
      <AsyncSelect
        cacheOptions
        components={{
          IndicatorsContainer: () => null
        }}
        defaultOptions
        instanceId="addressSelect"
        loadOptions={loadOptions}
        onInputChange={onInputChange}
        inputValue={value}
        onChange={setSelectedAddress}
        placeholder="Enter your address"
        styles={{
          control: (provided, state) => {
            const styles: React.CSSProperties = {
              ...provided, 
              borderColor: 'rgba(0,0,0,.15)', 
              borderRadius: 0, 
              boxShadow: 'none' 
            }
            styles['&:hover'] = {borderColor: 'black'}
            const {hasValue, isFocused} = state
            if (hasValue || isFocused) styles.borderColor = colors.black
            return styles
          },
          menu: styles => {
            styles.borderRadius = 0
            return styles
          }
        }}
        value={selectedAddress}
      />

    </ValidationWrapper>

    {/* Check Availability. */}
    <CTA disabled={loading} onClick={fetchLocationInfo} style={{marginTop: '15px'}}>
      {loading ? 'Loading ..' : 'Check Service Availability'}
    </CTA>

  </Div>

}