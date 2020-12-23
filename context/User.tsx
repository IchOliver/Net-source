// Dependencies.
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { auth, firestore } from '../utils/firebase'
import { 
  AddSourceFunction, AuthenticationToken, Customer, FetchCustomerFunction, 
  OrderPlanFunction, NBNService, CreateUserWithParamsFunc, OrderPlanBody, SignOutFunc 
} from '../types'
import { Source } from '@stripe/stripe-js'
import Stripe from 'stripe'
import { capitalise } from '../utils'

// Context.
export const Context = createContext({

  currentUser: (undefined) as firebase.User,
  customer: (undefined) as Customer,
  service: (undefined) as NBNService | null | undefined,
  sources: ([]) as Stripe.CustomerSource[],

  addSource: (async () => {}) as AddSourceFunction,
  createUserWithParams: (async () => {}) as CreateUserWithParamsFunc,
  fetchCustomer: (async () => ({})) as FetchCustomerFunction,
  orderPlanForAddressWithSource: (async params => {}) as OrderPlanFunction,
  signOut: (async () => {}) as SignOutFunc

})

// Provider.
export const Provider: React.FC = props => {

  // State.
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(undefined)
  const [customer, setCustomer] = useState<Customer | null>(undefined)
  const [service, setService] = useState<NBNService>(undefined)
  const sources = customer && customer.sources && customer.sources.data || []

  // Values.
  const values = {currentUser, customer, service, sources}

  // Did Mount.
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user === null) return clearStore() 
      return setCurrentUser(user)
    })
  }, [])

  // On Change — Current User.
  useEffect(() => {
    if (!currentUser) return
    fetchCustomer()
    identifyCustomerWithIntercom()
    const disconnectServicesListener = connectServicesListener()
    return () => disconnectServicesListener()
  }, [currentUser])

  // Add Source.
  const addSource: AddSourceFunction = async (source: Source) => {
    if (!currentUser) return
    const authorization = await currentUser.getIdToken(true)
    await axios.post<Customer>('/api/source', {source: source.id}, {headers: {authorization}})
    await fetchCustomer()
  }

  // Clear Store.
  const clearStore = () => {
    setCurrentUser(null)
    setCustomer(null)
    setService(null)
  }

  // Create User With Params.
  const createUserWithParams: CreateUserWithParamsFunc = async params => {
    
    // Validate Params.
    if (!params.firstName) throw new Error('!firstName')
    if (!params.lastName) throw new Error('!lastName')
    if (!params.mobileNumber) throw new Error('!mobileNumber')
    if (!params.email) throw new Error('!email')
    if (!params.password) throw new Error('!password')

    // Retrieve Token.
    const token = (await axios.post<AuthenticationToken>('/api/user', params)).data

    // Sign In.
    await auth.signInWithCustomToken(token)

  }

  // Fetch Plan.
  const fetchCustomer: FetchCustomerFunction = async () => {
    try {
      if (!currentUser) return
      const token = await currentUser.getIdToken(true)
      const response = await axios.get<Customer>('/api/customer', {headers: {authorization: token}})
      const customer = response.data
      setCustomer(customer)
      return customer
    } catch (error) {
      const customer = null
      setCustomer(customer)
      return customer
    }
  }

  // Fetch Services.
  const connectServicesListener = () => {
    const unsubscribe = firestore.collection('services').doc(currentUser.uid).onSnapshot(service => {
      setService(service && service.data() as (NBNService) || null)
    })
    return unsubscribe
  }

  // Identify Customer With Intercom.
  const identifyCustomerWithIntercom = () => {
    if (!currentUser) return
    const WINDOW = typeof window !== 'undefined' && window as any
    if (!WINDOW) return
    WINDOW.intercomSettings = {
      ...WINDOW.intercomSettings,
      name: capitalise(currentUser.displayName) || undefined, // Full name
      email: (currentUser.email || '').toLowerCase(), // Email address
    }
  }

  // Order Plan.
  const orderPlanForAddressWithSource: OrderPlanFunction = async ({addons, contract, plan, location, source, metadata, additionalNotes}) => {
    if (!currentUser) return
    const token = await currentUser.getIdToken(true)
    const params: OrderPlanBody = {addons, contract, location, plan: {id: plan.id, name: plan.name}, source, metadata, additionalNotes: additionalNotes}
    const response = await axios.post<Customer>('/api/plans', params, {headers: {authorization: token}})
  }

  // Sign Out.
  const signOut = async () => {
    await auth.signOut()
  }
  
  // Functions.
  const functions = {addSource, createUserWithParams, fetchCustomer, orderPlanForAddressWithSource, signOut}

  // Value.
  const value = {...values, ...functions}

  // ..
  return <Context.Provider value={value}>
    {props.children}
  </Context.Provider>
  
}