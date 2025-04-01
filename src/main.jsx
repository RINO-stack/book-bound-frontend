import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
// import 'sweetalert2/src/sweetalert2.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <AuthProvider>
       <RouterProvider router={router}/>
     </AuthProvider>
    </Provider>
   </StrictMode>,
   
)
