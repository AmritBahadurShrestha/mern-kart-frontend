import React, { type ReactNode } from 'react'
import ReactQueryClientProvider from './query-client.provider'
import AuthProvider from '../context/auth.context'

const Providers: React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ReactQueryClientProvider>
  )
}

export default Providers
