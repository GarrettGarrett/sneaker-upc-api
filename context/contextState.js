import { createContext, useContext } from 'react';
import { useState, useEffect, useRef } from 'react'
const AppContext = createContext();


export function AppWrapper({ children }) {

    const [wasFeatureGridOnceVisible, setWasFeatureGridOnceVisible] = useState(false)
    // console.log("🚀 ~ file: contextState.js ~ line 10 ~ AppWrapper ~ wasFeatureGridOnceVisible", wasFeatureGridOnceVisible)

        
  let sharedState = {

    wasFeatureGridOnceVisible,
    setWasFeatureGridOnceVisible
  }

return (
    <AppContext.Provider 
      value={sharedState} 
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}