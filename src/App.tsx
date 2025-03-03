import './App.css'

import { RouterProvider } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from './routes'
import { Toaster } from 'sonner'


export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop " />

      <Toaster richColors />

        <RouterProvider router={router} />
    </HelmetProvider>
  )
}
