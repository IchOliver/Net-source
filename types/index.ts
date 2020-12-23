// Dependencies.
import STRIPE, { Stripe } from 'stripe'
import { Source } from '@stripe/stripe-js'

// Addons.
export interface Addons {
  installation: boolean
  modem: boolean
  staticIP: boolean
  VOIP: boolean
}

// Address Detail.
export interface AddressDetail {
  address1: string // "Lot 38 23 Warmington St"
  address2: string // "Paddington QLD 4064 Australia"
  disconnectionDate: string // "Oct 2020"
  disconnectionStatus: string // "FUTURE"
  formattedAddress: string // "LOT 38 23 WARMINGTON ST PADDINGTON QLD 4064 Australia"
  frustrated: boolean // false
  id: string // "LOC000068608570"
  latitude: number // -27.45809
  longitude: number // 152.998817
  reasonCode: string // "HFC_CT"
  serviceStatus: string // "available"
  serviceType: string // "Fixed line"
  statusMessage: string // "connected-true"
  techType: string // "HFC"
}

// Address Suggestion.
export interface AddressSuggestion {
  formattedAddress: string
  id: string
  latitude: number
  longitude: number
}

// Add Source Function.
export type AddSourceFunction = (source: Source) => Promise<void>

// Authentication Token.
export type AuthenticationToken = string

// Contract Option.
export enum ContractOption {
  None = 'Month-to-Month',
  OneYear = '12-month',
  TwoYear = '24-month'
} 

// Customer.
export interface Customer extends STRIPE.Customer {
  payment_methods: any
}

// Create User With Params Func.
export type CreateUserWithParamsFunc = (params: {firstName: string, lastName: string, mobileNumber: string, email: string, password: string}) => Promise<void>

// Customer Source.
export type CustomerSource = Stripe.CustomerSource & {card: {brand: string, last4: string}}

// Fetch Customer Function.
export type FetchCustomerFunction = () => Promise<Customer>

// NBN Plan.
export interface NBNPlan extends STRIPE.Product {
  metadata: {
    averageDownloadSpeed?: string
    data?: string
    description?: string
    isNBNPlan?: string
    supportedConnectionTypes?: string
    usefulFor?: string
  }
  price: number
}

// NBN Service.
export interface NBNService {
  plan: {
    name: string
  }
  status: 'active'
}

// Order Plan Body.
export interface OrderPlanBody {
  addons: Addons
  contract: ContractOption
  location?: AddressDetail
  plan?: {id: string, name: string}
  source: string
  metadata: PlanMetadata,
  additionalNotes: string
}

export interface slackNotification {
  name: string
  email: string
  phone: string
}

interface PlanMetadata {
  hasExistingConnection: boolean
  marketingConsent: boolean
}

// Order Plan Function.
export type OrderPlanFunction = ({
  addons: Addons,
  contract: ContractOption,
  location: AddressDetail,
  metadata: PlanMetadata,
  plan: NBNPlan,
  source: string,
  additionalNotes: any
}) => Promise<void>

// Payment Method.
export interface PaymentMethod {}

// Sign Out Function.
export type SignOutFunc = () => Promise<void>

// Source Feature.
export interface SourceFeature {
  header: string
  subheader: string
}

// Team Member.
export interface TeamMember {
  bio: string
  image: string
  name: string
}