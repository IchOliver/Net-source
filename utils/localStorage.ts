// Commit Item To Local Storage.
export const commitItemToLocalStorage = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value)
  } catch (error) {}
}

// Retrieve Item From Local Storage.
export const retrieveItemFromLocalStorage = (key: string): string => {
  try {
    return window.localStorage.getItem(key)
  } catch (error) {
    return undefined
  }
}

// Local Storage.
export const LOCALSTORAGE = {
  getItem: retrieveItemFromLocalStorage,
  setItem: commitItemToLocalStorage
}