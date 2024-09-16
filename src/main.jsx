import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import CartProvider from './UseContext/CartContext.jsx'
import UserProvider from './UseContext/UsersContext.jsx'
import { RoleProvider } from './UseContext/RoleContext.jsx'



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(


  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <UserProvider>
      <RoleProvider>
        <CartProvider>
          <RouterProvider router={router}>
            <App></App>
          </RouterProvider>
        </CartProvider>
      </RoleProvider>
    </UserProvider>
  </ClerkProvider>

)
