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
import { AddressDetail } from './AddressDetail'
import { useRouter } from 'next/router'

// Div.
const Section = styled(SECTION)`
  animation: ${fadeFromRight} 200ms;
  margin-top: 0;
  padding-top: 10vmin;

  ${CTA} {
    margin-top: 20px;
  }

  .changeAddressButton {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

// Props.
interface Props {
  address?: AddressDetailInterface
  onSelect: (addressDetail: AddressDetailInterface) => void
}

// Address.
export const Address: React.FC<Props> = props => {

  // Props.
  const {onSelect} = props

  // Router.
  const router = useRouter()
  const address = router.query.address as string
  const LOC = router.query.LOC as string

  // State.
  const [addressDetail, setAddressDetail] = useState<AddressDetailInterface>(props.address || null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(Boolean(LOC))
  const [selectedAddress, setSelectedAddress] = useState<{label: string, value: string}>(null)
  const [value, setValue] = useState(address && decodeURIComponent(address) || '')

  // Did Mount.
  useEffect(() => {
    if (LOC) fetchLocationInfo(LOC)
  }, [])

  // On Change — Address Detail.
  useEffect(() => {
    onSelect(addressDetail)
  }, [addressDetail])

  // Fetch Location Info.
  const fetchLocationInfo = async (LOC?: string) => {
    
    try {

      // Flag Loading.
      setLoading(true)

      // !Address.
      if (!LOC && !selectedAddress) throw new Error('!Address')

      // Fetch Location Info.
      const locationId = selectedAddress && selectedAddress.value || LOC
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
    setAddressDetail(undefined)
    setSelectedAddress(undefined)
    setValue('')
    onSelect(undefined)
  }

  // ..
  return <Section>

    {/* Header. */}
    <H3>1. Enter Your Address</H3>
    <P style={{marginBottom: '20px'}}>Check to see whether {language.nbn} is available at your address.</P>

    {/* Address Input. */}
    {!addressDetail && <>

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
            placeholder="Enter your address"
            styles={{
              control: (provided, state) => {
                const styles: React.CSSProperties = {
                  ...provided, 
                  borderColor: 'rgba(0,0,0,.15)', 
                  borderRadius: 0, 
                  boxShadow: 'none',
                  cursor: 'text'
                }
                styles['&:hover'] = {borderColor: 'black'}
                const {hasValue, isFocused} = state
                if (hasValue || isFocused) styles.borderColor = colors.black
                return styles
              },
              menu: styles => {
                styles.borderRadius = 0
                return styles
              },
              option: styles => ({...styles, cursor: 'pointer', textAlign: 'left'})
            }}
            value={selectedAddress}
          />

        </ValidationWrapper>

      </div>

      {/*  */}
      <CTA onClick={() => fetchLocationInfo()}>
        {loading ? 'Checking Availability ..' : 'Check Service Availability'}
      </CTA>
    
    </>}

    {/* Address Detail. */}
    {addressDetail && <AddressDetail
      reset={resetForm}
      {...addressDetail}
    />}

  </Section>

}