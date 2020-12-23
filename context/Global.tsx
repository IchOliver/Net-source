// Dependencies.
import {createContext, useState} from 'react'

// Context.
export const Context = createContext({

  // Variables..
  showMobileNavigationMenu: false, 

  // Functions..
  setShowMobileNavigationMenu: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>

})

// Provider.
export const Provider: React.FC = props => {

  // State.
  const [showMobileNavigationMenu, setShowMobileNavigationMenu] = useState(false)

  // Variables / Functions.
  const variables = {
    showMobileNavigationMenu
  }
  const functions = {
    setShowMobileNavigationMenu
  }

  // ..
  return <Context.Provider value={{...variables, ...functions}}>
    {props.children}
  </Context.Provider>

}