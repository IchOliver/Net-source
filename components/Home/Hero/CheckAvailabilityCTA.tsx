// Dependencies.
import axios from 'axios'
import styled from 'styled-components'
import AsyncSelect from 'react-select/async'
import { FormField } from '../../FormField'
import { AddressSuggestion, AddressDetail as AddressDetailInterface } from '../../../types'
import { useEffect, useState } from 'react'
import { colors, language, fadeFromRight } from '../../../utils'
import { CTA } from '../../CTA'
import { ValidationWrapper } from '../../ValidationWrapper'
import { P } from '../../P'
import { H3 } from '../../H3'
import { H4 } from '../../H4'
import { ServiceAvailability } from '../../ServiceAvailability'
import { Section as SECTION } from '../../Section'
import { Hyperlink } from '../../Hyperlink'
import { AvailabilityCTA } from './AvailabilityCTA'

// Div.
const Div = styled.div`
  /* animation: ${fadeFromRight} 200ms; */
  margin: auto;
  margin-top: 20px;
  margin-bottom: auto;
  max-width: 90%;
  width: 600px;

  * {
    font-size: 18px;
  }

  .changeAddressButton {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  input {
    font-weight: 600 !important;
  }
`

// Props.
interface Props {
  address?: AddressDetailInterface
  onSelect?: (addressDetail: AddressDetailInterface) => void
}

// Address.
export const CheckAvailabilityCTA: React.FC<Props> = props => {

  // Props.
  const {onSelect} = props

  // State.
  const [addressDetail, setAddressDetail] = useState<AddressDetailInterface>(props.address || null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<{label: string, value: string}>(null)
  const [value, setValue] = useState('')

  // On Change — Address Detail.
  useEffect(() => {
    // onSelect(addressDetail)
  }, [addressDetail])

  // On Change — Selected Address.
  useEffect(() => {
    if (selectedAddress) fetchLocationInfo()
  }, [selectedAddress])

  // Fetch Location Info.
  const fetchLocationInfo = async () => {
    
    try {

      // Flag Loading.
      setLoading(true)

      // !Address.
      if (!selectedAddress) throw new Error('!Address')

      // Fetch Location Info.
      const locationId = selectedAddress.value
      const response = await axios.get<{addressDetail: AddressDetailInterface}>(`/api/service?loc=${locationId}`)

      // Derive Address Detail.
      const addressDetail = response.data.addressDetail
      setAddressDetail(addressDetail)

    } catch (error) {
      switch (error.message) {
        case '!Address': 
          if (!value) setError('Please enter an address.')
          else setError('Please select an address.')
          break
      }
    }

    // Unflag Loading.
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
  
  // Reset Form.
  const resetForm = () => {
    setAddressDetail(null)
    setSelectedAddress(null)
    setValue('')
  }

  const selectStyles: React.CSSProperties = {fontSize: '18px', fontWeight: 600}

  // ..
  return <Div>

    {/* Loading. */}
    {loading && <div style={{background: colors.white, margin: 'auto', padding: '10px', textAlign: 'center', width: '250px'}}>
      Checking Availability ..
    </div>}

    {/* Address Input. */}
    {!loading && !addressDetail && <>

      <div style={{margin: 'auto', maxWidth: '100%', width: '400px'}}>

        <ValidationWrapper error={error}>

          <AsyncSelect
            cacheOptions
            className="addressInput"
            components={{
              IndicatorsContainer: () => null
            }}
            defaultOptions
            instanceId="addressSelect"
            loadOptions={loadOptions}
            onInputChange={onInputChange}
            inputValue={value}
            onChange={setSelectedAddress}
            placeholder="Check Your Service Eligibility"
            noOptionsMessage={({inputValue}) => inputValue ? 'No options found' : 'Enter your address'}
            styles={{
              control: (provided, state) => {
                const styles: React.CSSProperties = {
                  ...provided,
                  background: '#FFFFFF',
                  borderColor: colors.black, // 'rgba(0,0,0,.15)', 
                  borderRadius: 0,
                  borderWidth: '2px', 
                  boxShadow: 'none',
                  cursor: 'text',
                  fontWeight: 600,
                  padding: '10px',
                }
                styles['&:hover'] = {borderColor: 'black'}
                const {hasValue, isFocused} = state
                if (hasValue || isFocused) styles.borderColor = colors.black
                return styles
              },
              input: styles => ({...styles, ...selectStyles, fontWeight: 600, height: '100%'}),
              valueContainer: styles => ({...styles, ...selectStyles}),
              container: styles => ({...styles, ...selectStyles}),
              menu: styles => {
                styles = {...styles, ...selectStyles}
                styles.borderRadius = 0
                return styles
              },
              option: styles => ({
                ...styles, 
                borderBottom: '1px solid rgba(0, 0, 0, .05)',
                cursor: 'pointer', 
                textAlign: 'left',
                '&:last-child': {
                  borderBottom: 'none'
                }
              }),
              placeholder: styles => ({...styles, ...selectStyles})
            }}
            value={selectedAddress}
          />

        </ValidationWrapper>

      </div>
    
    </>}

    {/* Address Detail. */}
    {!loading && addressDetail && <Div style={{border: '2px solid springgreen'}}>
      
      <AvailabilityCTA
        {...addressDetail}
        reset={resetForm}
      />

    </Div>}

  </Div>

} 