import React from 'react'

import LoadingProvider from './context/loading'
import Home from './components/Home'

const App = () => (
  <main>
    <LoadingProvider>      
      <Home />
    </LoadingProvider>
  </main>
)

export default App