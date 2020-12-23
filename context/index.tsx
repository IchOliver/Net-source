// Contexts.
export {Context as GlobalContext} from './Global'
export {Context as UserContext} from './User'

// Providers.
import {Provider as GlobalProvider} from './Global'
import {Provider as UserProvider} from './User'

// Provider.
export const Provider: React.FC = props => <UserProvider>
  <GlobalProvider>
    {props.children}
  </GlobalProvider>
</UserProvider>